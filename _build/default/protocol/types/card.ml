open Core_kernel

module T = struct
  type t = Robber | Seer [@@deriving compare, hash, sexp]
end

include T
include Comparable.Make (T)
include Hashable.Make (T)
