open Core_kernel

type t = Robber | Seer [@@deriving compare, hash, sexp]

include Comparable.S with type t := t

include Hashable.S with type t := t
