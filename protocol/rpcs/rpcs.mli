open Game_types

module Get_state : sig
  include
    Http_rpc.Rpc.S
      with type query := Username.t
       and type response := Game_state.t
end
