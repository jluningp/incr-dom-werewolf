(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Game_rpcs_Rpcs=caml_string_of_jsbytes("Game_rpcs__Rpcs"),
     cst_game_rpcs=caml_string_of_jsbytes("game_rpcs"),
     cst_protocol_rpcs_rpcs_ml=caml_string_of_jsbytes("protocol/rpcs/rpcs.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_game_rpcs$0=caml_string_of_jsbytes("game_rpcs"),
     name=caml_string_of_jsbytes("get-state"),
     cst_game_rpcs$1=caml_string_of_jsbytes("game_rpcs"),
     cst_Game_rpcs_Rpcs$0=caml_string_of_jsbytes("Game_rpcs__Rpcs"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Game_state=global_data.Game_state,
     Game_types_Username=global_data.Game_types__Username,
     Http_rpc_Rpc=global_data.Http_rpc__Rpc,
     Game_rpcs=[0];
    caml_register_global(8,Game_rpcs,"Game_rpcs");
    caml_call1(Ppx_module_timer_runtime[4],cst_Game_rpcs_Rpcs);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_game_rpcs);
    caml_call1(Expect_test_collector[4][1],cst_protocol_rpcs_rpcs_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_game_rpcs$0,cst);
    var
     include=
      caml_call1
       (Http_rpc_Rpc[2],
        [0,
         [0,Game_types_Username[100],Game_types_Username[101]],
         [0,Game_state[1],Game_state[2]],
         name]),
     dispatch=include[1],
     register_implementation=include[2];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_game_rpcs$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Game_rpcs_Rpcs$0);
    var Game_rpcs_Rpcs=[0,[0,dispatch,register_implementation]];
    caml_register_global(16,Game_rpcs_Rpcs,"Game_rpcs__Rpcs");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZ2FtZV9ycGNzLm9ianMvZ2FtZV9ycGNzLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJuYW1lIl0sInNvdXJjZXMiOlsiL1VzZXJzL2p2YW5icmllc2VuL2luY3ItZG9tLXdlcmV3b2xmL19idWlsZC9kZWZhdWx0L3Byb3RvY29sL3JwY3MvcnBjcy5tbCJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7O0tBT1FBOzs7Ozs7Ozs7Ozs7Ozs7SUFQUjs7Ozs7Ozs7O1NBT1FBO0tBUFI7O0lBWUc7Ozs7SUFaSDs7VSIsInNvdXJjZXNDb250ZW50IjpbIm9wZW4gR2FtZV90eXBlc1xuXG5tb2R1bGUgR2V0X3N0YXRlID0gc3RydWN0XG4gIG1vZHVsZSBUID0gc3RydWN0XG4gICAgbW9kdWxlIFF1ZXJ5ID0gVXNlcm5hbWVcbiAgICBtb2R1bGUgUmVzcG9uc2UgPSBHYW1lX3N0YXRlXG5cbiAgICBsZXQgbmFtZSA9IFwiZ2V0LXN0YXRlXCJcbiAgZW5kXG5cbiAgaW5jbHVkZSBUXG4gIGluY2x1ZGUgSHR0cF9ycGMuUnBjLk1ha2UgKFQpXG5lbmRcbiJdfQ==
