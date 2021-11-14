(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Thread_pool_cpu_affinity_I=
      caml_string_of_jsbytes("Thread_pool_cpu_affinity__Import"),
     cst_thread_pool_cpu_affinity=
      caml_string_of_jsbytes("thread_pool_cpu_affinity"),
     cst_thread_pool_cpu_affinity_s=
      caml_string_of_jsbytes("thread_pool_cpu_affinity/src/import.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_thread_pool_cpu_affinity$0=
      caml_string_of_jsbytes("thread_pool_cpu_affinity"),
     cst_thread_pool_cpu_affinity$1=
      caml_string_of_jsbytes("thread_pool_cpu_affinity"),
     cst_Thread_pool_cpu_affinity_I$0=
      caml_string_of_jsbytes("Thread_pool_cpu_affinity__Import"),
     cst_Cpuset=caml_string_of_jsbytes("Cpuset"),
     cst_Inherit=caml_string_of_jsbytes("Inherit"),
     cst_cpuset=caml_string_of_jsbytes("cpuset"),
     cst_inherit=caml_string_of_jsbytes("inherit"),
     cst_Cpuset$0=caml_string_of_jsbytes("Cpuset"),
     cst_Inherit$0=caml_string_of_jsbytes("Inherit"),
     cst_cpuset$0=caml_string_of_jsbytes("cpuset"),
     cst_inherit$0=caml_string_of_jsbytes("inherit"),
     cst_Thread_pool_cpuset=caml_string_of_jsbytes("Thread_pool_cpuset"),
     cst_Thread_pool_cpu_affinity=
      caml_string_of_jsbytes("Thread_pool_cpu_affinity"),
     cst_thread_pool_cpu_affinity$2=
      caml_string_of_jsbytes("thread_pool_cpu_affinity"),
     cst_thread_pool_cpu_affinity_s$0=
      caml_string_of_jsbytes
       ("thread_pool_cpu_affinity/src/thread_pool_cpu_affinity.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_thread_pool_cpu_affinity$3=
      caml_string_of_jsbytes("thread_pool_cpu_affinity"),
     here=
      [0,
       caml_string_of_jsbytes
        ("thread_pool_cpu_affinity/src/thread_pool_cpu_affinity.ml"),
       8,
       132,
       149],
     tp_loc=
      caml_string_of_jsbytes
       ("thread_pool_cpu_affinity/src/thread_pool_cpu_affinity.ml.t"),
     cst_thread_pool_cpu_affinity$4=
      caml_string_of_jsbytes("thread_pool_cpu_affinity"),
     cst_Thread_pool_cpu_affinity$0=
      caml_string_of_jsbytes("Thread_pool_cpu_affinity"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Core_kernel_List=global_data.Core_kernel__List,
     Base_Validate=global_data.Base__Validate,
     Core_kernel_Validated=global_data.Core_kernel__Validated,
     Thread_pool_cpu_affinity=[0];
    caml_register_global
     (28,Thread_pool_cpu_affinity,"Thread_pool_cpu_affinity__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Thread_pool_cpu_affinity_I);
    caml_call1
     (Ppx_bench_lib_Benchmark_accumu[1][1],cst_thread_pool_cpu_affinity);
    caml_call1(Expect_test_collector[4][1],cst_thread_pool_cpu_affinity_s);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_thread_pool_cpu_affinity$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_thread_pool_cpu_affinity$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Thread_pool_cpu_affinity_I$0);
    var Thread_pool_cpu_affinity_Impor=[0];
    caml_register_global
     (33,Thread_pool_cpu_affinity_Impor,"Thread_pool_cpu_affinity__Import");
    caml_call1(Ppx_module_timer_runtime[4],cst_Thread_pool_cpu_affinity);
    caml_call1
     (Ppx_bench_lib_Benchmark_accumu[1][1],cst_thread_pool_cpu_affinity$2);
    caml_call1(Expect_test_collector[4][1],cst_thread_pool_cpu_affinity_s$0);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_thread_pool_cpu_affinity$3,cst$0);
    var
     t_of_sexp=Core_kernel_Int[126][74],
     sexp_of_t=Core_kernel_Int[126][75],
     _b_=[0,caml_string_of_jsbytes("Cpuset")],
     _c_=[0,caml_string_of_jsbytes("Inherit")],
     _a_=[0,1];
    function validate(t)
     {var
       _j_=Core_kernel_Int[7],
       _k_=caml_call1(Core_kernel_Int[126][15],t),
       _l_=caml_call2(Core_kernel_List[71],_k_,_j_),
       _m_=caml_call2(Base_Validate[9],cst_Thread_pool_cpuset,_l_),
       _n_=caml_call1(Core_kernel_Int[126][4],t),
       _o_=caml_call2(Core_kernel_Int[120],_a_,_n_);
      return caml_call2(Base_Validate[29],_o_,_m_)}
    var
     include=
      caml_call1
       (Core_kernel_Validated[2],[0,t_of_sexp,sexp_of_t,here,validate]),
     t_of_sexp$0=include[1],
     sexp_of_t$0=include[2],
     create=include[3],
     create_exn=include[4],
     raw=include[5];
    function equal(t1,t2)
     {var _h_=caml_call1(raw,t2),_i_=caml_call1(raw,t1);
      return caml_call2(Core_kernel_Int[126][26],_i_,_h_)}
    var Cpuset=[0,t_of_sexp$0,sexp_of_t$0,create,create_exn,raw,equal];
    function t_of_sexp$1(sexp)
     {if(0 === sexp[0])
       {var _d_=sexp[1],switch$0=0;
        if(caml_string_notequal(_d_,cst_Cpuset))
         {var switch$1=0;
          if(caml_string_notequal(_d_,cst_Inherit))
           if(caml_string_notequal(_d_,cst_cpuset))
            {if(caml_string_notequal(_d_,cst_inherit))
              {switch$0 = 1;switch$1 = 1}}
           else
            switch$1 = 1;
          if(! switch$1)return 0}
        if(! switch$0)
         return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc,sexp)}
      else
       {var _e_=sexp[1];
        if(! _e_)return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc,sexp);
        var _f_=_e_[1];
        if(0 !== _f_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc,sexp);
        var _g_=_f_[1],switch$2=0;
        if(caml_string_notequal(_g_,cst_Cpuset$0))
         {var switch$3=0;
          if(caml_string_notequal(_g_,cst_Inherit$0))
           if(caml_string_notequal(_g_,cst_cpuset$0))
            {if(caml_string_notequal(_g_,cst_inherit$0))
              {switch$2 = 1;switch$3 = 1}}
           else
            switch$3 = 1;
          if(! switch$3)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)}
        if(! switch$2)
         {var sexp_args=_e_[2];
          if(sexp_args && ! sexp_args[2])
           {var v0=sexp_args[1],v0$0=caml_call1(Cpuset[1],v0);return [0,v0$0]}
          return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc,_g_,sexp)}}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc,sexp)}
    function sexp_of_t$1(param)
     {if(param)
       {var v0=param[1],v0$0=caml_call1(Cpuset[2],v0);
        return [1,[0,_b_,[0,v0$0,0]]]}
      return _c_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_thread_pool_cpu_affinity$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Thread_pool_cpu_affinity$0);
    var Thread_pool_cpu_affinity$0=[0,Cpuset,t_of_sexp$1,sexp_of_t$1];
    caml_register_global
     (39,Thread_pool_cpu_affinity$0,"Thread_pool_cpu_affinity");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ0aHJlYWRfcG9vbF9jcHVfYWZmaW5pdHkuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
