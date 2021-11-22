open Core_kernel
open Async_kernel

module Conn = struct
  module Client = struct
    type t = { path : string; send : Uri.t -> string Deferred.t }

    let create ~path ~send = { path; send }
  end

  module Server = struct
    type t = (Sexp.t -> Sexp.t) String.Table.t

    let create () = String.Table.create ()

    let get_response (t : t) uri =
      let%bind.Option key = Uri.get_query_param uri "key" in
      let%bind.Option f = Hashtbl.find t key in
      let%bind.Option query = Uri.get_query_param uri "data" in
      Option.try_with (fun () ->
          let query = Sexp.of_string query in
          Sexp.to_string (f query))
  end
end

module type T = sig
  module Query : sig
    type t [@@deriving sexp]
  end

  module Response : sig
    type t [@@deriving sexp]
  end

  val name : string
end

module type S = sig
  type query

  type response

  val dispatch : Conn.Client.t -> query -> response Or_error.t Deferred.t

  val register_implementation : Conn.Server.t -> f:(query -> response) -> unit
end

module Make (Rpc : T) = struct
  open Rpc

  let dispatch (conn : Conn.Client.t) (query : Query.t) =
    let uri =
      Uri.make ~path:conn.path
        ~query:
          [
            ("key", [ Rpc.name ]);
            ("data", [ Sexp.to_string (Query.sexp_of_t query) ]);
          ]
        ()
    in
    let%map response = conn.send uri in
    Or_error.try_with (fun () ->
        response |> Sexp.of_string |> Rpc.Response.t_of_sexp)

  let register_implementation (conn : Conn.Server.t)
      ~(f : Query.t -> Response.t) =
    Hashtbl.add_exn conn ~key:Rpc.name ~data:(fun sexp ->
        let query = Query.t_of_sexp sexp in
        let response = f query in
        Response.sexp_of_t response)
end
