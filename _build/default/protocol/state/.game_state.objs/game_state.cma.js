(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_roles=caml_string_of_jsbytes("roles"),
     cst_votes=caml_string_of_jsbytes("votes"),
     cst_roles$0=caml_string_of_jsbytes("roles"),
     cst_votes$0=caml_string_of_jsbytes("votes"),
     cst_Game_state_Results=caml_string_of_jsbytes("Game_state__Results"),
     cst_game_state=caml_string_of_jsbytes("game_state"),
     cst_protocol_state_results_ml=
      caml_string_of_jsbytes("protocol/state/results.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_game_state$0=caml_string_of_jsbytes("game_state"),
     tp_loc=caml_string_of_jsbytes("protocol/state/results.ml.t"),
     cst_game_state$1=caml_string_of_jsbytes("game_state"),
     cst_Game_state_Results$0=caml_string_of_jsbytes("Game_state__Results"),
     cst_Robber=caml_string_of_jsbytes("Robber"),
     cst_Seer=caml_string_of_jsbytes("Seer"),
     cst_robber=caml_string_of_jsbytes("robber"),
     cst_seer=caml_string_of_jsbytes("seer"),
     cst_Robber$0=caml_string_of_jsbytes("Robber"),
     cst_Seer$0=caml_string_of_jsbytes("Seer"),
     cst_robber$0=caml_string_of_jsbytes("robber"),
     cst_seer$0=caml_string_of_jsbytes("seer"),
     cst_Center_cards=caml_string_of_jsbytes("Center_cards"),
     cst_User=caml_string_of_jsbytes("User"),
     cst_Center_cards$0=caml_string_of_jsbytes("Center_cards"),
     cst_User$0=caml_string_of_jsbytes("User"),
     cst_saw$1=caml_string_of_jsbytes("saw"),
     cst_saw$2=caml_string_of_jsbytes("saw"),
     cst_robbed=caml_string_of_jsbytes("robbed"),
     cst_saw=caml_string_of_jsbytes("saw"),
     cst_saw$0=caml_string_of_jsbytes("saw"),
     cst_robbed$0=caml_string_of_jsbytes("robbed"),
     cst_Game_state_Night_actions=
      caml_string_of_jsbytes("Game_state__Night_actions"),
     cst_game_state$2=caml_string_of_jsbytes("game_state"),
     cst_protocol_state_night_actio=
      caml_string_of_jsbytes("protocol/state/night_actions.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_game_state$3=caml_string_of_jsbytes("game_state"),
     tp_loc$0=
      caml_string_of_jsbytes("protocol/state/night_actions.ml.Robber.t"),
     tp_loc$1=caml_string_of_jsbytes("protocol/state/night_actions.ml.Seer.t"),
     tp_loc$2=caml_string_of_jsbytes("protocol/state/night_actions.ml.t"),
     cst_game_state$4=caml_string_of_jsbytes("game_state"),
     cst_Game_state_Night_actions$0=
      caml_string_of_jsbytes("Game_state__Night_actions"),
     cst_Robber$1=caml_string_of_jsbytes("Robber"),
     cst_Seer$1=caml_string_of_jsbytes("Seer"),
     cst_robber$1=caml_string_of_jsbytes("robber"),
     cst_seer$1=caml_string_of_jsbytes("seer"),
     cst_Robber$2=caml_string_of_jsbytes("Robber"),
     cst_Seer$2=caml_string_of_jsbytes("Seer"),
     cst_robber$2=caml_string_of_jsbytes("robber"),
     cst_seer$2=caml_string_of_jsbytes("seer"),
     cst_Choosing_user_or_center=
      caml_string_of_jsbytes("Choosing_user_or_center"),
     cst_Viewing_center_cards=caml_string_of_jsbytes("Viewing_center_cards"),
     cst_Viewing_users_card=caml_string_of_jsbytes("Viewing_users_card"),
     cst_choosing_user_or_center=
      caml_string_of_jsbytes("choosing_user_or_center"),
     cst_viewing_center_cards=caml_string_of_jsbytes("viewing_center_cards"),
     cst_viewing_users_card=caml_string_of_jsbytes("viewing_users_card"),
     cst_Choosing_user_or_center$0=
      caml_string_of_jsbytes("Choosing_user_or_center"),
     cst_Viewing_center_cards$0=caml_string_of_jsbytes("Viewing_center_cards"),
     cst_Viewing_users_card$0=caml_string_of_jsbytes("Viewing_users_card"),
     cst_choosing_user_or_center$0=
      caml_string_of_jsbytes("choosing_user_or_center"),
     cst_viewing_center_cards$0=caml_string_of_jsbytes("viewing_center_cards"),
     cst_viewing_users_card$0=caml_string_of_jsbytes("viewing_users_card"),
     cst_Choosing_card=caml_string_of_jsbytes("Choosing_card"),
     cst_Viewing_new_card=caml_string_of_jsbytes("Viewing_new_card"),
     cst_choosing_card=caml_string_of_jsbytes("choosing_card"),
     cst_viewing_new_card=caml_string_of_jsbytes("viewing_new_card"),
     cst_Choosing_card$0=caml_string_of_jsbytes("Choosing_card"),
     cst_Viewing_new_card$0=caml_string_of_jsbytes("Viewing_new_card"),
     cst_choosing_card$0=caml_string_of_jsbytes("choosing_card"),
     cst_viewing_new_card$0=caml_string_of_jsbytes("viewing_new_card"),
     cst_Game_state_Night_phase=
      caml_string_of_jsbytes("Game_state__Night_phase"),
     cst_game_state$5=caml_string_of_jsbytes("game_state"),
     cst_protocol_state_night_phase=
      caml_string_of_jsbytes("protocol/state/night_phase.ml"),
     cst$1=caml_string_of_jsbytes(""),
     cst_game_state$6=caml_string_of_jsbytes("game_state"),
     tp_loc$3=caml_string_of_jsbytes("protocol/state/night_phase.ml.Robber.t"),
     tp_loc$4=caml_string_of_jsbytes("protocol/state/night_phase.ml.Seer.t"),
     tp_loc$5=caml_string_of_jsbytes("protocol/state/night_phase.ml.t"),
     cst_game_state$7=caml_string_of_jsbytes("game_state"),
     cst_Game_state_Night_phase$0=
      caml_string_of_jsbytes("Game_state__Night_phase"),
     cst_night_actions=caml_string_of_jsbytes("night_actions"),
     cst_time_left=caml_string_of_jsbytes("time_left"),
     cst_day=caml_string_of_jsbytes("day"),
     cst_Day=caml_string_of_jsbytes("Day"),
     cst_Night=caml_string_of_jsbytes("Night"),
     cst_No_game_joined=caml_string_of_jsbytes("No_game_joined"),
     cst_Results=caml_string_of_jsbytes("Results"),
     cst_Setup=caml_string_of_jsbytes("Setup"),
     cst_View_card=caml_string_of_jsbytes("View_card"),
     cst_Vote=caml_string_of_jsbytes("Vote"),
     cst_night=caml_string_of_jsbytes("night"),
     cst_no_game_joined=caml_string_of_jsbytes("no_game_joined"),
     cst_results=caml_string_of_jsbytes("results"),
     cst_setup=caml_string_of_jsbytes("setup"),
     cst_view_card=caml_string_of_jsbytes("view_card"),
     cst_vote=caml_string_of_jsbytes("vote"),
     cst_day$0=caml_string_of_jsbytes("day"),
     cst_Day$0=caml_string_of_jsbytes("Day"),
     cst_Night$0=caml_string_of_jsbytes("Night"),
     cst_No_game_joined$0=caml_string_of_jsbytes("No_game_joined"),
     cst_Results$0=caml_string_of_jsbytes("Results"),
     cst_Setup$0=caml_string_of_jsbytes("Setup"),
     cst_View_card$0=caml_string_of_jsbytes("View_card"),
     cst_Vote$0=caml_string_of_jsbytes("Vote"),
     cst_night$0=caml_string_of_jsbytes("night"),
     cst_no_game_joined$0=caml_string_of_jsbytes("no_game_joined"),
     cst_results$0=caml_string_of_jsbytes("results"),
     cst_setup$0=caml_string_of_jsbytes("setup"),
     cst_view_card$0=caml_string_of_jsbytes("view_card"),
     cst_vote$0=caml_string_of_jsbytes("vote"),
     cst_night_actions$0=caml_string_of_jsbytes("night_actions"),
     cst_time_left$0=caml_string_of_jsbytes("time_left"),
     cst_Game_state_Phase=caml_string_of_jsbytes("Game_state__Phase"),
     cst_game_state$8=caml_string_of_jsbytes("game_state"),
     cst_protocol_state_phase_ml=
      caml_string_of_jsbytes("protocol/state/phase.ml"),
     cst$2=caml_string_of_jsbytes(""),
     cst_game_state$9=caml_string_of_jsbytes("game_state"),
     tp_loc$6=caml_string_of_jsbytes("protocol/state/phase.ml.t"),
     cst_game_state$10=caml_string_of_jsbytes("game_state"),
     cst_Game_state_Phase$0=caml_string_of_jsbytes("Game_state__Phase"),
     cst_cards=caml_string_of_jsbytes("cards"),
     cst_phase=caml_string_of_jsbytes("phase"),
     cst_users=caml_string_of_jsbytes("users"),
     cst_users$0=caml_string_of_jsbytes("users"),
     cst_cards$0=caml_string_of_jsbytes("cards"),
     cst_phase$0=caml_string_of_jsbytes("phase"),
     cst_Game_state=caml_string_of_jsbytes("Game_state"),
     cst_game_state$11=caml_string_of_jsbytes("game_state"),
     cst_protocol_state_game_state_=
      caml_string_of_jsbytes("protocol/state/game_state.ml"),
     cst$3=caml_string_of_jsbytes(""),
     cst_game_state$12=caml_string_of_jsbytes("game_state"),
     tp_loc$7=caml_string_of_jsbytes("protocol/state/game_state.ml.t"),
     cst_game_state$13=caml_string_of_jsbytes("game_state"),
     cst_Game_state$0=caml_string_of_jsbytes("Game_state"),
     Game_types_Card=global_data.Game_types__Card,
     Core_kernel=global_data.Core_kernel,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Game_types_Username=global_data.Game_types__Username,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Time_float=global_data.Core_kernel__Time_float,
     Game_state=[0];
    caml_register_global(165,Game_state,"Game_state__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Game_state_Results);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_game_state);
    caml_call1(Expect_test_collector[4][1],cst_protocol_state_results_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_game_state$0,cst);
    var
     _b_=[0,caml_string_of_jsbytes("roles")],
     _c_=[0,caml_string_of_jsbytes("votes")],
     _a_=[0,caml_string_of_jsbytes("protocol/state/results.ml"),4,0],
     _k_=[0,caml_string_of_jsbytes("Robber")],
     _l_=[0,caml_string_of_jsbytes("Seer")],
     _h_=[0,caml_string_of_jsbytes("User")],
     _j_=[0,caml_string_of_jsbytes("Center_cards")],
     _i_=[0,caml_string_of_jsbytes("saw")],
     _g_=[0,caml_string_of_jsbytes("protocol/state/night_actions.ml"),8,2],
     _e_=[0,caml_string_of_jsbytes("saw")],
     _f_=[0,caml_string_of_jsbytes("robbed")],
     _d_=[0,caml_string_of_jsbytes("protocol/state/night_actions.ml"),4,2],
     _r_=[0,caml_string_of_jsbytes("Robber")],
     _s_=[0,caml_string_of_jsbytes("Seer")],
     _o_=[0,caml_string_of_jsbytes("Choosing_user_or_center")],
     _p_=[0,caml_string_of_jsbytes("Viewing_users_card")],
     _q_=[0,caml_string_of_jsbytes("Viewing_center_cards")],
     _m_=[0,caml_string_of_jsbytes("Viewing_new_card")],
     _n_=[0,caml_string_of_jsbytes("Choosing_card")],
     _u_=[0,caml_string_of_jsbytes("No_game_joined")],
     _v_=[0,caml_string_of_jsbytes("Setup")],
     _w_=[0,caml_string_of_jsbytes("Vote")],
     _x_=[0,caml_string_of_jsbytes("View_card")],
     _y_=[0,caml_string_of_jsbytes("Night")],
     _z_=[0,caml_string_of_jsbytes("night_actions")],
     _A_=[0,caml_string_of_jsbytes("time_left")],
     _B_=[0,caml_string_of_jsbytes("Day")],
     _C_=[0,caml_string_of_jsbytes("Results")],
     _t_=[0,caml_string_of_jsbytes("protocol/state/phase.ml"),4,0],
     _E_=[0,caml_string_of_jsbytes("users")],
     _F_=[0,caml_string_of_jsbytes("cards")],
     _G_=[0,caml_string_of_jsbytes("phase")],
     _D_=[0,caml_string_of_jsbytes("protocol/state/game_state.ml"),4,0];
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       votes_field=[0,0],
       roles_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _bh_=param[1];
          if(1 === _bh_[0])
           {var _bi_=_bh_[1];
            if(_bi_)
             {var _bj_=_bi_[1];
              if(0 === _bj_[0])
               {var _bk_=_bi_[2],_bl_=_bj_[1],switch$0=0;
                if(! _bk_ || ! _bk_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$2=
                    function(_bo_)
                     {function field_sexp(param)
                       {if(_bo_)
                         {if(_bo_[2])throw [0,Assert_failure,_a_];
                          var x=_bo_[1];
                          return x}
                        return caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$2(_bk_);
                  if(caml_string_notequal(_bl_,cst_roles))
                   if(caml_string_notequal(_bl_,cst_votes))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_bl_,extra[1]]}
                   else
                    if(votes_field[1])
                     duplicates[1] = [0,_bl_,duplicates[1]];
                    else
                     {var
                       field_sexp$0=field_sexp(0),
                       fvalue=
                        caml_call2
                         (Game_types_Username[125][101],
                          Core_kernel[341],
                          field_sexp$0);
                      votes_field[1] = [0,fvalue]}
                  else
                   if(roles_field[1])
                    duplicates[1] = [0,_bl_,duplicates[1]];
                   else
                    {var
                      field_sexp$1=field_sexp(0),
                      fvalue$0=
                       caml_call2
                        (Game_types_Username[125][101],
                         Game_types_Card[1],
                         field_sexp$1);
                     roles_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,_bh_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc,extra[1],sexp);
        var _bm_=votes_field[1],_bn_=roles_field[1];
        if(_bm_ && _bn_)
         {var roles_value=_bn_[1],votes_value=_bm_[1];
          return [0,votes_value,roles_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === votes_field[1]?1:0,cst_votes$0],
                  [0,[0,0 === roles_field[1]?1:0,cst_roles$0],0]])}}
    function sexp_of_t(param)
     {var
       v_roles=param[2],
       v_votes=param[1],
       arg=
        caml_call2(Game_types_Username[125][102],Game_types_Card[2],v_roles),
       bnds=[0,[1,[0,_b_,[0,arg,0]]],0],
       arg$0=
        caml_call2(Game_types_Username[125][102],Core_kernel[340],v_votes),
       bnds$0=[0,[1,[0,_c_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function compare(a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      var _bb_=b_002[1],_bc_=a_001[1];
      function _bd_(a_003,b_004)
       {return caml_call2(Core_kernel[336],a_003,b_004)}
      var n=caml_call3(Game_types_Username[125][3],_bd_,_bc_,_bb_);
      if(0 === n)
       {var
         _be_=b_002[2],
         _bf_=a_001[2],
         _bg_=
          function(a_005,b_006)
           {return caml_call2(Game_types_Card[24],a_005,b_006)};
        return caml_call3(Game_types_Username[125][3],_bg_,_bf_,_be_)}
      return n}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_game_state$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Game_state_Results$0);
    var Game_state_Results=[0,t_of_sexp,sexp_of_t,compare];
    caml_register_global(177,Game_state_Results,"Game_state__Results");
    caml_call1(Ppx_module_timer_runtime[4],cst_Game_state_Night_actions);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_game_state$2);
    caml_call1(Expect_test_collector[4][1],cst_protocol_state_night_actio);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_game_state$3,cst$0);
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc$0,sexp);
      var
       field_sexps=sexp[1],
       robbed_field=[0,0],
       saw_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _a5_=param[1];
          if(1 === _a5_[0])
           {var _a6_=_a5_[1];
            if(_a6_)
             {var _a7_=_a6_[1];
              if(0 === _a7_[0])
               {var _a8_=_a6_[2],_a9_=_a7_[1],switch$0=0;
                if(! _a8_ || ! _a8_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$2=
                    function(_ba_)
                     {function field_sexp(param)
                       {if(_ba_)
                         {if(_ba_[2])throw [0,Assert_failure,_d_];
                          var x=_ba_[1];
                          return x}
                        return caml_call2
                                (Sexplib0_Sexp_conv_error[10],tp_loc$0,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$2(_a8_);
                  if(caml_string_notequal(_a9_,cst_robbed))
                   if(caml_string_notequal(_a9_,cst_saw))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_a9_,extra[1]]}
                   else
                    if(saw_field[1])
                     duplicates[1] = [0,_a9_,duplicates[1]];
                    else
                     {var
                       field_sexp$0=field_sexp(0),
                       fvalue=caml_call1(Game_types_Card[1],field_sexp$0);
                      saw_field[1] = [0,fvalue]}
                  else
                   if(robbed_field[1])
                    duplicates[1] = [0,_a9_,duplicates[1]];
                   else
                    {var
                      field_sexp$1=field_sexp(0),
                      fvalue$0=caml_call1(Game_types_Username[100],field_sexp$1);
                     robbed_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$0,_a5_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$0,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[13],tp_loc$0,extra[1],sexp);
        var _a__=robbed_field[1],_a$_=saw_field[1];
        if(_a__ && _a$_)
         {var saw_value=_a$_[1],robbed_value=_a__[1];
          return [0,robbed_value,saw_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc$0,
                 sexp,
                 [0,
                  [0,0 === robbed_field[1]?1:0,cst_robbed$0],
                  [0,[0,0 === saw_field[1]?1:0,cst_saw$0],0]])}}
    function sexp_of_t$0(param)
     {var
       v_saw=param[2],
       v_robbed=param[1],
       arg=caml_call1(Game_types_Card[2],v_saw),
       bnds=[0,[1,[0,_e_,[0,arg,0]]],0],
       arg$0=caml_call1(Game_types_Username[101],v_robbed),
       bnds$0=[0,[1,[0,_f_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function compare$0(a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      var n=caml_call2(Game_types_Username[112],a_001[1],b_002[1]);
      return 0 === n?caml_call2(Game_types_Card[24],a_001[2],b_002[2]):n}
    var Robber=[0,t_of_sexp$0,sexp_of_t$0,compare$0];
    function t_of_sexp$1(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc$1,sexp);
      var
       field_sexps=sexp[1],
       saw_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _aL_=param[1];
          if(1 === _aL_[0])
           {var _aM_=_aL_[1];
            if(_aM_)
             {var _aN_=_aM_[1];
              if(0 === _aN_[0])
               {var _aO_=_aM_[2],_aP_=_aN_[1],switch$0=0;
                if(! _aO_ || ! _aO_[2])switch$0 = 1;
                if(switch$0)
                 {var tail=param[2];
                  if(caml_string_notequal(_aP_,cst_saw$1))
                   {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_aP_,extra[1]]}
                  else
                   if(saw_field[1])
                    duplicates[1] = [0,_aP_,duplicates[1]];
                   else
                    {if(_aO_)
                      {if(_aO_[2])throw [0,Assert_failure,_g_];
                       var x=_aO_[1],field_sexp=x}
                     else
                      var
                       field_sexp=
                        caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$1,sexp);
                     var
                      fvalue=
                       function(sexp)
                         {try
                           {if(0 === sexp[0])
                             var
                              atom=sexp[1],
                              _aR_=
                               caml_string_notequal(atom,cst_Center_cards)
                                ?caml_string_notequal(atom,cst_User)
                                  ?caml_call1(Sexplib0_Sexp_conv_error[19],0)
                                  :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$1,sexp)
                                :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$1,sexp),
                              _aS_=_aR_;
                            else
                             {var _aT_=sexp[1];
                              if(_aT_)
                               {var _aU_=_aT_[1];
                                if(0 === _aU_[0])
                                 {var sexp_args=_aT_[2],atom$0=_aU_[1];
                                  if(caml_string_notequal(atom$0,cst_Center_cards$0))
                                   if(caml_string_notequal(atom$0,cst_User$0))
                                    var _aV_=caml_call1(Sexplib0_Sexp_conv_error[19],0);
                                   else
                                    {var switch$0=0;
                                     if(sexp_args && ! sexp_args[2])
                                      {var v0=sexp_args[1],switch$1=0;
                                       if(1 === v0[0])
                                        {var _aZ_=v0[1];
                                         if(_aZ_)
                                          {var _a0_=_aZ_[2];
                                           if(_a0_ && ! _a0_[2])
                                            {var
                                              v1=_a0_[1],
                                              v0$1=_aZ_[1],
                                              v0$2=caml_call1(Game_types_Username[100],v0$1),
                                              v1$0=caml_call1(Game_types_Card[1],v1),
                                              v0$0=[0,v0$2,v1$0];
                                             switch$1 = 1}}}
                                       if(! switch$1)
                                        var
                                         v0$0=
                                          caml_call3(Sexplib0_Sexp_conv_error[2],tp_loc$1,2,v0);
                                       var _aY_=[0,948354667,v0$0];
                                       switch$0 = 1}
                                     if(! switch$0)
                                      var
                                       _aY_=
                                        caml_call3
                                         (Sexplib0_Sexp_conv_error[22],tp_loc$1,atom$0,sexp);
                                     var _aV_=_aY_}
                                  else
                                   {var switch$2=0;
                                    if(sexp_args && ! sexp_args[2])
                                     {var v0$3=sexp_args[1],switch$3=0;
                                      if(1 === v0$3[0])
                                       {var _a2_=v0$3[1];
                                        if(_a2_)
                                         {var _a3_=_a2_[2];
                                          if(_a3_ && ! _a3_[2])
                                           {var
                                             v1$1=_a3_[1],
                                             v0$5=_a2_[1],
                                             v0$6=caml_call1(Game_types_Card[1],v0$5),
                                             v1$2=caml_call1(Game_types_Card[1],v1$1),
                                             v0$4=[0,v0$6,v1$2];
                                            switch$3 = 1}}}
                                      if(! switch$3)
                                       var
                                        v0$4=
                                         caml_call3(Sexplib0_Sexp_conv_error[2],tp_loc$1,2,v0$3);
                                      var _a1_=[0,347750297,v0$4];
                                      switch$2 = 1}
                                    if(! switch$2)
                                     var
                                      _a1_=
                                       caml_call3
                                        (Sexplib0_Sexp_conv_error[22],tp_loc$1,atom$0,sexp);
                                    var _aV_=_a1_}
                                  var _aW_=_aV_}
                                else
                                 var
                                  _aW_=
                                   caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$1,sexp);
                                var _aX_=_aW_}
                              else
                               var
                                _aX_=
                                 caml_call2(Sexplib0_Sexp_conv_error[25],tp_loc$1,sexp);
                              var _aS_=_aX_}
                            return _aS_}
                          catch(_a4_)
                           {_a4_ = caml_wrap_exception(_a4_);
                            if(_a4_ === Sexplib0_Sexp_conv_error[18])
                             return caml_call2
                                     (Sexplib0_Sexp_conv_error[20],tp_loc$1,sexp);
                            throw _a4_}}
                        (field_sexp);
                     saw_field[1] = [0,fvalue]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$1,_aL_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$1,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[13],tp_loc$1,extra[1],sexp);
        var _aQ_=saw_field[1];
        if(_aQ_){var saw_value=_aQ_[1];return [0,saw_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc$1,
                 sexp,
                 [0,[0,0 === saw_field[1]?1:0,cst_saw$2],0])}}
    function sexp_of_t$1(param)
     {var v_saw=param[1],bnds=0;
      if(948354667 <= v_saw[1])
       var
        v0=v_saw[2],
        v1=v0[2],
        v0$0=v0[1],
        v0$1=caml_call1(Game_types_Username[101],v0$0),
        v1$0=caml_call1(Game_types_Card[2],v1),
        arg=[1,[0,_h_,[0,[1,[0,v0$1,[0,v1$0,0]]],0]]];
      else
       var
        v0$2=v_saw[2],
        v1$1=v0$2[2],
        v0$3=v0$2[1],
        v0$4=caml_call1(Game_types_Card[2],v0$3),
        v1$2=caml_call1(Game_types_Card[2],v1$1),
        arg=[1,[0,_j_,[0,[1,[0,v0$4,[0,v1$2,0]]],0]]];
      var bnds$0=[0,[1,[0,_i_,[0,arg,0]]],bnds];
      return [1,bnds$0]}
    function compare$1(a_003,b_004)
     {if(caml_call2(Ppx_compare_lib[1],a_003,b_004))return 0;
      if(caml_call2(Ppx_compare_lib[1],a_003[1],b_004[1]))return 0;
      var _aJ_=a_003[1],_aK_=b_004[1];
      if(948354667 <= _aJ_[1])
       {if(typeof _aK_ !== "number" && 948354667 === _aK_[1])
         {var
           right_012=_aK_[2],
           left_011=_aJ_[2],
           t_014=left_011[2],
           t_013=left_011[1],
           t_016=right_012[2],
           t_015=right_012[1],
           n=caml_call2(Game_types_Username[112],t_013,t_015);
          return 0 === n?caml_call2(Game_types_Card[24],t_014,t_016):n}}
      else
       if(typeof _aK_ !== "number" && 347750297 === _aK_[1])
        {var
          right_006=_aK_[2],
          left_005=_aJ_[2],
          t_008=left_005[2],
          t_007=left_005[1],
          t_010=right_006[2],
          t_009=right_006[1],
          n$0=caml_call2(Game_types_Card[24],t_007,t_009);
         return 0 === n$0?caml_call2(Game_types_Card[24],t_008,t_010):n$0}
      return runtime.caml_compare(_aJ_,_aK_)}
    var Seer=[0,t_of_sexp$1,sexp_of_t$1,compare$1];
    function t_of_sexp$2(sexp)
     {if(0 === sexp[0])
       {var _aF_=sexp[1],switch$0=0;
        if(caml_string_notequal(_aF_,cst_Robber))
         {var switch$1=0;
          if(caml_string_notequal(_aF_,cst_Seer))
           if(caml_string_notequal(_aF_,cst_robber))
            {if(caml_string_notequal(_aF_,cst_seer))
              {switch$0 = 1;switch$1 = 1}}
           else
            switch$1 = 1;
          if(! switch$1)
           return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$2,sexp)}
        if(! switch$0)
         return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$2,sexp)}
      else
       {var _aG_=sexp[1];
        if(! _aG_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$2,sexp);
        var _aH_=_aG_[1];
        if(0 !== _aH_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$2,sexp);
        var _aI_=_aH_[1],switch$2=0;
        if(caml_string_notequal(_aI_,cst_Robber$0))
         {var switch$3=0;
          if(caml_string_notequal(_aI_,cst_Seer$0))
           if(caml_string_notequal(_aI_,cst_robber$0))
            {if(caml_string_notequal(_aI_,cst_seer$0))
              {switch$2 = 1;switch$3 = 1}}
           else
            switch$3 = 1;
          if(! switch$3)
           {var sexp_args=_aG_[2];
            if(sexp_args && ! sexp_args[2])
             {var v0=sexp_args[1],v0$0=caml_call1(Seer[1],v0);return [1,v0$0]}
            return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$2,_aI_,sexp)}}
        if(! switch$2)
         {var sexp_args$0=_aG_[2];
          if(sexp_args$0 && ! sexp_args$0[2])
           {var v0$1=sexp_args$0[1],v0$2=caml_call1(Robber[1],v0$1);
            return [0,v0$2]}
          return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$2,_aI_,sexp)}}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$2,sexp)}
    function sexp_of_t$2(param)
     {if(0 === param[0])
       {var v0=param[1],v0$0=caml_call1(Robber[2],v0);
        return [1,[0,_k_,[0,v0$0,0]]]}
      var v0$1=param[1],v0$2=caml_call1(Seer[2],v0$1);
      return [1,[0,_l_,[0,v0$2,0]]]}
    function compare$2(a_017,match)
     {if(caml_call2(Ppx_compare_lib[1],a_017,match))return 0;
      if(0 === a_017[0])
       {var _aD_=a_017[1];
        if(0 === match[0])
         {var b_020=match[1];return caml_call2(Robber[3],_aD_,b_020)}
        return -1}
      var _aE_=a_017[1];
      if(0 === match[0])return 1;
      var b_022=match[1];
      return caml_call2(Seer[3],_aE_,b_022)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_game_state$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Game_state_Night_actions$0);
    var
     Game_state_Night_actions=
      [0,Robber,Seer,t_of_sexp$2,sexp_of_t$2,compare$2];
    caml_register_global
     (178,Game_state_Night_actions,"Game_state__Night_actions");
    caml_call1(Ppx_module_timer_runtime[4],cst_Game_state_Night_phase);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_game_state$5);
    caml_call1(Expect_test_collector[4][1],cst_protocol_state_night_phase);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_game_state$6,cst$1);
    function t_of_sexp$3(sexp)
     {if(0 === sexp[0])
       {var _az_=sexp[1],switch$0=0;
        if(caml_string_notequal(_az_,cst_Choosing_card))
         {var switch$1=0;
          if(caml_string_notequal(_az_,cst_Viewing_new_card))
           if(caml_string_notequal(_az_,cst_choosing_card))
            {if(caml_string_notequal(_az_,cst_viewing_new_card))
              {switch$0 = 1;switch$1 = 1}}
           else
            switch$1 = 1;
          if(! switch$1)
           return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$3,sexp)}
        if(! switch$0)return 0}
      else
       {var _aA_=sexp[1];
        if(! _aA_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$3,sexp);
        var _aB_=_aA_[1];
        if(0 !== _aB_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$3,sexp);
        var _aC_=_aB_[1],switch$2=0;
        if(caml_string_notequal(_aC_,cst_Choosing_card$0))
         {var switch$3=0;
          if(caml_string_notequal(_aC_,cst_Viewing_new_card$0))
           if(caml_string_notequal(_aC_,cst_choosing_card$0))
            {if(caml_string_notequal(_aC_,cst_viewing_new_card$0))
              {switch$2 = 1;switch$3 = 1}}
           else
            switch$3 = 1;
          if(! switch$3)
           {var sexp_args=_aA_[2];
            if(sexp_args && ! sexp_args[2])
             {var v0=sexp_args[1],v0$0=caml_call1(Game_types_Card[1],v0);
              return [0,v0$0]}
            return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$3,_aC_,sexp)}}
        if(! switch$2)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$3,sexp)}
    function sexp_of_t$3(param)
     {if(param)
       {var v0=param[1],v0$0=caml_call1(Game_types_Card[2],v0);
        return [1,[0,_m_,[0,v0$0,0]]]}
      return _n_}
    function compare$3(a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      if(a_001)
       {if(b_002)
         {var b_004=b_002[1],a_003=a_001[1];
          return caml_call2(Game_types_Card[24],a_003,b_004)}
        return 1}
      return b_002?-1:0}
    var Robber$0=[0,t_of_sexp$3,sexp_of_t$3,compare$3];
    function t_of_sexp$4(sexp)
     {if(0 === sexp[0])
       {var _at_=sexp[1],switch$0=0;
        if(caml_string_notequal(_at_,cst_Choosing_user_or_center))
         {var switch$1=0;
          if(caml_string_notequal(_at_,cst_Viewing_center_cards))
           {var switch$2=0;
            if(caml_string_notequal(_at_,cst_Viewing_users_card))
             if(caml_string_notequal(_at_,cst_choosing_user_or_center))
              if(caml_string_notequal(_at_,cst_viewing_center_cards))
               {if(caml_string_notequal(_at_,cst_viewing_users_card))
                 {switch$0 = 1;switch$1 = 1;switch$2 = 1}}
              else
               switch$2 = 1;
             else
              {switch$1 = 1;switch$2 = 1}
            if(! switch$2)
             return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$4,sexp)}
          if(! switch$1)
           return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$4,sexp)}
        if(! switch$0)return 0}
      else
       {var _au_=sexp[1];
        if(! _au_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$4,sexp);
        var _av_=_au_[1];
        if(0 !== _av_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$4,sexp);
        var _aw_=_av_[1],switch$3=0;
        if(caml_string_notequal(_aw_,cst_Choosing_user_or_center$0))
         {var switch$4=0;
          if(caml_string_notequal(_aw_,cst_Viewing_center_cards$0))
           {var switch$5=0;
            if(caml_string_notequal(_aw_,cst_Viewing_users_card$0))
             if(caml_string_notequal(_aw_,cst_choosing_user_or_center$0))
              if(caml_string_notequal(_aw_,cst_viewing_center_cards$0))
               {if(caml_string_notequal(_aw_,cst_viewing_users_card$0))
                 {switch$3 = 1;switch$4 = 1;switch$5 = 1}}
              else
               switch$5 = 1;
             else
              {switch$4 = 1;switch$5 = 1}
            if(! switch$5)
             {var sexp_args=_au_[2];
              if(sexp_args)
               {var _ax_=sexp_args[2];
                if(_ax_ && ! _ax_[2])
                 {var
                   v1=_ax_[1],
                   v0=sexp_args[1],
                   v0$0=caml_call1(Game_types_Username[100],v0),
                   v1$0=caml_call1(Game_types_Card[1],v1);
                  return [0,v0$0,v1$0]}}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[4],tp_loc$4,_aw_,sexp)}}
          if(! switch$4)
           {var sexp_args$0=_au_[2];
            if(sexp_args$0)
             {var _ay_=sexp_args$0[2];
              if(_ay_ && ! _ay_[2])
               {var
                 v1$1=_ay_[1],
                 v0$1=sexp_args$0[1],
                 v0$2=caml_call1(Game_types_Card[1],v0$1),
                 v1$2=caml_call1(Game_types_Card[1],v1$1);
                return [1,v0$2,v1$2]}}
            return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$4,_aw_,sexp)}}
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$4,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$4,sexp)}
    function sexp_of_t$4(param)
     {if(typeof param === "number")
       return _o_;
      else
       {if(0 === param[0])
         {var
           v1=param[2],
           v0=param[1],
           v0$0=caml_call1(Game_types_Username[101],v0),
           v1$0=caml_call1(Game_types_Card[2],v1);
          return [1,[0,_p_,[0,v0$0,[0,v1$0,0]]]]}
        var
         v1$1=param[2],
         v0$1=param[1],
         v0$2=caml_call1(Game_types_Card[2],v0$1),
         v1$2=caml_call1(Game_types_Card[2],v1$1);
        return [1,[0,_q_,[0,v0$2,[0,v1$2,0]]]]}}
    function compare$4(a_005,match)
     {if(caml_call2(Ppx_compare_lib[1],a_005,match))return 0;
      if(typeof a_005 === "number")
       return typeof match === "number"?0:-1;
      else
       if(0 === a_005[0])
        {var _ap_=a_005[2],_aq_=a_005[1];
         if(typeof match !== "number")
          {if(0 === match[0])
            {var
              b_010=match[2],
              b_008=match[1],
              n=caml_call2(Game_types_Username[112],_aq_,b_008);
             return 0 === n?caml_call2(Game_types_Card[24],_ap_,b_010):n}
           return -1}}
       else
        {var _ar_=a_005[2],_as_=a_005[1];
         if(typeof match !== "number")
          {if(0 === match[0])return 1;
           var
            b_014=match[2],
            b_012=match[1],
            n$0=caml_call2(Game_types_Card[24],_as_,b_012);
           return 0 === n$0?caml_call2(Game_types_Card[24],_ar_,b_014):n$0}}
      return 1}
    var Seer$0=[0,t_of_sexp$4,sexp_of_t$4,compare$4];
    function t_of_sexp$5(sexp)
     {if(0 === sexp[0])
       {var _al_=sexp[1],switch$0=0;
        if(caml_string_notequal(_al_,cst_Robber$1))
         {var switch$1=0;
          if(caml_string_notequal(_al_,cst_Seer$1))
           if(caml_string_notequal(_al_,cst_robber$1))
            {if(caml_string_notequal(_al_,cst_seer$1))
              {switch$0 = 1;switch$1 = 1}}
           else
            switch$1 = 1;
          if(! switch$1)
           return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$5,sexp)}
        if(! switch$0)
         return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$5,sexp)}
      else
       {var _am_=sexp[1];
        if(! _am_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$5,sexp);
        var _an_=_am_[1];
        if(0 !== _an_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$5,sexp);
        var _ao_=_an_[1],switch$2=0;
        if(caml_string_notequal(_ao_,cst_Robber$2))
         {var switch$3=0;
          if(caml_string_notequal(_ao_,cst_Seer$2))
           if(caml_string_notequal(_ao_,cst_robber$2))
            {if(caml_string_notequal(_ao_,cst_seer$2))
              {switch$2 = 1;switch$3 = 1}}
           else
            switch$3 = 1;
          if(! switch$3)
           {var sexp_args=_am_[2];
            if(sexp_args && ! sexp_args[2])
             {var v0=sexp_args[1],v0$0=caml_call1(Seer$0[1],v0);
              return [1,v0$0]}
            return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$5,_ao_,sexp)}}
        if(! switch$2)
         {var sexp_args$0=_am_[2];
          if(sexp_args$0 && ! sexp_args$0[2])
           {var v0$1=sexp_args$0[1],v0$2=caml_call1(Robber$0[1],v0$1);
            return [0,v0$2]}
          return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$5,_ao_,sexp)}}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$5,sexp)}
    function sexp_of_t$5(param)
     {if(0 === param[0])
       {var v0=param[1],v0$0=caml_call1(Robber$0[2],v0);
        return [1,[0,_r_,[0,v0$0,0]]]}
      var v0$1=param[1],v0$2=caml_call1(Seer$0[2],v0$1);
      return [1,[0,_s_,[0,v0$2,0]]]}
    function compare$5(a_015,match)
     {if(caml_call2(Ppx_compare_lib[1],a_015,match))return 0;
      if(0 === a_015[0])
       {var _aj_=a_015[1];
        if(0 === match[0])
         {var b_018=match[1];return caml_call2(Robber$0[3],_aj_,b_018)}
        return -1}
      var _ak_=a_015[1];
      if(0 === match[0])return 1;
      var b_020=match[1];
      return caml_call2(Seer$0[3],_ak_,b_020)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_game_state$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Game_state_Night_phase$0);
    var
     Game_state_Night_phase=
      [0,Robber$0,Seer$0,t_of_sexp$5,sexp_of_t$5,compare$5];
    caml_register_global(179,Game_state_Night_phase,"Game_state__Night_phase");
    caml_call1(Ppx_module_timer_runtime[4],cst_Game_state_Phase);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_game_state$8);
    caml_call1(Expect_test_collector[4][1],cst_protocol_state_phase_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_game_state$9,cst$2);
    function t_of_sexp$6(sexp)
     {if(0 === sexp[0])
       {var _X_=sexp[1],_Y_=caml_string_compare(_X_,cst_day),switch$0=0;
        if(0 <= _Y_)
         if(0 < _Y_)
          if(caml_string_notequal(_X_,cst_night))
           if(caml_string_notequal(_X_,cst_no_game_joined))
            if(caml_string_notequal(_X_,cst_results))
             if(caml_string_notequal(_X_,cst_setup))
              if(caml_string_notequal(_X_,cst_view_card))
               {if(! caml_string_notequal(_X_,cst_vote))switch$0 = 3}
              else
               switch$0 = 4;
             else
              switch$0 = 2;
            else
             switch$0 = 7;
           else
            switch$0 = 1;
          else
           switch$0 = 5;
         else
          switch$0 = 6;
        else
         if(caml_string_notequal(_X_,cst_Day))
          if(caml_string_notequal(_X_,cst_Night))
           if(caml_string_notequal(_X_,cst_No_game_joined))
            if(caml_string_notequal(_X_,cst_Results))
             if(caml_string_notequal(_X_,cst_Setup))
              if(caml_string_notequal(_X_,cst_View_card))
               {if(! caml_string_notequal(_X_,cst_Vote))switch$0 = 3}
              else
               switch$0 = 4;
             else
              switch$0 = 2;
            else
             switch$0 = 7;
           else
            switch$0 = 1;
          else
           switch$0 = 5;
         else
          switch$0 = 6;
        switch(switch$0)
         {case 1:return 0;
          case 2:return 1;
          case 3:return 2;
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$6,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$6,sexp);
          case 6:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$6,sexp);
          case 7:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$6,sexp)
          }}
      else
       {var _Z_=sexp[1];
        if(! _Z_)return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$6,sexp);
        var ___=_Z_[1];
        if(0 !== ___[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$6,sexp);
        var _$_=___[1],_aa_=caml_string_compare(_$_,cst_day$0),switch$1=0;
        if(0 <= _aa_)
         if(0 < _aa_)
          if(caml_string_notequal(_$_,cst_night$0))
           if(caml_string_notequal(_$_,cst_no_game_joined$0))
            if(caml_string_notequal(_$_,cst_results$0))
             if(caml_string_notequal(_$_,cst_setup$0))
              if(caml_string_notequal(_$_,cst_view_card$0))
               {if(! caml_string_notequal(_$_,cst_vote$0))switch$1 = 7}
              else
               switch$1 = 1;
             else
              switch$1 = 6;
            else
             switch$1 = 4;
           else
            switch$1 = 5;
          else
           switch$1 = 2;
         else
          switch$1 = 3;
        else
         if(caml_string_notequal(_$_,cst_Day$0))
          if(caml_string_notequal(_$_,cst_Night$0))
           if(caml_string_notequal(_$_,cst_No_game_joined$0))
            if(caml_string_notequal(_$_,cst_Results$0))
             if(caml_string_notequal(_$_,cst_Setup$0))
              if(caml_string_notequal(_$_,cst_View_card$0))
               {if(! caml_string_notequal(_$_,cst_Vote$0))switch$1 = 7}
              else
               switch$1 = 1;
             else
              switch$1 = 6;
            else
             switch$1 = 4;
           else
            switch$1 = 5;
          else
           switch$1 = 2;
         else
          switch$1 = 3;
        switch(switch$1)
         {case 1:
           var sexp_args=_Z_[2];
           if(sexp_args && ! sexp_args[2])
            {var v0=sexp_args[1],v0$0=caml_call1(Game_types_Card[1],v0);
             return [0,v0$0]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$6,_$_,sexp);
          case 2:
           var sexp_args$1=_Z_[2];
           if(sexp_args$1 && ! sexp_args$1[2])
            {var
              v0$3=sexp_args$1[1],
              v0$4=caml_call2(Core_kernel[439],t_of_sexp$5,v0$3);
             return [1,v0$4]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$6,_$_,sexp);
          case 3:
           var
            field_sexps=_Z_[2],
            time_left_field=[0,0],
            night_actions_field=[0,0],
            duplicates=[0,0],
            extra=[0,0],
            param=field_sexps;
           for(;;)
            {if(param)
              {var _ab_=param[1];
               if(1 === _ab_[0])
                {var _ac_=_ab_[1];
                 if(_ac_)
                  {var _ad_=_ac_[1];
                   if(0 === _ad_[0])
                    {var _ae_=_ac_[2],_af_=_ad_[1],switch$2=0;
                     if(! _ae_ || ! _ae_[2])switch$2 = 1;
                     if(switch$2)
                      {var
                        tail=param[2],
                        field_sexp$2=
                         function(_ai_)
                          {function field_sexp(param)
                            {if(_ai_)
                              {if(_ai_[2])throw [0,Assert_failure,_t_];
                               var x=_ai_[1];
                               return x}
                             return caml_call2
                                     (Sexplib0_Sexp_conv_error[10],tp_loc$6,sexp)}
                           return field_sexp},
                        field_sexp=field_sexp$2(_ae_);
                       if(caml_string_notequal(_af_,cst_night_actions))
                        if(caml_string_notequal(_af_,cst_time_left))
                         {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_af_,extra[1]]}
                        else
                         if(time_left_field[1])
                          duplicates[1] = [0,_af_,duplicates[1]];
                         else
                          {var
                            field_sexp$0=field_sexp(0),
                            fvalue=
                             caml_call1(Core_kernel_Time_float[13][9],field_sexp$0);
                           time_left_field[1] = [0,fvalue]}
                       else
                        if(night_actions_field[1])
                         duplicates[1] = [0,_af_,duplicates[1]];
                        else
                         {var
                           field_sexp$1=field_sexp(0),
                           fvalue$0=t_of_sexp$2(field_sexp$1);
                          night_actions_field[1] = [0,fvalue$0]}
                       var param=tail;
                       continue}}}}
               caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$6,_ab_)}
             if(duplicates[1])
              return caml_call3
                      (Sexplib0_Sexp_conv_error[12],tp_loc$6,duplicates[1],sexp);
             if(extra[1])
              return caml_call3
                      (Sexplib0_Sexp_conv_error[13],tp_loc$6,extra[1],sexp);
             var _ag_=time_left_field[1],_ah_=night_actions_field[1];
             if(_ag_ && _ah_)
              {var night_actions_value=_ah_[1],time_left_value=_ag_[1];
               return [2,time_left_value,night_actions_value]}
             return caml_call3
                     (Sexplib0_Sexp_conv_error[15],
                      tp_loc$6,
                      sexp,
                      [0,
                       [0,0 === time_left_field[1]?1:0,cst_time_left$0],
                       [0,
                        [0,0 === night_actions_field[1]?1:0,cst_night_actions$0],
                        0]])}
          case 4:
           var sexp_args$0=_Z_[2];
           if(sexp_args$0 && ! sexp_args$0[2])
            {var v0$1=sexp_args$0[1],v0$2=t_of_sexp(v0$1);return [3,v0$2]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$6,_$_,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$6,sexp);
          case 6:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$6,sexp);
          case 7:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$6,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$6,sexp)}
    function sexp_of_t$6(param)
     {if(typeof param === "number")
       switch(param){case 0:return _u_;case 1:return _v_;default:return _w_}
      else
       switch(param[0])
        {case 0:
          var v0=param[1],v0$0=caml_call1(Game_types_Card[2],v0);
          return [1,[0,_x_,[0,v0$0,0]]];
         case 1:
          var
           v0$1=param[1],
           v0$2=caml_call2(Core_kernel[438],sexp_of_t$5,v0$1);
          return [1,[0,_y_,[0,v0$2,0]]];
         case 2:
          var
           v_night_actions=param[2],
           v_time_left=param[1],
           arg=sexp_of_t$2(v_night_actions),
           bnds=[0,[1,[0,_z_,[0,arg,0]]],0],
           arg$0=caml_call1(Core_kernel_Time_float[13][10],v_time_left),
           bnds$0=[0,[1,[0,_A_,[0,arg$0,0]]],bnds];
          return [1,[0,_B_,bnds$0]];
         default:
          var v0$3=param[1],v0$4=sexp_of_t(v0$3);return [1,[0,_C_,[0,v0$4,0]]]}}
    function compare$6(a_001,match)
     {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
      var switch$0=0;
      if(typeof a_001 === "number")
       switch(a_001)
        {case 0:if(typeof match === "number" && ! match)return 0;return -1;
         case 1:
          var switch$1=0;
          if(typeof match === "number")
           switch(match){case 1:return 0;case 0:switch$1 = 1;break}
          if(! switch$1)return -1;
          break;
         default:
          if(typeof match === "number")
           switch(match){case 2:return 0;case 0:break;default:switch$0 = 1}
          else
           switch(match[0])
            {case 3:return -1;
             case 0:switch$0 = 2;break;
             case 1:switch$0 = 3;break;
             default:switch$0 = 4}}
      else
       switch(a_001[0])
        {case 0:
          var switch$2=0,_T_=a_001[1];
          if(typeof match === "number")
           switch(match)
            {case 2:break;
             case 0:switch$2 = 1;break;
             default:switch$0 = 1;switch$2 = 1}
          else
           if(0 === match[0])
            {var b_004=match[1];
             return caml_call2(Game_types_Card[24],_T_,b_004)}
          if(! switch$2)return -1;
          break;
         case 1:
          var switch$3=0,_U_=a_001[1];
          if(typeof match === "number")
           switch(match)
            {case 2:switch$3 = 1;break;case 0:break;default:switch$0 = 1}
          else
           switch(match[0])
            {case 0:switch$0 = 2;break;
             case 1:
              var
               b_006=match[1],
               _V_=function(a_007,b_008){return compare$5(a_007,b_008)};
              return caml_call3(Core_kernel[435],_V_,_U_,b_006);
             default:switch$3 = 1}
          if(switch$3)return -1;
          break;
         case 2:
          var switch$4=0;
          if(typeof match === "number")
           switch(match)
            {case 0:break;case 1:switch$0 = 1;break;default:switch$4 = 1}
          else
           switch(match[0])
            {case 2:
              var
               n=
                caml_call2(Core_kernel_Time_float[13][21],a_001[1],match[1]);
              return 0 === n?compare$2(a_001[2],match[2]):n;
             case 0:switch$0 = 2;break;
             case 1:switch$0 = 3;break;
             default:switch$4 = 1}
          if(switch$4)return -1;
          break;
         default:
          var _W_=a_001[1];
          if(typeof match === "number")
           switch(match)
            {case 0:break;case 1:switch$0 = 1;break;default:return 1}
          else
           switch(match[0])
            {case 0:switch$0 = 2;break;
             case 1:switch$0 = 3;break;
             case 2:switch$0 = 4;break;
             default:var b_012=match[1];return compare(_W_,b_012)}}
      switch(switch$0)
       {case 0:return 1;
        case 1:return 1;
        case 2:return 1;
        case 3:return 1;
        default:return 1}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_game_state$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Game_state_Phase$0);
    var Game_state_Phase=[0,t_of_sexp$6,sexp_of_t$6,compare$6];
    caml_register_global(181,Game_state_Phase,"Game_state__Phase");
    caml_call1(Ppx_module_timer_runtime[4],cst_Game_state);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_game_state$11);
    caml_call1(Expect_test_collector[4][1],cst_protocol_state_game_state_);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_game_state$12,cst$3);
    function t_of_sexp$7(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc$7,sexp);
      var
       field_sexps=sexp[1],
       phase_field=[0,0],
       cards_field=[0,0],
       users_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _K_=param[1];
          if(1 === _K_[0])
           {var _L_=_K_[1];
            if(_L_)
             {var _M_=_L_[1];
              if(0 === _M_[0])
               {var _N_=_L_[2],_O_=_M_[1],switch$0=0;
                if(! _N_ || ! _N_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$3=
                    function(_S_)
                     {function field_sexp(param)
                       {if(_S_)
                         {if(_S_[2])throw [0,Assert_failure,_D_];
                          var x=_S_[1];
                          return x}
                        return caml_call2
                                (Sexplib0_Sexp_conv_error[10],tp_loc$7,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$3(_N_);
                  if(caml_string_notequal(_O_,cst_cards))
                   if(caml_string_notequal(_O_,cst_phase))
                    if(caml_string_notequal(_O_,cst_users))
                     {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_O_,extra[1]]}
                    else
                     if(users_field[1])
                      duplicates[1] = [0,_O_,duplicates[1]];
                     else
                      {var
                        field_sexp$0=field_sexp(0),
                        fvalue=caml_call1(Game_types_Username[126][74],field_sexp$0);
                       users_field[1] = [0,fvalue]}
                   else
                    if(phase_field[1])
                     duplicates[1] = [0,_O_,duplicates[1]];
                    else
                     {var
                       field_sexp$1=field_sexp(0),
                       fvalue$0=t_of_sexp$6(field_sexp$1);
                      phase_field[1] = [0,fvalue$0]}
                  else
                   if(cards_field[1])
                    duplicates[1] = [0,_O_,duplicates[1]];
                   else
                    {var
                      field_sexp$2=field_sexp(0),
                      fvalue$1=
                       caml_call2
                        (Game_types_Card[22][101],Core_kernel[341],field_sexp$2);
                     cards_field[1] = [0,fvalue$1]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$7,_K_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$7,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[13],tp_loc$7,extra[1],sexp);
        var _P_=phase_field[1],_Q_=cards_field[1],_R_=users_field[1];
        if(_P_ && _Q_ && _R_)
         {var users_value=_R_[1],cards_value=_Q_[1],phase_value=_P_[1];
          return [0,phase_value,cards_value,users_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc$7,
                 sexp,
                 [0,
                  [0,0 === phase_field[1]?1:0,cst_phase$0],
                  [0,
                   [0,0 === cards_field[1]?1:0,cst_cards$0],
                   [0,[0,0 === users_field[1]?1:0,cst_users$0],0]]])}}
    function sexp_of_t$7(param)
     {var
       v_users=param[3],
       v_cards=param[2],
       v_phase=param[1],
       arg=caml_call1(Game_types_Username[126][75],v_users),
       bnds=[0,[1,[0,_E_,[0,arg,0]]],0],
       arg$0=caml_call2(Game_types_Card[22][102],Core_kernel[340],v_cards),
       bnds$0=[0,[1,[0,_F_,[0,arg$0,0]]],bnds],
       arg$1=sexp_of_t$6(v_phase),
       bnds$1=[0,[1,[0,_G_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function compare$7(a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      var n=compare$6(a_001[1],b_002[1]);
      if(0 === n)
       {var
         _H_=b_002[2],
         _I_=a_001[2],
         _J_=
          function(a_003,b_004)
           {return caml_call2(Core_kernel[336],a_003,b_004)},
         n$0=caml_call3(Game_types_Card[22][3],_J_,_I_,_H_);
        return 0 === n$0
                ?caml_call2(Game_types_Username[126][3],a_001[3],b_002[3])
                :n$0}
      return n}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_game_state$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Game_state$0);
    var Game_state$0=[0,t_of_sexp$7,sexp_of_t$7,compare$7];
    caml_register_global(182,Game_state$0,"Game_state");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZ2FtZV9zdGF0ZS5vYmpzL2dhbWVfc3RhdGUuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInRwX2xvYyIsInRwX2xvYyQwIiwidHBfbG9jJDEiLCJ0cF9sb2MkMiIsInRwX2xvYyQzIiwidHBfbG9jJDQiLCJ0cF9sb2MkNSIsInRwX2xvYyQ2IiwidHBfbG9jJDciLCJ0X29mX3NleHAiLCJzZXhwIiwiZmllbGRfc2V4cHMiLCJ2b3Rlc19maWVsZCIsInJvbGVzX2ZpZWxkIiwiZHVwbGljYXRlcyIsImV4dHJhIiwidGFpbCIsImZpZWxkX3NleHAkMiIsImZpZWxkX3NleHAiLCJ4IiwiZmllbGRfc2V4cCQwIiwiZnZhbHVlIiwiZmllbGRfc2V4cCQxIiwiZnZhbHVlJDAiLCJyb2xlc192YWx1ZSIsInZvdGVzX3ZhbHVlIiwic2V4cF9vZl90Iiwidl9yb2xlcyIsInZfdm90ZXMiLCJhcmciLCJibmRzIiwiYXJnJDAiLCJibmRzJDAiLCJjb21wYXJlIiwiYV8wMDEiLCJiXzAwMiIsImFfMDAzIiwiYl8wMDQiLCJuIiwiYV8wMDUiLCJiXzAwNiIsInRfb2Zfc2V4cCQwIiwicm9iYmVkX2ZpZWxkIiwic2F3X2ZpZWxkIiwic2F3X3ZhbHVlIiwicm9iYmVkX3ZhbHVlIiwic2V4cF9vZl90JDAiLCJ2X3NhdyIsInZfcm9iYmVkIiwiY29tcGFyZSQwIiwidF9vZl9zZXhwJDEiLCJhdG9tIiwic2V4cF9hcmdzIiwiYXRvbSQwIiwidjAiLCJ2MSIsInYwJDEiLCJ2MCQyIiwidjEkMCIsInYwJDAiLCJ2MCQzIiwidjEkMSIsInYwJDUiLCJ2MCQ2IiwidjEkMiIsInYwJDQiLCJzZXhwX29mX3QkMSIsImNvbXBhcmUkMSIsInJpZ2h0XzAxMiIsImxlZnRfMDExIiwidF8wMTQiLCJ0XzAxMyIsInRfMDE2IiwidF8wMTUiLCJyaWdodF8wMDYiLCJsZWZ0XzAwNSIsInRfMDA4IiwidF8wMDciLCJ0XzAxMCIsInRfMDA5IiwibiQwIiwidF9vZl9zZXhwJDIiLCJzZXhwX2FyZ3MkMCIsInNleHBfb2ZfdCQyIiwiY29tcGFyZSQyIiwiYV8wMTciLCJtYXRjaCIsImJfMDIwIiwiYl8wMjIiLCJ0X29mX3NleHAkMyIsInNleHBfb2ZfdCQzIiwiY29tcGFyZSQzIiwidF9vZl9zZXhwJDQiLCJzZXhwX29mX3QkNCIsImNvbXBhcmUkNCIsImJfMDEwIiwiYl8wMDgiLCJiXzAxNCIsImJfMDEyIiwidF9vZl9zZXhwJDUiLCJzZXhwX29mX3QkNSIsImNvbXBhcmUkNSIsImFfMDE1IiwiYl8wMTgiLCJ0X29mX3NleHAkNiIsInNleHBfYXJncyQxIiwidGltZV9sZWZ0X2ZpZWxkIiwibmlnaHRfYWN0aW9uc19maWVsZCIsIm5pZ2h0X2FjdGlvbnNfdmFsdWUiLCJ0aW1lX2xlZnRfdmFsdWUiLCJzZXhwX29mX3QkNiIsInZfbmlnaHRfYWN0aW9ucyIsInZfdGltZV9sZWZ0IiwiY29tcGFyZSQ2IiwiYV8wMDciLCJ0X29mX3NleHAkNyIsInBoYXNlX2ZpZWxkIiwiY2FyZHNfZmllbGQiLCJ1c2Vyc19maWVsZCIsImZpZWxkX3NleHAkMyIsImZ2YWx1ZSQxIiwidXNlcnNfdmFsdWUiLCJjYXJkc192YWx1ZSIsInBoYXNlX3ZhbHVlIiwic2V4cF9vZl90JDciLCJ2X3VzZXJzIiwidl9jYXJkcyIsInZfcGhhc2UiLCJhcmckMSIsImJuZHMkMSIsImNvbXBhcmUkNyJdLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdmFuYnJpZXNlbi9pbmNyLWRvbS13ZXJld29sZi9fYnVpbGQvZGVmYXVsdC9wcm90b2NvbC9zdGF0ZS9yZXN1bHRzLm1sIiwiL1VzZXJzL2p2YW5icmllc2VuL2luY3ItZG9tLXdlcmV3b2xmL19idWlsZC9kZWZhdWx0L3Byb3RvY29sL3N0YXRlL25pZ2h0X2FjdGlvbnMubWwiLCIvVXNlcnMvanZhbmJyaWVzZW4vaW5jci1kb20td2VyZXdvbGYvX2J1aWxkL2RlZmF1bHQvcHJvdG9jb2wvc3RhdGUvbmlnaHRfcGhhc2UubWwiLCIvVXNlcnMvanZhbmJyaWVzZW4vaW5jci1kb20td2VyZXdvbGYvX2J1aWxkL2RlZmF1bHQvcHJvdG9jb2wvc3RhdGUvcGhhc2UubWwiLCIvVXNlcnMvanZhbmJyaWVzZW4vaW5jci1kb20td2VyZXdvbGYvX2J1aWxkL2RlZmF1bHQvcHJvdG9jb2wvc3RhdGUvZ2FtZV9zdGF0ZS5tbCJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUdBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ0FFQzs7S0FJQUM7S0FNRkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NWRUM7S0FLQUM7S0FPRkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ1pBQzs7Ozs7Ozs7Ozs7Ozs7O0tDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJSkhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFHQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttRkFDMEI7NkJBRDFCUzs7Ozs7O29CQUFXOzZDQUFYSjs7c0JBQVc7Ozs7Ozs7OzttQkFBNEI7NENBQXZDQTs7cUJBQXVDOzs7Ozs7OztrQkFBdkM7Ozs7Ozs7O2lCQUFXRixlQUFYLEtBQXVDQzs7a0NBQTVCWTtnQ0FBNEJEO1FBQXZDOzs7OzsyQkFBV1o7OEJBQTRCQyxxQ0FDYjtJQUoxQixTQUdBYTs7OztPQUF1Q0c7OztPQUE1QkU7O3lDQUE0QkQ7Z0JBQTVCRSxPQUNlO0lBSjFCLFNBR0FDO01BQXVCLGlDQUF2QkMsYUFBdUI7ZUFBdkJDLFNBQXVCLEtBQXZCRDtNQUF1QixjQUFKRTt1REFBRztNQUFDOztRQUErQjtjQUF0REQ7U0FBc0QsS0FBdEREO1NBQXNEO21CQUFQSzs4REFBTTtRQUFDO01BQS9CLFFBQWM7SUFDWDs7Ozs4QkFEMUI5Qjs7OztJQ0hBOzthQUdFZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEVBQXlFOzZCQUF6RXZCOzs7Ozs7b0JBQWdDOzZDQUFoQ0o7O3NCQUFnQzs7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QixJQUFmakQsTUFIRmlEO2FBR2lCLDBDQUFmakQ7Ozs7NkJBSEZIOzs7Ozs7OztjQUkyQjtxQkFKM0JvRDtlQUkyQixhQUFkNEIsMENBQWE7Y0FBQywyQ0FBekIxRTs7Ozs7O29CQUpGOEM7Ozs7OztjQUt5Qjs7MERBTHpCcEQ7Y0FLeUIsZUFBNkIsVUFMdERBLG1CQUt5Qkk7Ozs7c0JBQXZCOzs7a0JBTEZKOzs7NERBTUU7O2tCQU5Gb0Q7Ozs7cUJBT2UsSUFBYlksTUFQRlosU0FPZSxtQkFBYlk7O2VBTkE7ZUFDQTtlQUNBO2VBQ0E7Z0JBQ0EsU0FHd0I7Ozs7OzRCQVIxQk07Ozs7SUNIQTs7YUFHQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRFQUMwQjs2QkFEMUJqRzs7Ozs7OztxQkFBb0Q7NkNBQXBESjs7dUJBQW9EOzs7OztvQkFBekM7NENBQVhBOztzQkFBVzs7Ozs7bUJBQWlCOzJDQUE1QkE7O3FCQUE0Qjs7Ozs7O2tCQUE1Qjs7Ozs7Ozs7O2dCQUFXc0csZUFBWCxJQUE0QkMsZUFBNUIsSUFBb0RDOztpQ0FBeEJJLG1CQUFqQkM7Z0NBQWlCRCxZQUF3QkQ7UUFBcEQ7Ozs7OzJCQUFXTDs7NEJBQWlCQzsrQkFBd0JDLHNDQUMxQjtJQUoxQixTQUdBTTs7Ozs7T0FBb0Q7O09BQXhCN0Y7eUNBQXdCRDtPQUF6Qzt5Q0FBaUJFO01BQWpCLGlCQUNlO0lBSjFCLFNBR0FrRztNQUFtQixpQ0FBbkJoRyxhQUFtQjtzQkFBbkJBO01BQW1CO1FBQXFCO2FBQXhDQztTQUF3QyxJQUF4Q0Q7U0FBd0M7bUJBQUpFOzJEQUFHO1NBQUM7O2lCQUFvQix1Q0FBNURGO2lCQUF3QzhDO01BQXJCLFFBQU87SUFDQTs7Ozt3QkFEMUJtQzs7VSIsInNvdXJjZXNDb250ZW50IjpbIm9wZW4gQ29yZV9rZXJuZWxcbm9wZW4gR2FtZV90eXBlc1xuXG50eXBlIHQgPSB7IHZvdGVzIDogaW50IFVzZXJuYW1lLk1hcC50OyByb2xlcyA6IENhcmQudCBVc2VybmFtZS5NYXAudCB9XG5bQEBkZXJpdmluZyBzZXhwLCBjb21wYXJlXVxuIiwib3BlbiBHYW1lX3R5cGVzXG5cbm1vZHVsZSBSb2JiZXIgPSBzdHJ1Y3RcbiAgdHlwZSB0ID0geyByb2JiZWQgOiBVc2VybmFtZS50OyBzYXcgOiBDYXJkLnQgfSBbQEBkZXJpdmluZyBzZXhwLCBjb21wYXJlXVxuZW5kXG5cbm1vZHVsZSBTZWVyID0gc3RydWN0XG4gIHR5cGUgdCA9IHtcbiAgICBzYXcgOiBbIGBDZW50ZXJfY2FyZHMgb2YgQ2FyZC50ICogQ2FyZC50IHwgYFVzZXIgb2YgVXNlcm5hbWUudCAqIENhcmQudCBdO1xuICB9XG4gIFtAQGRlcml2aW5nIHNleHAsIGNvbXBhcmVdXG5lbmRcblxudHlwZSB0ID0gUm9iYmVyIG9mIFJvYmJlci50IHwgU2VlciBvZiBTZWVyLnQgW0BAZGVyaXZpbmcgc2V4cCwgY29tcGFyZV1cbiIsIm9wZW4gR2FtZV90eXBlc1xuXG5tb2R1bGUgUm9iYmVyID0gc3RydWN0XG4gIHR5cGUgdCA9IENob29zaW5nX2NhcmQgfCBWaWV3aW5nX25ld19jYXJkIG9mIENhcmQudFxuICBbQEBkZXJpdmluZyBzZXhwLCBjb21wYXJlXVxuZW5kXG5cbm1vZHVsZSBTZWVyID0gc3RydWN0XG4gIHR5cGUgdCA9XG4gICAgfCBDaG9vc2luZ191c2VyX29yX2NlbnRlclxuICAgIHwgVmlld2luZ191c2Vyc19jYXJkIG9mIFVzZXJuYW1lLnQgKiBDYXJkLnRcbiAgICB8IFZpZXdpbmdfY2VudGVyX2NhcmRzIG9mIENhcmQudCAqIENhcmQudFxuICBbQEBkZXJpdmluZyBzZXhwLCBjb21wYXJlXVxuZW5kXG5cbnR5cGUgdCA9IFJvYmJlciBvZiBSb2JiZXIudCB8IFNlZXIgb2YgU2Vlci50IFtAQGRlcml2aW5nIHNleHAsIGNvbXBhcmVdXG4iLCJvcGVuIENvcmVfa2VybmVsXG5vcGVuIEdhbWVfdHlwZXNcblxudHlwZSB0ID1cbiAgfCBOb19nYW1lX2pvaW5lZFxuICB8IFNldHVwXG4gIHwgVmlld19jYXJkIG9mIENhcmQudFxuICB8IE5pZ2h0IG9mIE5pZ2h0X3BoYXNlLnQgb3B0aW9uXG4gIHwgRGF5IG9mIHsgdGltZV9sZWZ0IDogVGltZS5TcGFuLnQ7IG5pZ2h0X2FjdGlvbnMgOiBOaWdodF9hY3Rpb25zLnQgfVxuICB8IFZvdGVcbiAgfCBSZXN1bHRzIG9mIFJlc3VsdHMudFxuW0BAZGVyaXZpbmcgc2V4cCwgY29tcGFyZV1cbiIsIm9wZW4gQ29yZV9rZXJuZWxcbm9wZW4gR2FtZV90eXBlc1xuXG50eXBlIHQgPSB7IHBoYXNlIDogUGhhc2UudDsgY2FyZHMgOiBpbnQgQ2FyZC5NYXAudDsgdXNlcnMgOiBVc2VybmFtZS5TZXQudCB9XG5bQEBkZXJpdmluZyBzZXhwLCBjb21wYXJlXVxuIl19
