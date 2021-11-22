(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst=caml_string_of_jsbytes(""),
     cst_Set_state=caml_string_of_jsbytes("Set_state"),
     cst_State_error=caml_string_of_jsbytes("State_error"),
     cst_set_state=caml_string_of_jsbytes("set_state"),
     cst_state_error=caml_string_of_jsbytes("state_error"),
     cst_Set_state$0=caml_string_of_jsbytes("Set_state"),
     cst_State_error$0=caml_string_of_jsbytes("State_error"),
     cst_set_state$0=caml_string_of_jsbytes("set_state"),
     cst_state_error$0=caml_string_of_jsbytes("state_error"),
     cst_Dune_exe_App=caml_string_of_jsbytes("Dune__exe__App"),
     cst_No_state_yet=caml_string_of_jsbytes("No state yet"),
     tp_loc=caml_string_of_jsbytes("client/app.ml.Action.t"),
     cst_Dune_exe_App$0=caml_string_of_jsbytes("Dune__exe__App"),
     Game_state=global_data.Game_state,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Virtual_dom_Node=global_data.Virtual_dom__Node,
     Incr_dom_Component=global_data.Incr_dom__Component,
     Incr_dom_Incr=global_data.Incr_dom__Incr,
     Game_rpcs_Rpcs=global_data.Game_rpcs__Rpcs,
     Async_kernel=global_data.Async_kernel,
     Http_rpc_Rpc=global_data.Http_rpc__Rpc,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Async_kernel_Ivar=global_data.Async_kernel__Ivar,
     Js_of_ocaml_XmlHttpRequest=global_data.Js_of_ocaml__XmlHttpRequest,
     Uri=global_data.Uri,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Core_kernel=global_data.Core_kernel;
    caml_call1(Ppx_module_timer_runtime[4],cst_Dune_exe_App);
    var
     initial=
      [0,
       [0,caml_string_of_jsbytes("test")],
       caml_call1(Core_kernel_Or_error[40],cst_No_state_yet)],
     cutoff=Core_kernel[231],
     Model=[0,initial,cutoff],
     _a_=[0,caml_string_of_jsbytes("Set_state")],
     _b_=[0,caml_string_of_jsbytes("State_error")];
    function send(uri)
     {var
       t1=caml_call1(Js_of_ocaml_XmlHttpRequest[1],0),
       xml_response=caml_call1(Async_kernel_Ivar[12],0),
       _x_=Js_of_ocaml_Js[7],
       t7=runtime.caml_jsstring_of_string(caml_call1(Uri[7],uri));
      t1.open("GET",t7,_x_);
      t1.onreadystatechange
      =
      runtime.caml_js_wrap_callback
       (function(param)
         {var match=t1.readyState;
          if(4 <= match)
           {var
             _A_=function(s){return s},
             _B_=function(param){return ""},
             response_text=
              caml_call3(Js_of_ocaml_Js[5][7],t1.responseText,_B_,_A_);
            return caml_call2
                    (Async_kernel_Ivar[15],xml_response,response_text)}
          return 0});
      t1.send(Js_of_ocaml_Js[1]);
      function _y_(response_js)
       {return runtime.caml_string_of_jsstring(response_js)}
      var _z_=caml_call1(Async_kernel_Ivar[18],xml_response);
      return caml_call2(Async_kernel[22][3],_z_,_y_)}
    var State=[0,send];
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       {var _t_=sexp[1],switch$0=0;
        if(caml_string_notequal(_t_,cst_Set_state))
         {var switch$1=0;
          if(caml_string_notequal(_t_,cst_State_error))
           if(caml_string_notequal(_t_,cst_set_state))
            {if(caml_string_notequal(_t_,cst_state_error))
              {switch$0 = 1;switch$1 = 1}}
           else
            switch$1 = 1;
          if(! switch$1)
           return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc,sexp)}
        if(! switch$0)
         return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc,sexp)}
      else
       {var _u_=sexp[1];
        if(! _u_)return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc,sexp);
        var _v_=_u_[1];
        if(0 !== _v_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc,sexp);
        var _w_=_v_[1],switch$2=0;
        if(caml_string_notequal(_w_,cst_Set_state$0))
         {var switch$3=0;
          if(caml_string_notequal(_w_,cst_State_error$0))
           if(caml_string_notequal(_w_,cst_set_state$0))
            {if(caml_string_notequal(_w_,cst_state_error$0))
              {switch$2 = 1;switch$3 = 1}}
           else
            switch$3 = 1;
          if(! switch$3)
           {var sexp_args=_u_[2];
            if(sexp_args && ! sexp_args[2])
             {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel_Error[5],v0);
              return [1,v0$0]}
            return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc,_w_,sexp)}}
        if(! switch$2)
         {var sexp_args$0=_u_[2];
          if(sexp_args$0 && ! sexp_args$0[2])
           {var v0$1=sexp_args$0[1],v0$2=caml_call1(Game_state[1],v0$1);
            return [0,v0$2]}
          return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc,_w_,sexp)}}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc,sexp)}
    function sexp_of_t(param)
     {if(0 === param[0])
       {var v0=param[1],v0$0=caml_call1(Game_state[2],v0);
        return [1,[0,_a_,[0,v0$0,0]]]}
      var v0$1=param[1],v0$2=caml_call1(Core_kernel_Error[6],v0$1);
      return [1,[0,_b_,[0,v0$2,0]]]}
    var Action=[0,t_of_sexp,sexp_of_t];
    function on_startup(schedule_action,model)
     {var conn=caml_call2(Http_rpc_Rpc[1][1][1],cst,State[1]);
      function _n_(param)
       {var _p_=model[1];
        if(_p_)
         {var
           username=_p_[1],
           _q_=
            function(state)
             {if(0 === state[0])
               {var state$0=state[1];
                return caml_call1(schedule_action,[0,state$0])}
              var err=state[1];
              return caml_call1(schedule_action,[1,err])},
           _r_=caml_call2(Game_rpcs_Rpcs[1][1],conn,username),
           _s_=caml_call2(Async_kernel[22][3],_r_,_q_);
          return caml_call1(Async_kernel[6],_s_)}
        return 0}
      var _o_=caml_call1(Core_kernel_Time_ns[1][79],300.);
      caml_call5(Async_kernel[7],0,0,0,_o_,_n_);
      return caml_call1(Async_kernel[19],conn)}
    function apply_action(model,action,state,param)
     {if(0 === action[0])
       {var game_state=action[1];return [0,model[1],[0,game_state]]}
      var err=action[1];
      return [0,model[1],[1,err]]}
    function create(model,param,_c_)
     {function _d_(model)
       {var
         _e_=model[2],
         _f_=
          caml_call1(caml_call1(Core_kernel_Or_error[13],Game_state[2]),_e_),
         _g_=caml_call1(Core_kernel_Sexp[81],_f_),
         view=caml_call1(Virtual_dom_Node[4],_g_),
         _h_=0,
         _i_=0,
         _j_=[0,function(_k_,_l_,_m_){return apply_action(model,_k_,_l_,_m_)}];
        return caml_call5(Incr_dom_Component[6],_j_,_i_,_h_,model,view)}
      return caml_call2(Incr_dom_Incr[76][4][5],model,_d_)}
    caml_call1(Ppx_module_timer_runtime[5],cst_Dune_exe_App$0);
    var Dune_exe_App=[0,Model,State,Action,on_startup,apply_action,create];
    runtime.caml_register_global(42,Dune_exe_App,"Dune__exe__App");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9ieXRlL2R1bmVfX2V4ZV9fQXBwLmNtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJ0cF9sb2MiLCJpbml0aWFsIiwiY3V0b2ZmIiwic2VuZCIsInVyaSIsInhtbF9yZXNwb25zZSIsInMiLCJyZXNwb25zZV90ZXh0IiwicmVzcG9uc2VfanMiLCJ0X29mX3NleHAiLCJzZXhwIiwic2V4cF9hcmdzIiwidjAiLCJ2MCQwIiwic2V4cF9hcmdzJDAiLCJ2MCQxIiwidjAkMiIsInNleHBfb2ZfdCIsIm9uX3N0YXJ0dXAiLCJzY2hlZHVsZV9hY3Rpb24iLCJtb2RlbCIsImNvbm4iLCJ1c2VybmFtZSIsInN0YXRlIiwic3RhdGUkMCIsImVyciIsImFwcGx5X2FjdGlvbiIsImFjdGlvbiIsImdhbWVfc3RhdGUiLCJjcmVhdGUiLCJ2aWV3Il0sInNvdXJjZXMiOlsiL1VzZXJzL2p2YW5icmllc2VuL2luY3ItZG9tLXdlcmV3b2xmL19idWlsZC9kZWZhdWx0L2NsaWVudC9hcHAubWwiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlDRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWhDb0M7Ozs7OztjQURoQ0MsUUFHQUM7OztJQUZnQyxTQVFoQ0MsS0FBS0M7TUFFRzs7T0FDUzs7T0FFNkMsbUNBQW5CLGtCQUx0Q0E7Ozs7TUFRWTs7VTs7WUFHVDswQkFHU0UsR0FBSyxPQUFMQSxDQUFNO2FBSGYsb0JBRWUsU0FBWTthQUR6Qjs7OzJDQVRSRCxhQVFVRTtVQU1ELFFBQUU7O21CQUVQQztRQUNSLHVDQURRQSxZQUNnQjtNQURGLHlDQWhCbEJIO01BZ0JrQiw4Q0FDRTtJQTVCVSxhQVFoQ0Y7SUFSZ0MsU0FnQ3BDTTs7Ozs7Ozs7Ozs7OztRQTBCQTtTQTFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRUFDaUI7SUFqQ21CLFNBZ0NwQ1E7O1FBQVM7O01BQTBCO21DQUNsQjtJQWpDbUIsY0FnQ3BDUjtJQWhDb0MsU0FvQ2xDUyxXQUFZQyxnQkFBaUJDO01BQ3BCLElBQVBDLEtBQU87O1FBRVAsUUFIMkJEO1FBRzNCO1VBR0k7OztxQkFDV0c7Y0FDUixTQURRQTtnQkFHTSxJQUFUQyxRQUhHRDtnQkFHTSxrQkFWWEosbUJBVUVLO2NBRFUsSUFBUEMsSUFGQUY7Y0FFTyxrQkFUWkosbUJBU0tNLEtBQzhDO1dBSHRDLG9DQU52QkosS0FJT0M7OztRQURHLFFBTW9EO01BUjVEO01BQU47eUNBRElELEtBVU87SUEvQ3lCLFNBaURsQ0ssYUFBY04sTUFBaUJPLE9BQU9KO01BQ3hDLFNBRGlDSTtRQUVBLElBQWRDLFdBRmNELFVBRUEsVUFGakJQLFlBRUdRO01BQ0UsSUFBUEgsSUFIbUJFO01BR1osVUFITFAsWUFHRkssS0FBdUM7SUFwRGpCLFNBc0RsQ0ksT0FBT1Q7TUFFVCxhQUNRQTtRQUNSO2FBRFFBOzs7U0FHSjtTQURGOzs7U0FHNkIsNkIsT0FiN0JNLGFBUU1OO1FBS3VCLG9EQUx2QkEsTUFDSlUsS0FJMEQ7TUFOOUQsMENBRlNWLFVBUXFEOzsyQ0ExQjVERixXQWFBUSxhQUtBRzs7VSIsInNvdXJjZXNDb250ZW50IjpbIm9wZW4hIENvcmVfa2VybmVsXG5vcGVuISBBc3luY19rZXJuZWxcbm9wZW4gSW5jcl9kb21cbm9wZW4gR2FtZV90eXBlc1xuXG5tb2R1bGUgTW9kZWwgPSBzdHJ1Y3RcbiAgdHlwZSB0ID0geyB1c2VybmFtZSA6IFVzZXJuYW1lLnQgb3B0aW9uOyBzdGF0ZSA6IEdhbWVfc3RhdGUudCBPcl9lcnJvci50IH1cblxuICBsZXQgaW5pdGlhbCA9XG4gICAgeyB1c2VybmFtZSA9IFNvbWUgXCJ0ZXN0XCI7IHN0YXRlID0gT3JfZXJyb3IuZXJyb3Jfc3RyaW5nIFwiTm8gc3RhdGUgeWV0XCIgfVxuXG4gIGxldCBjdXRvZmYgPSBwaHlzX2VxdWFsXG5lbmRcblxubW9kdWxlIFN0YXRlID0gc3RydWN0XG4gIHR5cGUgdCA9IEh0dHBfcnBjLlJwYy5Db25uLkNsaWVudC50XG5cbiAgbGV0IHNlbmQgdXJpID1cbiAgICBsZXQgb3BlbiBKc19vZl9vY2FtbCBpblxuICAgIGxldCB4bWwgPSBYbWxIdHRwUmVxdWVzdC5jcmVhdGUgKCkgaW5cbiAgICBsZXQgeG1sX3Jlc3BvbnNlID0gSXZhci5jcmVhdGUgKCkgaW5cbiAgICBsZXQgKCkgPVxuICAgICAgeG1sICMjIChfb3BlbiAoSnMuc3RyaW5nIFwiR0VUXCIpIChKcy5zdHJpbmcgKFVyaS50b19zdHJpbmcgdXJpKSkgSnMuX3RydWUpXG4gICAgaW5cbiAgICB4bWwjIy5vbnJlYWR5c3RhdGVjaGFuZ2UgOj1cbiAgICAgIEpzLndyYXBfY2FsbGJhY2sgKGZ1biBfIC0+XG4gICAgICAgICAgbWF0Y2ggeG1sIyMucmVhZHlTdGF0ZSB3aXRoXG4gICAgICAgICAgfCBYbWxIdHRwUmVxdWVzdC5ET05FIC0+XG4gICAgICAgICAgICAgIGxldCByZXNwb25zZV90ZXh0ID1cbiAgICAgICAgICAgICAgICBKcy5PcHQuY2FzZSB4bWwjIy5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgICAgIChmdW4gKCkgLT4gSnMuc3RyaW5nIFwiXCIpXG4gICAgICAgICAgICAgICAgICAoZnVuIHMgLT4gcylcbiAgICAgICAgICAgICAgaW5cbiAgICAgICAgICAgICAgSXZhci5maWxsX2lmX2VtcHR5IHhtbF9yZXNwb25zZSByZXNwb25zZV90ZXh0XG4gICAgICAgICAgfCBfIC0+ICgpKTtcbiAgICB4bWwgIyMgKHNlbmQgSnMubnVsbCk7XG4gICAgbGV0JW1hcCByZXNwb25zZV9qcyA9IEl2YXIucmVhZCB4bWxfcmVzcG9uc2UgaW5cbiAgICBKcy50b19zdHJpbmcgcmVzcG9uc2VfanNcbmVuZFxuXG5tb2R1bGUgQWN0aW9uID0gc3RydWN0XG4gIHR5cGUgdCA9IFNldF9zdGF0ZSBvZiBHYW1lX3N0YXRlLnQgfCBTdGF0ZV9lcnJvciBvZiBFcnJvci50XG4gIFtAQGRlcml2aW5nIHNleHBdXG5lbmRcblxubGV0IG9uX3N0YXJ0dXAgfnNjaGVkdWxlX2FjdGlvbiAobW9kZWwgOiBNb2RlbC50KSA9XG4gIGxldCBjb25uID0gSHR0cF9ycGMuUnBjLkNvbm4uQ2xpZW50LmNyZWF0ZSB+cGF0aDpcIlwiIH5zZW5kOlN0YXRlLnNlbmQgaW5cbiAgZXZlcnkgKFRpbWVfbnMuU3Bhbi5vZl9tcyAzMDAuKSAoZnVuICgpIC0+XG4gICAgICBtYXRjaCBtb2RlbC51c2VybmFtZSB3aXRoXG4gICAgICB8IE5vbmUgLT4gKClcbiAgICAgIHwgU29tZSB1c2VybmFtZSAtPlxuICAgICAgICAgIGRvbid0X3dhaXRfZm9yXG4gICAgICAgICAgICAobGV0JW1hcCBzdGF0ZSA9IEdhbWVfcnBjcy5ScGNzLkdldF9zdGF0ZS5kaXNwYXRjaCBjb25uIHVzZXJuYW1lIGluXG4gICAgICAgICAgICAgbWF0Y2ggc3RhdGUgd2l0aFxuICAgICAgICAgICAgIHwgRXJyb3IgZXJyIC0+IHNjaGVkdWxlX2FjdGlvbiAoQWN0aW9uLlN0YXRlX2Vycm9yIGVycilcbiAgICAgICAgICAgICB8IE9rIHN0YXRlIC0+IHNjaGVkdWxlX2FjdGlvbiAoQWN0aW9uLlNldF9zdGF0ZSBzdGF0ZSkpKTtcbiAgcmV0dXJuIGNvbm5cblxubGV0IGFwcGx5X2FjdGlvbiAobW9kZWwgOiBNb2RlbC50KSBhY3Rpb24gX3N0YXRlIH5zY2hlZHVsZV9hY3Rpb246XyA9XG4gIG1hdGNoIGFjdGlvbiB3aXRoXG4gIHwgQWN0aW9uLlNldF9zdGF0ZSBnYW1lX3N0YXRlIC0+IHsgbW9kZWwgd2l0aCBzdGF0ZSA9IE9rIGdhbWVfc3RhdGUgfVxuICB8IFN0YXRlX2Vycm9yIGVyciAtPiB7IG1vZGVsIHdpdGggc3RhdGUgPSBFcnJvciBlcnIgfVxuXG5sZXQgY3JlYXRlIG1vZGVsIH5vbGRfbW9kZWw6XyB+aW5qZWN0Ol8gOlxuICAgIChBY3Rpb24udCwgTW9kZWwudCwgU3RhdGUudCkgQ29tcG9uZW50LnQgVWlfaW5jci5JbmNyLnQgPVxuICBsZXQgb3BlbiBJbmNyLkxldF9zeW50YXggaW5cbiAgbGV0JW1hcCBtb2RlbCA9IG1vZGVsIGluXG4gIGxldCB2aWV3ID1cbiAgICBWZG9tLk5vZGUudGV4dFxuICAgICAgKFNleHAudG9fc3RyaW5nIChbJXNleHBfb2Y6IEdhbWVfc3RhdGUudCBPcl9lcnJvci50XSBtb2RlbC5Nb2RlbC5zdGF0ZSkpXG4gIGluXG4gIENvbXBvbmVudC5jcmVhdGUgfmFwcGx5X2FjdGlvbjooYXBwbHlfYWN0aW9uIG1vZGVsKSBtb2RlbCB2aWV3XG4iXX0=
