open Core
open Cohttp_async
open Game_types
open Async

type t = { conn : Http_rpc.Rpc.Conn.Server.t; port : int }

(* TODO: Separate this whitelist out into its own file *)
let is_valid_file _ = true

(* TODO: Move implementations into their own file *)
let register_implementations t =
  Game_rpcs.Rpcs.Get_state.register_implementation t.conn ~f:(fun _ ->
      {
        phase = No_game_joined;
        cards = Card.Map.empty;
        users = Username.Set.empty;
      })

let create ~port =
  let conn = Http_rpc.Rpc.Conn.Server.create () in
  let t = { conn; port } in
  register_implementations t;
  t

let serve t =
  let callback ~body:_ _conn req =
    let uri = Request.uri req in
    printf "%s\n" (Uri.to_string uri);
    match Http_rpc.Rpc.Conn.Server.get_response t.conn uri with
    | Some response -> Server.respond_string response
    | None -> (
        match String.drop_prefix (Uri.path uri) 1 with
        | "" -> Server.respond_with_file "../client/index.html"
        | "main.bc.js" -> Server.respond_with_file "../client/main.bc.js"
        | path -> Server.respond_with_file path )
  in
  let%bind t =
    Server.create ~mode:`TCP ~on_handler_error:`Ignore
      (Async_unix.Tcp.Where_to_listen.of_port t.port)
      callback
  in
  printf "Serving at port %n" (Server.listening_on t);
  Deferred.never ()

let () =
  Command.run
    (Command.async ~summary:"The One Night Werewolf server"
       (Command.Spec.map
          (Command.Param.flag "port" ~doc:"port"
             (Command.Param.required Command.Param.int))
          ~f:(fun port () ->
            let t = create ~port in
            serve t)))
