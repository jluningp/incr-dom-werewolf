(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
     caml_update_dummy=runtime.caml_update_dummy,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Lwt_sequence_Empty=caml_string_of_jsbytes("Lwt_sequence.Empty"),
     cst_Lwt_nchoose_split_would_re=
      caml_string_of_jsbytes
       ("Lwt.nchoose_split [] would return a promise that is pending forever"),
     cst_Lwt_npick_would_return_a_p=
      caml_string_of_jsbytes
       ("Lwt.npick [] would return a promise that is pending forever"),
     cst_Lwt_nchoose_would_return_a=
      caml_string_of_jsbytes
       ("Lwt.nchoose [] would return a promise that is pending forever"),
     cst_Lwt_pick_would_return_a_pr=
      caml_string_of_jsbytes
       ("Lwt.pick [] would return a promise that is pending forever"),
     cst_Lwt_choose_would_return_a_=
      caml_string_of_jsbytes
       ("Lwt.choose [] would return a promise that is pending forever"),
     cst_wakeup_later_exn=caml_string_of_jsbytes("wakeup_later_exn"),
     cst_wakeup_later=caml_string_of_jsbytes("wakeup_later"),
     cst_wakeup_later_result=caml_string_of_jsbytes("wakeup_later_result"),
     cst_wakeup_exn=caml_string_of_jsbytes("wakeup_exn"),
     cst_wakeup=caml_string_of_jsbytes("wakeup"),
     cst_wakeup_result=caml_string_of_jsbytes("wakeup_result"),
     cst_Fatal_error_exception=
      caml_string_of_jsbytes("Fatal error: exception "),
     cst_Lwt_Resolution_loop_Cancel=
      caml_string_of_jsbytes("Lwt.Resolution_loop.Canceled"),
     cst_Lwt_switch_Off=caml_string_of_jsbytes("Lwt_switch.Off"),
     cst$3=caml_string_of_jsbytes("    "),
     cst$4=caml_string_of_jsbytes("   "),
     cst$5=caml_string_of_jsbytes(" |"),
     cst_Lwt_stream_parse=caml_string_of_jsbytes("Lwt_stream.parse"),
     cst_Lwt_stream_create_bounded=
      caml_string_of_jsbytes("Lwt_stream.create_bounded"),
     cst_Lwt_stream_bounded_push_re=
      caml_string_of_jsbytes("Lwt_stream.bounded_push#resize"),
     cst=caml_string_of_jsbytes(""),
     cst$0=caml_string_of_jsbytes(""),
     cst$1=caml_string_of_jsbytes(""),
     cst$2=caml_string_of_jsbytes(""),
     cst_Lwt_stream_clone=caml_string_of_jsbytes("Lwt_stream.clone"),
     shared=
      [0,
       caml_string_of_jsbytes("blocked"),
       caml_string_of_jsbytes("close"),
       caml_string_of_jsbytes("push"),
       caml_string_of_jsbytes("count"),
       caml_string_of_jsbytes("size"),
       caml_string_of_jsbytes("set_reference"),
       caml_string_of_jsbytes("resize"),
       caml_string_of_jsbytes("closed")],
     cst_Lwt_stream_Closed=caml_string_of_jsbytes("Lwt_stream.Closed"),
     cst_Lwt_stream_Full=caml_string_of_jsbytes("Lwt_stream.Full"),
     cst_Lwt_stream_Empty=caml_string_of_jsbytes("Lwt_stream.Empty"),
     Stdlib=global_data.Stdlib,
     Assert_failure=global_data.Assert_failure,
     Stdlib_list=global_data.Stdlib__list,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Stdlib_random=global_data.Stdlib__random,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_queue=global_data.Stdlib__queue,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Stdlib_map=global_data.Stdlib__map,
     Stdlib_buffer=global_data.Stdlib__buffer,
     CamlinternalOO=global_data.CamlinternalOO,
     Stdlib_string=global_data.Stdlib__string,
     Empty=[248,cst_Lwt_sequence_Empty,caml_fresh_oo_id(0)],
     _O_=[0,caml_string_of_jsbytes("src/core/lwt.ml"),2621,6],
     _P_=[0,caml_string_of_jsbytes("src/core/lwt.ml"),2641,6],
     _U_=[0,0],
     _V_=[0,0],
     _T_=[0,0],
     _S_=[0,0],
     _R_=[0,0],
     _Q_=[0,0],
     _N_=[0,caml_string_of_jsbytes("src/core/lwt.ml"),2595,18],
     _M_=[0,caml_string_of_jsbytes("src/core/lwt.ml"),2582,13],
     _L_=[0,0],
     _K_=[0,0],
     _I_=[0,1],
     _J_=[0,1],
     _G_=[0,1],
     _H_=[0,1],
     _F_=[0,1],
     _E_=[0,1],
     _C_=[0,0],
     _D_=[0,1],
     _A_=[0,1],
     _B_=[0,1],
     _y_=[0,1],
     _z_=[0,1],
     _w_=[0,0],
     _x_=[0,1],
     _u_=[0,0],
     _v_=[0,1],
     _r_=[0,0],
     _s_=[0,0],
     _t_=[0,1],
     _p_=[0,0],
     _q_=[0,1],
     _n_=[0,0],
     _o_=[0,1],
     _l_=[0,0],
     _m_=[0,0],
     _k_=[0,0],
     _j_=[0,0],
     _i_=[0,0],
     _f_=
      [0,
       [11,caml_string_of_jsbytes("Lwt."),[2,0,0]],
       caml_string_of_jsbytes("Lwt.%s")],
     _g_=
      [0,
       [11,caml_string_of_jsbytes("Lwt."),[2,0,0]],
       caml_string_of_jsbytes("Lwt.%s")],
     _h_=[0,1],
     _c_=
      [0,
       [11,caml_string_of_jsbytes("Lwt."),[2,0,0]],
       caml_string_of_jsbytes("Lwt.%s")],
     _d_=
      [0,
       [11,caml_string_of_jsbytes("Lwt."),[2,0,0]],
       caml_string_of_jsbytes("Lwt.%s")],
     _e_=[0,0],
     _a_=[0,caml_string_of_jsbytes("src/core/lwt.ml"),994,23],
     _b_=[0,caml_string_of_jsbytes("src/core/lwt.ml"),995,22],
     _ab_=[0,[4,6,[0,2,2],0,[12,32,0]],caml_string_of_jsbytes("%02x ")],
     _aa_=
      [0,
       [4,6,[0,2,8],0,[11,caml_string_of_jsbytes("|  "),0]],
       caml_string_of_jsbytes("%08x|  ")],
     _$_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("Lwt_stream.iter_n: max_concurrency must be > 0, "),
        [4,0,0,0,[11,caml_string_of_jsbytes(" given"),0]]],
       caml_string_of_jsbytes
        ("Lwt_stream.iter_n: max_concurrency must be > 0, %d given")],
     _Y_=[0,caml_string_of_jsbytes("closed")],
     _Z_=
      [0,
       caml_string_of_jsbytes("size"),
       caml_string_of_jsbytes("set_reference"),
       caml_string_of_jsbytes("resize"),
       caml_string_of_jsbytes("push"),
       caml_string_of_jsbytes("count"),
       caml_string_of_jsbytes("closed"),
       caml_string_of_jsbytes("close"),
       caml_string_of_jsbytes("blocked"),
       caml_string_of_jsbytes("*dummy method*")],
     _ac_=[0,caml_string_of_jsbytes("src/core/lwt_result.ml"),77,14],
     _ad_=[0,caml_string_of_jsbytes("src/core/lwt_pqueue.ml"),81,15];
    function get(node){return node[3]}
    function set(node,data){node[3] = data;return 0}
    function remove(node)
     {var
       _gM_=node[4],
       _gN_=
        _gM_?(node[4] = 0,node[1][2] = node[2],node[2][1] = node[1],0):_gM_;
      return _gN_}
    function create(param)
     {var seq=[];caml_update_dummy(seq,[0,seq,seq]);return seq}
    function is_empty(seq){return seq[2] === seq?1:0}
    function length(seq)
     {var curr=seq[2],len=0;
      for(;;)
       {if(curr === seq)return len;
        var len$0=len + 1 | 0,curr$0=curr[2],curr=curr$0,len=len$0;
        continue}}
    function add_l(data,seq)
     {var node=[0,seq,seq[2],data,1];
      seq[2][1] = node;
      seq[2] = node;
      return node}
    function add_r(data,seq)
     {var node=[0,seq[1],seq,data,1];
      seq[1][2] = node;
      seq[1] = node;
      return node}
    function take_l(seq)
     {if(is_empty(seq))throw Empty;
      var node=seq[2];
      remove(node);
      return node[3]}
    function take_r(seq)
     {if(is_empty(seq))throw Empty;
      var node=seq[1];
      remove(node);
      return node[3]}
    function take_opt_l(seq)
     {if(is_empty(seq))return 0;
      var node=seq[2];
      remove(node);
      return [0,node[3]]}
    function take_opt_r(seq)
     {if(is_empty(seq))return 0;
      var node=seq[1];
      remove(node);
      return [0,node[3]]}
    function transfer_l(s1,s2)
     {s2[2][1] = s1[1];
      s1[1][2] = s2[2];
      s2[2] = s1[2];
      s1[2][1] = s2;
      s1[1] = s1;
      s1[2] = s1;
      return 0}
    function transfer_r(s1,s2)
     {s2[1][2] = s1[2];
      s1[2][1] = s2[1];
      s2[1] = s1[1];
      s1[1][2] = s2;
      s1[1] = s1;
      s1[2] = s1;
      return 0}
    function iter_l(f,seq)
     {var curr=seq[2];
      for(;;)
       {var _gL_=curr !== seq?1:0;
        if(_gL_)
         {if(curr[4])caml_call1(f,curr[3]);
          var curr$0=curr[2],curr=curr$0;
          continue}
        return _gL_}}
    function iter_r(f,seq)
     {var curr=seq[1];
      for(;;)
       {var _gK_=curr !== seq?1:0;
        if(_gK_)
         {if(curr[4])caml_call1(f,curr[3]);
          var curr$0=curr[1],curr=curr$0;
          continue}
        return _gK_}}
    function iter_node_l(f,seq)
     {var curr=seq[2];
      for(;;)
       {var _gJ_=curr !== seq?1:0;
        if(_gJ_)
         {if(curr[4])caml_call1(f,curr);
          var curr$0=curr[2],curr=curr$0;
          continue}
        return _gJ_}}
    function iter_node_r(f,seq)
     {var curr=seq[1];
      for(;;)
       {var _gI_=curr !== seq?1:0;
        if(_gI_)
         {if(curr[4])caml_call1(f,curr);
          var curr$0=curr[1],curr=curr$0;
          continue}
        return _gI_}}
    function fold_l(f,seq,acc)
     {var curr=seq[2],acc$0=acc;
      for(;;)
       {if(curr === seq)return acc$0;
        if(curr[4])
         {var
           acc$1=caml_call2(f,curr[3],acc$0),
           curr$0=curr[2],
           curr=curr$0,
           acc$0=acc$1;
          continue}
        var curr$1=curr[2],curr=curr$1;
        continue}}
    function fold_r(f,seq,acc)
     {var curr=seq[1],acc$0=acc;
      for(;;)
       {if(curr === seq)return acc$0;
        if(curr[4])
         {var
           acc$1=caml_call2(f,curr[3],acc$0),
           curr$0=curr[1],
           curr=curr$0,
           acc$0=acc$1;
          continue}
        var curr$1=curr[1],curr=curr$1;
        continue}}
    function find_node_l(f,seq)
     {var curr=seq[2];
      for(;;)
       {if(curr !== seq)
         {if(curr[4])
           {if(caml_call1(f,curr[3]))return curr;
            var curr$0=curr[2],curr=curr$0;
            continue}
          var curr$1=curr[2],curr=curr$1;
          continue}
        throw Stdlib[8]}}
    function find_node_r(f,seq)
     {var curr=seq[1];
      for(;;)
       {if(curr !== seq)
         {if(curr[4])
           {if(caml_call1(f,curr[3]))return curr;
            var curr$0=curr[1],curr=curr$0;
            continue}
          var curr$1=curr[1],curr=curr$1;
          continue}
        throw Stdlib[8]}}
    function find_node_opt_l(f,seq)
     {try
       {var _gG_=[0,find_node_l(f,seq)];return _gG_}
      catch(_gH_)
       {_gH_ = caml_wrap_exception(_gH_);
        if(_gH_ === Stdlib[8])return 0;
        throw _gH_}}
    function find_node_opt_r(f,seq)
     {try
       {var _gE_=[0,find_node_r(f,seq)];return _gE_}
      catch(_gF_)
       {_gF_ = caml_wrap_exception(_gF_);
        if(_gF_ === Stdlib[8])return 0;
        throw _gF_}}
    var
     Lwt_sequence=
      [0,
       get,
       set,
       remove,
       create,
       is_empty,
       length,
       add_l,
       add_r,
       Empty,
       take_l,
       take_r,
       take_opt_l,
       take_opt_r,
       transfer_l,
       transfer_r,
       iter_l,
       iter_r,
       iter_node_l,
       iter_node_r,
       fold_l,
       fold_r,
       find_node_opt_l,
       find_node_opt_r,
       find_node_l,
       find_node_r];
    caml_register_global(86,Lwt_sequence,"Lwt_sequence");
    var
     compare=runtime.caml_compare,
     Storage_map=caml_call1(Stdlib_map[1],[0,compare]);
    function state_of_result(param)
     {if(0 === param[0]){var x=param[1];return [0,x]}
      var exn=param[1];
      return [1,exn]}
    function underlying(p)
     {var _gD_=p[1];
      switch(_gD_[0])
       {case 0:return p;
        case 1:return p;
        case 2:return p;
        default:
         var p$0=_gD_[1],p$1=underlying(p$0);
         if(1 - (p$1 === p$0?1:0))p[1] = [3,p$1];
         return p$1}}
    function set_promise_state(p,state){p[1] = state;return p}
    var next_key_id=[0,0];
    function new_key(param)
     {var id=next_key_id[1];next_key_id[1] = id + 1 | 0;return [0,id,0]}
    var current_storage=[0,Storage_map[1]];
    function get$0(key)
     {if(caml_call2(Storage_map[3],key[1],current_storage[1]))
       {var refresh=caml_call2(Storage_map[28],key[1],current_storage[1]);
        caml_call1(refresh,0);
        var value=key[2];
        key[2] = 0;
        return value}
      return 0}
    function with_value(key,value,f)
     {if(value)
       var
        refresh=function(param){key[2] = value;return 0},
        new_storage=
         caml_call3(Storage_map[4],key[1],refresh,current_storage[1]);
      else
       var new_storage=caml_call2(Storage_map[7],key[1],current_storage[1]);
      var saved_storage=current_storage[1];
      current_storage[1] = new_storage;
      try
       {var result=caml_call1(f,0);
        current_storage[1] = saved_storage;
        return result}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        current_storage[1] = saved_storage;
        throw exn}}
    function concat_regular_callbacks(l1,l2)
     {return typeof l1 === "number"?l2:typeof l2 === "number"?l1:[0,l1,l2]}
    function clean_up_callback_cells(callbacks)
     {if(typeof callbacks !== "number")
       switch(callbacks[0])
        {case 0:
          var
           l2=callbacks[2],
           l1=callbacks[1],
           l1$0=clean_up_callback_cells(l1),
           l2$0=clean_up_callback_cells(l2);
          return concat_regular_callbacks(l1$0,l2$0);
         case 2:if(! callbacks[1][1])return 0;break
         }
      return callbacks}
    function clear_explicitly_removable_cal(cell,ps)
     {cell[1] = 0;
      function _gA_(p)
       {var _gB_=underlying(p)[1];
        switch(_gB_[0])
         {case 1:return 0;
          case 2:
           var callbacks=_gB_[1],_gC_=callbacks[1];
           if(typeof _gC_ !== "number" && 2 === _gC_[0])
            {callbacks[1] = 0;return 0}
           var cleanups_deferred=callbacks[4] + 1 | 0;
           return 42 < cleanups_deferred
                   ?(callbacks[4]
                     =
                     0,
                     callbacks[1]
                     =
                     clean_up_callback_cells(callbacks[1]),
                     0)
                   :(callbacks[4] = cleanups_deferred,0);
          default:return 0}}
      return caml_call2(Stdlib_list[15],_gA_,ps)}
    function add_regular_callback_list_node(callbacks,node)
     {var
       _gz_=callbacks[1],
       node$0=typeof _gz_ === "number"?node:[0,node,_gz_];
      callbacks[1] = node$0;
      return 0}
    function add_implicitly_removed_callbac(callbacks,f)
     {return add_regular_callback_list_node(callbacks,[1,f])}
    function add_explicitly_removable_callb(ps,f)
     {var cell=[];
      caml_update_dummy(cell,[0,[0,self_removing_callback_wrapper]]);
      function self_removing_callback_wrapper(result)
       {clear_explicitly_removable_cal(cell,ps);return caml_call1(f,result)}
      var node=[2,cell];
      function _gx_(p)
       {var _gy_=underlying(p)[1];
        switch(_gy_[0])
         {case 1:throw [0,Assert_failure,_b_];
          case 2:
           var callbacks=_gy_[1];
           return add_regular_callback_list_node(callbacks,node);
          default:throw [0,Assert_failure,_a_]}}
      caml_call2(Stdlib_list[15],_gx_,ps);
      return cell}
    function add_explicitly_removable_callb$0(ps,f)
     {add_explicitly_removable_callb(ps,f);return 0}
    function add_cancel_callback(callbacks,f)
     {var
       node=[1,current_storage[1],f],
       node$0=typeof callbacks[2] === "number"?node:[0,node,callbacks[2]];
      callbacks[2] = node$0;
      return 0}
    var
     async_exception_hook=
      [0,
       function(exn)
        {caml_call1(Stdlib[49],cst_Fatal_error_exception);
         var _gw_=caml_call1(Stdlib_printexc[1],exn);
         caml_call1(Stdlib[49],_gw_);
         caml_call1(Stdlib[48],10);
         caml_call1(Stdlib_printexc[5],Stdlib[40]);
         caml_call1(Stdlib[63],Stdlib[40]);
         return caml_call1(Stdlib[99],2)}];
    function handle_with_async_exception_ho(f,v)
     {try
       {var _gv_=caml_call1(f,v);return _gv_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        return caml_call1(async_exception_hook[1],exn)}}
    var Canceled=[248,cst_Lwt_Resolution_loop_Cancel,caml_fresh_oo_id(0)];
    function run_callbacks(callbacks,result)
     {if(1 === result[0])
       var _gt_=result[1] === Canceled?1:0,is_canceled=_gt_;
      else
       var is_canceled=0;
      if(is_canceled)
       {var
         _gr_=callbacks[2],
         iter_callback_list$2=
          function(counter,fs,rest)
           {var fs$0=fs,rest$0=rest;
            for(;;)
             if(typeof fs$0 === "number")
              {if(counter < 50)
                {var counter$0=counter + 1 | 0;
                 return iter_list$0(counter$0,rest$0)}
               return caml_trampoline_return(iter_list$0,[0,rest$0])}
             else
              switch(fs$0[0])
               {case 0:
                 var
                  fs$1=fs$0[2],
                  fs$2=fs$0[1],
                  rest$1=[0,fs$1,rest$0],
                  fs$0=fs$2,
                  rest$0=rest$1;
                 continue;
                case 1:
                 var f=fs$0[2],storage=fs$0[1];
                 current_storage[1] = storage;
                 handle_with_async_exception_ho(f,0);
                 if(counter < 50)
                  {var counter$1=counter + 1 | 0;
                   return iter_list$0(counter$1,rest$0)}
                 return caml_trampoline_return(iter_list$0,[0,rest$0]);
                default:
                 var node=fs$0[1];
                 remove(node);
                 if(counter < 50)
                  {var counter$2=counter + 1 | 0;
                   return iter_list$0(counter$2,rest$0)}
                 return caml_trampoline_return(iter_list$0,[0,rest$0])}},
         iter_list$0=
          function(counter,rest)
           {if(rest)
             {var rest$0=rest[2],fs=rest[1];
              if(counter < 50)
               {var counter$0=counter + 1 | 0;
                return iter_callback_list$2(counter$0,fs,rest$0)}
              return caml_trampoline_return
                      (iter_callback_list$2,[0,fs,rest$0])}
            return 0},
         iter_callback_list=
          function(fs,rest)
           {return caml_trampoline(iter_callback_list$2(0,fs,rest))};
        iter_callback_list(_gr_,0)}
      var _gs_=callbacks[1];
      function iter_callback_list$1(counter,fs,rest)
       {var fs$0=fs,rest$0=rest;
        for(;;)
         if(typeof fs$0 === "number")
          {if(counter < 50)
            {var counter$0=counter + 1 | 0;return iter_list(counter$0,rest$0)}
           return caml_trampoline_return(iter_list,[0,rest$0])}
         else
          switch(fs$0[0])
           {case 0:
             var
              fs$1=fs$0[2],
              fs$2=fs$0[1],
              rest$1=[0,fs$1,rest$0],
              fs$0=fs$2,
              rest$0=rest$1;
             continue;
            case 1:
             var f=fs$0[1];
             caml_call1(f,result);
             if(counter < 50)
              {var counter$1=counter + 1 | 0;
               return iter_list(counter$1,rest$0)}
             return caml_trampoline_return(iter_list,[0,rest$0]);
            default:
             var _gu_=fs$0[1][1];
             if(_gu_)
              {var f$0=_gu_[1];
               caml_call1(f$0,result);
               if(counter < 50)
                {var counter$2=counter + 1 | 0;
                 return iter_list(counter$2,rest$0)}
               return caml_trampoline_return(iter_list,[0,rest$0])}
             if(counter < 50)
              {var counter$3=counter + 1 | 0;
               return iter_list(counter$3,rest$0)}
             return caml_trampoline_return(iter_list,[0,rest$0])}}
      function iter_list(counter,rest)
       {if(rest)
         {var rest$0=rest[2],fs=rest[1];
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return iter_callback_list$1(counter$0,fs,rest$0)}
          return caml_trampoline_return(iter_callback_list$1,[0,fs,rest$0])}
        return 0}
      function iter_callback_list$0(fs,rest)
       {return caml_trampoline(iter_callback_list$1(0,fs,rest))}
      return iter_callback_list$0(_gs_,0)}
    var
     current_callback_nesting_depth=[0,0],
     deferred_callbacks=caml_call1(Stdlib_queue[2],0),
     default_maximum_callback_nesti=42;
    function leave_resolution_loop(storage_snapshot)
     {if(1 === current_callback_nesting_depth[1])
       for(;;)
        {if(! caml_call1(Stdlib_queue[13],deferred_callbacks))
          {var
            match=caml_call1(Stdlib_queue[7],deferred_callbacks),
            result=match[2],
            callbacks=match[1];
           run_callbacks(callbacks,result);
           continue}
         break}
      current_callback_nesting_depth[1]
      =
      current_callback_nesting_depth[1]
      -
      1
      |
      0;
      current_storage[1] = storage_snapshot;
      return 0}
    function run_in_resolution_loop(f)
     {current_callback_nesting_depth[1]
      =
      current_callback_nesting_depth[1]
      +
      1
      |
      0;
      var storage_snapshot=current_storage[1],result=caml_call1(f,0);
      leave_resolution_loop(storage_snapshot);
      return result}
    function abandon_wakeups(param)
     {var _gq_=0 !== current_callback_nesting_depth[1]?1:0;
      return _gq_?leave_resolution_loop(Storage_map[1]):_gq_}
    function run_callbacks_or_defer_them(opt,_gp_,callbacks,result)
     {if(opt)var sth=opt[1],allow_deferring=sth;else var allow_deferring=1;
      if(_gp_)
       var sth$0=_gp_[1],maximum_callback_nesting_depth=sth$0;
      else
       var maximum_callback_nesting_depth=default_maximum_callback_nesti;
      var
       should_defer=
        allow_deferring
         ?maximum_callback_nesting_depth <= current_callback_nesting_depth[1]
           ?1
           :0
         :allow_deferring;
      return should_defer
              ?caml_call2
                (Stdlib_queue[4],[0,callbacks,result],deferred_callbacks)
              :run_in_resolution_loop
                (function(param){return run_callbacks(callbacks,result)})}
    function resolve(allow_deferring,maximum_callback_nesting_depth,p,result)
     {var match=p[1],callbacks=match[1],p$0=set_promise_state(p,result);
      run_callbacks_or_defer_them
       (allow_deferring,maximum_callback_nesting_depth,callbacks,result);
      return p$0}
    function run_callback_or_defer_it(opt,f,if_deferred)
     {if(opt)
       var sth=opt[1],run_immediately_and_ensure_tai=sth;
      else
       var run_immediately_and_ensure_tai=0;
      if(run_immediately_and_ensure_tai)return caml_call1(f,0);
      var should_defer=42 <= current_callback_nesting_depth[1]?1:0;
      if(should_defer)
       {var
         match=caml_call1(if_deferred,0),
         deferred_result=match[3],
         deferred_callback=match[2],
         immediate_result=match[1],
         deferred_record=[0,[1,deferred_callback],0,0,0];
        caml_call2
         (Stdlib_queue[4],
          [0,deferred_record,deferred_result],
          deferred_callbacks);
        return immediate_result}
      return run_in_resolution_loop(function(param){return caml_call1(f,0)})}
    function wakeup_general(api_function_name,p,result)
     {var p$0=underlying(p),_go_=p$0[1];
      switch(_go_[0])
       {case 1:
         return _go_[1] === Canceled
                 ?0
                 :caml_call3
                   (Stdlib_printf[10],Stdlib[1],_d_,api_function_name);
        case 2:
         var result$0=state_of_result(result);
         resolve(_e_,0,p$0,result$0);
         return 0;
        default:
         return caml_call3(Stdlib_printf[10],Stdlib[1],_c_,api_function_name)}}
    function wakeup_result(r,result)
     {return wakeup_general(cst_wakeup_result,r,result)}
    function wakeup(r,v){return wakeup_general(cst_wakeup,r,[0,v])}
    function wakeup_exn(r,exn)
     {return wakeup_general(cst_wakeup_exn,r,[1,exn])}
    function wakeup_later_general(api_function_name,p,result)
     {var p$0=underlying(p),_gn_=p$0[1];
      switch(_gn_[0])
       {case 1:
         return _gn_[1] === Canceled
                 ?0
                 :caml_call3
                   (Stdlib_printf[10],Stdlib[1],_g_,api_function_name);
        case 2:
         var result$0=state_of_result(result);
         resolve(0,_h_,p$0,result$0);
         return 0;
        default:
         return caml_call3(Stdlib_printf[10],Stdlib[1],_f_,api_function_name)}}
    function wakeup_later_result(r,result)
     {return wakeup_later_general(cst_wakeup_later_result,r,result)}
    function wakeup_later(r,v)
     {return wakeup_later_general(cst_wakeup_later,r,[0,v])}
    function wakeup_later_exn(r,exn)
     {return wakeup_later_general(cst_wakeup_later_exn,r,[1,exn])}
    function cancel(match)
     {var canceled_result=[1,Canceled];
      function cancel_and_collect_callbacks(callbacks_accumulator,p)
       {var p$0=p;
        for(;;)
         {var p$1=underlying(p$0),_gl_=p$1[1];
          switch(_gl_[0])
           {case 1:return callbacks_accumulator;
            case 2:
             var callbacks=_gl_[1],_gm_=callbacks[3];
             if(typeof _gm_ === "number")
              return 0 === _gm_
                      ?callbacks_accumulator
                      :(set_promise_state(p$1,canceled_result),
                        [0,callbacks,callbacks_accumulator]);
             else
              {if(0 === _gm_[0]){var p$2=_gm_[1],p$0=p$2;continue}
               var ps=_gm_[1];
               return caml_call3
                       (Stdlib_list[23],
                        cancel_and_collect_callbacks,
                        callbacks_accumulator,
                        ps)}
            default:return callbacks_accumulator}}}
      var callbacks=cancel_and_collect_callbacks(0,match);
      function _gk_(param)
       {return run_callbacks_or_defer_them(_i_,0,param,canceled_result)}
      return caml_call2(Stdlib_list[15],_gk_,callbacks)}
    function lift(v){return [0,[0,v]]}
    function of_result(result){return [0,state_of_result(result)]}
    function fail(exn){return [0,[1,exn]]}
    var return_unit=lift(0),return_none=lift(0);
    function return_some(x){return lift([0,x])}
    var acc=lift(0),return_true=lift(1),return_false=lift(0);
    function return_ok(x){return lift([0,x])}
    function return_error(x){return lift([1,x])}
    function fail_with(msg){return [0,[1,[0,Stdlib[7],msg]]]}
    function fail_invalid_arg(msg){return [0,[1,[0,Stdlib[6],msg]]]}
    function new_pending(how_to_cancel)
     {var state=[2,[0,0,0,how_to_cancel,0]];return [0,state]}
    function wait(param){var p=new_pending(0);return [0,p,p]}
    function task(param){var p=new_pending(1);return [0,p,p]}
    function waiter_of_wakener(r){return r}
    function add_task_r(sequence)
     {var
       p=new_pending(1),
       node=add_r(p,sequence),
       match=p[1],
       callbacks=match[1];
      callbacks[2] = [2,node];
      return p}
    function add_task_l(sequence)
     {var
       p=new_pending(1),
       node=add_l(p,sequence),
       match=p[1],
       callbacks=match[1];
      callbacks[2] = [2,node];
      return p}
    function protected$0(p)
     {switch(underlying(p)[1][0])
       {case 1:return p;
        case 2:
         var
          p$0=new_pending(1),
          f=
           function(p_result)
            {var p=underlying(p$0);resolve(_j_,0,p,p_result);return 0},
          ps=[0,p,0],
          cell=add_explicitly_removable_callb(ps,f),
          remove_the_callback=
           function(param){return clear_explicitly_removable_cal(cell,ps)},
          match=p$0[1],
          p_callbacks=match[1];
         add_cancel_callback(p_callbacks,remove_the_callback);
         return p$0;
        default:return p}}
    function no_cancel(p)
     {var _gj_=underlying(p)[1];
      switch(_gj_[0])
       {case 1:return p;
        case 2:
         var
          p_callbacks=_gj_[1],
          p$0=new_pending(0),
          callback=
           function(p_result)
            {var p=underlying(p$0);resolve(_k_,0,p,p_result);return 0};
         add_implicitly_removed_callbac(p_callbacks,callback);
         return p$0;
        default:return p}}
    function make_into_proxy(outer_promise,user_provided_promise)
     {var p=underlying(user_provided_promise);
      if(p === outer_promise)return p;
      var _gi_=p[1];
      switch(_gi_[0])
       {case 1:return resolve(_m_,0,outer_promise,p[1]);
        case 2:
         var
          p_callbacks=_gi_[1],
          match=outer_promise[1],
          outer_callbacks=match[1],
          regular_callbacks=
           concat_regular_callbacks(outer_callbacks[1],p_callbacks[1]),
          cleanups_deferred=outer_callbacks[4] + p_callbacks[4] | 0;
         if(42 < cleanups_deferred)
          var
           cleanups_deferred$0=0,
           regular_callbacks$0=clean_up_callback_cells(regular_callbacks);
         else
          var
           cleanups_deferred$0=cleanups_deferred,
           regular_callbacks$0=regular_callbacks;
         var
          _gg_=p_callbacks[2],
          _gh_=outer_callbacks[2],
          cancel_callbacks=
           typeof _gh_ === "number"
            ?_gg_
            :typeof _gg_ === "number"?_gh_:[0,_gh_,_gg_];
         outer_callbacks[1] = regular_callbacks$0;
         outer_callbacks[2] = cancel_callbacks;
         outer_callbacks[4] = cleanups_deferred$0;
         outer_callbacks[3] = p_callbacks[3];
         set_promise_state(p,[3,outer_promise]);
         return outer_promise;
        default:return resolve(_l_,0,outer_promise,p[1])}}
    function symbol_bind(p,f)
     {var p$0=underlying(p);
      function create_result_promise_and_call(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var p$2=underlying(p);resolve(_n_,0,p$2,p_result);return 0}
          var v=p_result[1];
          current_storage[1] = saved_storage;
          try
           {var _gf_=caml_call1(f,v),p$0=_gf_}
          catch(exn){exn = caml_wrap_exception(exn);var p$0=fail(exn)}
          var p$1=underlying(p);
          make_into_proxy(p$1,p$0);
          return 0}
        return [0,p,callback]}
      var _gd_=p$0[1];
      switch(_gd_[0])
       {case 1:return [0,_gd_];
        case 2:
         var
          p_callbacks=_gd_[1],
          match=create_result_promise_and_call(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callbac(p_callbacks,callback);
         return p$1;
        default:
         var
          v=_gd_[1],
          _ge_=
           function(param)
            {var
              match=create_result_promise_and_call(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_o_,function(param){return caml_call1(f,v)},_ge_)}}
    function backtrace_bind(add_loc,p,f)
     {var p$0=underlying(p);
      function create_result_promise_and_call(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var exn=p_result[1],p$2=underlying(p);
            resolve(_p_,0,p$2,[1,caml_call1(add_loc,exn)]);
            return 0}
          var v=p_result[1];
          current_storage[1] = saved_storage;
          try
           {var _gc_=caml_call1(f,v),p$0=_gc_}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var p$0=fail(caml_call1(add_loc,exn))}
          var p$1=underlying(p);
          make_into_proxy(p$1,p$0);
          return 0}
        return [0,p,callback]}
      var _ga_=p$0[1];
      switch(_ga_[0])
       {case 1:var exn=_ga_[1];return [0,[1,caml_call1(add_loc,exn)]];
        case 2:
         var
          p_callbacks=_ga_[1],
          match=create_result_promise_and_call(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callbac(p_callbacks,callback);
         return p$1;
        default:
         var
          v=_ga_[1],
          _gb_=
           function(param)
            {var
              match=create_result_promise_and_call(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_q_,function(param){return caml_call1(f,v)},_gb_)}}
    function symbol(f,p)
     {var p$0=underlying(p);
      function create_result_promise_and_call(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var p$1=underlying(p);resolve(_s_,0,p$1,p_result);return 0}
          var v=p_result[1];
          current_storage[1] = saved_storage;
          try
           {var _f$_=[0,caml_call1(f,v)],p_result$0=_f$_}
          catch(exn){exn = caml_wrap_exception(exn);var p_result$0=[1,exn]}
          var p$0=underlying(p);
          resolve(_r_,0,p$0,p_result$0);
          return 0}
        return [0,p,callback]}
      var _f7_=p$0[1];
      switch(_f7_[0])
       {case 1:return [0,_f7_];
        case 2:
         var
          p_callbacks=_f7_[1],
          match=create_result_promise_and_call(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callbac(p_callbacks,callback);
         return p$1;
        default:
         var
          v=_f7_[1],
          _f8_=
           function(param)
            {var
              match=create_result_promise_and_call(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_t_,
                  function(param)
                   {try
                     {var _f__=[0,caml_call1(f,v)],_f9_=_f__}
                    catch(exn){exn = caml_wrap_exception(exn);var _f9_=[1,exn]}
                    return [0,_f9_]},
                  _f8_)}}
    function catch$0(f,h)
     {try
       {var _f5_=caml_call1(f,0),p=_f5_}
      catch(exn){exn = caml_wrap_exception(exn);var p=fail(exn)}
      var p$0=underlying(p);
      function create_result_promise_and_call(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var exn=p_result[1];
            current_storage[1] = saved_storage;
            try
             {var _f6_=caml_call1(h,exn),p$1=_f6_}
            catch(exn){exn = caml_wrap_exception(exn);var p$1=fail(exn)}
            var p$2=underlying(p);
            make_into_proxy(p$2,p$1);
            return 0}
          var p$0=underlying(p);
          resolve(_u_,0,p$0,p_result);
          return 0}
        return [0,p,callback]}
      var _f3_=p$0[1];
      switch(_f3_[0])
       {case 1:
         var
          exn=_f3_[1],
          _f4_=
           function(param)
            {var
              match=create_result_promise_and_call(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_v_,function(param){return caml_call1(h,exn)},_f4_);
        case 2:
         var
          p_callbacks=_f3_[1],
          match=create_result_promise_and_call(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callbac(p_callbacks,callback);
         return p$1;
        default:return p$0}}
    function backtrace_catch(add_loc,f,h)
     {try
       {var _f1_=caml_call1(f,0),p=_f1_}
      catch(exn){exn = caml_wrap_exception(exn);var p=fail(exn)}
      var p$0=underlying(p);
      function create_result_promise_and_call(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var exn=p_result[1];
            current_storage[1] = saved_storage;
            try
             {var _f2_=caml_call1(h,exn),p$1=_f2_}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              var p$1=fail(caml_call1(add_loc,exn))}
            var p$2=underlying(p);
            make_into_proxy(p$2,p$1);
            return 0}
          var p$0=underlying(p);
          resolve(_w_,0,p$0,p_result);
          return 0}
        return [0,p,callback]}
      var _fZ_=p$0[1];
      switch(_fZ_[0])
       {case 1:
         var
          exn=_fZ_[1],
          _f0_=
           function(param)
            {var
              match=create_result_promise_and_call(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_x_,
                  function(param)
                   {return caml_call1(h,caml_call1(add_loc,exn))},
                  _f0_);
        case 2:
         var
          p_callbacks=_fZ_[1],
          match=create_result_promise_and_call(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callbac(p_callbacks,callback);
         return p$1;
        default:return p$0}}
    function try_bind(f$0,f,h)
     {try
       {var _fW_=caml_call1(f$0,0),p=_fW_}
      catch(exn){exn = caml_wrap_exception(exn);var p=fail(exn)}
      var p$0=underlying(p);
      function create_result_promise_and_call(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var exn=p_result[1];
            current_storage[1] = saved_storage;
            try
             {var _fY_=caml_call1(h,exn),p$2=_fY_}
            catch(exn){exn = caml_wrap_exception(exn);var p$2=fail(exn)}
            var p$3=underlying(p);
            make_into_proxy(p$3,p$2);
            return 0}
          var v=p_result[1];
          current_storage[1] = saved_storage;
          try
           {var _fX_=caml_call1(f,v),p$0=_fX_}
          catch(exn){exn = caml_wrap_exception(exn);var p$0=fail(exn)}
          var p$1=underlying(p);
          make_into_proxy(p$1,p$0);
          return 0}
        return [0,p,callback]}
      var _fT_=p$0[1];
      switch(_fT_[0])
       {case 1:
         var
          exn=_fT_[1],
          _fV_=
           function(param)
            {var
              match=create_result_promise_and_call(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_z_,function(param){return caml_call1(h,exn)},_fV_);
        case 2:
         var
          p_callbacks=_fT_[1],
          match=create_result_promise_and_call(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callbac(p_callbacks,callback);
         return p$1;
        default:
         var
          v=_fT_[1],
          _fU_=
           function(param)
            {var
              match=create_result_promise_and_call(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_y_,function(param){return caml_call1(f,v)},_fU_)}}
    function backtrace_try_bind(add_loc,f$0,f,h)
     {try
       {var _fQ_=caml_call1(f$0,0),p=_fQ_}
      catch(exn){exn = caml_wrap_exception(exn);var p=fail(exn)}
      var p$0=underlying(p);
      function create_result_promise_and_call(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var exn=p_result[1];
            current_storage[1] = saved_storage;
            try
             {var _fS_=caml_call1(h,exn),p$2=_fS_}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              var p$2=fail(caml_call1(add_loc,exn))}
            var p$3=underlying(p);
            make_into_proxy(p$3,p$2);
            return 0}
          var v=p_result[1];
          current_storage[1] = saved_storage;
          try
           {var _fR_=caml_call1(f,v),p$0=_fR_}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var p$0=fail(caml_call1(add_loc,exn))}
          var p$1=underlying(p);
          make_into_proxy(p$1,p$0);
          return 0}
        return [0,p,callback]}
      var _fN_=p$0[1];
      switch(_fN_[0])
       {case 1:
         var
          exn=_fN_[1],
          _fP_=
           function(param)
            {var
              match=create_result_promise_and_call(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_B_,
                  function(param)
                   {return caml_call1(h,caml_call1(add_loc,exn))},
                  _fP_);
        case 2:
         var
          p_callbacks=_fN_[1],
          match=create_result_promise_and_call(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callbac(p_callbacks,callback);
         return p$1;
        default:
         var
          v=_fN_[1],
          _fO_=
           function(param)
            {var
              match=create_result_promise_and_call(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_A_,function(param){return caml_call1(f,v)},_fO_)}}
    function finalize(f$0,f)
     {function _fK_(e)
       {function _fM_(param){return fail(e)}
        return symbol_bind(caml_call1(f,0),_fM_)}
      return try_bind
              (f$0,
               function(x)
                {function _fL_(param){return lift(x)}
                 return symbol_bind(caml_call1(f,0),_fL_)},
               _fK_)}
    function backtrace_finalize(add_loc,f$0,f)
     {function _fH_(e)
       {function _fJ_(param){return fail(caml_call1(add_loc,e))}
        return symbol_bind(caml_call1(f,0),_fJ_)}
      return backtrace_try_bind
              (add_loc,
               f$0,
               function(x)
                {function _fI_(param){return lift(x)}
                 return symbol_bind(caml_call1(f,0),_fI_)},
               _fH_)}
    function on_cancel(p,f)
     {var p$0=underlying(p),_fF_=p$0[1];
      switch(_fF_[0])
       {case 1:
         if(_fF_[1] === Canceled)
          {var
            _fG_=
             function(param)
              {return [0,
                       0,
                       function(param){return handle_with_async_exception_ho(f,0)},
                       _C_]};
           return run_callback_or_defer_it
                   (_D_,
                    function(param){return handle_with_async_exception_ho(f,0)},
                    _fG_)}
         return 0;
        case 2:var callbacks=_fF_[1];return add_cancel_callback(callbacks,f);
        default:return 0}}
    function on_success(p,f)
     {var p$0=underlying(p);
      function callback_if_deferred(param)
       {var saved_storage=current_storage[1];
        return function(result)
         {if(1 === result[0])return 0;
          var v=result[1];
          current_storage[1] = saved_storage;
          return handle_with_async_exception_ho(f,v)}}
      var _fD_=p$0[1];
      switch(_fD_[0])
       {case 1:return 0;
        case 2:
         var p_callbacks=_fD_[1],callback=callback_if_deferred(0);
         return add_implicitly_removed_callbac(p_callbacks,callback);
        default:
         var
          v=_fD_[1],
          _fE_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_E_,
                  function(param){return handle_with_async_exception_ho(f,v)},
                  _fE_)}}
    function on_failure(p,f)
     {var p$0=underlying(p);
      function callback_if_deferred(param)
       {var saved_storage=current_storage[1];
        return function(result)
         {if(1 === result[0])
           {var exn=result[1];
            current_storage[1] = saved_storage;
            return handle_with_async_exception_ho(f,exn)}
          return 0}}
      var _fB_=p$0[1];
      switch(_fB_[0])
       {case 1:
         var
          exn=_fB_[1],
          _fC_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_F_,
                  function(param)
                   {return handle_with_async_exception_ho(f,exn)},
                  _fC_);
        case 2:
         var p_callbacks=_fB_[1],callback=callback_if_deferred(0);
         return add_implicitly_removed_callbac(p_callbacks,callback);
        default:return 0}}
    function on_termination(p,f)
     {var p$0=underlying(p);
      function callback_if_deferred(param)
       {var saved_storage=current_storage[1];
        return function(result)
         {current_storage[1] = saved_storage;
          return handle_with_async_exception_ho(f,0)}}
      var _fy_=p$0[1];
      switch(_fy_[0])
       {case 1:
         var
          _fA_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_H_,
                  function(param){return handle_with_async_exception_ho(f,0)},
                  _fA_);
        case 2:
         var p_callbacks=_fy_[1],callback=callback_if_deferred(0);
         return add_implicitly_removed_callbac(p_callbacks,callback);
        default:
         var
          _fz_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_G_,
                  function(param){return handle_with_async_exception_ho(f,0)},
                  _fz_)}}
    function on_any(p,f,g)
     {var p$0=underlying(p);
      function callback_if_deferred(param)
       {var saved_storage=current_storage[1];
        return function(result)
         {if(1 === result[0])
           {var exn=result[1];
            current_storage[1] = saved_storage;
            return handle_with_async_exception_ho(g,exn)}
          var v=result[1];
          current_storage[1] = saved_storage;
          return handle_with_async_exception_ho(f,v)}}
      var _fv_=p$0[1];
      switch(_fv_[0])
       {case 1:
         var
          exn=_fv_[1],
          _fx_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_J_,
                  function(param)
                   {return handle_with_async_exception_ho(g,exn)},
                  _fx_);
        case 2:
         var p_callbacks=_fv_[1],callback=callback_if_deferred(0);
         return add_implicitly_removed_callbac(p_callbacks,callback);
        default:
         var
          v=_fv_[1],
          _fw_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_I_,
                  function(param){return handle_with_async_exception_ho(f,v)},
                  _fw_)}}
    function async(f)
     {try
       {var _fu_=caml_call1(f,0),p=_fu_}
      catch(exn){exn = caml_wrap_exception(exn);var p=fail(exn)}
      var _ft_=underlying(p)[1];
      switch(_ft_[0])
       {case 1:var exn=_ft_[1];return caml_call1(async_exception_hook[1],exn);
        case 2:
         var
          p_callbacks=_ft_[1],
          callback=
           function(result)
            {if(1 === result[0])
              {var exn=result[1];
               return caml_call1(async_exception_hook[1],exn)}
             return 0};
         return add_implicitly_removed_callbac(p_callbacks,callback);
        default:return 0}}
    function ignore_result(p)
     {var _fs_=underlying(p)[1];
      switch(_fs_[0])
       {case 1:var exn=_fs_[1];throw exn;
        case 2:
         var
          p_callbacks=_fs_[1],
          callback=
           function(result)
            {if(1 === result[0])
              {var exn=result[1];
               return caml_call1(async_exception_hook[1],exn)}
             return 0};
         return add_implicitly_removed_callbac(p_callbacks,callback);
        default:return 0}}
    function join(ps)
     {var
       p=new_pending([1,ps]),
       number_pending_in_ps=[0,0],
       join_result=[0,_K_];
      function callback(new_result)
       {if(1 === new_result[0] && 1 !== join_result[1][0])
         join_result[1] = new_result;
        number_pending_in_ps[1] = number_pending_in_ps[1] - 1 | 0;
        var _fp_=0 === number_pending_in_ps[1]?1:0;
        if(_fp_)
         {var p$0=underlying(p),_fq_=join_result[1];
          resolve(_L_,0,underlying(p$0),_fq_);
          var _fr_=0}
        else
         var _fr_=_fp_;
        return _fr_}
      var ps$0=ps;
      for(;;)
       {if(ps$0)
         {var ps$1=ps$0[2],p$0=ps$0[1],_fo_=underlying(p$0)[1];
          switch(_fo_[0])
           {case 1:
             if(1 !== join_result[1][0])join_result[1] = _fo_;
             var ps$0=ps$1;
             continue;
            case 2:
             var p_callbacks=_fo_[1];
             number_pending_in_ps[1] = number_pending_in_ps[1] + 1 | 0;
             add_implicitly_removed_callbac(p_callbacks,callback);
             var ps$0=ps$1;
             continue;
            default:var ps$0=ps$1;continue}}
        return 0 === number_pending_in_ps[1]?[0,join_result[1]]:p}}
    function both(p1,p2)
     {var
       v1=[0,0],
       v2=[0,0],
       p1$0=symbol_bind(p1,function(v){v1[1] = [0,v];return return_unit}),
       p2$0=symbol_bind(p2,function(v){v2[1] = [0,v];return return_unit}),
       _fl_=join([0,p1$0,[0,p2$0,0]]);
      return symbol
              (function(param)
                {var _fm_=v1[1],_fn_=v2[1];
                 if(_fm_ && _fn_)
                  {var v2$0=_fn_[1],v1$0=_fm_[1];return [0,v1$0,v2$0]}
                 throw [0,Assert_failure,_M_]},
               _fl_)}
    function all(ps)
     {var vs=runtime.caml_make_vect(caml_call1(Stdlib_list[1],ps),0);
      function _fh_(index,p)
       {return symbol_bind
                (p,
                 function(v)
                  {runtime.caml_check_bound(vs,index)[1 + index] = [0,v];
                   return return_unit})}
      var _fi_=join(caml_call2(Stdlib_list[18],_fh_,ps));
      return symbol
              (function(param)
                {function _fj_(v)
                  {if(v){var v$0=v[1];return v$0}throw [0,Assert_failure,_N_]}
                 var _fk_=caml_call2(Stdlib_array[15],_fj_,vs);
                 return caml_call1(Stdlib_array[11],_fk_)},
               _fi_)}
    function count_resolved_promises_in(ps)
     {function accumulate(total,p)
       {switch(underlying(p)[1][0])
         {case 1:return total + 1 | 0;
          case 2:return total;
          default:return total + 1 | 0}}
      return caml_call3(Stdlib_list[23],accumulate,0,ps)}
    function nth_resolved(ps,n)
     {var ps$0=ps,n$0=n;
      for(;;)
       {if(ps$0)
         {var ps$1=ps$0[2],p=ps$0[1];
          switch(underlying(p)[1][0])
           {case 1:
             if(0 < n$0){var n$2=n$0 - 1 | 0,ps$0=ps$1,n$0=n$2;continue}
             return p;
            case 2:var ps$0=ps$1;continue;
            default:
             if(0 < n$0){var n$1=n$0 - 1 | 0,ps$0=ps$1,n$0=n$1;continue}
             return p}}
        throw [0,Assert_failure,_O_]}}
    function nth_resolved_and_cancel_pendin(ps,n)
     {var ps$0=ps,n$0=n;
      for(;;)
       {if(ps$0)
         {var ps$1=ps$0[2],p=ps$0[1];
          switch(underlying(p)[1][0])
           {case 1:
             if(0 < n$0){var n$2=n$0 - 1 | 0,ps$0=ps$1,n$0=n$2;continue}
             caml_call2(Stdlib_list[15],cancel,ps$1);
             return p;
            case 2:cancel(p);var ps$0=ps$1;continue;
            default:
             if(0 < n$0){var n$1=n$0 - 1 | 0,ps$0=ps$1,n$0=n$1;continue}
             caml_call2(Stdlib_list[15],cancel,ps$1);
             return p}}
        throw [0,Assert_failure,_P_]}}
    var
     prng=
      [246,function(_fg_){return caml_call1(Stdlib_random[11][1],[0])}];
    function choose(ps)
     {if(0 === ps)caml_call1(Stdlib[1],cst_Lwt_choose_would_return_a_);
      var n=count_resolved_promises_in(ps);
      if(0 === n)
       {var
         p=new_pending([1,ps]),
         callback=
          function(result)
           {var p$0=underlying(p);resolve(_Q_,0,p$0,result);return 0};
        add_explicitly_removable_callb$0(ps,callback);
        return p}
      if(1 === n)return nth_resolved(ps,0);
      var
       _fe_=caml_obj_tag(prng),
       _ff_=
        250 === _fe_
         ?prng[1]
         :246 === _fe_?caml_call1(CamlinternalLazy[2],prng):prng;
      return nth_resolved(ps,caml_call2(Stdlib_random[11][5],_ff_,n))}
    function pick(ps)
     {if(0 === ps)caml_call1(Stdlib[1],cst_Lwt_pick_would_return_a_pr);
      var n=count_resolved_promises_in(ps);
      if(0 === n)
       {var
         p=new_pending([1,ps]),
         callback=
          function(result)
           {caml_call2(Stdlib_list[15],cancel,ps);
            var p$0=underlying(p);
            resolve(_R_,0,p$0,result);
            return 0};
        add_explicitly_removable_callb$0(ps,callback);
        return p}
      if(1 === n)return nth_resolved_and_cancel_pendin(ps,0);
      var
       _fc_=caml_obj_tag(prng),
       _fd_=
        250 === _fc_
         ?prng[1]
         :246 === _fc_?caml_call1(CamlinternalLazy[2],prng):prng;
      return nth_resolved_and_cancel_pendin
              (ps,caml_call2(Stdlib_random[11][5],_fd_,n))}
    function collect_fulfilled_promises_aft(results,ps)
     {var results$0=results,ps$0=ps;
      for(;;)
       {if(ps$0)
         {var ps$1=ps$0[2],p=ps$0[1],_fb_=underlying(p)[1];
          switch(_fb_[0])
           {case 1:return _fb_;
            case 2:var ps$0=ps$1;continue;
            default:
             var
              v=_fb_[1],
              results$1=[0,v,results$0],
              results$0=results$1,
              ps$0=ps$1;
             continue}}
        return [0,caml_call1(Stdlib_list[9],results$0)]}}
    function nchoose(ps)
     {if(0 === ps)caml_call1(Stdlib[1],cst_Lwt_nchoose_would_return_a);
      var ps$2=ps;
      for(;;)
       {if(ps$2)
         {var ps$3=ps$2[2],p$0=ps$2[1],_fa_=underlying(p$0)[1];
          switch(_fa_[0])
           {case 1:return [0,_fa_];
            case 2:var ps$2=ps$3;continue;
            default:
             var v$0=_fa_[1],acc$1=[0,v$0,0],acc=acc$1,ps$0=ps$3;
             for(;;)
              {if(ps$0)
                {var ps$1=ps$0[2],p=ps$0[1],_e$_=underlying(p)[1];
                 switch(_e$_[0])
                  {case 1:return [0,_e$_];
                   case 2:var ps$0=ps$1;continue;
                   default:
                    var v=_e$_[1],acc$0=[0,v,acc],acc=acc$0,ps$0=ps$1;continue}}
               return lift(caml_call1(Stdlib_list[9],acc))}}}
        var
         p$1=new_pending([1,ps]),
         callback=
          function(result)
           {var
             p=underlying(p$1),
             result$0=collect_fulfilled_promises_aft(0,ps);
            resolve(_S_,0,p,result$0);
            return 0};
        add_explicitly_removable_callb$0(ps,callback);
        return p$1}}
    function npick(ps)
     {if(0 === ps)caml_call1(Stdlib[1],cst_Lwt_npick_would_return_a_p);
      var ps$2=ps;
      for(;;)
       {if(ps$2)
         {var ps$3=ps$2[2],p$0=ps$2[1],_e__=underlying(p$0)[1];
          switch(_e__[0])
           {case 1:caml_call2(Stdlib_list[15],cancel,ps);return [0,_e__];
            case 2:var ps$2=ps$3;continue;
            default:
             var v$0=_e__[1],acc$1=[0,v$0,0],acc=acc$1,ps$0=ps$3;
             for(;;)
              {if(ps$0)
                {var ps$1=ps$0[2],p=ps$0[1],_e9_=underlying(p)[1];
                 switch(_e9_[0])
                  {case 1:
                    caml_call2(Stdlib_list[15],cancel,ps);return [0,_e9_];
                   case 2:var ps$0=ps$1;continue;
                   default:
                    var v=_e9_[1],acc$0=[0,v,acc],acc=acc$0,ps$0=ps$1;continue}}
               caml_call2(Stdlib_list[15],cancel,ps);
               return lift(caml_call1(Stdlib_list[9],acc))}}}
        var
         p$1=new_pending([1,ps]),
         callback=
          function(result)
           {var
             p=underlying(p$1),
             result$0=collect_fulfilled_promises_aft(0,ps);
            caml_call2(Stdlib_list[15],cancel,ps);
            resolve(_T_,0,p,result$0);
            return 0};
        add_explicitly_removable_callb$0(ps,callback);
        return p$1}}
    function nchoose_split(ps)
     {if(0 === ps)caml_call1(Stdlib[1],cst_Lwt_nchoose_split_would_re);
      var pending_acc=0,ps$2=ps;
      for(;;)
       {if(ps$2)
         {var ps$3=ps$2[2],p$0=ps$2[1],_e6_=underlying(p$0)[1];
          switch(_e6_[0])
           {case 1:return [0,_e6_];
            case 2:
             var
              pending_acc$0=[0,p$0,pending_acc],
              pending_acc=pending_acc$0,
              ps$2=ps$3;
             continue;
            default:
             var
              v$0=_e6_[1],
              results$1=[0,v$0,0],
              results=results$1,
              pending=pending_acc,
              ps$0=ps$3;
             for(;;)
              {if(ps$0)
                {var ps$1=ps$0[2],p=ps$0[1],_e5_=underlying(p)[1];
                 switch(_e5_[0])
                  {case 1:return [0,_e5_];
                   case 2:
                    var pending$0=[0,p,pending],pending=pending$0,ps$0=ps$1;
                    continue;
                   default:
                    var
                     v=_e5_[1],
                     results$0=[0,v,results],
                     results=results$0,
                     ps$0=ps$1;
                    continue}}
               return lift([0,caml_call1(Stdlib_list[9],results),pending])}}}
        var
         p$1=new_pending([1,ps]),
         callback=
          function(result)
           {var to_resolve=underlying(p$1),fulfilled=0,pending=0,ps$0=ps;
            for(;;)
             {if(ps$0)
               {var ps$1=ps$0[2],p=ps$0[1],_e7_=underlying(p)[1];
                switch(_e7_[0])
                 {case 1:resolve(_U_,0,to_resolve,_e7_);break;
                  case 2:
                   var pending$0=[0,p,pending],pending=pending$0,ps$0=ps$1;
                   continue;
                  default:
                   var
                    v=_e7_[1],
                    fulfilled$0=[0,v,fulfilled],
                    fulfilled=fulfilled$0,
                    ps$0=ps$1;
                   continue}}
              else
               {var _e8_=caml_call1(Stdlib_list[9],pending);
                resolve
                 (_V_,
                  0,
                  to_resolve,
                  [0,[0,caml_call1(Stdlib_list[9],fulfilled),_e8_]])}
              return 0}};
        add_explicitly_removable_callb$0(ps,callback);
        return p$1}}
    function state(p)
     {var _e4_=underlying(p)[1];
      switch(_e4_[0])
       {case 1:var exn=_e4_[1];return [1,exn];
        case 2:return 0;
        default:var v=_e4_[1];return [0,v]}}
    function debug_state_is(expected_state,p)
     {return lift(runtime.caml_equal(state(p),expected_state))}
    function is_sleeping(p)
     {switch(underlying(p)[1][0])
       {case 1:return 0;case 2:return 1;default:return 0}}
    function poll(p)
     {var _e3_=underlying(p)[1];
      switch(_e3_[0])
       {case 1:var e=_e3_[1];throw e;
        case 2:return 0;
        default:var v=_e3_[1];return [0,v]}}
    function apply(f,x)
     {try
       {var _e2_=caml_call1(f,x);return _e2_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap(f)
     {try
       {var _e1_=lift(caml_call1(f,0));return _e1_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap1(f,x1)
     {try
       {var _e0_=lift(caml_call1(f,x1));return _e0_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap2(f,x1,x2)
     {try
       {var _eZ_=lift(caml_call2(f,x1,x2));return _eZ_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap3(f,x1,x2,x3)
     {try
       {var _eY_=lift(caml_call3(f,x1,x2,x3));return _eY_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap4(f,x1,x2,x3,x4)
     {try
       {var _eX_=lift(caml_call4(f,x1,x2,x3,x4));return _eX_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap5(f,x1,x2,x3,x4,x5)
     {try
       {var _eW_=lift(caml_call5(f,x1,x2,x3,x4,x5));return _eW_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap6(f,x1,x2,x3,x4,x5,x6)
     {try
       {var _eV_=lift(caml_call6(f,x1,x2,x3,x4,x5,x6));return _eV_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap7(f,x1,x2,x3,x4,x5,x6,x7)
     {try
       {var _eU_=lift(caml_call7(f,x1,x2,x3,x4,x5,x6,x7));return _eU_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    var pause_hook=[0,function(_eT_){return 0}],paused=create(0),_W_=[0,0];
    function pause(param)
     {var p=add_task_r(paused);
      _W_[1]++;
      caml_call1(pause_hook[1],_W_[1]);
      return p}
    function wakeup_paused(param)
     {if(is_empty(paused)){_W_[1] = 0;return 0}
      var tmp=create(0);
      transfer_r(paused,tmp);
      _W_[1] = 0;
      return iter_l(function(r){return wakeup(r,0)},tmp)}
    function register_pause_notifier(f){pause_hook[1] = f;return 0}
    function paused_count(param){return _W_[1]}
    function symbol$0(f,p){return symbol_bind(p,f)}
    function symbol$1(p,f){return symbol(f,p)}
    function symbol$2(p$0,p){return join([0,p$0,[0,p,0]])}
    function symbol$3(p$0,p){return choose([0,p$0,[0,p,0]])}
    function map(t,f){return symbol(f,t)}
    function bind(t,f){return symbol_bind(t,f)}
    var Open_on_rhs=[0],Let_syntax=[0,lift,map,bind,both,Open_on_rhs];
    function let$0(x,f){return symbol(f,x)}
    var Syntax=[0,symbol_bind,both,let$0,both];
    function make_value(v){return [0,v]}
    function make_error(exn){return [1,exn]}
    var
     _X_=[0,symbol_bind,symbol$1,symbol$2,symbol$3,symbol$0,symbol,Let_syntax],
     Lwt=
      [0,
       wait,
       wakeup_later,
       wakeup_later_exn,
       lift,
       fail,
       symbol_bind,
       catch$0,
       finalize,
       try_bind,
       async,
       async_exception_hook,
       both,
       join,
       all,
       pick,
       choose,
       npick,
       nchoose,
       nchoose_split,
       Canceled,
       task,
       cancel,
       on_cancel,
       protected$0,
       no_cancel,
       symbol,
       on_success,
       on_failure,
       on_termination,
       on_any,
       _X_,
       Syntax,
       return_unit,
       return_none,
       acc,
       return_true,
       return_false,
       of_result,
       wakeup_later_result,
       state,
       new_key,
       get$0,
       with_value,
       wakeup,
       wakeup_exn,
       wakeup_result,
       make_value,
       make_error,
       waiter_of_wakener,
       add_task_r,
       add_task_l,
       pause,
       wakeup_paused,
       paused_count,
       register_pause_notifier,
       wrap,
       wrap1,
       wrap2,
       wrap3,
       wrap4,
       wrap5,
       wrap6,
       wrap7,
       return_some,
       return_ok,
       return_error,
       fail_with,
       fail_invalid_arg,
       symbol_bind,
       symbol$1,
       symbol$3,
       symbol$2,
       symbol$0,
       symbol,
       is_sleeping,
       ignore_result,
       poll,
       apply,
       backtrace_bind,
       backtrace_catch,
       backtrace_finalize,
       backtrace_try_bind,
       abandon_wakeups,
       debug_state_is];
    caml_register_global(96,Lwt,"Lwt");
    var Off=[248,cst_Lwt_switch_Off,caml_fresh_oo_id(0)];
    function create$0(param){return [0,[0,[0,0]]]}
    function is_on(switch$0){return switch$0[1]?1:0}
    function check(param){if(param && ! param[1][1])throw Off;return 0}
    function add_hook(switch$0,hook)
     {if(switch$0)
       {var _eS_=switch$0[1][1];
        if(_eS_){var os=_eS_[1];os[1] = [0,hook,os[1]];return 0}
        throw Off}
      return 0}
    function add_hook_or_exec(switch$0,hook)
     {if(switch$0)
       {var _eR_=switch$0[1][1];
        if(_eR_){var os=_eR_[1];os[1] = [0,hook,os[1]];return return_unit}
        return caml_call1(hook,0)}
      return return_unit}
    function turn_off(switch$0)
     {var _eP_=switch$0[1];
      if(_eP_)
       {var match=_eP_[1],hooks=match[1];
        switch$0[1] = 0;
        var _eQ_=function(hook){return apply(hook,0)};
        return join(caml_call2(Stdlib_list[17],_eQ_,hooks))}
      return return_unit}
    function with_switch(fn)
     {var switch$0=create$0(0);
      function _eO_(param){return turn_off(switch$0)}
      return finalize(function(param){return caml_call1(fn,switch$0)},_eO_)}
    var
     Lwt_switch=
      [0,
       create$0,
       with_switch,
       is_on,
       turn_off,
       Off,
       check,
       add_hook,
       add_hook_or_exec];
    caml_register_global(97,Lwt_switch,"Lwt_switch");
    var
     Closed=[248,cst_Lwt_stream_Closed,caml_fresh_oo_id(0)],
     Full=[248,cst_Lwt_stream_Full,caml_fresh_oo_id(0)],
     Empty$0=[248,cst_Lwt_stream_Empty,caml_fresh_oo_id(0)];
    function new_node(param)
     {var node=[];caml_update_dummy(node,[0,node,0]);return node}
    function clone(s)
     {if(3 === s[1][0])caml_call1(Stdlib[1],cst_Lwt_stream_clone);
      return [0,s[1],s[2],s[3],s[4]]}
    function from_source(source)
     {var last=new_node(0),match=wait(0),close=match[2];
      return [0,source,close,last,[0,last]]}
    function from(f){return from_source([0,[0,f,return_unit]])}
    function from_direct(f){return from_source([1,f])}
    function closed(s){return s[2]}
    function is_closed(s){return 1 - is_sleeping(s[2])}
    function on_terminate(s,f)
     {return async(function(param){return caml_call2(_X_[2],s[2],f)})}
    function enqueue(e,last)
     {var _eN_=last[1],new_last=new_node(0);
      _eN_[2] = e;
      _eN_[1] = new_last;
      last[1] = new_last;
      return 0}
    function enqueue$0(e,s){return enqueue(e,s[4])}
    function create_with_reference(param)
     {var
       match=wait(0),
       push_signal_resolver=match[2],
       push_signal=match[1],
       push_signal_resolver$0=[0,push_signal_resolver],
       source=[0,push_signal,0,0],
       t=from_source([2,source]),
       close=t[2],
       last=t[4];
      function push(x)
       {if(1 - is_sleeping(close))throw Closed;
        enqueue(x,last);
        if(source[2])
         {source[2] = 0;
          var
           old_push_signal_resolver=push_signal_resolver$0[1],
           match=wait(0),
           new_push_signal_resolver=match[2],
           new_waiter=match[1];
          source[1] = new_waiter;
          push_signal_resolver$0[1] = new_push_signal_resolver;
          wakeup_later(old_push_signal_resolver,0)}
        var _eM_=0 === x?1:0;
        return _eM_?wakeup(close,0):_eM_}
      return [0,t,push,function(x){source[3] = x;return 0}]}
    function of_seq(s)
     {var s$0=[0,s];
      function get(param)
       {var match=caml_call1(s$0[1],0);
        if(match){var s=match[2],elt=match[1];s$0[1] = s;return [0,elt]}
        return 0}
      return from_direct(get)}
    function create$1(param)
     {var match=create_with_reference(0),push=match[2],source=match[1];
      return [0,source,push]}
    function of_iter(iter,i)
     {var match=create$1(0),push=match[2],stream=match[1];
      caml_call2(iter,function(x){return caml_call1(push,[0,x])},i);
      caml_call1(push,0);
      return stream}
    function of_list(l){return of_iter(Stdlib_list[15],l)}
    function of_array(a){return of_iter(Stdlib_array[13],a)}
    function of_string(s){return of_iter(Stdlib_string[8],s)}
    function notify_pusher(info,last)
     {enqueue(info[5],last);
      info[5] = 0;
      var old_wakener=info[7],match=task(0),wakener=match[2],waiter=match[1];
      info[6] = waiter;
      info[7] = wakener;
      return wakeup_later(old_wakener,0)}
    function ___(_ed_)
     {var
       _ee_=caml_call2(CamlinternalOO[3],_ed_,cst),
       _ef_=caml_call2(CamlinternalOO[3],_ed_,cst$0),
       _eg_=caml_call2(CamlinternalOO[3],_ed_,cst$1),
       _eh_=caml_call2(CamlinternalOO[3],_ed_,cst$2),
       _ei_=caml_call3(CamlinternalOO[4],_ed_,_Z_,_Y_),
       _er_=_ei_[10],
       _ej_=_ei_[1],
       _ek_=_ei_[2],
       _el_=_ei_[3],
       _em_=_ei_[4],
       _en_=_ei_[5],
       _eo_=_ei_[6],
       _ep_=_ei_[7],
       _eq_=_ei_[8];
      function _es_(self_1,x){self_1[1 + _ee_][8] = x;return 0}
      function _et_(self_1){return self_1[1 + _er_]}
      function _eu_(self_1){return 0 !== self_1[1 + _ee_][5]?1:0}
      function _ev_(self_1){return self_1[1 + _ee_][4]}
      function _ew_(self_1)
       {var _eK_=1 - self_1[1 + _er_];
        if(_eK_)
         {self_1[1 + _er_] = 1;
          var _eL_=self_1[1 + _eg_][1],new_last=new_node(0);
          _eL_[2] = 0;
          _eL_[1] = new_last;
          self_1[1 + _eg_][1] = new_last;
          if(0 !== self_1[1 + _ee_][5])
           {self_1[1 + _ee_][5] = 0;
            wakeup_later_exn(self_1[1 + _ee_][7],Closed)}
          if(self_1[1 + _ee_][2])
           {self_1[1 + _ee_][2] = 0;
            var old_wakener=self_1[1 + _ef_][1];
            wakeup_later(old_wakener,0)}
          return wakeup(self_1[1 + _eh_],0)}
        return _eK_}
      function _ex_(self_1,x)
       {if(self_1[1 + _er_])return fail(Closed);
        if(0 === self_1[1 + _ee_][5])
         {if(self_1[1 + _ee_][3] <= self_1[1 + _ee_][4])
           {self_1[1 + _ee_][5] = [0,x];
            var
             _eJ_=
              function(exn)
               {if(exn === Canceled)
                 {self_1[1 + _ee_][5] = 0;
                  var match=task(0),wakener=match[2],waiter=match[1];
                  self_1[1 + _ee_][6] = waiter;
                  self_1[1 + _ee_][7] = wakener;
                  return fail(exn)}
                return fail(exn)};
            return catch$0(function(param){return self_1[1 + _ee_][6]},_eJ_)}
          enqueue([0,x],self_1[1 + _eg_]);
          self_1[1 + _ee_][4] = self_1[1 + _ee_][4] + 1 | 0;
          if(self_1[1 + _ee_][2])
           {self_1[1 + _ee_][2] = 0;
            var
             old_wakener=self_1[1 + _ef_][1],
             match=wait(0),
             new_wakener=match[2],
             new_waiter=match[1];
            self_1[1 + _ee_][1] = new_waiter;
            self_1[1 + _ef_][1] = new_wakener;
            wakeup_later(old_wakener,0)}
          return return_unit}
        return fail(Full)}
      function _ey_(self_1,size)
       {if(size < 0)caml_call1(Stdlib[1],cst_Lwt_stream_bounded_push_re);
        self_1[1 + _ee_][3] = size;
        var
         _eH_=self_1[1 + _ee_][4] < self_1[1 + _ee_][3]?1:0,
         _eI_=_eH_?0 !== self_1[1 + _ee_][5]?1:0:_eH_;
        return _eI_
                ?(self_1[1 + _ee_][4]
                  =
                  self_1[1 + _ee_][4]
                  +
                  1
                  |
                  0,
                  notify_pusher(self_1[1 + _ee_],self_1[1 + _eg_]))
                :_eI_}
      var
       _ez_=
        [0,
         _ej_,
         function(self_1){return self_1[1 + _ee_][3]},
         _el_,
         _ey_,
         _em_,
         _ex_,
         _ep_,
         _ew_,
         _en_,
         _ev_,
         _eq_,
         _eu_,
         _eo_,
         _et_,
         _ek_,
         _es_];
      caml_call2(CamlinternalOO[11],_ed_,_ez_);
      return function(_eF_,_eE_,_eD_,_eC_,_eB_,_eA_)
       {var _eG_=caml_call2(CamlinternalOO[24],_eE_,_ed_);
        _eG_[1 + _eh_] = _eA_;
        _eG_[1 + _eg_] = _eB_;
        _eG_[1 + _ef_] = _eC_;
        _eG_[1 + _ee_] = _eD_;
        _eG_[1 + _er_] = 0;
        return _eG_}}
    var bounded_push_impl=caml_call2(CamlinternalOO[19],shared,___);
    function create_bounded(size)
     {if(size < 0)caml_call1(Stdlib[1],cst_Lwt_stream_create_bounded);
      var
       match=wait(0),
       wakener=match[2],
       waiter=match[1],
       match$0=task(0),
       push_wakener=match$0[2],
       push_waiter=match$0[1],
       wakener_cell=[0,wakener],
       info=[0,waiter,0,size,0,0,push_waiter,push_wakener,0],
       t=from_source([3,info]);
      return [0,
              t,
              caml_call5(bounded_push_impl[1],0,info,wakener_cell,t[4],t[2])]}
    function feed(s)
     {var _ea_=s[1];
      switch(_ea_[0])
       {case 0:
         var from=_ea_[1];
         if(is_sleeping(from[2]))return protected$0(from[2]);
         var
          _eb_=
           function(x)
            {enqueue$0(x,s);if(0 === x)wakeup(s[2],0);return return_unit},
          _ec_=caml_call1(from[1],0),
          thread=caml_call2(_X_[1],_ec_,_eb_);
         from[2] = thread;
         return protected$0(thread);
        case 1:
         var f=_ea_[1],x=caml_call1(f,0);
         enqueue$0(x,s);
         if(0 === x)wakeup(s[2],0);
         return return_unit;
        case 2:var push=_ea_[1];push[2] = 1;return protected$0(push[1]);
        default:var push$0=_ea_[1];push$0[2] = 1;return protected$0(push$0[1])}}
    function consume(s,node)
     {var _d__=node === s[3]?1:0;
      if(_d__)
       {s[3] = node[1];
        var _d$_=s[1];
        if(3 === _d$_[0])
         {var info=_d$_[1];
          return 0 === info[5]
                  ?(info[4] = info[4] - 1 | 0,0)
                  :notify_pusher(info,s[4])}
        return 0}
      return _d__}
    function peek_rec(s,node)
     {if(node === s[4][1])
       {var _d8_=function(param){return peek_rec(s,node)},_d9_=feed(s);
        return caml_call2(_X_[1],_d9_,_d8_)}
      return lift(node[2])}
    function peek(s){return peek_rec(s,s[3])}
    function npeek_rec(node,acc,n,s)
     {var node$0=node,acc$0=acc,n$0=n;
      for(;;)
       {if(0 < n$0)
         {if(node$0 === s[4][1])
           {var
             _d5_=function(param){return npeek_rec(node$0,acc$0,n$0,s)},
             _d6_=feed(s);
            return caml_call2(_X_[1],_d6_,_d5_)}
          var _d7_=node$0[2];
          if(_d7_)
           {var
             x=_d7_[1],
             n$1=n$0 - 1 | 0,
             acc$1=[0,x,acc$0],
             node$1=node$0[1],
             node$0=node$1,
             acc$0=acc$1,
             n$0=n$1;
            continue}
          return lift(caml_call1(Stdlib_list[9],acc$0))}
        return lift(caml_call1(Stdlib_list[9],acc$0))}}
    function npeek(n,s){return npeek_rec(s[3],0,n,s)}
    function get_rec(s,node)
     {if(node === s[4][1])
       {var _d3_=function(param){return get_rec(s,node)},_d4_=feed(s);
        return caml_call2(_X_[1],_d4_,_d3_)}
      if(0 !== node[2])consume(s,node);
      return lift(node[2])}
    function get$1(s){return get_rec(s,s[3])}
    function get_exn_rec(s,node)
     {if(node === s[4][1])
       {var
         _d0_=function(exn){return lift([0,[1,exn]])},
         _d1_=function(param){return get_exn_rec(s,node)};
        return try_bind(function(param){return feed(s)},_d1_,_d0_)}
      var _d2_=node[2];
      if(_d2_){var value=_d2_[1];consume(s,node);return lift([0,[0,value]])}
      return return_none}
    function map_exn(s)
     {return from(function(param){return get_exn_rec(s,s[3])})}
    function get_exn_rec$0(s,node)
     {if(node === s[4][1])
       {var
         _dX_=function(exn){return lift([0,[1,exn]])},
         _dY_=function(param){return get_exn_rec$0(s,node)};
        return try_bind(function(param){return feed(s)},_dY_,_dX_)}
      var _dZ_=node[2];
      if(_dZ_){var value=_dZ_[1];consume(s,node);return lift([0,[0,value]])}
      return return_none}
    function wrap_exn(s)
     {return from(function(param){return get_exn_rec$0(s,s[3])})}
    function nget_rec(node,acc,n,s)
     {var node$0=node,acc$0=acc,n$0=n;
      for(;;)
       {if(0 < n$0)
         {if(node$0 === s[4][1])
           {var
             _dU_=function(param){return nget_rec(node$0,acc$0,n$0,s)},
             _dV_=feed(s);
            return caml_call2(_X_[1],_dV_,_dU_)}
          var _dW_=s[3][2];
          if(_dW_)
           {var x=_dW_[1];
            consume(s,node$0);
            var
             n$1=n$0 - 1 | 0,
             acc$1=[0,x,acc$0],
             node$1=node$0[1],
             node$0=node$1,
             acc$0=acc$1,
             n$0=n$1;
            continue}
          return lift(caml_call1(Stdlib_list[9],acc$0))}
        return lift(caml_call1(Stdlib_list[9],acc$0))}}
    function nget(n,s){return nget_rec(s[3],0,n,s)}
    function get_while_rec(node,acc,f,s)
     {var node$0=node,acc$0=acc;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _dR_=function(param){return get_while_rec(node$0,acc$0,f,s)},
           _dS_=feed(s);
          return caml_call2(_X_[1],_dS_,_dR_)}
        var _dT_=node$0[2];
        if(_dT_)
         {var x=_dT_[1],test=caml_call1(f,x);
          if(test)
           {consume(s,node$0);
            var acc$1=[0,x,acc$0],node$1=node$0[1],node$0=node$1,acc$0=acc$1;
            continue}
          return lift(caml_call1(Stdlib_list[9],acc$0))}
        return lift(caml_call1(Stdlib_list[9],acc$0))}}
    function get_while(f,s){return get_while_rec(s[3],0,f,s)}
    function get_while_s_rec(node,acc,f,s)
     {if(node === s[4][1])
       {var
         _dM_=function(param){return get_while_s_rec(node,acc,f,s)},
         _dN_=feed(s);
        return caml_call2(_X_[1],_dN_,_dM_)}
      var _dO_=node[2];
      if(_dO_)
       {var
         x=_dO_[1],
         _dP_=
          function(param)
           {return param
                    ?(consume(s,node),get_while_s_rec(node[1],[0,x,acc],f,s))
                    :lift(caml_call1(Stdlib_list[9],acc))},
         _dQ_=caml_call1(f,x);
        return caml_call2(_X_[1],_dQ_,_dP_)}
      return lift(caml_call1(Stdlib_list[9],acc))}
    function get_while_s(f,s){return get_while_s_rec(s[3],0,f,s)}
    function next_rec(s,node)
     {if(node === s[4][1])
       {var _dJ_=function(param){return next_rec(s,node)},_dK_=feed(s);
        return caml_call2(_X_[1],_dK_,_dJ_)}
      var _dL_=node[2];
      if(_dL_){var x=_dL_[1];consume(s,node);return lift(x)}
      return fail(Empty$0)}
    function next(s){return next_rec(s,s[3])}
    function last_new_rec(node,x,s)
     {var node$0=node,x$0=x;
      for(;;)
       {if(node$0 === s[4][1])
         {var thread=feed(s),match=state(thread);
          if(typeof match === "number")
           return lift(x$0);
          else
           {if(0 === match[0])continue;var exn=match[1];return fail(exn)}}
        var _dI_=node$0[2];
        if(_dI_)
         {var x$1=_dI_[1];
          consume(s,node$0);
          var node$1=node$0[1],node$0=node$1,x$0=x$1;
          continue}
        return lift(x$0)}}
    function last_new(s)
     {var node=s[3];
      if(node === s[4][1])
       {var thread=next(s),match=state(thread);
        if(typeof match !== "number" && 0 === match[0])
         {var x=match[1];return last_new_rec(node,x,s)}
        return thread}
      var _dH_=node[2];
      if(_dH_)
       {var x$0=_dH_[1];consume(s,node);return last_new_rec(node[1],x$0,s)}
      return fail(Empty$0)}
    function to_list_rec(node,acc,s)
     {var node$0=node,acc$0=acc;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _dE_=function(param){return to_list_rec(node$0,acc$0,s)},
           _dF_=feed(s);
          return caml_call2(_X_[1],_dF_,_dE_)}
        var _dG_=node$0[2];
        if(_dG_)
         {var x=_dG_[1];
          consume(s,node$0);
          var acc$1=[0,x,acc$0],node$1=node$0[1],node$0=node$1,acc$0=acc$1;
          continue}
        return lift(caml_call1(Stdlib_list[9],acc$0))}}
    function to_list(s){return to_list_rec(s[3],0,s)}
    function to_string_rec(node,buf,s)
     {var node$0=node;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _dB_=function(param){return to_string_rec(node$0,buf,s)},
           _dC_=feed(s);
          return caml_call2(_X_[1],_dC_,_dB_)}
        var _dD_=node$0[2];
        if(_dD_)
         {var x=_dD_[1];
          consume(s,node$0);
          caml_call2(Stdlib_buffer[10],buf,x);
          var node$1=node$0[1],node$0=node$1;
          continue}
        return lift(caml_call1(Stdlib_buffer[2],buf))}}
    function to_string(s)
     {var _dA_=caml_call1(Stdlib_buffer[1],128);
      return to_string_rec(s[3],_dA_,s)}
    function junk(s)
     {var node=s[3];
      if(node === s[4][1])
       {var
         _dy_=
          function(param){if(0 !== node[2])consume(s,node);return return_unit},
         _dz_=feed(s);
        return caml_call2(_X_[1],_dz_,_dy_)}
      if(0 !== node[2])consume(s,node);
      return return_unit}
    function njunk_rec(node,n,s)
     {var node$0=node,n$0=n;
      for(;;)
       {if(0 < n$0)
         {if(node$0 === s[4][1])
           {var
             _dw_=function(param){return njunk_rec(node$0,n$0,s)},
             _dx_=feed(s);
            return caml_call2(_X_[1],_dx_,_dw_)}
          if(node$0[2])
           {consume(s,node$0);
            var n$1=n$0 - 1 | 0,node$1=node$0[1],node$0=node$1,n$0=n$1;
            continue}
          return return_unit}
        return return_unit}}
    function njunk(n,s){return njunk_rec(s[3],n,s)}
    function junk_while_rec(node,f,s)
     {var node$0=node;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _dt_=function(param){return junk_while_rec(node$0,f,s)},
           _du_=feed(s);
          return caml_call2(_X_[1],_du_,_dt_)}
        var _dv_=node$0[2];
        if(_dv_)
         {var x=_dv_[1],test=caml_call1(f,x);
          if(test)
           {consume(s,node$0);var node$1=node$0[1],node$0=node$1;continue}
          return return_unit}
        return return_unit}}
    function junk_while(f,s){return junk_while_rec(s[3],f,s)}
    function junk_while_s_rec(node,f,s)
     {if(node === s[4][1])
       {var
         _do_=function(param){return junk_while_s_rec(node,f,s)},
         _dp_=feed(s);
        return caml_call2(_X_[1],_dp_,_do_)}
      var _dq_=node[2];
      if(_dq_)
       {var
         x=_dq_[1],
         _dr_=
          function(param)
           {return param
                    ?(consume(s,node),junk_while_s_rec(node[1],f,s))
                    :return_unit},
         _ds_=caml_call1(f,x);
        return caml_call2(_X_[1],_ds_,_dr_)}
      return return_unit}
    function junk_while_s(f,s){return junk_while_s_rec(s[3],f,s)}
    function junk_old(s)
     {var node=s[3];
      for(;;)
       {if(node === s[4][1])
         {var thread=feed(s),match=state(thread);
          if(typeof match === "number")
           return return_unit;
          else
           {if(0 === match[0])continue;var exn=match[1];return fail(exn)}}
        if(node[2]){consume(s,node);var node$0=node[1],node=node$0;continue}
        return return_unit}}
    function get_available(s)
     {var node=s[3],acc=0;
      for(;;)
       {if(node === s[4][1])
         {var thread=feed(s),match=state(thread);
          if(typeof match === "number")
           return caml_call1(Stdlib_list[9],acc);
          else
           {if(0 === match[0])continue;var exn=match[1];throw exn}}
        var _dn_=node[2];
        if(_dn_)
         {var x=_dn_[1];
          consume(s,node);
          var acc$0=[0,x,acc],node$0=node[1],node=node$0,acc=acc$0;
          continue}
        return caml_call1(Stdlib_list[9],acc)}}
    function get_available_up_to(n$1,s)
     {var node=s[3],acc=0,n=n$1;
      for(;;)
       {if(0 < n)
         {if(node === s[4][1])
           {var thread=feed(s),match=state(thread);
            if(typeof match === "number")
             return caml_call1(Stdlib_list[9],acc);
            else
             {if(0 === match[0])continue;var exn=match[1];throw exn}}
          var _dm_=s[3][2];
          if(_dm_)
           {var x=_dm_[1];
            consume(s,node);
            var
             n$0=n - 1 | 0,
             acc$0=[0,x,acc],
             node$0=node[1],
             node=node$0,
             acc=acc$0,
             n=n$0;
            continue}
          return caml_call1(Stdlib_list[9],acc)}
        return caml_call1(Stdlib_list[9],acc)}}
    function is_empty$0(s)
     {if(s[3] === s[4][1])
       {var _dk_=function(param){return is_empty$0(s)},_dl_=feed(s);
        return caml_call2(_X_[1],_dl_,_dk_)}
      return lift(0 === s[3][2]?1:0)}
    function map$0(f,s)
     {return from
              (function(param)
                {function _di_(param)
                  {if(param)
                    {var x=param[1],x$0=caml_call1(f,x);return [0,x$0]}
                   return 0}
                 var _dj_=get$1(s);
                 return caml_call2(_X_[2],_dj_,_di_)})}
    function map_s(f,s)
     {return from
              (function(param)
                {function _de_(param)
                  {if(param)
                    {var
                      x=param[1],
                      _dg_=function(x){return [0,x]},
                      _dh_=caml_call1(f,x);
                     return caml_call2(_X_[2],_dh_,_dg_)}
                   return return_none}
                 var _df_=get$1(s);
                 return caml_call2(_X_[1],_df_,_de_)})}
    function filter(f,s)
     {function next(param)
       {var t=get$1(s);
        function _dd_(param)
         {if(param){var x=param[1],test=caml_call1(f,x);return test?t:next(0)}
          return return_none}
        return caml_call2(_X_[1],t,_dd_)}
      return from(next)}
    function filter_s(f,s)
     {function next(param)
       {var t=get$1(s);
        function _da_(param)
         {if(param)
           {var
             x=param[1],
             _db_=function(param){return param?t:next(0)},
             _dc_=caml_call1(f,x);
            return caml_call2(_X_[1],_dc_,_db_)}
          return t}
        return caml_call2(_X_[1],t,_da_)}
      return from(next)}
    function filter_map(f,s)
     {function next(param)
       {function _c__(param)
         {if(param)
           {var x=param[1],x$0=caml_call1(f,x);return x$0?lift(x$0):next(0)}
          return return_none}
        var _c$_=get$1(s);
        return caml_call2(_X_[1],_c$_,_c__)}
      return from(next)}
    function filter_map_s(f,s)
     {function next(param)
       {function _c7_(param)
         {if(param)
           {var
             x=param[1],
             t=caml_call1(f,x),
             _c9_=function(param){return param?t:next(0)};
            return caml_call2(_X_[1],t,_c9_)}
          return return_none}
        var _c8_=get$1(s);
        return caml_call2(_X_[1],_c8_,_c7_)}
      return from(next)}
    function map_list(f,s)
     {var pendings=[0,0];
      function next(param)
       {var _c4_=pendings[1];
        if(_c4_){var l=_c4_[2],x=_c4_[1];pendings[1] = l;return lift([0,x])}
        function _c5_(param)
         {if(param)
           {var x=param[1],l=caml_call1(f,x);pendings[1] = l;return next(0)}
          return return_none}
        var _c6_=get$1(s);
        return caml_call2(_X_[1],_c6_,_c5_)}
      return from(next)}
    function map_list_s(f,s)
     {var pendings=[0,0];
      function next(param)
       {var _cZ_=pendings[1];
        if(_cZ_){var l=_cZ_[2],x=_cZ_[1];pendings[1] = l;return lift([0,x])}
        function _c0_(param)
         {if(param)
           {var
             x=param[1],
             _c2_=function(l){pendings[1] = l;return next(0)},
             _c3_=caml_call1(f,x);
            return caml_call2(_X_[1],_c3_,_c2_)}
          return return_none}
        var _c1_=get$1(s);
        return caml_call2(_X_[1],_c1_,_c0_)}
      return from(next)}
    function flatten(s){return map_list(function(l){return l},s)}
    function fold_rec(node,f,s,acc)
     {var node$0=node,acc$0=acc;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _cW_=function(param){return fold_rec(node$0,f,s,acc$0)},
           _cX_=feed(s);
          return caml_call2(_X_[1],_cX_,_cW_)}
        var _cY_=node$0[2];
        if(_cY_)
         {var x=_cY_[1];
          consume(s,node$0);
          var
           acc$1=caml_call2(f,x,acc$0),
           node$1=node$0[1],
           node$0=node$1,
           acc$0=acc$1;
          continue}
        return lift(acc$0)}}
    function fold(f,s,acc){return fold_rec(s[3],f,s,acc)}
    function fold_s_rec(node,f,s,acc)
     {if(node === s[4][1])
       {var
         _cR_=function(param){return fold_s_rec(node,f,s,acc)},
         _cS_=feed(s);
        return caml_call2(_X_[1],_cS_,_cR_)}
      var _cT_=node[2];
      if(_cT_)
       {var x=_cT_[1];
        consume(s,node);
        var
         _cU_=function(acc){return fold_s_rec(node[1],f,s,acc)},
         _cV_=caml_call2(f,x,acc);
        return caml_call2(_X_[1],_cV_,_cU_)}
      return lift(acc)}
    function fold_s(f,s,acc){return fold_s_rec(s[3],f,s,acc)}
    function iter_rec(node,f,s)
     {var node$0=node;
      for(;;)
       {if(node$0 === s[4][1])
         {var _cO_=function(param){return iter_rec(node$0,f,s)},_cP_=feed(s);
          return caml_call2(_X_[1],_cP_,_cO_)}
        var _cQ_=node$0[2];
        if(_cQ_)
         {var x=_cQ_[1];
          consume(s,node$0);
          caml_call1(f,x);
          var node$1=node$0[1],node$0=node$1;
          continue}
        return return_unit}}
    function iter(f,s){return iter_rec(s[3],f,s)}
    function iter_s_rec(node,f,s)
     {if(node === s[4][1])
       {var _cJ_=function(param){return iter_s_rec(node,f,s)},_cK_=feed(s);
        return caml_call2(_X_[1],_cK_,_cJ_)}
      var _cL_=node[2];
      if(_cL_)
       {var x=_cL_[1];
        consume(s,node);
        var
         _cM_=function(param){return iter_s_rec(node[1],f,s)},
         _cN_=caml_call1(f,x);
        return caml_call2(_X_[1],_cN_,_cM_)}
      return return_unit}
    function iter_s(f,s){return iter_s_rec(s[3],f,s)}
    function iter_p_rec(node,f,s)
     {if(node === s[4][1])
       {var _cF_=function(param){return iter_p_rec(node,f,s)},_cG_=feed(s);
        return caml_call2(_X_[1],_cG_,_cF_)}
      var _cH_=node[2];
      if(_cH_)
       {var x=_cH_[1];
        consume(s,node);
        var
         res=caml_call1(f,x),
         rest=iter_p_rec(node[1],f,s),
         _cI_=function(param){return rest};
        return caml_call2(_X_[1],res,_cI_)}
      return return_unit}
    function iter_p(f,s){return iter_p_rec(s[3],f,s)}
    function iter_n(opt,f,stream)
     {if(opt)var sth=opt[1],max_concurrency=sth;else var max_concurrency=1;
      if(max_concurrency <= 0)
       {var message=caml_call2(Stdlib_printf[4],_$_,max_concurrency);
        caml_call1(Stdlib[1],message)}
      function loop(running,available)
       {function _cz_(param)
         {var available=param[2],running=param[1];
          function _cD_(param)
           {if(param)
             {var elt=param[1];
              return loop([0,caml_call1(f,elt),running],available - 1 | 0)}
            return join(running)}
          var _cE_=get$1(stream);
          return caml_call2(_X_[1],_cE_,_cD_)}
        if(0 < available)
         var _cA_=lift([0,running,available]);
        else
         var
          _cB_=
           function(param)
            {var running=param[2],complete=param[1];
             return lift
                     ([0,
                       running,
                       available + caml_call1(Stdlib_list[1],complete) | 0])},
          _cC_=nchoose_split(running),
          _cA_=caml_call2(_X_[1],_cC_,_cB_);
        return caml_call2(_X_[1],_cA_,_cz_)}
      return loop(0,max_concurrency)}
    function find_rec(node,f,s)
     {var node$0=node;
      for(;;)
       {if(node$0 === s[4][1])
         {var _cw_=function(param){return find_rec(node$0,f,s)},_cx_=feed(s);
          return caml_call2(_X_[1],_cx_,_cw_)}
        var _cy_=node$0[2];
        if(_cy_)
         {var x=_cy_[1];
          consume(s,node$0);
          var test=caml_call1(f,x);
          if(test)return lift(_cy_);
          var node$1=node$0[1],node$0=node$1;
          continue}
        return return_none}}
    function find(f,s){return find_rec(s[3],f,s)}
    function find_s_rec(node,f,s)
     {if(node === s[4][1])
       {var _cr_=function(param){return find_s_rec(node,f,s)},_cs_=feed(s);
        return caml_call2(_X_[1],_cs_,_cr_)}
      var _ct_=node[2];
      if(_ct_)
       {var x=_ct_[1];
        consume(s,node);
        var
         _cu_=function(param){return param?lift(_ct_):find_s_rec(node[1],f,s)},
         _cv_=caml_call1(f,x);
        return caml_call2(_X_[1],_cv_,_cu_)}
      return return_none}
    function find_s(f,s){return find_s_rec(s[3],f,s)}
    function find_map_rec(node,f,s)
     {var node$0=node;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _co_=function(param){return find_map_rec(node$0,f,s)},
           _cp_=feed(s);
          return caml_call2(_X_[1],_cp_,_co_)}
        var _cq_=node$0[2];
        if(_cq_)
         {var x=_cq_[1];
          consume(s,node$0);
          var x$0=caml_call1(f,x);
          if(0 === x$0){var node$1=node$0[1],node$0=node$1;continue}
          return lift(x$0)}
        return return_none}}
    function find_map(f,s){return find_map_rec(s[3],f,s)}
    function find_map_s_rec(node,f,s)
     {if(node === s[4][1])
       {var
         _ck_=function(param){return find_map_s_rec(node,f,s)},
         _cl_=feed(s);
        return caml_call2(_X_[1],_cl_,_ck_)}
      var _cm_=node[2];
      if(_cm_)
       {var x=_cm_[1];
        consume(s,node);
        var
         t=caml_call1(f,x),
         _cn_=function(param){return param?t:find_map_s_rec(node[1],f,s)};
        return caml_call2(_X_[1],t,_cn_)}
      return return_none}
    function find_map_s(f,s){return find_map_s_rec(s[3],f,s)}
    function combine(s1,s2)
     {function next(param)
       {var t1=get$1(s1),t2=get$1(s2);
        function _ci_(n1)
         {function _cj_(match)
           {if(n1 && match)
             {var x2=match[1],x1=n1[1];return lift([0,[0,x1,x2]])}
            return return_none}
          return caml_call2(_X_[1],t2,_cj_)}
        return caml_call2(_X_[1],t1,_ci_)}
      return from(next)}
    function append(s1,s2)
     {var current_s=[0,s1];
      function next(param)
       {var t=get$1(current_s[1]);
        function _ch_(param)
         {return param
                  ?t
                  :current_s[1] === s2?return_none:(current_s[1] = s2,next(0))}
        return caml_call2(_X_[1],t,_ch_)}
      return from(next)}
    function concat(s_top)
     {var current_s=[0,from(function(param){return return_none})];
      function next(param)
       {var t=get$1(current_s[1]);
        function _ce_(param)
         {if(param)return t;
          function _cf_(param)
           {if(param){var s=param[1];current_s[1] = s;return next(0)}
            return return_none}
          var _cg_=get$1(s_top);
          return caml_call2(_X_[1],_cg_,_cf_)}
        return caml_call2(_X_[1],t,_ce_)}
      return from(next)}
    function choose$0(streams)
     {function source(s)
       {function _cc_(x){return [0,s,x]}
        var _cd_=get$1(s);
        return [0,s,caml_call2(_X_[2],_cd_,_cc_)]}
      var streams$0=[0,caml_call2(Stdlib_list[17],source,streams)];
      function next(param)
       {var _b9_=streams$0[1];
        if(_b9_)
         {var
           _b__=
            function(param)
             {var x=param[2],s=param[1],l=caml_call2(Stdlib_list[50],s,_b9_);
              return x
                      ?(streams$0[1] = [0,source(s),l],lift(x))
                      :(streams$0[1] = l,next(0))},
           _b$_=function(_cb_){return _cb_[2]},
           _ca_=choose(caml_call2(Stdlib_list[17],_b$_,_b9_));
          return caml_call2(_X_[1],_ca_,_b__)}
        return return_none}
      return from(next)}
    function parse(s,f)
     {if(3 === s[1][0])caml_call1(Stdlib[1],cst_Lwt_stream_parse);
      var node=s[3];
      function _b8_(exn){s[3] = node;return fail(exn)}
      return catch$0(function(param){return caml_call1(f,s)},_b8_)}
    function hexdump(stream)
     {var buf=caml_call1(Stdlib_buffer[1],80),num=[0,0];
      return from
              (function(param)
                {function _b4_(l)
                  {if(l)
                    {caml_call1(Stdlib_buffer[8],buf);
                     caml_call3(Stdlib_printf[5],buf,_aa_,num[1]);
                     num[1] = num[1] + 16 | 0;
                     var pos=0,param=l;
                     for(;;)
                      {if(param)
                        {var l$0=param[2],x=param[1];
                         if(8 === pos)caml_call2(Stdlib_buffer[10],buf,32);
                         caml_call3(Stdlib_printf[5],buf,_ab_,x);
                         var pos$0=pos + 1 | 0,pos=pos$0,param=l$0;
                         continue}
                       var pos$1=pos;
                       for(;;)
                        {if(pos$1 < 16)
                          {if(8 === pos$1)
                            caml_call2(Stdlib_buffer[14],buf,cst$3);
                           else
                            caml_call2(Stdlib_buffer[14],buf,cst$4);
                           var pos$2=pos$1 + 1 | 0,pos$1=pos$2;
                           continue}
                         caml_call2(Stdlib_buffer[14],buf,cst$5);
                         var
                          _b6_=
                           function(ch)
                            {var switch$0=0;
                             if(32 <= ch && ! (126 < ch)){var _b7_=ch;switch$0 = 1}
                             if(! switch$0)var _b7_=46;
                             return caml_call2(Stdlib_buffer[10],buf,_b7_)};
                         caml_call2(Stdlib_list[15],_b6_,l);
                         caml_call2(Stdlib_buffer[10],buf,124);
                         return lift([0,caml_call1(Stdlib_buffer[2],buf)])}}}
                   return return_none}
                 var _b5_=nget(16,stream);
                 return caml_call2(_X_[1],_b5_,_b4_)})}
    var
     Lwt_stream=
      [0,
       from,
       from_direct,
       Closed,
       create$1,
       create_with_reference,
       Full,
       create_bounded,
       of_seq,
       of_list,
       of_array,
       of_string,
       clone,
       to_list,
       to_string,
       Empty$0,
       peek,
       npeek,
       get$1,
       nget,
       get_while,
       get_while_s,
       next,
       last_new,
       junk,
       njunk,
       junk_while,
       junk_while_s,
       junk_old,
       get_available,
       get_available_up_to,
       is_empty$0,
       is_closed,
       closed,
       on_terminate,
       on_terminate,
       choose$0,
       map$0,
       map_s,
       filter,
       filter_s,
       filter_map,
       filter_map_s,
       map_list,
       map_list_s,
       fold,
       fold_s,
       iter,
       iter_p,
       iter_s,
       iter_n,
       find,
       find_s,
       find_map,
       find_map_s,
       combine,
       append,
       concat,
       flatten,
       wrap_exn,
       parse,
       hexdump,
       map_exn];
    caml_register_global(101,Lwt_stream,"Lwt_stream");
    function return$0(x){return lift([0,x])}
    function fail$0(e){return lift([1,e])}
    function ok(x){return symbol(function(y){return [0,y]},x)}
    function map$1(f,e)
     {return symbol
              (function(param)
                {if(0 === param[0]){var x=param[1];return [0,caml_call1(f,x)]}
                 var e=param[1];
                 return [1,e]},
               e)}
    function map_err(f,e)
     {return symbol
              (function(param)
                {if(0 === param[0]){var x=param[1];return [0,x]}
                 var e=param[1];
                 return [1,caml_call1(f,e)]},
               e)}
    function catch$1(e){return catch$0(function(param){return ok(e)},fail$0)}
    function get_exn(e)
     {return symbol_bind
              (e,
               function(param)
                {if(0 === param[0]){var x=param[1];return lift(x)}
                 var e=param[1];
                 return fail(e)})}
    function symbol_bind$0(e,f)
     {return symbol_bind
              (e,
               function(param)
                {if(0 === param[0]){var x=param[1];return caml_call1(f,x)}
                 var e=param[1];
                 return lift([1,e])})}
    function bind_lwt(e,f)
     {return symbol_bind
              (e,
               function(param)
                {if(0 === param[0]){var x=param[1];return ok(caml_call1(f,x))}
                 var e=param[1];
                 return fail$0(e)})}
    function bind_result(e,f)
     {return symbol
              (function(param)
                {if(0 === param[0]){var x=param[1];return caml_call1(f,x)}
                 var e=param[1];
                 return [1,e]},
               e)}
    function bind_lwt_err(e,f)
     {return symbol_bind
              (e,
               function(param)
                {if(0 === param[0]){var x=param[1];return return$0(x)}
                 var e=param[1];
                 return symbol_bind(caml_call1(f,e),fail$0)})}
    function both$0(a,b)
     {var s=[0,0];
      function set_once(e){return s[1]?0:(s[1] = [0,e],0)}
      var b$0=map_err(set_once,b),a$0=map_err(set_once,a),_bZ_=both(a$0,b$0);
      return symbol
              (function(param)
                {var _b0_=param[1];
                 if(0 === _b0_[0])
                  {var _b1_=param[2],_b2_=_b0_[1];
                   if(0 === _b1_[0]){var y=_b1_[1];return [0,[0,_b2_,y]]}}
                 var _b3_=s[1];
                 if(_b3_){var e=_b3_[1];return [1,e]}
                 throw [0,Assert_failure,_ac_]},
               _bZ_)}
    function symbol$4(e,f){return map$1(f,e)}
    function let$1(x,f){return map$1(f,x)}
    var
     Syntax$0=[0,symbol_bind$0,both$0,let$1,both$0],
     Lwt_result=
      [0,
       return$0,
       fail$0,
       lift,
       ok,
       catch$1,
       get_exn,
       map$1,
       map_err,
       symbol_bind$0,
       bind_lwt,
       bind_lwt_err,
       bind_result,
       both$0,
       [0,symbol$4,symbol_bind$0],
       Syntax$0,
       symbol$4,
       symbol_bind$0];
    caml_register_global(102,Lwt_result,"Lwt_result");
    function Make(Ord)
     {function link(t1,t2)
       {var
         c2=t2[3],
         r2=t2[2],
         x2=t2[1],
         c1=t1[3],
         r1=t1[2],
         x1=t1[1],
         c=caml_call2(Ord[1],x1,x2);
        return 0 < c?[0,x2,r2 + 1 | 0,[0,t1,c2]]:[0,x1,r1 + 1 | 0,[0,t2,c1]]}
      function ins(t,ts)
       {var t$0=t,ts$0=ts;
        for(;;)
         {if(ts$0)
           {var t$1=ts$0[1];
            if(t$0[2] < t$1[2])return [0,t$0,ts$0];
            var ts$1=ts$0[2],t$2=link(t$0,t$1),t$0=t$2,ts$0=ts$1;
            continue}
          return [0,t$0,0]}}
      var empty=0;
      function is_empty(ts){return 0 === ts?1:0}
      function add(x,ts){return ins([0,x,0,0],ts)}
      function union(ts$0,ts)
       {if(ts$0)
         {if(ts)
           {var ts2=ts[2],t2=ts[1],ts1=ts$0[2],t1=ts$0[1];
            if(t1[2] < t2[2])return [0,t1,union(ts1,[0,t2,ts2])];
            if(t2[2] < t1[2])return [0,t2,union([0,t1,ts1],ts2)];
            var _bY_=union(ts1,ts2);
            return ins(link(t1,t2),_bY_)}
          return ts$0}
        return ts}
      function find_min(param)
       {if(param)
         {var _bX_=param[1];
          if(param[2])
           {var ts=param[2],x=find_min(ts),c=caml_call2(Ord[1],_bX_[1],x);
            return 0 <= c?x:_bX_[1]}
          return _bX_[1]}
        throw Stdlib[8]}
      function lookup_min(param)
       {if(param)
         {var _bW_=param[1];
          if(param[2])
           {var ts=param[2],result=lookup_min(ts);
            if(result)
             {var x=result[1],c=caml_call2(Ord[1],_bW_[1],x);
              return 0 <= c?result:[0,_bW_[1]]}
            return 0}
          return [0,_bW_[1]]}
        return 0}
      function get_min(param)
       {if(param)
         {var _bV_=param[1];
          if(param[2])
           {var
             ts=param[2],
             match=get_min(ts),
             ts$0=match[2],
             t=match[1],
             c=caml_call2(Ord[1],_bV_[1],t[1]);
            return 0 <= c?[0,t,[0,_bV_,ts$0]]:[0,_bV_,ts]}
          return [0,_bV_,0]}
        throw [0,Assert_failure,_ad_]}
      function remove_min(ts)
       {if(ts)
         {var _bU_=get_min(ts),ts$0=_bU_[2],match=_bU_[1],c=match[3];
          return union(caml_call1(Stdlib_list[9],c),ts$0)}
        throw Stdlib[8]}
      function size(l)
       {var _bS_=0;
        function _bT_(s,t){var tl=t[3];return s + (1 + size(tl) | 0) | 0}
        return caml_call3(Stdlib_list[23],_bT_,_bS_,l)}
      return [0,empty,is_empty,add,union,find_min,lookup_min,remove_min,size]}
    var Lwt_pqueue=[0,Make];
    caml_register_global(103,Lwt_pqueue,"Lwt_pqueue");
    function tail_recursive_map(f,l)
     {var _bR_=caml_call2(Stdlib_list[19],f,l);
      return caml_call1(Stdlib_list[9],_bR_)}
    function tail_recursive_mapi(f,param)
     {var acc=0,i=0,param$0=param;
      for(;;)
       {if(param$0)
         {var
           tl=param$0[2],
           hd=param$0[1],
           i$0=i + 1 | 0,
           acc$0=[0,caml_call2(f,i,hd),acc],
           acc=acc$0,
           i=i$0,
           param$0=tl;
          continue}
        return caml_call1(Stdlib_list[9],acc)}}
    function iter_s$0(f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _bP_=function(param){return iter_s$0(f,l$0)},
         _bQ_=apply(f,x);
        return caml_call2(_X_[1],_bQ_,_bP_)}
      return return_unit}
    function iter_p$0(f,l)
     {var ts=tail_recursive_map(function(_bO_){return apply(f,_bO_)},l);
      return join(ts)}
    function _ae_(i,f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _bM_=function(param){return _ae_(i + 1 | 0,f,l$0)},
         _bN_=apply(caml_call1(f,i),x);
        return caml_call2(_X_[1],_bN_,_bM_)}
      return return_unit}
    function iteri_s(f,l){return _ae_(0,f,l)}
    function iteri_p(f,l)
     {function f$0(i)
       {var _bK_=caml_call1(f,i);
        return function(_bL_){return apply(_bK_,_bL_)}}
      var ts=tail_recursive_mapi(f$0,l);
      return join(ts)}
    function map_s$0(f,l)
     {function inner(acc,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _bI_=function(r){return inner([0,r,acc],tl)},
           _bJ_=apply(f,hd);
          return caml_call2(_X_[1],_bJ_,_bI_)}
        return lift(caml_call1(Stdlib_list[9],acc))}
      return inner(0,l)}
    function collect(acc,param)
     {if(param)
       {var
         ts=param[2],
         t=param[1],
         _bH_=function(i){return collect([0,i,acc],ts)};
        return caml_call2(_X_[1],t,_bH_)}
      return lift(caml_call1(Stdlib_list[9],acc))}
    function map_p(f,l)
     {var ts=tail_recursive_map(function(_bG_){return apply(f,_bG_)},l);
      return collect(0,ts)}
    function filter_map_s$0(f,l)
     {function inner(acc,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _bE_=
            function(param)
             {if(param){var v=param[1];return inner([0,v,acc],tl)}
              return inner(acc,tl)},
           _bF_=apply(f,hd);
          return caml_call2(_X_[1],_bF_,_bE_)}
        return lift(caml_call1(Stdlib_list[9],acc))}
      return inner(0,l)}
    function filter_map_p(f,l)
     {function collect_optional(acc,param)
       {if(param)
         {var
           ts=param[2],
           t=param[1],
           _bD_=
            function(param)
             {if(param){var v=param[1];return collect_optional([0,v,acc],ts)}
              return collect_optional(acc,ts)};
          return caml_call2(_X_[1],t,_bD_)}
        return lift(caml_call1(Stdlib_list[9],acc))}
      var ts=tail_recursive_map(function(_bC_){return apply(f,_bC_)},l);
      return collect_optional(0,ts)}
    function mapi_s(f,l)
     {function inner(acc,i,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _bA_=function(v){return inner([0,v,acc],i + 1 | 0,tl)},
           _bB_=apply(caml_call1(f,i),hd);
          return caml_call2(_X_[1],_bB_,_bA_)}
        return lift(caml_call1(Stdlib_list[9],acc))}
      return inner(0,0,l)}
    function mapi_p(f,l)
     {function f$0(i)
       {var _by_=caml_call1(f,i);
        return function(_bz_){return apply(_by_,_bz_)}}
      var ts=tail_recursive_mapi(f$0,l);
      return collect(0,ts)}
    function rev_map_append_s(acc,f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _bw_=function(x){return rev_map_append_s([0,x,acc],f,l$0)},
         _bx_=apply(f,x);
        return caml_call2(_X_[1],_bx_,_bw_)}
      return lift(acc)}
    function rev_map_s(f,l){return rev_map_append_s(0,f,l)}
    function rev_map_p(f,l$1)
     {var acc$0=acc,l=l$1;
      for(;;)
       {if(l)
         {var
           l$0=l[2],
           x=l[1],
           _bt_=
            function(acc)
              {return function(x)
                {function _bv_(l){return [0,x,l]}
                 return caml_call2(_X_[2],acc,_bv_)}}
             (acc$0),
           _bu_=apply(f,x),
           acc$1=caml_call2(_X_[1],_bu_,_bt_),
           acc$0=acc$1,
           l=l$0;
          continue}
        return acc$0}}
    function fold_left_s(f,acc,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _br_=function(acc){return fold_left_s(f,acc,l$0)},
         _bs_=apply(caml_call1(f,acc),x);
        return caml_call2(_X_[1],_bs_,_br_)}
      return lift(acc)}
    function fold_right_s(f,l,acc)
     {function inner(f,a,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _bp_=function(a){return inner(f,a,tl)},
           _bq_=apply(caml_call1(f,hd),a);
          return caml_call2(_X_[1],_bq_,_bp_)}
        return lift(a)}
      return inner(f,acc,caml_call1(Stdlib_list[9],l))}
    function for_all_s(f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _bn_=function(param){return param?for_all_s(f,l$0):return_false},
         _bo_=apply(f,x);
        return caml_call2(_X_[1],_bo_,_bn_)}
      return return_true}
    function for_all_p(f,l)
     {function _bk_(bl)
       {function _bm_(x){return x}
        return lift(caml_call2(Stdlib_list[30],_bm_,bl))}
      var _bl_=map_p(f,l);
      return caml_call2(_X_[1],_bl_,_bk_)}
    function exists_s(f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _bi_=function(param){return param?return_true:exists_s(f,l$0)},
         _bj_=apply(f,x);
        return caml_call2(_X_[1],_bj_,_bi_)}
      return return_false}
    function exists_p(f,l)
     {function _bf_(bl)
       {function _bh_(x){return x}
        return lift(caml_call2(Stdlib_list[31],_bh_,bl))}
      var _bg_=map_p(f,l);
      return caml_call2(_X_[1],_bg_,_bf_)}
    function find_s$0(f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _bd_=function(param){return param?lift(x):find_s$0(f,l$0)},
         _be_=apply(f,x);
        return caml_call2(_X_[1],_be_,_bd_)}
      return fail(Stdlib[8])}
    function optionalize(f,x)
     {function _bb_(b){return b?lift([0,x]):lift(0)}
      var _bc_=caml_call1(f,x);
      return caml_call2(_X_[1],_bc_,_bb_)}
    function filter_s$0(f,l)
     {return filter_map_s$0(function(_ba_){return optionalize(f,_ba_)},l)}
    function filter_p(f,l)
     {return filter_map_p(function(_a$_){return optionalize(f,_a$_)},l)}
    function partition_s(f,l)
     {function inner(acc1,acc2,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _a8_=
            function(b)
             {return b?inner([0,hd,acc1],acc2,tl):inner(acc1,[0,hd,acc2],tl)},
           _a9_=apply(f,hd);
          return caml_call2(_X_[1],_a9_,_a8_)}
        var _a__=caml_call1(Stdlib_list[9],acc2);
        return lift([0,caml_call1(Stdlib_list[9],acc1),_a__])}
      return inner(0,0,l)}
    function partition_p(f,l)
     {function g(x)
       {function _a6_(b){return lift([0,b,x])}
        var _a7_=apply(f,x);
        return caml_call2(_X_[1],_a7_,_a6_)}
      function _aX_(tl)
       {function _aZ_(_a5_){return _a5_[1]}
        var
         _a0_=caml_call2(Stdlib_list[39],_aZ_,tl),
         group1=tail_recursive_map(function(_a4_){return _a4_[2]},_a0_);
        function _a1_(x){return 1 - x[1]}
        var
         _a2_=caml_call2(Stdlib_list[39],_a1_,tl),
         group2=tail_recursive_map(function(_a3_){return _a3_[2]},_a2_);
        return lift([0,group1,group2])}
      var _aY_=map_p(g,l);
      return caml_call2(_X_[1],_aY_,_aX_)}
    var
     Lwt_list=
      [0,
       iter_s$0,
       iter_p$0,
       iteri_s,
       iteri_p,
       map_s$0,
       map_p,
       mapi_s,
       mapi_p,
       rev_map_s,
       rev_map_p,
       fold_left_s,
       fold_right_s,
       for_all_s,
       for_all_p,
       exists_s,
       exists_p,
       find_s$0,
       filter_s$0,
       filter_p,
       filter_map_s$0,
       filter_map_p,
       partition_s,
       partition_p];
    caml_register_global(104,Lwt_list,"Lwt_list");
    function create$2(m,opt,_aV_,_aU_,create$0)
     {if(opt)
       var sth=opt[1],validate=sth;
      else
       var validate=function(param){return return_true};
      if(_aV_)
       var sth$0=_aV_[1],check=sth$0;
      else
       var check=function(param,f){return caml_call1(f,1)};
      if(_aU_)
       var sth$1=_aU_[1],dispose=sth$1;
      else
       var dispose=function(param){return return_unit};
      var _aW_=create(0);
      return [0,
              create$0,
              check,
              validate,
              dispose,
              [0,[0,0]],
              m,
              0,
              caml_call1(Stdlib_queue[2],0),
              _aW_]}
    function create_member(p)
     {function _aT_(exn){p[7] = p[7] - 1 | 0;return fail(exn)}
      return catch$0
              (function(param){p[7] = p[7] + 1 | 0;return caml_call1(p[1],0)},
               _aT_)}
    function release(p,c)
     {var match=take_opt_l(p[9]);
      if(match){var wakener=match[1];return wakeup_later(wakener,c)}
      return caml_call2(Stdlib_queue[4],c,p[8])}
    function dispose(p,c)
     {function _aR_(param){p[7] = p[7] - 1 | 0;return return_unit}
      var _aS_=caml_call1(p[4],c);
      return caml_call2(_X_[1],_aS_,_aR_)}
    function validate_and_return(p,c)
     {function _aJ_(e)
       {function _aN_(param)
         {var match=take_opt_l(p[9]);
          if(match)
           {var
             wakener=match[1],
             _aP_=function(exn){return wakeup_later_exn(wakener,exn)},
             _aQ_=function(c){return wakeup_later(wakener,c)};
            on_any(apply(p[1],0),_aQ_,_aP_)}
          return fail(e)}
        var _aO_=dispose(p,c);
        return caml_call2(_X_[1],_aO_,_aN_)}
      function _aK_(param)
       {if(param)return lift(c);
        function _aL_(param){return create_member(p)}
        var _aM_=dispose(p,c);
        return caml_call2(_X_[1],_aM_,_aL_)}
      return try_bind(function(param){return caml_call1(p[3],c)},_aK_,_aJ_)}
    function use(p,f)
     {function _ay_(c)
       {var cleared=p[5][1];
        function _aB_(e)
         {function _aG_(param){return fail(e)}
          var ok=[0,0],_aH_=cleared[1];
          function _aF_(result){ok[1] = result;return 0}
          caml_call2(p[2],c,_aF_);
          var switch$0=0;
          if(! _aH_ && ok[1]){release(p,c);var _aI_=return_unit;switch$0 = 1}
          if(! switch$0)var _aI_=dispose(p,c);
          return caml_call2(_X_[1],_aI_,_aG_)}
        var promise=catch$0(function(param){return caml_call1(f,c)},_aB_);
        function _aC_(param)
         {if(cleared[1])
           {var _aD_=function(param){return promise},_aE_=dispose(p,c);
            return caml_call2(_X_[1],_aE_,_aD_)}
          release(p,c);
          return promise}
        return caml_call2(_X_[1],promise,_aC_)}
      if(caml_call1(Stdlib_queue[13],p[8]))
       if(p[7] < p[6])
        var _az_=create_member(p);
       else
        var
         _aw_=function(_aA_){return validate_and_return(p,_aA_)},
         _ax_=add_task_r(p[9]),
         _az_=caml_call2(_X_[1],_ax_,_aw_);
      else
       var c=caml_call1(Stdlib_queue[5],p[8]),_az_=validate_and_return(p,c);
      return caml_call2(_X_[1],_az_,_ay_)}
    function clear(p)
     {var _as_=p[8],_at_=0;
      function _au_(l,element){return [0,element,l]}
      var elements=caml_call3(Stdlib_queue[16],_au_,_at_,_as_);
      caml_call1(Stdlib_queue[11],p[8]);
      var old_cleared=p[5][1];
      old_cleared[1] = 1;
      p[5][1] = [0,0];
      return iter_s$0(function(_av_){return dispose(p,_av_)},elements)}
    function wait_queue_length(p){return length(p[9])}
    var Lwt_pool=[0,create$2,use,clear,wait_queue_length];
    caml_register_global(105,Lwt_pool,"Lwt_pool");
    function create_empty(param)
     {var _ar_=create(0);return [0,0,create(0),_ar_]}
    function create$3(v){var _aq_=create(0);return [0,[0,v],create(0),_aq_]}
    function put(mvar,v)
     {if(mvar[1])
       {var match=task(0),w=match[2],res=match[1],node=add_r([0,v,w],mvar[2]);
        on_cancel(res,function(param){return remove(node)});
        return res}
      var match$0=take_opt_l(mvar[3]);
      if(match$0){var w$0=match$0[1];wakeup_later(w$0,v)}else mvar[1] = [0,v];
      return return_unit}
    function take_available(mvar)
     {var _ap_=mvar[1];
      if(_ap_)
       {var v$0=_ap_[1],match=take_opt_l(mvar[2]);
        if(match)
         {var match$0=match[1],w=match$0[2],v=match$0[1];
          mvar[1] = [0,v];
          wakeup_later(w,0)}
        else
         mvar[1] = 0;
        return [0,v$0]}
      return 0}
    function take(mvar)
     {var match=take_available(mvar);
      if(match){var v=match[1];return lift(v)}
      return add_task_r(mvar[3])}
    function is_empty$1(mvar){return mvar[1]?0:1}
    var Lwt_mvar=[0,create$3,create_empty,put,take,take_available,is_empty$1];
    caml_register_global(106,Lwt_mvar,"Lwt_mvar");
    function create$4(param){return [0,0,create(0)]}
    function lock(m){return m[1]?add_task_r(m[2]):(m[1] = 1,return_unit)}
    function unlock(m)
     {var _ao_=m[1];
      return _ao_
              ?is_empty(m[2])?(m[1] = 0,0):wakeup_later(take_l(m[2]),0)
              :_ao_}
    function with_lock(m,f)
     {function _am_(param)
       {return finalize(f,function(param){unlock(m);return return_unit})}
      var _an_=lock(m);
      return caml_call2(_X_[1],_an_,_am_)}
    function is_locked(m){return m[1]}
    function is_empty$2(m){return is_empty(m[2])}
    var Lwt_mutex=[0,create$4,lock,unlock,is_locked,is_empty$2,with_lock];
    caml_register_global(107,Lwt_mutex,"Lwt_mutex");
    function wait$0(mutex,cvar)
     {var waiter=add_task_r(cvar);
      if(mutex){var m=mutex[1];unlock(m)}
      function _al_(param)
       {if(mutex){var m=mutex[1];return lock(m)}return return_unit}
      return finalize(function(param){return waiter},_al_)}
    function signal(cvar,arg)
     {try
       {var _aj_=wakeup_later(take_l(cvar),arg);return _aj_}
      catch(_ak_)
       {_ak_ = caml_wrap_exception(_ak_);
        if(_ak_ === Empty)return 0;
        throw _ak_}}
    function broadcast(cvar,arg)
     {var _ah_=0,wakeners=fold_r(function(x,l){return [0,x,l]},cvar,_ah_);
      iter_node_l(remove,cvar);
      function _ai_(wakener){return wakeup_later(wakener,arg)}
      return caml_call2(Stdlib_list[15],_ai_,wakeners)}
    function broadcast_exn(cvar,exn)
     {var _af_=0,wakeners=fold_r(function(x,l){return [0,x,l]},cvar,_af_);
      iter_node_l(remove,cvar);
      function _ag_(wakener){return wakeup_later_exn(wakener,exn)}
      return caml_call2(Stdlib_list[15],_ag_,wakeners)}
    var Lwt_condition=[0,create,wait$0,signal,broadcast,broadcast_exn];
    caml_register_global(108,Lwt_condition,"Lwt_condition");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJsd3QuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
