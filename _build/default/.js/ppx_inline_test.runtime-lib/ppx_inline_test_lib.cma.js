(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_sys_argv=runtime.caml_sys_argv,
     caml_sys_getenv=runtime.caml_sys_getenv,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_inline_tests_runner_exe=
      caml_string_of_jsbytes("inline_tests_runner.exe"),
     cst$10=caml_string_of_jsbytes(""),
     cst$8=caml_string_of_jsbytes("\n"),
     cst$9=caml_string_of_jsbytes(" "),
     cst$7=caml_string_of_jsbytes(""),
     cst_ppx_inline_test_cannot_use=
      caml_string_of_jsbytes
       ("ppx_inline_test: cannot use -list-partition or -partition without specifying a partition at preprocessing time"),
     cst$5=caml_string_of_jsbytes("\n"),
     cst$6=caml_string_of_jsbytes(" "),
     cst$3=caml_string_of_jsbytes("\n"),
     cst_T_MODULE_at=caml_string_of_jsbytes("T_MODULE at "),
     cst_in_TES=caml_string_of_jsbytes("  in TES"),
     cst$4=caml_string_of_jsbytes(""),
     cst_inline_tests_log$0=caml_string_of_jsbytes("inline_tests.log"),
     cst_inline_tests_log=caml_string_of_jsbytes("inline_tests.log"),
     cst$1=caml_string_of_jsbytes(""),
     cst$2=caml_string_of_jsbytes(""),
     cst$0=caml_string_of_jsbytes(""),
     cst_success=caml_string_of_jsbytes("success"),
     cst_failure=caml_string_of_jsbytes("failure"),
     cst_error=caml_string_of_jsbytes("error"),
     enable_everything=[0,0,0],
     cst_FORCE_DROP_INLINE_TEST=
      caml_string_of_jsbytes("FORCE_DROP_INLINE_TEST"),
     cst=caml_string_of_jsbytes(""),
     cst_inline_test_runner=caml_string_of_jsbytes("inline-test-runner"),
     cst_inline_test_runner$0=caml_string_of_jsbytes("inline-test-runner"),
     cst_Path_to_the_root_of_the_so=
      caml_string_of_jsbytes(" Path to the root of the source tree"),
     cst_source_tree_root=caml_string_of_jsbytes("-source-tree-root"),
     cst_Allow_output_patterns_in_t=
      caml_string_of_jsbytes(" Allow output patterns in tests expectations"),
     cst_allow_output_patterns=
      caml_string_of_jsbytes("-allow-output-patterns"),
     cst_Diff_command_for_tests_tha=
      caml_string_of_jsbytes
       (" Diff command for tests that require diffing (use - to disable diffing)"),
     cst_diff_cmd=caml_string_of_jsbytes("-diff-cmd"),
     cst_Update_expect_tests_in_pla=
      caml_string_of_jsbytes(" Update expect tests in place"),
     cst_in_place=caml_string_of_jsbytes("-in-place"),
     cst_Summarize_tests_without_us=
      caml_string_of_jsbytes(" Summarize tests without using color"),
     cst_no_color=caml_string_of_jsbytes("-no-color"),
     cst_location_Run_only_the_test=
      caml_string_of_jsbytes
       ('location Run only the tests specified by all the -only-test options.\n                      Locations can be one of these forms:\n                      - file.ml\n                      - file.ml:line_number\n                      - File "file.ml"\n                      - File "file.ml", line 23\n                      - File "file.ml", line 23, characters 2-3'),
     cst_only_test=caml_string_of_jsbytes("-only-test"),
     cst_tag_Only_run_tests_tagged_=
      caml_string_of_jsbytes
       ("tag Only run tests tagged with [tag] (overrides previous -drop-tag)"),
     cst_require_tag=caml_string_of_jsbytes("-require-tag"),
     cst_tag_Only_run_tests_not_tag=
      caml_string_of_jsbytes
       ("tag Only run tests not tagged with [tag] (overrides previous -require-tag)"),
     cst_drop_tag=caml_string_of_jsbytes("-drop-tag"),
     cst_Log_the_tests_run_in_inlin=
      caml_string_of_jsbytes(" Log the tests run in inline_tests.log"),
     cst_log=caml_string_of_jsbytes("-log"),
     cst_Show_the_number_of_tests_r=
      caml_string_of_jsbytes(" Show the number of tests ran"),
     cst_show_counts=caml_string_of_jsbytes("-show-counts"),
     cst_End_with_an_error_if_no_te=
      caml_string_of_jsbytes(" End with an error if no tests were run"),
     cst_strict=caml_string_of_jsbytes("-strict"),
     cst_Run_tests_only_up_to_the_f=
      caml_string_of_jsbytes
       (" Run tests only up to the first error (doesn't work for expect tests)"),
     cst_stop_on_error=caml_string_of_jsbytes("-stop-on-error"),
     cst_Show_the_tests_as_they_run=
      caml_string_of_jsbytes(" Show the tests as they run"),
     cst_verbose=caml_string_of_jsbytes("-verbose"),
     cst_Only_run_the_tests_in_the_=
      caml_string_of_jsbytes(" Only run the tests in the given partition"),
     cst_partition=caml_string_of_jsbytes("-partition"),
     cst_Lists_all_the_partitions_t=
      caml_string_of_jsbytes
       (" Lists all the partitions that contain at least one test or test_module"),
     cst_list_partitions=caml_string_of_jsbytes("-list-partitions"),
     cst_Do_not_run_tests_but_show_=
      caml_string_of_jsbytes
       (" Do not run tests but show what would have been run"),
     cst_list_test_names=caml_string_of_jsbytes("-list-test-names"),
     am_running_inline_test_env_var=
      caml_string_of_jsbytes("TESTING_FRAMEWORK"),
     cst_PPX_INLINE_TEST_LIB_AM_RUN=
      caml_string_of_jsbytes("PPX_INLINE_TEST_LIB_AM_RUNNING_INLINE_TEST"),
     cst_inline_test=caml_string_of_jsbytes("inline-test"),
     Stdlib_list=global_data.Stdlib__list,
     Stdlib=global_data.Stdlib,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_filename=global_data.Stdlib__filename,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_random=global_data.Stdlib__random,
     Base_Random=global_data.Base__Random,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Base_Int63=global_data.Base__Int63,
     Base_Exn=global_data.Base__Exn,
     Time_now=global_data.Time_now,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Stdlib_scanf=global_data.Stdlib__scanf,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_arg=global_data.Stdlib__arg,
     Stdlib_array=global_data.Stdlib__array,
     Base=global_data.Base,
     Ppx_inline_test_lib=[0];
    caml_register_global(95,Ppx_inline_test_lib,"Ppx_inline_test_lib");
    var
     _D_=
      [0,[12,32,[2,0,[12,58,[4,0,0,0,0]]]],caml_string_of_jsbytes(" %s:%d")],
     _E_=[0,[12,32,[2,0,0]],caml_string_of_jsbytes(" %s")],
     _y_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("inline_tests_runner.exe is not supposed to be run by hand, you \nshould run the inline_tests_runner script instead.\n"),
        [10,0]],
       caml_string_of_jsbytes
        ("inline_tests_runner.exe is not supposed to be run by hand, you \nshould run the inline_tests_runner script instead.\n%!")],
     _z_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("You are doing something unexpected with the tests. No tests have \nbeen run. You should use the inline_tests_runner script to run \ntests.\n"),
        [10,0]],
       caml_string_of_jsbytes
        ("You are doing something unexpected with the tests. No tests have \nbeen run. You should use the inline_tests_runner script to run \ntests.\n%!")],
     _A_=[0,[2,0,[12,10,0]],caml_string_of_jsbytes("%s\n")],
     _B_=
      [0,
       [4,
        0,
        0,
        0,
        [11,
         caml_string_of_jsbytes(" tests ran, "),
         [4,0,0,0,[11,caml_string_of_jsbytes(" test_modules ran\n"),[10,0]]]]],
       caml_string_of_jsbytes("%d tests ran, %d test_modules ran\n%!")],
     _C_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("ppx_inline_test error: the following -only-test flags matched nothing:"),
        0],
       caml_string_of_jsbytes
        ("ppx_inline_test error: the following -only-test flags matched nothing:")],
     _F_=
      [0,
       [11,caml_string_of_jsbytes(".\n"),[10,0]],
       caml_string_of_jsbytes(".\n%!")],
     _G_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("ppx_inline_test error: no tests have been run.\n"),
        [10,0]],
       caml_string_of_jsbytes
        ("ppx_inline_test error: no tests have been run.\n%!")],
     _I_=
      [0,
       [11,caml_string_of_jsbytes("T_MODULES"),0],
       caml_string_of_jsbytes("T_MODULES")],
     _J_=
      [0,
       [11,
        caml_string_of_jsbytes(", "),
        [4,0,0,0,[11,caml_string_of_jsbytes(" TES"),0]]],
       caml_string_of_jsbytes(", %d TES")],
     _H_=
      [0,
       [11,
        caml_string_of_jsbytes("FAILED "),
        [4,
         0,
         0,
         0,
         [11,
          caml_string_of_jsbytes(" / "),
          [4,0,0,0,[11,caml_string_of_jsbytes(" tests"),[2,0,[12,10,[10,0]]]]]]]],
       caml_string_of_jsbytes("FAILED %d / %d tests%s\n%!")],
     _w_=
      [0,
       [11,
        caml_string_of_jsbytes("T_MODULE at "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(" threw"),
          [2,
           0,
           [2,0,[11,caml_string_of_jsbytes(".\n"),[2,0,[2,0,[12,10,[10,0]]]]]]]]]],
       caml_string_of_jsbytes("T_MODULE at %s threw%s%s.\n%s%s\n%!")],
     _x_=
      [0,[11,caml_string_of_jsbytes("TES"),0],caml_string_of_jsbytes("TES")],
     _t_=
      [0,
       [11,
        caml_string_of_jsbytes(" ("),
        [8,[0,0,0],0,[0,3],[11,caml_string_of_jsbytes(" sec)\n"),[10,0]]]],
       caml_string_of_jsbytes(" (%.3f sec)\n%!")],
     _r_=[0,[2,0,[12,10,[2,0,0]]],caml_string_of_jsbytes("%s\n%s")],
     _s_=[0,[2,0,[10,0]],caml_string_of_jsbytes("%s%!")],
     _v_=
      [0,
       [2,0,[11,caml_string_of_jsbytes(" is false.\n"),[2,0,[12,10,[10,0]]]]],
       caml_string_of_jsbytes("%s is false.\n%s\n%!")],
     _u_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(" threw"),
         [2,
          0,
          [2,0,[11,caml_string_of_jsbytes(".\n"),[2,0,[2,0,[12,10,[10,0]]]]]]]]],
       caml_string_of_jsbytes("%s threw%s%s.\n%s%s\n%!")],
     _q_=[0,[2,0,[10,0]],caml_string_of_jsbytes("%s%!")],
     _p_=[0,[2,0,[10,0]],caml_string_of_jsbytes("%s%!")],
     _o_=[0,[12,10,[2,0,[12,10,[10,0]]]],caml_string_of_jsbytes("\n%s\n%!")],
     _S_=
      [0,
       [11,
        caml_string_of_jsbytes("Argument "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes
           (" doesn't fit the format filename[:line_number]\n"),
          [10,0]]]],
       caml_string_of_jsbytes
        ("Argument %s doesn't fit the format filename[:line_number]\n%!")],
     _O_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": unexpected anonymous argument "),
         [2,0,[12,10,[10,0]]]]],
       caml_string_of_jsbytes("%s: unexpected anonymous argument %s\n%!")],
     _g_=
      [0,
       [11,
        caml_string_of_jsbytes(" File "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(" , line "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(" , characters "),
            [4,
             0,
             0,
             0,
             [11,caml_string_of_jsbytes(" - "),[4,0,0,0,[12,32,[10,0]]]]]]]]]],
       caml_string_of_jsbytes(" File %S , line %d , characters %d - %d %!")],
     _f_=
      [0,
       [11,
        caml_string_of_jsbytes(" File "),
        [3,0,[11,caml_string_of_jsbytes(" , line "),[4,0,0,0,[12,32,[10,0]]]]]],
       caml_string_of_jsbytes(" File %S , line %d %!")],
     _e_=
      [0,
       [11,caml_string_of_jsbytes(" File "),[3,0,[12,32,[10,0]]]],
       caml_string_of_jsbytes(" File %S %!")],
     _d_=
      [0,
       [11,
        caml_string_of_jsbytes("File "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(", line "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", characters "),
            [4,0,0,0,[12,45,[4,0,0,0,[2,0,0]]]]]]]]],
       caml_string_of_jsbytes("File %S, line %d, characters %d-%d%s")],
     _a_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _b_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _N_=
      [0,
       [2,
        0,
        [12,32,[2,0,[12,32,[2,0,[11,caml_string_of_jsbytes(" [args]"),0]]]]]],
       caml_string_of_jsbytes("%s %s %s [args]")],
     _n_=[0,187165616,545942154],
     _K_=[0,187165616,-863538453];
    function to_string(param)
     {switch(param)
       {case 0:return cst_success;
        case 1:return cst_failure;
        default:return cst_error}}
    function combine(t1,t2)
     {var switch$0=0;
      switch(t1)
       {case 0:if(! t2)return 0;break;case 1:break;default:switch$0 = 1}
      if(! switch$0 && 2 !== t2)return 1;
      return 2}
    function combine_all(ts){return caml_call3(Stdlib_list[23],combine,0,ts)}
    var
     test_modules_ran=[0,0],
     test_modules_failed=[0,0],
     tests_ran=[0,0],
     tests_failed=[0,0],
     dynamic_lib=[0,0];
    function entire_module_disabled(t,tags)
     {var _bY_=t[2];
      function _bZ_(dropped){return caml_call2(Stdlib_list[34],dropped,tags)}
      return caml_call2(Stdlib_list[31],_bZ_,_bY_)}
    function disabled(t,tags)
     {var _bT_=t[1];
      function _bU_(req){return 1 - caml_call2(Stdlib_list[34],req,tags)}
      var _bV_=caml_call2(Stdlib_list[31],_bU_,_bT_);
      if(_bV_)return _bV_;
      var _bW_=t[2];
      function _bX_(dropped){return caml_call2(Stdlib_list[34],dropped,tags)}
      return caml_call2(Stdlib_list[31],_bX_,_bW_)}
    var action=[0,-950194894];
    try
     {caml_sys_getenv(cst_FORCE_DROP_INLINE_TEST);var _$_=1,force_drop=_$_}
    catch(_bS_)
     {_bS_ = caml_wrap_exception(_bS_);
      if(_bS_ !== Stdlib[8])throw _bS_;
      var force_drop=0}
    function get(param){return force_drop?-950194894:action[1]}
    function set(v){action[1] = v;return 0}
    var _c_=caml_call2(Stdlib_hashtbl[1],0,23),current=[0,cst];
    function found_test(param)
     {var
       _bQ_=caml_string_notequal(current[1],cst$0),
       _bR_=_bQ_?1 - caml_call2(Stdlib_hashtbl[9],_c_,current[1]):_bQ_;
      return _bR_?caml_call3(Stdlib_hashtbl[5],_c_,current[1],0):_bR_}
    function is_current(param)
     {if(param){var p=param[1];return caml_string_equal(p,current[1])}
      return 1}
    var current$0=[0,0];
    function current_tags(param)
     {var _bP_=current$0[1];
      function _bN_(m){return m[2]}
      var _bO_=caml_call2(Stdlib_list[17],_bN_,_bP_);
      return caml_call1(Stdlib_list[13],_bO_)}
    var
     verbose=[0,0],
     strict=[0,0],
     show_counts=[0,0],
     list_test_names=[0,0],
     delayed_errors=[0,0],
     stop_on_error=[0,0],
     log=[0,0],
     time_sec=[0,0.],
     use_color=[0,1],
     in_place=[0,0],
     diff_command=[0,0],
     source_tree_root=[0,0],
     allow_output_patterns=[0,0];
    function displayed_descr(descr,filename,line,start_pos,end_pos)
     {return caml_call6
              (Stdlib_printf[4],_d_,filename,line,start_pos,end_pos,descr)}
    function backtrace_indented(by)
     {var str=caml_call1(Stdlib_printexc[6],0);
      if(caml_string_notequal(str,cst$1))
       {var
         len=caml_ml_string_length(str),
         buf=caml_call1(Stdlib_buffer[1],len * 2 | 0),
         indentation=caml_call2(Stdlib_string[1],by,32);
        caml_call2(Stdlib_buffer[14],buf,indentation);
        var _bI_=len - 1 | 0,_bH_=0;
        if(! (_bI_ < 0))
         {var i=_bH_;
          for(;;)
           {var _bJ_=caml_string_get(str,i);
            caml_call2(Stdlib_buffer[10],buf,_bJ_);
            var
             _bK_=10 === caml_string_get(str,i)?1:0,
             _bL_=_bK_?i !== (len - 1 | 0)?1:0:_bK_;
            if(_bL_)caml_call2(Stdlib_buffer[14],buf,indentation);
            var _bM_=i + 1 | 0;
            if(_bI_ !== i){var i=_bM_;continue}
            break}}
        return caml_call1(Stdlib_buffer[2],buf)}
      return cst$2}
    var
     _h_=caml_sys_argv(0),
     match=caml_call1(Stdlib_array[11],_h_),
     switch$0=0;
    if(match)
     {var _i_=match[2];
      if(_i_)
       {var _j_=match[1];
        if(! caml_string_notequal(_i_[1],cst_inline_test_runner))
         {var _M_=_i_[2];
          if(_M_)
           {var rest=_M_[2],lib=_M_[1];
            if(Base[85][1])
             {var
               tests=[0,0],
               list_partitions=[0,0],
               partition=[0,0],
               tag_predicate=[0,enable_everything],
               msg$1=
                caml_call4
                 (Stdlib_printf[4],_N_,_j_,cst_inline_test_runner$0,lib),
               f=
                function(anon)
                 {caml_call3(Stdlib_printf[3],_O_,_j_,anon);
                  return caml_call1(Stdlib[99],1)},
               _P_=0,
               _Q_=
                [0,
                 [0,
                  cst_allow_output_patterns,
                  [2,allow_output_patterns],
                  cst_Allow_output_patterns_in_t],
                 [0,
                  [0,
                   cst_source_tree_root,
                   [4,function(s){source_tree_root[1] = [0,s];return 0}],
                   cst_Path_to_the_root_of_the_so],
                  _P_]],
               _R_=
                [0,
                 [0,cst_no_color,[3,use_color],cst_Summarize_tests_without_us],
                 [0,
                  [0,cst_in_place,[2,in_place],cst_Update_expect_tests_in_pla],
                  [0,
                   [0,
                    cst_diff_cmd,
                    [4,function(s){diff_command[1] = [0,s];return 0}],
                    cst_Diff_command_for_tests_tha],
                   _Q_]]],
               _T_=
                [0,
                 [0,
                  cst_only_test,
                  [4,
                   function(filename)
                    {try
                      {var
                        _bA_=
                         function(file,line,start_pos,end_pos)
                          {return [0,file,[0,line]]},
                        _bB_=[0,caml_call3(Stdlib_scanf[4],filename,_g_,_bA_)],
                        match=_bB_}
                     catch(_bE_)
                      {try
                        {var
                          _by_=function(file,line){return [0,file,[0,line]]},
                          _bz_=[0,caml_call3(Stdlib_scanf[4],filename,_f_,_by_)],
                          match=_bz_}
                       catch(_bF_)
                        {try
                          {var
                            _bw_=function(file){return [0,file,0]},
                            _bx_=[0,caml_call3(Stdlib_scanf[4],filename,_e_,_bw_)],
                            match=_bx_}
                         catch(_bG_){var match=0}}}
                     if(match)
                      var
                       match$0=match[1],
                       index=match$0[2],
                       file=match$0[1],
                       index$0=index,
                       filename$0=file;
                     else
                      if(caml_call2(Stdlib_string[22],filename,58))
                       {var
                         i=caml_call2(Stdlib_string[14],filename,58),
                         filename$1=caml_call3(Stdlib_string[4],filename,0,i),
                         index_string=
                          caml_call3
                           (Stdlib_string[4],
                            filename,
                            i + 1 | 0,
                            (caml_ml_string_length(filename) - i | 0) - 1 | 0);
                        try
                         {var
                           _bC_=runtime.caml_int_of_string(index_string),
                           index$1=_bC_}
                        catch(_bD_)
                         {_bD_ = caml_wrap_exception(_bD_);
                          if(_bD_[1] !== Stdlib[7])throw _bD_;
                          caml_call2(Stdlib_printf[3],_S_,filename);
                          var index$1=caml_call1(Stdlib[99],1)}
                        var index$0=[0,index$1],filename$0=filename$1}
                      else
                       var index$0=0,filename$0=filename;
                     tests[1] = [0,[0,filename$0,index$0,[0,0]],tests[1]];
                     return 0}],
                  cst_location_Run_only_the_test],
                 _R_],
               _U_=
                [0,
                 [0,
                  cst_require_tag,
                  [4,
                   function(s)
                    {var _bu_=tag_predicate[1],_br_=_bu_[2];
                     function _bs_(_bv_){return caml_string_notequal(s,_bv_)}
                     var _bt_=caml_call2(Stdlib_list[39],_bs_,_br_);
                     tag_predicate[1] = [0,[0,s,_bu_[1]],_bt_];
                     return 0}],
                  cst_tag_Only_run_tests_tagged_],
                 _T_],
               _V_=
                [0,
                 [0,
                  cst_drop_tag,
                  [4,
                   function(s)
                    {var _bp_=tag_predicate[1],_bm_=[0,s,_bp_[2]],_bn_=_bp_[1];
                     function _bo_(_bq_){return caml_string_notequal(s,_bq_)}
                     tag_predicate[1]
                     =
                     [0,caml_call2(Stdlib_list[39],_bo_,_bn_),_bm_];
                     return 0}],
                  cst_tag_Only_run_tests_not_tag],
                 _U_],
               _W_=
                [0,
                 [0,cst_verbose,[2,verbose],cst_Show_the_tests_as_they_run],
                 [0,
                  [0,
                   cst_stop_on_error,
                   [2,stop_on_error],
                   cst_Run_tests_only_up_to_the_f],
                  [0,
                   [0,cst_strict,[2,strict],cst_End_with_an_error_if_no_te],
                   [0,
                    [0,
                     cst_show_counts,
                     [2,show_counts],
                     cst_Show_the_number_of_tests_r],
                    [0,
                     [0,
                      cst_log,
                      [0,
                       function(param)
                        {try
                          {runtime.caml_sys_remove(cst_inline_tests_log$0)}
                         catch(_bl_){}
                         log[1] = [0,caml_call1(Stdlib[60],cst_inline_tests_log)];
                         return 0}],
                      cst_Log_the_tests_run_in_inlin],
                     _V_]]]]],
               _X_=
                [0,
                 [0,
                  cst_partition,
                  [4,function(i){partition[1] = [0,i];return 0}],
                  cst_Only_run_the_tests_in_the_],
                 _W_],
               _Y_=
                [0,
                 [0,
                  cst_list_partitions,
                  [0,function(param){list_partitions[1] = 1;return 0}],
                  cst_Lists_all_the_partitions_t],
                 _X_],
               _Z_=
                [0,
                 [0,
                  cst_list_test_names,
                  [0,
                   function(param)
                    {list_test_names[1] = 1;verbose[1] = 1;return 0}],
                  cst_Do_not_run_tests_but_show_],
                 _Y_],
               l=caml_call2(Stdlib_arg[11],0,_Z_),
               argv=caml_call1(Stdlib_array[12],[0,_j_,rest]);
              try
               {caml_call5(Stdlib_arg[3],0,argv,l,f,msg$1)}
              catch(exn)
               {exn = caml_wrap_exception(exn);
                if(exn[1] === Stdlib_arg[8])
                 {var msg=exn[2];
                  caml_call2(Stdlib_printf[3],_a_,msg);
                  caml_call1(Stdlib[99],1)}
                else
                 {if(exn[1] !== Stdlib_arg[7])throw exn;
                  var msg$0=exn[2];
                  caml_call2(Stdlib_printf[2],_b_,msg$0);
                  caml_call1(Stdlib[99],0)}}
              var
               ___=
                list_partitions[1]?-260537174:[0,1025081494,partition[1]];
              set([0,-753295984,[0,[0,lib,tests[1],tag_predicate[1]],___]]);
              switch$0 = 1}}}}}
    var match$0=get(0),_k_=typeof match$0 === "number"?0:1;
    try
     {var switch$1=0;
      caml_sys_getenv(cst_PPX_INLINE_TEST_LIB_AM_RUN);
      switch$1 = 1}
    catch(_bj_)
     {_bj_ = caml_wrap_exception(_bj_);
      if(_bj_ !== Stdlib[8])throw _bj_;
      try
       {var switch$2=0,val=caml_sys_getenv(am_running_inline_test_env_var);
        switch$2 = 1}
      catch(_bk_)
       {_bk_ = caml_wrap_exception(_bk_);
        if(_bk_ !== Stdlib[8])throw _bk_;
        var _l_=0}
      if(switch$2)
       var _L_=caml_string_notequal(val,cst_inline_test)?0:1,_l_=_L_;
      var _m_=_l_}
    if(switch$1)var _m_=1;
    var testing=_k_?_n_:_m_?_K_:822171972;
    function wall_time_clock_ns(param){return caml_call1(Time_now[1],0)}
    function time_without_resetting_random_(f)
     {var before_ns=wall_time_clock_ns(0);
      function _bg_(param)
       {var
         _bh_=wall_time_clock_ns(0),
         _bi_=caml_call2(Base_Int63[48],_bh_,before_ns);
        time_sec[1] = caml_call1(Base_Int63[3],_bi_) / 1000000000.;
        return 0}
      return caml_call2(Base_Exn[12],f,_bg_)}
    var
     saved_caml_random_state=
      [246,
       function(_bf_){return caml_call1(Stdlib_random[11][1],[0,100,200,300])}],
     saved_base_random_state=
      [246,
       function(_be_){return caml_call1(Base_Random[18][2],[0,111,222,333])}];
    function time_and_reset_random_seeds(f)
     {var
       caml_random_state=caml_call1(Stdlib_random[12],0),
       base_random_state=caml_call1(Base_Random[18][4],Base_Random[18][1]),
       _ba_=caml_obj_tag(saved_caml_random_state),
       _bb_=
        250 === _ba_
         ?saved_caml_random_state[1]
         :246 === _ba_
           ?caml_call1(CamlinternalLazy[2],saved_caml_random_state)
           :saved_caml_random_state;
      caml_call1(Stdlib_random[13],_bb_);
      var
       _bc_=caml_obj_tag(saved_base_random_state),
       _bd_=
        250 === _bc_
         ?saved_base_random_state[1]
         :246 === _bc_
           ?caml_call1(CamlinternalLazy[2],saved_base_random_state)
           :saved_base_random_state;
      caml_call1(Base_Random[19],_bd_);
      var result=time_without_resetting_random_(f);
      caml_call1(Stdlib_random[13],caml_random_state);
      caml_call1(Base_Random[19],base_random_state);
      return result}
    function string_of_module_descr(param)
     {var _a6_=current$0[1];
      function _a4_(m){return m[1]}
      var _a5_=caml_call2(Stdlib_list[17],_a4_,_a6_);
      function _a7_(s)
       {var
         _a9_=caml_call1(Stdlib_string[32],s),
         _a__=caml_call2(Stdlib[28],_a9_,cst$3),
         _a$_=caml_call2(Stdlib[28],cst_T_MODULE_at,_a__);
        return caml_call2(Stdlib[28],cst_in_TES,_a$_)}
      var _a8_=caml_call2(Stdlib_list[17],_a7_,_a5_);
      return caml_call2(Stdlib_string[7],cst$4,_a8_)}
    function position_match(def_filename,def_line_number,l)
     {function _aY_(param)
       {var
         used=param[3],
         line_number_opt=param[2],
         filename=param[1],
         position_start=
          caml_ml_string_length(def_filename)
          -
          caml_ml_string_length(filename)
          |
          0,
         _aZ_=0 <= position_start?1:0;
        if(_aZ_)
         {var
           end_of_def_filename=
            caml_call3
             (Stdlib_string[4],
              def_filename,
              position_start,
              caml_ml_string_length(filename)),
           _a0_=caml_string_equal(end_of_def_filename,filename);
          if(_a0_)
           {var
             _a1_=0 === position_start?1:0,
             _a2_=
              _a1_
              ||
              (47 === caml_string_get(def_filename,position_start - 1 | 0)?1:0);
            if(_a2_)
             if(line_number_opt)
              var
               line_number=line_number_opt[1],
               _a3_=caml_equal(def_line_number,line_number);
             else
              var _a3_=1;
            else
             var _a3_=_a2_}
          else
           var _a3_=_a0_;
          var found=_a3_}
        else
         var found=_aZ_;
        if(found)used[1] = 1;
        return found}
      return caml_call2(Stdlib_list[31],_aY_,l)}
    function print_delayed_errors(param)
     {var delayed_errors$0=caml_call1(Stdlib_list[9],delayed_errors[1]);
      if(delayed_errors$0)
       {var _aW_=caml_call2(Stdlib_string[1],70,61);
        caml_call2(Stdlib_printf[3],_o_,_aW_);
        var
         _aX_=
          function(message){return caml_call2(Stdlib_printf[3],_p_,message)};
        return caml_call2(Stdlib_list[15],_aX_,delayed_errors$0)}
      return 0}
    function eprintf_or_delay(fmt)
     {function _aU_(s)
       {if(verbose[1])
         delayed_errors[1] = [0,s,delayed_errors[1]];
        else
         caml_call2(Stdlib_printf[3],_q_,s);
        var _aV_=stop_on_error[1];
        return _aV_?(print_delayed_errors(0),caml_call1(Stdlib[99],2)):_aV_}
      return caml_call2(Stdlib_printf[10],_aU_,fmt)}
    function add_hooks(C,f,param){caml_call1(C[1],0);return caml_call1(f,0)}
    function test
     (config,descr,tags,def_filename,def_line_number,start_pos,end_pos,f)
     {var match=get(0);
      if(typeof match === "number")return 0;
      var
       _aG_=match[2],
       what_to_do=_aG_[2],
       match$0=_aG_[1],
       which_tags=match$0[3],
       only_test_location=match$0[2],
       libname=match$0[1];
      function f$0(_aT_){return add_hooks(config,f,_aT_)}
      function descr$0(param)
       {return displayed_descr
                (descr,def_filename,def_line_number,start_pos,end_pos)}
      var
       _aH_=current_tags(0),
       complete_tags=caml_call2(Stdlib[37],tags,_aH_),
       _aI_=caml_equal([0,libname],dynamic_lib[1]);
      if(_aI_)
       var
        _aJ_=
         only_test_location
          ?position_match(def_filename,def_line_number,only_test_location)
          :1,
        should_run=_aJ_?1 - disabled(which_tags,complete_tags):_aJ_;
      else
       var should_run=_aI_;
      if(should_run)
       {if(typeof what_to_do === "number")return found_test(0);
        var partition=what_to_do[2],_aK_=is_current(partition);
        if(_aK_)
         {var descr$1=descr$0(0);
          tests_ran[1]++;
          var _aL_=log[1];
          if(_aL_)
           {var ch=_aL_[1],_aM_=string_of_module_descr(0);
            caml_call4(Stdlib_printf[1],ch,_r_,descr$1,_aM_)}
          if(verbose[1])caml_call2(Stdlib_printf[2],_s_,descr$1);
          var
           print_time_taken=
            function(param)
             {var _aS_=verbose[1];
              return _aS_?caml_call2(Stdlib_printf[2],_t_,time_sec[1]):_aS_};
          try
           {var
             _aO_=1 - list_test_names[1],
             failed=_aO_?1 - time_and_reset_random_seeds(f$0):_aO_;
            print_time_taken(0);
            if(failed)
             {tests_failed[1]++;
              var
               _aP_=string_of_module_descr(0),
               _aQ_=caml_call2(eprintf_or_delay(_v_),descr$1,_aP_)}
            else
             var _aQ_=failed;
            return _aQ_}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            print_time_taken(0);
            var backtrace=backtrace_indented(2);
            tests_failed[1]++;
            var
             exn_str=caml_call1(Stdlib_printexc[1],exn),
             sep=caml_call2(Stdlib_string[22],exn_str,10)?cst$5:cst$6,
             _aN_=string_of_module_descr(0);
            return caml_call5
                    (eprintf_or_delay(_u_),descr$1,sep,exn_str,backtrace,_aN_)}}
        var _aR_=_aK_}
      else
       var _aR_=should_run;
      return _aR_}
    function set_lib_and_partition(static_lib,partition)
     {if(dynamic_lib[1])return 0;
      dynamic_lib[1] = [0,static_lib];
      var match=get(0);
      if(typeof match === "number")return 0;
      var
       match$0=match[2],
       what_to_do=match$0[2],
       which_tests=match$0[1],
       _aF_=caml_string_equal(which_tests[1],static_lib);
      if(_aF_)
       {var switch$0=0;
        if(typeof what_to_do !== "number" && ! what_to_do[2])
         {var requires_partition=0;switch$0 = 1}
        if(! switch$0)var requires_partition=1;
        if(caml_string_equal(partition,cst$7) && requires_partition)
         return caml_call1(Stdlib[2],cst_ppx_inline_test_cannot_use);
        current[1] = partition;
        return 0}
      return _aF_}
    function unset_lib(static_lib)
     {var _aC_=dynamic_lib[1];
      if(_aC_)
       {var
         lib=_aC_[1],
         _aD_=caml_string_equal(lib,static_lib),
         _aE_=_aD_?(dynamic_lib[1] = 0,0):_aD_;
        return _aE_}
      return 0}
    function test_unit
     (config,descr,tags,filename,line_number,start_pos,end_pos,f)
     {return test
              (config,
               descr,
               tags,
               filename,
               line_number,
               start_pos,
               end_pos,
               function(param){caml_call1(f,0);return 1})}
    function test_module
     (config,descr,tags,def_filename,def_line_number,start_pos,end_pos,f)
     {var match=get(0);
      if(typeof match === "number")return 0;
      var
       _au_=match[2],
       what_to_do=_au_[2],
       match$0=_au_[1],
       which_tags=match$0[3],
       libname=match$0[1];
      function f$0(_aB_){return add_hooks(config,f,_aB_)}
      function descr$0(param)
       {return displayed_descr
                (descr,def_filename,def_line_number,start_pos,end_pos)}
      var
       _av_=current_tags(0),
       partial_tags=caml_call2(Stdlib[37],tags,_av_),
       _aw_=caml_equal([0,libname],dynamic_lib[1]),
       should_run=
        _aw_?1 - entire_module_disabled(which_tags,partial_tags):_aw_;
      if(should_run)
       {if(typeof what_to_do === "number")return found_test(0);
        var partition=what_to_do[2],_ax_=is_current(partition);
        if(_ax_)
         {test_modules_ran[1]++;
          var descr$1=descr$0(0);
          try
           {var
             f$1=function(param){return time_without_resetting_random_(f$0)},
             prev=current$0[1];
            current$0[1] = [0,[0,descr$1,tags],prev];
            try
             {f$1(0);current$0[1] = prev;var _at_=0;return _at_}
            catch(e){e = caml_wrap_exception(e);current$0[1] = prev;throw e}}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var backtrace=backtrace_indented(2);
            test_modules_failed[1]++;
            var
             exn_str=caml_call1(Stdlib_printexc[1],exn),
             sep=caml_call2(Stdlib_string[22],exn_str,10)?cst$8:cst$9,
             _ay_=string_of_module_descr(0),
             _az_=caml_call1(Stdlib_string[32],descr$1);
            return caml_call5
                    (eprintf_or_delay(caml_call2(Stdlib[98],_x_,_w_)),
                     _az_,
                     sep,
                     exn_str,
                     backtrace,
                     _ay_)}}
        var _aA_=_ax_}
      else
       var _aA_=should_run;
      return _aA_}
    function summarize(param)
     {var match=get(0);
      if(typeof match === "number")
       {var switch$0=0;
        if(runtime.caml_notequal(caml_sys_argv(0),[0]))
         {var _ah_=runtime.caml_check_bound(caml_sys_argv(0),0)[1];
          if
           (caml_string_equal
             (caml_call1(Stdlib_filename[13],_ah_),
              cst_inline_tests_runner_exe))
           {caml_call1(Stdlib_printf[3],_y_);switch$0 = 1}}
        if(! switch$0)caml_call1(Stdlib_printf[3],_z_);
        return 2}
      var _ai_=match[2],_aj_=_ai_[1];
      if(typeof _ai_[2] === "number")
       {var
         _ad_=0,
         _ae_=function(k,param,acc){return [0,k,acc]},
         _af_=caml_call3(Stdlib_hashtbl[14],_ae_,_c_,_ad_),
         _ag_=caml_call2(Stdlib_list[53],Stdlib_string[33],_af_),
         _ak_=caml_call1(Stdlib_printf[2],_A_);
        caml_call2(Stdlib_list[15],_ak_,_ag_);
        return 0}
      var _al_=log[1];
      if(_al_){var ch=_al_[1];caml_call1(Stdlib[76],ch)}
      print_delayed_errors(0);
      var _am_=tests_failed[1],_an_=test_modules_failed[1];
      if(0 === _am_ && 0 === _an_)
       {if(show_counts[1])
         caml_call3(Stdlib_printf[3],_B_,tests_ran[1],test_modules_ran[1]);
        var
         _ao_=_aj_[2],
         _ap_=function(param){var used=param[3];return 1 - used[1]},
         unused_tests=caml_call2(Stdlib_list[39],_ap_,_ao_),
         errors=unused_tests?[0,unused_tests]:0;
        if(errors)
         {var tests=errors[1];
          caml_call1(Stdlib_printf[3],_C_);
          var
           _aq_=
            function(param)
             {var line_number_opt=param[2],filename=param[1];
              if(line_number_opt)
               {var line_number=line_number_opt[1];
                return caml_call3(Stdlib_printf[3],_D_,filename,line_number)}
              return caml_call2(Stdlib_printf[3],_E_,filename)};
          caml_call2(Stdlib_list[15],_aq_,tests);
          caml_call1(Stdlib_printf[3],_F_);
          return 2}
        if(0 === tests_ran[1] && strict[1])
         {caml_call1(Stdlib_printf[3],_G_);return 2}
        return 0}
      if(0 === _an_)
       var _ar_=cst$10;
      else
       var
        _as_=caml_call2(Stdlib[98],_J_,_I_),
        _ar_=caml_call2(Stdlib_printf[4],_as_,_an_);
      caml_call4(Stdlib_printf[3],_H_,_am_,tests_ran[1],_ar_);
      return 1}
    var
     use_color$0=use_color[1],
     in_place$0=in_place[1],
     diff_command$0=diff_command[1],
     source_tree_root$0=source_tree_root[1],
     allow_output_patterns$0=allow_output_patterns[1],
     evaluators=[0,[0,summarize,0]];
    function add_evaluator(f){evaluators[1] = [0,f,evaluators[1]];return 0}
    function exit(param)
     {var _aa_=caml_call1(Stdlib_list[9],evaluators[1]);
      function _ab_(f){return caml_call1(f,0)}
      var param$0=combine_all(caml_call2(Stdlib_list[17],_ab_,_aa_));
      switch(param$0)
       {case 0:var _ac_=0;break;case 1:var _ac_=2;break;default:var _ac_=1}
      return caml_call1(Stdlib[99],_ac_)}
    var
     Ppx_inline_test_lib_Runtime=
      [0,
       [0,combine,combine_all,to_string],
       set_lib_and_partition,
       unset_lib,
       test,
       test_unit,
       test_module,
       testing,
       use_color$0,
       in_place$0,
       diff_command$0,
       source_tree_root$0,
       allow_output_patterns$0,
       _m_,
       am_running_inline_test_env_var,
       add_evaluator,
       exit];
    caml_register_global
     (114,Ppx_inline_test_lib_Runtime,"Ppx_inline_test_lib__Runtime");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwcHhfaW5saW5lX3Rlc3RfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
