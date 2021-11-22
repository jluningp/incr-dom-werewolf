open Game_types

type t = { phase : Phase.t; cards : int Card.Map.t; users : Username.Set.t }
[@@deriving sexp, compare]
