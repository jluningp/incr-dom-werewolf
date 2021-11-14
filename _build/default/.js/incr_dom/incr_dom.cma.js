(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_js_wrap_callback=runtime.caml_js_wrap_callback,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
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
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Incr_dom_Component=caml_string_of_jsbytes("Incr_dom__Component"),
     cst_incr_dom=caml_string_of_jsbytes("incr_dom"),
     cst_src_component_ml=caml_string_of_jsbytes("src/component.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_incr_dom$0=caml_string_of_jsbytes("incr_dom"),
     cst_incr_dom$1=caml_string_of_jsbytes("incr_dom"),
     cst_Incr_dom_Component$0=caml_string_of_jsbytes("Incr_dom__Component"),
     cst_Incr_dom_Incr=caml_string_of_jsbytes("Incr_dom__Incr"),
     cst_incr_dom$2=caml_string_of_jsbytes("incr_dom"),
     cst_src_incr_ml=caml_string_of_jsbytes("src/incr.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_incr_dom$3=caml_string_of_jsbytes("incr_dom"),
     cst_incr_dom$4=caml_string_of_jsbytes("incr_dom"),
     cst_Incr_dom_Incr$0=caml_string_of_jsbytes("Incr_dom__Incr"),
     cst_Incr_dom_App_intf=caml_string_of_jsbytes("Incr_dom__App_intf"),
     cst_incr_dom$5=caml_string_of_jsbytes("incr_dom"),
     cst_src_app_intf_ml=caml_string_of_jsbytes("src/app_intf.ml"),
     cst$1=caml_string_of_jsbytes(""),
     cst_incr_dom$6=caml_string_of_jsbytes("incr_dom"),
     cst_incr_dom$7=caml_string_of_jsbytes("incr_dom"),
     cst_Incr_dom_App_intf$0=caml_string_of_jsbytes("Incr_dom__App_intf"),
     cst_keep_in_view=caml_string_of_jsbytes("keep-in-view"),
     cst_Columns$2=caml_string_of_jsbytes("Columns"),
     cst_Rows$2=caml_string_of_jsbytes("Rows"),
     cst_src_js_misc_ml_rows_or_col=
      caml_string_of_jsbytes("src/js_misc.ml.rows_or_columns"),
     cst_Columns=caml_string_of_jsbytes("Columns"),
     cst_Rows=caml_string_of_jsbytes("Rows"),
     cst_columns=caml_string_of_jsbytes("columns"),
     cst_rows=caml_string_of_jsbytes("rows"),
     cst_Columns$0=caml_string_of_jsbytes("Columns"),
     cst_Rows$0=caml_string_of_jsbytes("Rows"),
     cst_columns$0=caml_string_of_jsbytes("columns"),
     cst_rows$0=caml_string_of_jsbytes("rows"),
     cst_src_js_misc_ml_Rect_t=caml_string_of_jsbytes("src/js_misc.ml.Rect.t"),
     cst_t$0=caml_string_of_jsbytes("t"),
     cst_bottom=caml_string_of_jsbytes("bottom"),
     cst_left=caml_string_of_jsbytes("left"),
     cst_right=caml_string_of_jsbytes("right"),
     cst_top=caml_string_of_jsbytes("top"),
     cst_right$0=caml_string_of_jsbytes("right"),
     cst_bottom$0=caml_string_of_jsbytes("bottom"),
     cst_left$0=caml_string_of_jsbytes("left"),
     cst_top$0=caml_string_of_jsbytes("top"),
     cst_Incr_dom_Js_misc=caml_string_of_jsbytes("Incr_dom__Js_misc"),
     cst_incr_dom$8=caml_string_of_jsbytes("incr_dom"),
     cst_src_js_misc_ml=caml_string_of_jsbytes("src/js_misc.ml"),
     cst$2=caml_string_of_jsbytes(""),
     cst_incr_dom$9=caml_string_of_jsbytes("incr_dom"),
     tp_loc=caml_string_of_jsbytes("src/js_misc.ml.Rect.t"),
     cst_a=caml_string_of_jsbytes("a"),
     cst_src_js_misc_ml_9_14=caml_string_of_jsbytes("src/js_misc.ml:9:14"),
     cst_right$1=caml_string_of_jsbytes("right"),
     cst_a$0=caml_string_of_jsbytes("a"),
     cst_src_js_misc_ml_8_15=caml_string_of_jsbytes("src/js_misc.ml:8:15"),
     cst_bottom$1=caml_string_of_jsbytes("bottom"),
     cst_a$1=caml_string_of_jsbytes("a"),
     cst_src_js_misc_ml_7_13=caml_string_of_jsbytes("src/js_misc.ml:7:13"),
     cst_left$1=caml_string_of_jsbytes("left"),
     cst_a$2=caml_string_of_jsbytes("a"),
     cst_src_js_misc_ml_6_12=caml_string_of_jsbytes("src/js_misc.ml:6:12"),
     cst_top$1=caml_string_of_jsbytes("top"),
     cst_a$3=caml_string_of_jsbytes("a"),
     cst_t=caml_string_of_jsbytes("t"),
     cst_src_js_misc_ml_5_2=caml_string_of_jsbytes("src/js_misc.ml:5:2"),
     names=
      [0,
       caml_string_of_jsbytes("top"),
       [0,
        caml_string_of_jsbytes("left"),
        [0,
         caml_string_of_jsbytes("bottom"),
         [0,caml_string_of_jsbytes("right"),0]]]],
     cst_right$2=caml_string_of_jsbytes("right"),
     cst_bottom$2=caml_string_of_jsbytes("bottom"),
     cst_left$2=caml_string_of_jsbytes("left"),
     cst_top$2=caml_string_of_jsbytes("top"),
     tp_loc$0=caml_string_of_jsbytes("src/js_misc.ml.rows_or_columns"),
     cst_rows_or_columns=caml_string_of_jsbytes("rows_or_columns"),
     cst_src_js_misc_ml_25_0=caml_string_of_jsbytes("src/js_misc.ml:25:0"),
     cst_rows_or_columns$0=caml_string_of_jsbytes("rows_or_columns"),
     cst_Rows$1=caml_string_of_jsbytes("Rows"),
     cst_Columns$1=caml_string_of_jsbytes("Columns"),
     descriptions=
      [0,
       [0,caml_string_of_jsbytes("Rows"),0],
       [0,[0,caml_string_of_jsbytes("Columns"),0],0]],
     cst_incr_dom$10=caml_string_of_jsbytes("incr_dom"),
     cst_Incr_dom_Js_misc$0=caml_string_of_jsbytes("Incr_dom__Js_misc"),
     cst_bug_Action_pipe_closed=
      caml_string_of_jsbytes("bug: Action pipe closed"),
     cst_stabilize$3=caml_string_of_jsbytes("stabilize"),
     cst_stabilize$4=caml_string_of_jsbytes("stabilize"),
     cst_total=caml_string_of_jsbytes("total"),
     cst_update_visibility=caml_string_of_jsbytes("update visibility"),
     cst_update_visibility$0=caml_string_of_jsbytes("update visibility"),
     cst_apply_actions=caml_string_of_jsbytes("apply actions"),
     cst_apply_actions$0=caml_string_of_jsbytes("apply actions"),
     cst_diff=caml_string_of_jsbytes("diff"),
     cst_diff$0=caml_string_of_jsbytes("diff"),
     cst_patch=caml_string_of_jsbytes("patch"),
     cst_patch$0=caml_string_of_jsbytes("patch"),
     cst_on_display=caml_string_of_jsbytes("on_display"),
     cst_on_display$0=caml_string_of_jsbytes("on_display"),
     cst_total$0=caml_string_of_jsbytes("total"),
     cst_Action=caml_string_of_jsbytes("Action"),
     cst_stabilize$1=caml_string_of_jsbytes("stabilize"),
     cst_stabilize$2=caml_string_of_jsbytes("stabilize"),
     cst_stabilize=caml_string_of_jsbytes("stabilize"),
     cst_stabilize$0=caml_string_of_jsbytes("stabilize"),
     cst_scroll=caml_string_of_jsbytes("scroll"),
     cst_resize=caml_string_of_jsbytes("resize"),
     cst_boolean=caml_string_of_jsbytes("boolean"),
     cst_request_ids_already_set=
      caml_string_of_jsbytes("request_ids already set"),
     cst_Incr_dom_Start_app=caml_string_of_jsbytes("Incr_dom__Start_app"),
     cst_incr_dom$11=caml_string_of_jsbytes("incr_dom"),
     cst_src_start_app_ml=caml_string_of_jsbytes("src/start_app.ml"),
     cst$3=caml_string_of_jsbytes(""),
     cst_incr_dom$12=caml_string_of_jsbytes("incr_dom"),
     cst_incr_dom$13=caml_string_of_jsbytes("incr_dom"),
     cst_Incr_dom_Start_app$0=caml_string_of_jsbytes("Incr_dom__Start_app"),
     cst_Incr_dom=caml_string_of_jsbytes("Incr_dom"),
     cst_incr_dom$14=caml_string_of_jsbytes("incr_dom"),
     cst_src_incr_dom_ml=caml_string_of_jsbytes("src/incr_dom.ml"),
     cst$4=caml_string_of_jsbytes(""),
     cst_incr_dom$15=caml_string_of_jsbytes("incr_dom"),
     cst_incr_dom$16=caml_string_of_jsbytes("incr_dom"),
     cst_Incr_dom$0=caml_string_of_jsbytes("Incr_dom"),
     Core_kernel_Option=global_data.Core_kernel__Option,
     Base_Field=global_data.Base__Field,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     include=global_data.Ui_incr,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Float=global_data.Core_kernel__Float,
     Js_of_ocaml_Dom_html=global_data.Js_of_ocaml__Dom_html,
     Base_Binary_searchable=global_data.Base__Binary_searchable,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Bin_prot_Read=global_data.Bin_prot__Read,
     Bin_prot_Common=global_data.Bin_prot__Common,
     Bin_prot_Write=global_data.Bin_prot__Write,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Async_kernel_Pipe=global_data.Async_kernel__Pipe,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Virtual_dom_Node=global_data.Virtual_dom__Node,
     Core_kernel_String=global_data.Core_kernel__String,
     Js_of_ocaml_Firebug=global_data.Js_of_ocaml__Firebug,
     Async_js_Debug=global_data.Async_js__Debug,
     Js_of_ocaml_Dom=global_data.Js_of_ocaml__Dom,
     Virtual_dom_Vdom=global_data.Virtual_dom__Vdom,
     Async_kernel=global_data.Async_kernel,
     Async_js=global_data.Async_js,
     Virtual_dom_Attrs=global_data.Virtual_dom__Attrs,
     Css_gen=global_data.Css_gen,
     Core_kernel_Fn=global_data.Core_kernel__Fn,
     Async_kernel_Ivar=global_data.Async_kernel__Ivar,
     Async_kernel_Async_kernel_sche=
      global_data.Async_kernel__Async_kernel_scheduler,
     Incr_dom=[0];
    caml_register_global(186,Incr_dom,"Incr_dom__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incr_dom_Component);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incr_dom);
    caml_call1(Expect_test_collector[4][1],cst_src_component_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_dom$0,cst);
    var
     _ba_=
      [0,
       [11,
        caml_string_of_jsbytes("Element "),
        [2,0,[11,caml_string_of_jsbytes(" not found"),0]]],
       caml_string_of_jsbytes("Element %s not found")],
     _a$_=[1,caml_string_of_jsbytes("src/js_misc.ml.rows_or_columns")],
     _a4_=[0,caml_string_of_jsbytes("Columns")],
     _a5_=[0,caml_string_of_jsbytes("Rows")],
     _aC_=[0,caml_string_of_jsbytes("right")],
     _aD_=[0,caml_string_of_jsbytes("bottom")],
     _aE_=[0,caml_string_of_jsbytes("left")],
     _aF_=[0,caml_string_of_jsbytes("top")],
     _aB_=[0,caml_string_of_jsbytes("src/js_misc.ml"),5,2],
     _a6_=
      [0,
       [0,caml_string_of_jsbytes("Rows"),0],
       [0,[0,caml_string_of_jsbytes("Columns"),0],0]],
     _bc_=[0,caml_string_of_jsbytes("action")],
     _bb_=[0,[0,caml_string_of_jsbytes("src/start_app.ml"),250,8749,8790]];
    function extra(r){return r[5]}
    function on_display(r){return r[4]}
    function view(r){return r[3]}
    function update_visibility(r){return r[2]}
    function apply_action(r){return r[1]}
    function create_with_extra
     (apply_action,update_visibility,on_display,extra,model,view)
     {function _dc_(param,_dh_,_dg_){return model}
      var apply_action$0=caml_call2(Core_kernel_Option[49],apply_action,_dc_);
      function _dd_(param){return model}
      var
       update_visibility$0=
        caml_call2(Core_kernel_Option[49],update_visibility,_dd_);
      function _de_(param,_df_){return 0}
      var on_display$0=caml_call2(Core_kernel_Option[49],on_display,_de_);
      return [0,apply_action$0,update_visibility$0,view,on_display$0,extra]}
    function create(_c__,_c9_,_c8_)
     {var _c$_=0;
      return function(_da_,_db_)
       {return create_with_extra(_c__,_c9_,_c8_,_c$_,_da_,_db_)}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_dom$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incr_dom_Component$0);
    var
     Incr_dom_Component=
      [0,
       apply_action,
       update_visibility,
       view,
       extra,
       on_display,
       create,
       create_with_extra];
    caml_register_global(193,Incr_dom_Component,"Incr_dom__Component");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incr_dom_Incr);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incr_dom$2);
    caml_call1(Expect_test_collector[4][1],cst_src_incr_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_dom$3,cst$0);
    var
     _b_=include[2],
     ___=include[53],
     _$_=include[54],
     _aa_=include[55],
     _ad_=include[58],
     _af_=include[60],
     _ag_=include[61],
     _ax_=include[78],
     _a_=include[1],
     _c_=include[3],
     _d_=include[4],
     _e_=include[5],
     _f_=include[6],
     _g_=include[7],
     _h_=include[8],
     _i_=include[9],
     _j_=include[10],
     _k_=include[11],
     _l_=include[12],
     _m_=include[13],
     _n_=include[14],
     _o_=include[15],
     _p_=include[16],
     _q_=include[17],
     _r_=include[18],
     _s_=include[19],
     _t_=include[20],
     _u_=include[21],
     _v_=include[22],
     _w_=include[23],
     _x_=include[24],
     _y_=include[25],
     _z_=include[26],
     _A_=include[27],
     _B_=include[28],
     _C_=include[29],
     _D_=include[30],
     _E_=include[31],
     _F_=include[32],
     _G_=include[33],
     _H_=include[34],
     _I_=include[35],
     _J_=include[36],
     _K_=include[37],
     _L_=include[38],
     _M_=include[39],
     _N_=include[40],
     _O_=include[41],
     _P_=include[42],
     _Q_=include[43],
     _R_=include[44],
     _S_=include[45],
     _T_=include[46],
     _U_=include[47],
     _V_=include[48],
     _W_=include[49],
     _X_=include[50],
     _Y_=include[51],
     _Z_=include[52],
     _ab_=include[56],
     _ac_=include[57],
     _ae_=include[59],
     _ah_=include[62],
     _ai_=include[63],
     _aj_=include[64],
     _ak_=include[65],
     _al_=include[66],
     _am_=include[67],
     _an_=include[68],
     _ao_=include[69],
     _ap_=include[70],
     _aq_=include[71],
     _ar_=include[72],
     _as_=include[73],
     _at_=include[74],
     _au_=include[75],
     _av_=include[76],
     _aw_=include[77],
     _ay_=include[79],
     _az_=include[80],
     _aA_=include[81];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_dom$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incr_dom_Incr$0);
    var
     Incr_dom_Incr=
      [0,
       _a_,
       _b_,
       _c_,
       _d_,
       _e_,
       _f_,
       _g_,
       _h_,
       _i_,
       _j_,
       _k_,
       _l_,
       _m_,
       _n_,
       _o_,
       _p_,
       _q_,
       _r_,
       _s_,
       _t_,
       _u_,
       _v_,
       _w_,
       _x_,
       _y_,
       _z_,
       _A_,
       _B_,
       _C_,
       _D_,
       _E_,
       _F_,
       _G_,
       _H_,
       _I_,
       _J_,
       _K_,
       _L_,
       _M_,
       _N_,
       _O_,
       _P_,
       _Q_,
       _R_,
       _S_,
       _T_,
       _U_,
       _V_,
       _W_,
       _X_,
       _Y_,
       _Z_,
       ___,
       _$_,
       _aa_,
       _ab_,
       _ac_,
       _ad_,
       _ae_,
       _af_,
       _ag_,
       _ah_,
       _ai_,
       _aj_,
       _ak_,
       _al_,
       _am_,
       _an_,
       _ao_,
       _ap_,
       _aq_,
       _ar_,
       _as_,
       _at_,
       _au_,
       _av_,
       _aw_,
       _ax_,
       _ay_,
       _az_,
       _aA_];
    caml_register_global(195,Incr_dom_Incr,"Incr_dom__Incr");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incr_dom_App_intf);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incr_dom$5);
    caml_call1(Expect_test_collector[4][1],cst_src_app_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_dom$6,cst$1);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_dom$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incr_dom_App_intf$0);
    var Incr_dom_App_intf=[0];
    caml_register_global(196,Incr_dom_App_intf,"Incr_dom__App_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incr_dom_Js_misc);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incr_dom$8);
    caml_call1(Expect_test_collector[4][1],cst_src_js_misc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_dom$9,cst$2);
    function t_of_sexp(of_a,sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       top_field=[0,0],
       left_field=[0,0],
       bottom_field=[0,0],
       right_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _cY_=param[1];
          if(1 === _cY_[0])
           {var _cZ_=_cY_[1];
            if(_cZ_)
             {var _c0_=_cZ_[1];
              if(0 === _c0_[0])
               {var _c1_=_cZ_[2],_c2_=_c0_[1],switch$0=0;
                if(! _c1_ || ! _c1_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$4=
                    function(_c7_)
                     {function field_sexp(param)
                       {if(_c7_)
                         {if(_c7_[2])throw [0,Assert_failure,_aB_];
                          var x=_c7_[1];
                          return x}
                        return caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$4(_c1_);
                  if(caml_string_notequal(_c2_,cst_bottom))
                   if(caml_string_notequal(_c2_,cst_left))
                    if(caml_string_notequal(_c2_,cst_right))
                     if(caml_string_notequal(_c2_,cst_top))
                      {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_c2_,extra[1]]}
                     else
                      if(top_field[1])
                       duplicates[1] = [0,_c2_,duplicates[1]];
                      else
                       {var
                         field_sexp$0=field_sexp(0),
                         fvalue=caml_call1(of_a,field_sexp$0);
                        top_field[1] = [0,fvalue]}
                    else
                     if(right_field[1])
                      duplicates[1] = [0,_c2_,duplicates[1]];
                     else
                      {var
                        field_sexp$1=field_sexp(0),
                        fvalue$0=caml_call1(of_a,field_sexp$1);
                       right_field[1] = [0,fvalue$0]}
                   else
                    if(left_field[1])
                     duplicates[1] = [0,_c2_,duplicates[1]];
                    else
                     {var
                       field_sexp$2=field_sexp(0),
                       fvalue$1=caml_call1(of_a,field_sexp$2);
                      left_field[1] = [0,fvalue$1]}
                  else
                   if(bottom_field[1])
                    duplicates[1] = [0,_c2_,duplicates[1]];
                   else
                    {var
                      field_sexp$3=field_sexp(0),
                      fvalue$2=caml_call1(of_a,field_sexp$3);
                     bottom_field[1] = [0,fvalue$2]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,_cY_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc,extra[1],sexp);
        var
         _c3_=top_field[1],
         _c4_=left_field[1],
         _c5_=bottom_field[1],
         _c6_=right_field[1];
        if(_c3_ && _c4_ && _c5_ && _c6_)
         {var
           right_value=_c6_[1],
           bottom_value=_c5_[1],
           left_value=_c4_[1],
           top_value=_c3_[1];
          return [0,top_value,left_value,bottom_value,right_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === top_field[1]?1:0,cst_top$0],
                  [0,
                   [0,0 === left_field[1]?1:0,cst_left$0],
                   [0,
                    [0,0 === bottom_field[1]?1:0,cst_bottom$0],
                    [0,[0,0 === right_field[1]?1:0,cst_right$0],0]]]])}}
    function sexp_of_t(of_a,param)
     {var
       v_right=param[4],
       v_bottom=param[3],
       v_left=param[2],
       v_top=param[1],
       arg=caml_call1(of_a,v_right),
       bnds=[0,[1,[0,_aC_,[0,arg,0]]],0],
       arg$0=caml_call1(of_a,v_bottom),
       bnds$0=[0,[1,[0,_aD_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(of_a,v_left),
       bnds$1=[0,[1,[0,_aE_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(of_a,v_top),
       bnds$2=[0,[1,[0,_aF_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    var
     _aG_=caml_call1(Bin_prot_Shape[3][1],cst_a),
     _aH_=caml_call1(Bin_prot_Shape[4][1],cst_src_js_misc_ml_9_14),
     _aI_=[0,[0,cst_right$1,caml_call2(Bin_prot_Shape[15],_aH_,_aG_)],0],
     _aJ_=caml_call1(Bin_prot_Shape[3][1],cst_a$0),
     _aK_=caml_call1(Bin_prot_Shape[4][1],cst_src_js_misc_ml_8_15),
     _aL_=[0,[0,cst_bottom$1,caml_call2(Bin_prot_Shape[15],_aK_,_aJ_)],_aI_],
     _aM_=caml_call1(Bin_prot_Shape[3][1],cst_a$1),
     _aN_=caml_call1(Bin_prot_Shape[4][1],cst_src_js_misc_ml_7_13),
     _aO_=[0,[0,cst_left$1,caml_call2(Bin_prot_Shape[15],_aN_,_aM_)],_aL_],
     _aP_=caml_call1(Bin_prot_Shape[3][1],cst_a$2),
     _aQ_=caml_call1(Bin_prot_Shape[4][1],cst_src_js_misc_ml_6_12),
     _aR_=[0,[0,cst_top$1,caml_call2(Bin_prot_Shape[15],_aQ_,_aP_)],_aO_],
     _aS_=caml_call1(Bin_prot_Shape[8],_aR_),
     _aT_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$3),0],
     _aU_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t),_aT_,_aS_],0],
     _aV_=caml_call1(Bin_prot_Shape[4][1],cst_src_js_misc_ml_5_2),
     group=caml_call2(Bin_prot_Shape[6],_aV_,_aU_);
    function bin_shape_t(a)
     {var _cX_=caml_call1(Bin_prot_Shape[2][1],cst_t$0);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group,_cX_),[0,a,0])}
    function bin_size_t(size_of_a,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       _cT_=caml_call1(size_of_a,v1),
       size=caml_call2(Bin_prot_Common[23],0,_cT_),
       _cU_=caml_call1(size_of_a,v2),
       size$0=caml_call2(Bin_prot_Common[23],size,_cU_),
       _cV_=caml_call1(size_of_a,v3),
       size$1=caml_call2(Bin_prot_Common[23],size$0,_cV_),
       _cW_=caml_call1(size_of_a,v4);
      return caml_call2(Bin_prot_Common[23],size$1,_cW_)}
    function bin_write_t(write_a,buf,pos,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(write_a,buf,pos,v1),
       pos$1=caml_call3(write_a,buf,pos$0,v2),
       pos$2=caml_call3(write_a,buf,pos$1,v3);
      return caml_call3(write_a,buf,pos$2,v4)}
    function bin_writer_t(bin_writer_a)
     {function _cP_(v)
       {var _cQ_=bin_writer_a[2];
        return function(_cR_,_cS_){return bin_write_t(_cQ_,v,_cR_,_cS_)}}
      return [0,function(v){return bin_size_t(bin_writer_a[1],v)},_cP_]}
    function bin_read_t(of_a,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_js_misc_ml_Rect_t,pos_ref[1])}
    function bin_read_t$0(of_a,buf,pos_ref)
     {var
       v_top=caml_call2(of_a,buf,pos_ref),
       v_left=caml_call2(of_a,buf,pos_ref),
       v_bottom=caml_call2(of_a,buf,pos_ref),
       v_right=caml_call2(of_a,buf,pos_ref);
      return [0,v_top,v_left,v_bottom,v_right]}
    function bin_reader_t(bin_reader_a)
     {function _cO_(buf,pos_ref,vtag)
       {return bin_read_t(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$0(bin_reader_a[1],buf,pos_ref)},
              _cO_]}
    function bin_t(bin_a)
     {var _cM_=bin_reader_t(bin_a[3]),_cN_=bin_writer_t(bin_a[2]);
      return [0,bin_shape_t(bin_a[1]),_cN_,_cM_]}
    function compare(cmp_a,a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      var n=caml_call2(cmp_a,a_001[1],b_002[1]);
      if(0 === n)
       {var n$0=caml_call2(cmp_a,a_001[2],b_002[2]);
        if(0 === n$0)
         {var n$1=caml_call2(cmp_a,a_001[3],b_002[3]);
          return 0 === n$1?caml_call2(cmp_a,a_001[4],b_002[4]):n$1}
        return n$0}
      return n}
    function right(r){return r[4]}
    function bottom(r){return r[3]}
    function left(r){return r[2]}
    function top(r){return r[1]}
    function _aW_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _aX_=0,
     right$0=[0,function(param){return 0},cst_right$2,_aX_,right,_aW_];
    function _aY_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _aZ_=0,
     bottom$0=[0,function(param){return 0},cst_bottom$2,_aZ_,bottom,_aY_];
    function _a0_(r,v){return [0,r[1],v,r[3],r[4]]}
    var _a1_=0,left$0=[0,function(param){return 0},cst_left$2,_a1_,left,_a0_];
    function _a2_(r,v){return [0,v,r[2],r[3],r[4]]}
    var _a3_=0,top$0=[0,function(param){return 0},cst_top$2,_a3_,top,_a2_];
    function make_creator(top_fun,left_fun,bottom_fun,right_fun,compile_acc)
     {var
       match=caml_call2(top_fun,top$0,compile_acc),
       compile_acc$0=match[2],
       top_gen=match[1],
       match$0=caml_call2(left_fun,left$0,compile_acc$0),
       compile_acc$1=match$0[2],
       left_gen=match$0[1],
       match$1=caml_call2(bottom_fun,bottom$0,compile_acc$1),
       compile_acc$2=match$1[2],
       bottom_gen=match$1[1],
       match$2=caml_call2(right_fun,right$0,compile_acc$2),
       compile_acc$3=match$2[2],
       right_gen=match$2[1];
      return [0,
              function(acc)
               {var
                 top=caml_call1(top_gen,acc),
                 left=caml_call1(left_gen,acc),
                 bottom=caml_call1(bottom_gen,acc),
                 right=caml_call1(right_gen,acc);
                return [0,top,left,bottom,right]},
              compile_acc$3]}
    function create$0(top,left,bottom,right){return [0,top,left,bottom,right]}
    function map(top_fun,left_fun,bottom_fun,right_fun)
     {var
       _cJ_=caml_call1(right_fun,right$0),
       _cK_=caml_call1(bottom_fun,bottom$0),
       _cL_=caml_call1(left_fun,left$0);
      return [0,caml_call1(top_fun,top$0),_cL_,_cK_,_cJ_]}
    function iter(top_fun,left_fun,bottom_fun,right_fun)
     {caml_call1(top_fun,top$0);
      caml_call1(left_fun,left$0);
      caml_call1(bottom_fun,bottom$0);
      return caml_call1(right_fun,right$0)}
    function fold(init,top_fun,left_fun,bottom_fun,right_fun)
     {return caml_call2
              (right_fun,
               caml_call2
                (bottom_fun,
                 caml_call2(left_fun,caml_call2(top_fun,init,top$0),left$0),
                 bottom$0),
               right$0)}
    function map_poly(record)
     {var
       _cG_=[0,caml_call1(record[1],right$0),0],
       _cH_=[0,caml_call1(record[1],bottom$0),_cG_],
       _cI_=[0,caml_call1(record[1],left$0),_cH_];
      return [0,caml_call1(record[1],top$0),_cI_]}
    function for_all(top_fun,left_fun,bottom_fun,right_fun)
     {var
       _cD_=caml_call1(top_fun,top$0),
       _cE_=_cD_?caml_call1(left_fun,left$0):_cD_,
       _cF_=_cE_?caml_call1(bottom_fun,bottom$0):_cE_;
      return _cF_?caml_call1(right_fun,right$0):_cF_}
    function exists(top_fun,left_fun,bottom_fun,right_fun)
     {var
       _cC_=caml_call1(top_fun,top$0),
       _cA_=_cC_ || caml_call1(left_fun,left$0),
       _cB_=_cA_ || caml_call1(bottom_fun,bottom$0);
      return _cB_?_cB_:caml_call1(right_fun,right$0)}
    function to_list(top_fun,left_fun,bottom_fun,right_fun)
     {var
       _cx_=[0,caml_call1(right_fun,right$0),0],
       _cy_=[0,caml_call1(bottom_fun,bottom$0),_cx_],
       _cz_=[0,caml_call1(left_fun,left$0),_cy_];
      return [0,caml_call1(top_fun,top$0),_cz_]}
    function iter$0(record,top_fun,left_fun,bottom_fun,right_fun)
     {caml_call3(top_fun,top$0,record,record[1]);
      caml_call3(left_fun,left$0,record,record[2]);
      caml_call3(bottom_fun,bottom$0,record,record[3]);
      return caml_call3(right_fun,right$0,record,record[4])}
    function fold$0(record,init,top_fun,left_fun,bottom_fun,right_fun)
     {var _cu_=record[4],_cv_=record[3],_cw_=record[2];
      return caml_call4
              (right_fun,
               caml_call4
                (bottom_fun,
                 caml_call4
                  (left_fun,
                   caml_call4(top_fun,init,top$0,record,record[1]),
                   left$0,
                   record,
                   _cw_),
                 bottom$0,
                 record,
                 _cv_),
               right$0,
               record,
               _cu_)}
    function for_all$0(record,top_fun,left_fun,bottom_fun,right_fun)
     {var
       _cr_=caml_call3(top_fun,top$0,record,record[1]),
       _cs_=_cr_?caml_call3(left_fun,left$0,record,record[2]):_cr_,
       _ct_=_cs_?caml_call3(bottom_fun,bottom$0,record,record[3]):_cs_;
      return _ct_?caml_call3(right_fun,right$0,record,record[4]):_ct_}
    function exists$0(record,top_fun,left_fun,bottom_fun,right_fun)
     {var
       _cq_=caml_call3(top_fun,top$0,record,record[1]),
       _co_=_cq_ || caml_call3(left_fun,left$0,record,record[2]),
       _cp_=_co_ || caml_call3(bottom_fun,bottom$0,record,record[3]);
      return _cp_?_cp_:caml_call3(right_fun,right$0,record,record[4])}
    function to_list$0(record,top_fun,left_fun,bottom_fun,right_fun)
     {var
       _cl_=[0,caml_call3(right_fun,right$0,record,record[4]),0],
       _cm_=[0,caml_call3(bottom_fun,bottom$0,record,record[3]),_cl_],
       _cn_=[0,caml_call3(left_fun,left$0,record,record[2]),_cm_];
      return [0,caml_call3(top_fun,top$0,record,record[1]),_cn_]}
    function map$0(record,top_fun,left_fun,bottom_fun,right_fun)
     {var
       _ci_=caml_call3(right_fun,right$0,record,record[4]),
       _cj_=caml_call3(bottom_fun,bottom$0,record,record[3]),
       _ck_=caml_call3(left_fun,left$0,record,record[2]);
      return [0,caml_call3(top_fun,top$0,record,record[1]),_ck_,_cj_,_ci_]}
    function set_all_mutable_fields(record)
     {caml_call1(Base_Field[1][1],record);return 0}
    var
     Direct=
      [0,
       iter$0,
       fold$0,
       for_all$0,
       exists$0,
       to_list$0,
       map$0,
       set_all_mutable_fields];
    function map$1(t,f)
     {var
       _cf_=caml_call1(f,t[4]),
       _cg_=caml_call1(f,t[3]),
       _ch_=caml_call1(f,t[2]);
      return [0,caml_call1(f,t[1]),_ch_,_cg_,_cf_]}
    function int_height(t){return t[3] - t[1] | 0}
    function int_width(t){return t[4] - t[2] | 0}
    function float_height(t){return t[3] - t[1]}
    function float_width(t){return t[4] - t[2]}
    function round_float_rect(opt)
     {if(opt)var sth=opt[1],round=sth;else var round=Core_kernel_Float[54];
      return function(_ce_){return map$1(_ce_,round)}}
    function rows_or_columns_of_sexp(sexp)
     {if(0 === sexp[0])
       {var _ca_=sexp[1],switch$0=0;
        if(caml_string_notequal(_ca_,cst_Columns))
         {var switch$1=0;
          if(caml_string_notequal(_ca_,cst_Rows))
           if(caml_string_notequal(_ca_,cst_columns))
            {if(caml_string_notequal(_ca_,cst_rows))
              {switch$0 = 1;switch$1 = 1}}
           else
            switch$1 = 1;
          if(! switch$1)return 0}
        if(! switch$0)return 1}
      else
       {var _cb_=sexp[1];
        if(! _cb_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$0,sexp);
        var _cc_=_cb_[1];
        if(0 !== _cc_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$0,sexp);
        var _cd_=_cc_[1],switch$2=0;
        if(caml_string_notequal(_cd_,cst_Columns$0))
         {var switch$3=0;
          if(caml_string_notequal(_cd_,cst_Rows$0))
           if(caml_string_notequal(_cd_,cst_columns$0))
            {if(caml_string_notequal(_cd_,cst_rows$0))
              {switch$2 = 1;switch$3 = 1}}
           else
            switch$3 = 1;
          if(! switch$3)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$0,sexp)}
        if(! switch$2)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$0,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$0,sexp)}
    function sexp_of_rows_or_columns(param){return param?_a4_:_a5_}
    var
     _a7_=caml_call1(Bin_prot_Shape[9],_a6_),
     _a8_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_rows_or_columns),0,_a7_],0],
     _a9_=caml_call1(Bin_prot_Shape[4][1],cst_src_js_misc_ml_25_0),
     group$0=caml_call2(Bin_prot_Shape[6],_a9_,_a8_),
     _a__=caml_call1(Bin_prot_Shape[2][1],cst_rows_or_columns$0),
     bin_shape_rows_or_columns=
      caml_call1(caml_call2(Bin_prot_Shape[14],group$0,_a__),0);
    function bin_size_rows_or_columns(param){return 1}
    function bin_write_rows_or_columns(buf,pos,param)
     {return param
              ?caml_call3(Bin_prot_Write[30],buf,pos,1)
              :caml_call3(Bin_prot_Write[30],buf,pos,0)}
    var
     bin_writer_rows_or_columns=
      [0,bin_size_rows_or_columns,bin_write_rows_or_columns];
    function bin_read_rows_or_columns(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_js_misc_ml_rows_or_col,pos_ref[1])}
    function bin_read_rows_or_columns$0(buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      return 0 === match
              ?0
              :1 === match?1:caml_call2(Bin_prot_Common[18],_a$_,pos_ref[1])}
    var
     bin_reader_rows_or_columns=
      [0,bin_read_rows_or_columns$0,bin_read_rows_or_columns],
     bin_rows_or_columns=
      [0,
       bin_shape_rows_or_columns,
       bin_writer_rows_or_columns,
       bin_reader_rows_or_columns],
     rows$0=[0,cst_Rows$1,0,0],
     columns$0=[0,cst_Columns$1,1,1],
     rows=0,
     columns=1;
    function fold$1(init,rows_fun,columns_fun)
     {return caml_call2
              (columns_fun,caml_call2(rows_fun,init,rows$0),columns$0)}
    function iter$1(rows_fun,columns_fun)
     {caml_call1(rows_fun,rows$0);return caml_call1(columns_fun,columns$0)}
    function map$2(t,rows_fun,columns_fun)
     {return t?caml_call1(columns_fun,columns$0):caml_call1(rows_fun,rows$0)}
    function make_matcher(rows_fun,columns_fun,compile_acc)
     {var
       match=caml_call2(rows_fun,rows$0,compile_acc),
       compile_acc$0=match[2],
       rows_gen=match[1],
       match$0=caml_call2(columns_fun,columns$0,compile_acc$0),
       compile_acc$1=match$0[2],
       columns_gen=match$0[1];
      function _b9_(param){return caml_call1(rows_gen,0)}
      function _b__(param){return caml_call1(columns_gen,0)}
      return [0,function(_b$_){return map$2(_b$_,_b9_,_b__)},compile_acc$1]}
    function to_rank(param){return param?1:0}
    function to_name(param){return param?cst_Columns$2:cst_Rows$2}
    var
     Variants_of_rows_or_columns=
      [0,
       rows$0,
       columns$0,
       fold$1,
       iter$1,
       map$2,
       make_matcher,
       to_rank,
       to_name,
       descriptions],
     compare_rows_or_columns=runtime.caml_int_compare;
    function innerHeight(param)
     {function _b6_(_b8_){return _b8_}
      function _b7_(param)
       {return Js_of_ocaml_Dom_html[2].documentElement.clientHeight}
      return caml_call3
              (Js_of_ocaml_Js[6][7],
               Js_of_ocaml_Dom_html[8].innerHeight,
               _b7_,
               _b6_)}
    function innerWidth(param)
     {function _b3_(_b5_){return _b5_}
      function _b4_(param)
       {return Js_of_ocaml_Dom_html[2].documentElement.clientWidth}
      return caml_call3
              (Js_of_ocaml_Js[6][7],
               Js_of_ocaml_Dom_html[8].innerWidth,
               _b4_,
               _b3_)}
    function element_is_in_viewport(elt)
     {var
       rect=elt.getBoundingClientRect(),
       _bV_=caml_call2(Core_kernel_Float[121],rect.top,0.);
      if(_bV_)
       {var _bW_=caml_call2(Core_kernel_Float[121],rect.left,0.);
        if(_bW_)
         {var
           _bX_=innerHeight(0),
           _bY_=caml_call1(Core_kernel_Float[34],_bX_),
           _bZ_=caml_call2(Core_kernel_Float[122],rect.bottom,_bY_);
          if(_bZ_)
           {var
             _b0_=innerWidth(0),
             _b1_=caml_call1(Core_kernel_Float[34],_b0_);
            return caml_call2(Core_kernel_Float[122],rect.right,_b1_)}
          var _b2_=_bZ_}
        else
         var _b2_=_bW_}
      else
       var _b2_=_bV_;
      return _b2_}
    function scroll(opt,param)
     {if(opt)var sth=opt[1],id=sth;else var id=cst_keep_in_view;
      var match=caml_call1(Js_of_ocaml_Dom_html[3],id);
      if(match)
       {var elt=match[1],_bU_=1 - element_is_in_viewport(elt);
        return _bU_?elt.scrollIntoView(Js_of_ocaml_Js[7]):_bU_}
      return 0}
    function viewport_rect_of_element(elt)
     {var rect=elt.getBoundingClientRect();
      return [0,rect.top,rect.left,rect.bottom,rect.right]}
    function viewport_rect(param)
     {var _bT_=innerWidth(0);return [0,0,0,innerHeight(0),_bT_]}
    function client_rect_of_element(elt)
     {var
       init=viewport_rect_of_element(elt),
       _bQ_=caml_call1(Core_kernel_Float[34],elt.clientWidth),
       _bR_=init[2] + _bQ_,
       _bS_=caml_call1(Core_kernel_Float[34],elt.clientHeight);
      return [0,init[1],init[2],init[1] + _bS_,_bR_]}
    function client_rect(param)
     {return [0,
              0,
              0,
              Js_of_ocaml_Dom_html[2].documentElement.clientHeight,
              Js_of_ocaml_Dom_html[2].documentElement.clientWidth]}
    function find_visible_range(length,nth_element_id,layout)
     {if(caml_call2(Core_kernel[87],length,0))return 0;
      function element_search(search_by,mode,layout,x)
       {function nth_element(n)
         {var
           id=caml_call1(nth_element_id,n),
           match=caml_call1(Js_of_ocaml_Dom_html[3],id);
          if(match){var elt=match[1];return elt}
          return caml_call3(Core_kernel[219],_ba_,id,0)}
        var
         first=viewport_rect_of_element(nth_element(0)),
         last=viewport_rect_of_element(nth_element(length - 1 | 0)),
         _bP_=Core_kernel_Float[128];
        function get(param,n)
         {var
           is_ascending=
            layout
             ?caml_call2(Core_kernel_Float[122],first[2],last[2])
             :caml_call2(Core_kernel_Float[122],first[1],last[1]),
           n$0=is_ascending?n:(length - n | 0) - 1 | 0;
          return caml_call1
                  (search_by,viewport_rect_of_element(nth_element(n$0)))}
        function length$0(param){return length}
        return caml_call6
                (caml_call1(Base_Binary_searchable[1],[0,get,length$0])[1],
                 0,
                 0,
                 0,
                 _bP_,
                 mode,
                 x)}
      var viewport_rect$0=viewport_rect(0);
      if(layout)
       var target=viewport_rect$0[2],search_by=right;
      else
       var target=viewport_rect$0[1],search_by=bottom;
      var
       first=
        element_search
         (search_by,
          -839473056,
          layout,
          caml_call1(Core_kernel_Float[34],target));
      if(layout)
       var target$0=viewport_rect$0[4],search_by$0=left;
      else
       var target$0=viewport_rect$0[3],search_by$0=top;
      var
       last=
        element_search
         (search_by$0,
          200870407,
          layout,
          caml_call1(Core_kernel_Float[34],target$0));
      return caml_call2(Core_kernel_Option[52],first,last)}
    function get_scroll_container_js_expr(element)
     {var
       doc=element.ownerDocument || document,
       win=doc.defaultView || window,
       re=/(auto|scroll)/;
      if(element === doc)return doc;
      var cur=element.parentNode;
      while(cur.parentNode)
       {var style=win.getComputedStyle(cur);
        if(re.test(style.overflow + style.overflowY + style.overflowX))
         return cur;
        cur = cur.parentNode}
      return doc}
    function get_scroll_container(el){return get_scroll_container_js_expr(el)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_dom$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incr_dom_Js_misc$0);
    var
     Incr_dom_Js_misc=
      [0,
       [0,
        t_of_sexp,
        sexp_of_t,
        bin_shape_t,
        bin_size_t,
        bin_write_t,
        bin_read_t$0,
        bin_read_t,
        bin_writer_t,
        bin_reader_t,
        bin_t,
        compare,
        right,
        bottom,
        left,
        top,
        [0,
         names,
         right$0,
         bottom$0,
         left$0,
         top$0,
         fold,
         make_creator,
         create$0,
         map,
         iter,
         for_all,
         exists,
         to_list,
         map_poly,
         Direct],
        map$1,
        int_height,
        int_width,
        float_height,
        float_width],
       round_float_rect,
       viewport_rect,
       viewport_rect_of_element,
       client_rect,
       client_rect_of_element,
       element_is_in_viewport,
       scroll,
       sexp_of_rows_or_columns,
       rows_or_columns_of_sexp,
       bin_shape_rows_or_columns,
       bin_size_rows_or_columns,
       bin_write_rows_or_columns,
       bin_writer_rows_or_columns,
       bin_read_rows_or_columns$0,
       bin_read_rows_or_columns,
       bin_reader_rows_or_columns,
       bin_rows_or_columns,
       rows,
       columns,
       Variants_of_rows_or_columns,
       compare_rows_or_columns,
       find_visible_range,
       get_scroll_container];
    caml_register_global(210,Incr_dom_Js_misc,"Incr_dom__Js_misc");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incr_dom_Start_app);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incr_dom$11);
    caml_call1(Expect_test_collector[4][1],cst_src_start_app_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_dom$12,cst$3);
    function timer_start(s,debug)
     {if(debug)
       {var t0=caml_jsstring_of_string(s);
        return Js_of_ocaml_Firebug[1].time(t0)}
      return debug}
    function timer_stop(s,debug)
     {if(debug)
       {var t2=caml_jsstring_of_string(s);
        return Js_of_ocaml_Firebug[1].timeEnd(t2)}
      return debug}
    function request_animation_frame(callback)
     {var
       current_context=caml_call1(Async_kernel_Async_kernel_sche[1],0),
       request_ids=[0,0];
      function callback$0(param)
       {var _bM_=request_ids[1],switch$0=0;
        if(typeof _bM_ === "number" && _bM_){var _bO_=1;switch$0 = 1}
        if(! switch$0)var _bO_=0;
        if(_bO_)return 0;
        var _bN_=request_ids[1];
        if(typeof _bN_ === "number")
         {if(! _bN_)request_ids[1] = 1}
        else
         {var set_timeout_id=_bN_[2],animation_frame_id=_bN_[1];
          Js_of_ocaml_Dom_html[8].cancelAnimationFrame(animation_frame_id);
          Js_of_ocaml_Dom_html[8].clearTimeout(set_timeout_id);
          request_ids[1] = 1}
        caml_call2(Async_kernel_Async_kernel_sche[2],current_context,callback);
        return 0}
      var
       t15=caml_js_wrap_callback(function(param){return callback$0(0)}),
       animation_frame_id=Js_of_ocaml_Dom_html[8].requestAnimationFrame(t15),
       t12=caml_js_wrap_callback(function(param){return callback$0(0)}),
       set_timeout_id=Js_of_ocaml_Dom_html[8].setTimeout(t12,1000.),
       _bL_=request_ids[1];
      return typeof _bL_ === "number"
              ?_bL_
                ?(Js_of_ocaml_Dom_html[8].cancelAnimationFrame
                   (animation_frame_id),
                  Js_of_ocaml_Dom_html[8].clearTimeout(set_timeout_id))
                :(request_ids[1] = [0,animation_frame_id,set_timeout_id],0)
              :caml_call1(Core_kernel[2],cst_request_ids_already_set)}
    function as_focusable(_bK_){return _bK_}
    function mark_dirty(t){return caml_call2(Async_kernel_Ivar[15],t[1],0)}
    function is_dirty(t){return caml_call1(Async_kernel_Ivar[17],t[1])}
    var global=Js_of_ocaml_Js[50][1];
    function get_tag_name(node)
     {if(typeof node !== "number" && 1 === node[0])
       {var e=node[1];return [0,caml_call1(Virtual_dom_Node[1][1],e)]}
      return 0}
    function start(opt,_bd_,bind_to_element_with_id,initial_model,App)
     {if(opt)var sth=opt[1],debug=sth;else var debug=0;
      if(_bd_)
       var sth$0=_bd_[1],stop=sth$0;
      else
       var stop=caml_call1(Async_kernel_Deferred[19],0);
      caml_call1(Async_js[3],0);
      function _be_(param)
       {var
         model_v=caml_call2(___[2],0,initial_model),
         model=caml_call1(___[4],model_v),
         model_from_last_display_v=caml_call2(___[2],0,initial_model),
         model_from_last_display=caml_call1(___[4],model_from_last_display_v);
        function _bh_(old_value,new_value)
         {return caml_call2(App[1][1],old_value,new_value)}
        var cutoff=caml_call1(_af_[3],_bh_);
        caml_call2(_ag_,model,cutoff);
        caml_call2(_ag_,model_from_last_display,cutoff);
        var match=caml_call2(Async_kernel_Pipe[7],0,0),w=match[2],r=match[1];
        function schedule_action(action)
         {return caml_call2(Async_kernel_Pipe[27],w,action)}
        function handle(action)
         {return caml_call2(Async_kernel_Pipe[27],w,action)}
        var
         Event=caml_call1(Virtual_dom_Vdom[2][6],[0,[0],handle]),
         visibility=[0,caml_call1(Async_kernel_Ivar[13],0)];
        function viewport_changed(param){return mark_dirty(visibility)}
        caml_call1(Virtual_dom_Vdom[2][7],[0,viewport_changed]);
        var
         app=
          caml_call2
           (_aa_,0,caml_call3(App[5],model,model_from_last_display,Event[2]));
        caml_call1(_ad_,0);
        function set_flag(b){return global.logFlag = ! ! b}
        set_flag(0);
        global.startLogging
        =
        caml_js_wrap_callback(function(param){return set_flag(1)});
        global.stopLogging
        =
        caml_js_wrap_callback(function(param){return set_flag(0)});
        Js_of_ocaml_Firebug[1].log
         (" Incr_dom action logging is disabled by default.\n To start logging actions, type startLogging()\n To stop logging actions, type stopLogging()");
        var
         html=caml_call1(_$_[6],app)[3],
         html_dom=caml_call1(Virtual_dom_Node[43],html),
         elem=caml_call1(Js_of_ocaml_Dom_html[4],bind_to_element_with_id),
         _bi_=caml_call1(Js_of_ocaml_Js[5][10],elem.parentNode),
         parent=caml_call4(Core_kernel_Option[50],_bb_,0,0,_bi_);
        caml_call3(Js_of_ocaml_Dom[3],parent,html_dom,elem);
        function call_viewport_changed_on_event(event_name,where)
         {var _bG_=Js_of_ocaml_Js[8];
          function _bH_(param){viewport_changed(0);return Js_of_ocaml_Js[7]}
          var
           _bI_=caml_call1(Js_of_ocaml_Dom[10],_bH_),
           _bJ_=caml_call1(Js_of_ocaml_Dom[14][1],event_name);
          caml_call4(Js_of_ocaml_Dom[16],where,_bJ_,_bI_,_bG_);
          return 0}
        call_viewport_changed_on_event
         (cst_scroll,get_scroll_container(html_dom));
        call_viewport_changed_on_event(cst_resize,Js_of_ocaml_Dom_html[8]);
        function _bj_(state)
         {var prev_html=[0,html],prev_elt=[0,html_dom];
          function refocus_root_element(param)
           {var element=prev_elt[1];
            function _bC_(t34)
             {var t33={"preventScroll":Js_of_ocaml_Js[7]};
              return t34.focus(t33)}
            var
             _bD_=caml_call1(Js_of_ocaml_Dom_html[117][1],element),
             _bE_=caml_call1(Js_of_ocaml_Js[5][10],_bD_),
             _bF_=caml_call2(Core_kernel_Option[39],_bE_,as_focusable);
            return caml_call2(Core_kernel_Option[19],_bF_,_bC_)}
          var _bm_=Js_of_ocaml_Js[7];
          function _bn_(e)
           {var related_target=e.relatedTarget;
            if(1 - caml_call1(Js_of_ocaml_Js[5][5],related_target))
             refocus_root_element(0);
            return Js_of_ocaml_Js[7]}
          var _bo_=caml_call1(Js_of_ocaml_Dom_html[10],_bn_);
          caml_call4
           (Js_of_ocaml_Dom[16],
            Js_of_ocaml_Dom_html[8],
            Js_of_ocaml_Dom_html[15][31],
            _bo_,
            _bm_);
          function perform_update(pipe)
           {timer_start(cst_stabilize$3,debug);
            var
             t29=new (Js_of_ocaml_Js[22])(),
             _bx_=t29.getTime(),
             _by_=caml_call1(Core_kernel_Time_ns[1][79],_bx_),
             now=caml_call1(Core_kernel_Time_ns[72],_by_);
            caml_call2(_ax_[8],_b_,now);
            caml_call1(_ad_,0);
            timer_stop(cst_stabilize$4,debug);
            timer_start(cst_total,debug);
            timer_start(cst_update_visibility,debug);
            if(is_dirty(visibility))
             {if(is_dirty(visibility))
               visibility[1] = caml_call1(Async_kernel_Ivar[12],0);
              var
               new_model=
                caml_call1(caml_call1(_$_[6],app)[2],schedule_action);
              caml_call2(___[3],model_v,new_model);
              timer_start(cst_stabilize,debug);
              caml_call1(_ad_,0);
              timer_stop(cst_stabilize$0,debug)}
            timer_stop(cst_update_visibility$0,debug);
            timer_start(cst_apply_actions,debug);
            for(;;)
             {var match=caml_call2(Async_kernel_Pipe[37],0,pipe);
              if(typeof match === "number")
               {if(3456156 <= match)
                 caml_call1(Core_kernel[3],cst_bug_Action_pipe_closed);
                timer_stop(cst_apply_actions$0,debug);
                var html=caml_call1(_$_[6],app)[3],switch$0=0;
                if(typeof html !== "number" && 1 === html[0])
                 {var
                   e=html[1],
                   _bs_=[0,caml_call1(Virtual_dom_Vdom[1][25],0),0],
                   _bt_=caml_call4(Css_gen[82],0,0,870530776,0),
                   new_attrs=[0,caml_call1(Virtual_dom_Vdom[1][21],_bt_),_bs_],
                   _bu_=
                    function(attrs)
                     {var _bB_=caml_call2(Core_kernel[142],new_attrs,attrs);
                      return caml_call1(Virtual_dom_Attrs[1],_bB_)},
                   new_element=caml_call2(Virtual_dom_Node[1][5],e,_bu_),
                   html$0=[1,new_element];
                  switch$0 = 1}
                if(! switch$0)var html$0=html;
                timer_start(cst_diff,debug);
                var
                 patch=
                  caml_call2(Virtual_dom_Node[46][1],prev_html[1],html$0);
                timer_stop(cst_diff$0,debug);
                if(1 - caml_call1(Virtual_dom_Node[46][3],patch))
                 mark_dirty(visibility);
                timer_start(cst_patch,debug);
                var elt=caml_call2(Virtual_dom_Node[46][2],patch,prev_elt[1]);
                timer_stop(cst_patch$0,debug);
                timer_start(cst_on_display,debug);
                caml_call2(caml_call1(_$_[6],app)[4],state,schedule_action);
                timer_stop(cst_on_display$0,debug);
                var _bz_=caml_call1(___[5],model_v);
                caml_call2(___[3],model_from_last_display_v,_bz_);
                var
                 old_tag_name=get_tag_name(prev_html[1]),
                 new_tag_name=get_tag_name(html$0),
                 tags_the_same=
                  caml_call3
                   (Core_kernel_Option[33],
                    Core_kernel_String[111],
                    old_tag_name,
                    new_tag_name);
                prev_html[1] = html$0;
                prev_elt[1] = elt;
                timer_stop(cst_total$0,debug);
                if(debug)Js_of_ocaml_Firebug[1].debug("-------");
                var _bA_=1 - tags_the_same;
                return _bA_?refocus_root_element(0):_bA_}
              var
               action=match[2],
               _bq_=
                function(log_flag)
                 {var match=runtime.caml_string_of_jsstring(typeof log_flag);
                  return caml_string_notequal(match,cst_boolean)
                          ?0
                          :log_flag | 0},
               _br_=caml_call1(Core_kernel_Fn[1],0);
              if(caml_call3(Js_of_ocaml_Js[6][7],global.logFlag,_br_,_bq_))
               {var
                 _bv_=[0,[1,[0,_bc_,[0,caml_call1(App[2][1],action),0]]],0],
                 _bw_=
                  [1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_Action),_bv_]];
                caml_call1(Async_js_Debug[1],_bw_)}
              var
               new_model$0=
                caml_call3
                 (caml_call1(_$_[6],app)[1],action,state,schedule_action);
              caml_call2(___[3],model_v,new_model$0);
              timer_start(cst_stabilize$1,debug);
              caml_call1(_ad_,0);
              timer_stop(cst_stabilize$2,debug);
              continue}}
          function callback(param)
           {return caml_call1(Async_kernel_Deferred[7],stop)
                    ?0
                    :(perform_update(r),request_animation_frame(callback))}
          perform_update(r);
          var
           match=
            caml_call1
             (Js_of_ocaml_Js[5][10],Js_of_ocaml_Dom_html[2].activeElement);
          if(match)
           {var el=match[1],_bp_=caml_call1(Js_of_ocaml_Dom_html[117][7],el);
            if(caml_call1(Js_of_ocaml_Js[5][5],_bp_))refocus_root_element(0)}
          else
           refocus_root_element(0);
          request_animation_frame(callback);
          return caml_call1(Async_kernel_Deferred[19],0)}
        var
         _bk_=caml_call1(___[5],model_v),
         _bl_=caml_call2(App[4],schedule_action,_bk_);
        return caml_call2(Async_kernel[22][2],_bl_,_bj_)}
      var
       _bf_=caml_call1(Async_js[6],0),
       _bg_=caml_call2(Async_kernel[22][2],_bf_,_be_);
      return caml_call1(Async_kernel[6],_bg_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_dom$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incr_dom_Start_app$0);
    var Incr_dom_Start_app=[0,start];
    caml_register_global(228,Incr_dom_Start_app,"Incr_dom__Start_app");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incr_dom);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incr_dom$14);
    caml_call1(Expect_test_collector[4][1],cst_src_incr_dom_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_dom$15,cst$4);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_dom$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incr_dom$0);
    var Incr_dom$0=[0];
    caml_register_global(229,Incr_dom$0,"Incr_dom");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbmNyX2RvbS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsiZWxlbWVudCIsImRvYyIsImRvY3VtZW50Iiwid2luIiwid2luZG93IiwicmUiLCJjdXIiLCJzdHlsZSJdLCJzb3VyY2VzIjpbIiJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQ2lCQTtNQUNUO09BQVEsSUFBRUEseUJBQXlCRTtPQUMzQixJQUFFRCxtQkFBbUJHO09BQ3RCO01BRVAsR0FBSUosWUFBWUMsSUFBSyxPQUNaQTtNQUxULElBUUlLLElBQU1OO01BRVYsTUFBT007T0FBZ0IsQ0FDckIsSUFBSUMsTUFBUSxxQkFBcUJEO1FBRWpDLEdBQUksUUFBUUMsaUJBQWlCQSxrQkFBa0JBO1NBQWtCLE9BQ3hERDtRQUdUQSxNQUFNQTtNQUdSLE9BQU9MLEdBckJSO0kiLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
