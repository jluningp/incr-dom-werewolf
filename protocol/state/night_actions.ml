open Game_types

module Robber = struct
  type t = { robbed : Username.t; saw : Card.t } [@@deriving sexp, compare]
end

module Seer = struct
  type t = {
    saw : [ `Center_cards of Card.t * Card.t | `User of Username.t * Card.t ];
  }
  [@@deriving sexp, compare]
end

type t = Robber of Robber.t | Seer of Seer.t [@@deriving sexp, compare]
