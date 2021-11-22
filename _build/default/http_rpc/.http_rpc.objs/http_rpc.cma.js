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
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_data$0=caml_string_of_jsbytes("data"),
     cst_key$0=caml_string_of_jsbytes("key"),
     cst_data=caml_string_of_jsbytes("data"),
     cst_key=caml_string_of_jsbytes("key"),
     cst_Http_rpc_Rpc=caml_string_of_jsbytes("Http_rpc__Rpc"),
     cst_http_rpc=caml_string_of_jsbytes("http_rpc"),
     cst_http_rpc_rpc_ml=caml_string_of_jsbytes("http_rpc/rpc.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_http_rpc$0=caml_string_of_jsbytes("http_rpc"),
     cst_http_rpc$1=caml_string_of_jsbytes("http_rpc"),
     cst_Http_rpc_Rpc$0=caml_string_of_jsbytes("Http_rpc__Rpc"),
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Uri=global_data.Uri,
     Async_kernel=global_data.Async_kernel,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Base_Option=global_data.Base__Option,
     Core_kernel_String=global_data.Core_kernel__String,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Http_rpc=[0];
    caml_register_global(11,Http_rpc,"Http_rpc");
    caml_call1(Ppx_module_timer_runtime[4],cst_Http_rpc_Rpc);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_http_rpc);
    caml_call1(Expect_test_collector[4][1],cst_http_rpc_rpc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_http_rpc$0,cst);
    function create(path,send){return [0,path,send]}
    var Client=[0,create];
    function create$0(param)
     {return caml_call3(Core_kernel_String[130][4],0,0,0)}
    function get_response(t,uri)
     {function _h_(key)
       {function _j_(f)
         {function _l_(query)
           {function _n_(param)
             {var
               query$0=caml_call1(Core_kernel_Sexp[73],query),
               _o_=caml_call1(f,query$0);
              return caml_call1(Core_kernel_Sexp[81],_o_)}
            return caml_call1(Core_kernel_Option[57],_n_)}
          var _m_=caml_call2(Uri[19],uri,cst_data);
          return caml_call2(Base_Option[35][4][2],_m_,_l_)}
        var _k_=caml_call2(Core_kernel_Hashtbl[52],t,key);
        return caml_call2(Base_Option[35][4][2],_k_,_j_)}
      var _i_=caml_call2(Uri[19],uri,cst_key);
      return caml_call2(Base_Option[35][4][2],_i_,_h_)}
    var Server=[0,create$0,get_response],Conn=[0,Client,Server];
    function Make(Rpc)
     {function dispatch(conn,query)
       {var
         _b_=caml_call1(Rpc[1][2],query),
         _c_=[0,[0,cst_data$0,[0,caml_call1(Core_kernel_Sexp[81],_b_),0]],0],
         uri=
          caml_call8
           (Uri[10],
            0,
            0,
            0,
            0,
            [0,conn[1]],
            [0,[0,[0,cst_key$0,[0,Rpc[3],0]],_c_]],
            0,
            0);
        function _d_(response)
         {function _f_(param)
           {var _g_=caml_call1(Core_kernel_Sexp[73],response);
            return caml_call1(Rpc[2][1],_g_)}
          return caml_call2(Core_kernel_Or_error[32],0,_f_)}
        var _e_=caml_call1(conn[2],uri);
        return caml_call2(Async_kernel[22][3],_e_,_d_)}
      function register_implementation(conn,f)
       {function _a_(sexp)
         {var query=caml_call1(Rpc[1][1],sexp),response=caml_call1(f,query);
          return caml_call1(Rpc[2][2],response)}
        return caml_call3(Core_kernel_Hashtbl[36],conn,Rpc[3],_a_)}
      return [0,dispatch,register_implementation]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_http_rpc$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Http_rpc_Rpc$0);
    var Http_rpc_Rpc=[0,Conn,Make];
    caml_register_global(24,Http_rpc_Rpc,"Http_rpc__Rpc");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuaHR0cF9ycGMub2Jqcy9odHRwX3JwYy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsiY3JlYXRlIiwicGF0aCIsInNlbmQiLCJjcmVhdGUkMCIsImdldF9yZXNwb25zZSIsInQiLCJ1cmkiLCJrZXkiLCJmIiwicXVlcnkiLCJxdWVyeSQwIiwiZGlzcGF0Y2giLCJjb25uIiwicmVzcG9uc2UiLCJyZWdpc3Rlcl9pbXBsZW1lbnRhdGlvbiIsInNleHAiXSwic291cmNlcyI6WyIvVXNlcnMvanZhbmJyaWVzZW4vaW5jci1kb20td2VyZXdvbGYvX2J1aWxkL2RlZmF1bHQvaHR0cF9ycGMvcnBjLm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBOzthQU9RQSxPQUFRQyxLQUFNQyxNQUFPLFVBQWJELEtBQU1DLEtBQXFCO0lBUDNDLGNBT1FGO0lBUFIsU0FhUUc7TUFBWSxtREFBc0I7SUFiMUMsU0FlUUMsYUFBY0MsRUFBT0M7bUJBQ1BDO3FCQUNBQzt1QkFDQUM7WUFDaEI7Y0FDZ0I7dURBRkFBO2VBR0csZUFKSEQsRUFHUkU7Y0FDVywyQ0FBUztZQUY1Qiw2Q0FFNkI7VUFITCwyQkFIREo7VUFHQztRQURKLDJDQUZKRCxFQUNBRTtRQUNJO01BREUsMkJBRENEO01BQ0Q7SUFoQjVCLGNBYVFILFNBRUFDLGNBZlI7O2VBa0RNTyxTQUFVQyxLQUF1Qkg7UUFNRDtrQ0FOQ0E7U0FNaEI7U0FKakI7Ozs7Ozs7ZUFGVUc7Ozs7UUFFVixhQVFNQztVQUNSO1lBQ0ksd0NBRklBO1lBRUosZ0NBQW9EO1VBRHhELGlEQUN5RDtRQUZ0QyxtQkFWUEQsUUFDUk47UUFTZSw4Q0FFc0M7ZUFFdkRRLHdCQUF5QkYsS0FDdkJKO1FBQ0osYUFBOENPO1VBQzlCLCtCQUQ4QkEsTUFFM0Isb0JBSGZQLEVBRUlDO1VBQ1csNEJBQVhJLFNBQ3VCO1FBSC9CLDBDQUYyQkQsZ0JBS0s7Z0JBbkI5QkQsU0FjQUc7SUFNSDs7Ozs7O1UiLCJzb3VyY2VzQ29udGVudCI6WyJvcGVuIENvcmVfa2VybmVsXG5vcGVuIEFzeW5jX2tlcm5lbFxuXG5tb2R1bGUgQ29ubiA9IHN0cnVjdFxuICBtb2R1bGUgQ2xpZW50ID0gc3RydWN0XG4gICAgdHlwZSB0ID0geyBwYXRoIDogc3RyaW5nOyBzZW5kIDogVXJpLnQgLT4gc3RyaW5nIERlZmVycmVkLnQgfVxuXG4gICAgbGV0IGNyZWF0ZSB+cGF0aCB+c2VuZCA9IHsgcGF0aDsgc2VuZCB9XG4gIGVuZFxuXG4gIG1vZHVsZSBTZXJ2ZXIgPSBzdHJ1Y3RcbiAgICB0eXBlIHQgPSAoU2V4cC50IC0+IFNleHAudCkgU3RyaW5nLlRhYmxlLnRcblxuICAgIGxldCBjcmVhdGUgKCkgPSBTdHJpbmcuVGFibGUuY3JlYXRlICgpXG5cbiAgICBsZXQgZ2V0X3Jlc3BvbnNlICh0IDogdCkgdXJpID1cbiAgICAgIGxldCViaW5kLk9wdGlvbiBrZXkgPSBVcmkuZ2V0X3F1ZXJ5X3BhcmFtIHVyaSBcImtleVwiIGluXG4gICAgICBsZXQlYmluZC5PcHRpb24gZiA9IEhhc2h0YmwuZmluZCB0IGtleSBpblxuICAgICAgbGV0JWJpbmQuT3B0aW9uIHF1ZXJ5ID0gVXJpLmdldF9xdWVyeV9wYXJhbSB1cmkgXCJkYXRhXCIgaW5cbiAgICAgIE9wdGlvbi50cnlfd2l0aCAoZnVuICgpIC0+XG4gICAgICAgICAgbGV0IHF1ZXJ5ID0gU2V4cC5vZl9zdHJpbmcgcXVlcnkgaW5cbiAgICAgICAgICBTZXhwLnRvX3N0cmluZyAoZiBxdWVyeSkpXG4gIGVuZFxuZW5kXG5cbm1vZHVsZSB0eXBlIFQgPSBzaWdcbiAgbW9kdWxlIFF1ZXJ5IDogc2lnXG4gICAgdHlwZSB0IFtAQGRlcml2aW5nIHNleHBdXG4gIGVuZFxuXG4gIG1vZHVsZSBSZXNwb25zZSA6IHNpZ1xuICAgIHR5cGUgdCBbQEBkZXJpdmluZyBzZXhwXVxuICBlbmRcblxuICB2YWwgbmFtZSA6IHN0cmluZ1xuZW5kXG5cbm1vZHVsZSB0eXBlIFMgPSBzaWdcbiAgdHlwZSBxdWVyeVxuXG4gIHR5cGUgcmVzcG9uc2VcblxuICB2YWwgZGlzcGF0Y2ggOiBDb25uLkNsaWVudC50IC0+IHF1ZXJ5IC0+IHJlc3BvbnNlIE9yX2Vycm9yLnQgRGVmZXJyZWQudFxuXG4gIHZhbCByZWdpc3Rlcl9pbXBsZW1lbnRhdGlvbiA6IENvbm4uU2VydmVyLnQgLT4gZjoocXVlcnkgLT4gcmVzcG9uc2UpIC0+IHVuaXRcbmVuZFxuXG5tb2R1bGUgTWFrZSAoUnBjIDogVCkgPSBzdHJ1Y3RcbiAgb3BlbiBScGNcblxuICBsZXQgZGlzcGF0Y2ggKGNvbm4gOiBDb25uLkNsaWVudC50KSAocXVlcnkgOiBRdWVyeS50KSA9XG4gICAgbGV0IHVyaSA9XG4gICAgICBVcmkubWFrZSB+cGF0aDpjb25uLnBhdGhcbiAgICAgICAgfnF1ZXJ5OlxuICAgICAgICAgIFtcbiAgICAgICAgICAgIChcImtleVwiLCBbIFJwYy5uYW1lIF0pO1xuICAgICAgICAgICAgKFwiZGF0YVwiLCBbIFNleHAudG9fc3RyaW5nIChRdWVyeS5zZXhwX29mX3QgcXVlcnkpIF0pO1xuICAgICAgICAgIF1cbiAgICAgICAgKClcbiAgICBpblxuICAgIGxldCVtYXAgcmVzcG9uc2UgPSBjb25uLnNlbmQgdXJpIGluXG4gICAgT3JfZXJyb3IudHJ5X3dpdGggKGZ1biAoKSAtPlxuICAgICAgICByZXNwb25zZSB8PiBTZXhwLm9mX3N0cmluZyB8PiBScGMuUmVzcG9uc2UudF9vZl9zZXhwKVxuXG4gIGxldCByZWdpc3Rlcl9pbXBsZW1lbnRhdGlvbiAoY29ubiA6IENvbm4uU2VydmVyLnQpXG4gICAgICB+KGYgOiBRdWVyeS50IC0+IFJlc3BvbnNlLnQpID1cbiAgICBIYXNodGJsLmFkZF9leG4gY29ubiB+a2V5OlJwYy5uYW1lIH5kYXRhOihmdW4gc2V4cCAtPlxuICAgICAgICBsZXQgcXVlcnkgPSBRdWVyeS50X29mX3NleHAgc2V4cCBpblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBmIHF1ZXJ5IGluXG4gICAgICAgIFJlc3BvbnNlLnNleHBfb2ZfdCByZXNwb25zZSlcbmVuZFxuIl19
