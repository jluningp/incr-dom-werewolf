open Core_kernel
open Game_types

type t = { votes : int Username.Map.t; roles : Card.t Username.Map.t }
[@@deriving sexp, compare]
