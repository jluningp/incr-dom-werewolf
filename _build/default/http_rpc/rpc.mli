open Core_kernel
open Async_kernel

module Conn : sig
  module Client : sig
    type t

    val create : path:string -> send:(Uri.t -> string Deferred.t) -> t
  end

  module Server : sig
    type t

    val create : unit -> t

    val get_response : t -> Uri.t -> string option
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

module Make (Rpc : T) :
  S with type query := Rpc.Query.t and type response := Rpc.Response.t
