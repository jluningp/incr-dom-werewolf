open Game_types

module Robber = struct
  type t = Choosing_card | Viewing_new_card of Card.t
  [@@deriving sexp, compare]
end

module Seer = struct
  type t =
    | Choosing_user_or_center
    | Viewing_users_card of Username.t * Card.t
    | Viewing_center_cards of Card.t * Card.t
  [@@deriving sexp, compare]
end

type t = Robber of Robber.t | Seer of Seer.t [@@deriving sexp, compare]
