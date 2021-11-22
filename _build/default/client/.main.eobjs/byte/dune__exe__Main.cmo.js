(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_app=caml_string_of_jsbytes("app"),
     cst_Dune_exe_Main=caml_string_of_jsbytes("Dune__exe__Main"),
     cst_Dune_exe_Main$0=caml_string_of_jsbytes("Dune__exe__Main"),
     Dune_exe_App=global_data.Dune__exe__App,
     Incr_dom_Start_app=global_data.Incr_dom__Start_app,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Async_js=global_data.Async_js,
     Async_kernel=global_data.Async_kernel;
    caml_call1(Ppx_module_timer_runtime[4],cst_Dune_exe_Main);
    caml_call1(Async_js[3],0);
    function _a_(param)
     {return caml_call5
              (Incr_dom_Start_app[1],
               0,
               0,
               cst_app,
               Dune_exe_App[1][1],
               [0,
                [0,Dune_exe_App[1][2]],
                [0,Dune_exe_App[3][2]],
                [0],
                Dune_exe_App[4],
                Dune_exe_App[6]])}
    var
     _b_=caml_call1(Async_js[6],0),
     _c_=caml_call2(Async_kernel[21],_b_,_a_);
    caml_call1(Async_kernel[6],_c_);
    caml_call1(Ppx_module_timer_runtime[5],cst_Dune_exe_Main$0);
    var Dune_exe_Main=[0];
    runtime.caml_register_global(8,Dune_exe_Main,"Dune__exe__Main");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9ieXRlL2R1bmVfX2V4ZV9fTWFpbi5jbW8uanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdmFuYnJpZXNlbi9pbmNyLWRvbS13ZXJld29sZi9fYnVpbGQvZGVmYXVsdC9jbGllbnQvbWFpbi5tbCJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1FOztNQUdJOzs7Ozs7Ozs7OztpQ0FFaUU7SUFIakU7O0tBQUY7SUFERjs7SUFDSTs7VSIsInNvdXJjZXNDb250ZW50IjpbIm9wZW4hIENvcmVfa2VybmVsXG5vcGVuISBJbmNyX2RvbVxub3BlbiEgSnNfb2Zfb2NhbWxcbm9wZW4gQXN5bmNfa2VybmVsXG5cbmxldCAoKSA9XG4gIEFzeW5jX2pzLmluaXQgKCk7XG4gIGRvbid0X3dhaXRfZm9yXG4gICAgKCBBc3luY19qcy5kb2N1bWVudF9sb2FkZWQgKCkgPj58IGZ1biAoKSAtPlxuICAgICAgU3RhcnRfYXBwLnN0YXJ0XG4gICAgICAgIChtb2R1bGUgQXBwKVxuICAgICAgICB+YmluZF90b19lbGVtZW50X3dpdGhfaWQ6XCJhcHBcIiB+aW5pdGlhbF9tb2RlbDpBcHAuTW9kZWwuaW5pdGlhbCApXG4iXX0=
