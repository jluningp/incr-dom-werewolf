open Core_kernel
open Game_types

type t =
  | No_game_joined
  | Setup
  | View_card of Card.t
  | Night of Night_phase.t option
  | Day of { time_left : Time.Span.t; night_actions : Night_actions.t }
  | Vote
  | Results of Results.t
[@@deriving sexp, compare]
