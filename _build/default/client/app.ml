open! Core_kernel
open! Async_kernel
open Incr_dom
open Game_types

module Model = struct
  type t = { username : Username.t option; state : Game_state.t Or_error.t }

  let initial =
    { username = Some "test"; state = Or_error.error_string "No state yet" }

  let cutoff = phys_equal
end

module State = struct
  type t = Http_rpc.Rpc.Conn.Client.t

  let send uri =
    let open Js_of_ocaml in
    let xml = XmlHttpRequest.create () in
    let xml_response = Ivar.create () in
    let () =
      xml ## (_open (Js.string "GET") (Js.string (Uri.to_string uri)) Js._true)
    in
    xml##.onreadystatechange :=
      Js.wrap_callback (fun _ ->
          match xml##.readyState with
          | XmlHttpRequest.DONE ->
              let response_text =
                Js.Opt.case xml##.responseText
                  (fun () -> Js.string "")
                  (fun s -> s)
              in
              Ivar.fill_if_empty xml_response response_text
          | _ -> ());
    xml ## (send Js.null);
    let%map response_js = Ivar.read xml_response in
    Js.to_string response_js
end

module Action = struct
  type t = Set_state of Game_state.t | State_error of Error.t
  [@@deriving sexp]
end

let on_startup ~schedule_action (model : Model.t) =
  let conn = Http_rpc.Rpc.Conn.Client.create ~path:"" ~send:State.send in
  every (Time_ns.Span.of_ms 300.) (fun () ->
      match model.username with
      | None -> ()
      | Some username ->
          don't_wait_for
            (let%map state = Game_rpcs.Rpcs.Get_state.dispatch conn username in
             match state with
             | Error err -> schedule_action (Action.State_error err)
             | Ok state -> schedule_action (Action.Set_state state)));
  return conn

let apply_action (model : Model.t) action _state ~schedule_action:_ =
  match action with
  | Action.Set_state game_state -> { model with state = Ok game_state }
  | State_error err -> { model with state = Error err }

let create model ~old_model:_ ~inject:_ :
    (Action.t, Model.t, State.t) Component.t Ui_incr.Incr.t =
  let open Incr.Let_syntax in
  let%map model = model in
  let view =
    Vdom.Node.text
      (Sexp.to_string ([%sexp_of: Game_state.t Or_error.t] model.Model.state))
  in
  Component.create ~apply_action:(apply_action model) model view
