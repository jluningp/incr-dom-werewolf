open Game_types

module Get_state = struct
  module T = struct
    module Query = Username
    module Response = Game_state

    let name = "get-state"
  end

  include T
  include Http_rpc.Rpc.Make (T)
end
