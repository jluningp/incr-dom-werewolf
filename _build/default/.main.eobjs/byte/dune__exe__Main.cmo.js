(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Dune_exe_Main=caml_string_of_jsbytes("Dune__exe__Main"),
     cst_app=caml_string_of_jsbytes("app"),
     cst_Dune_exe_Main$0=caml_string_of_jsbytes("Dune__exe__Main"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Dune_exe_App=global_data.Dune__exe__App,
     Incr_dom_Start_app=global_data.Incr_dom__Start_app;
    caml_call1(Ppx_module_timer_runtime[4],cst_Dune_exe_Main);
    caml_call5
     (Incr_dom_Start_app[1],
      0,
      0,
      cst_app,
      Dune_exe_App[4],
      [0,
       Dune_exe_App[1],
       [0,Dune_exe_App[3][2]],
       Dune_exe_App[2],
       Dune_exe_App[5],
       Dune_exe_App[6]]);
    caml_call1(Ppx_module_timer_runtime[5],cst_Dune_exe_Main$0);
    var Dune_exe_Main=[0];
    runtime.caml_register_global(6,Dune_exe_Main,"Dune__exe__Main");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9ieXRlL2R1bmVfX2V4ZV9fTWFpbi5jbW8uanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdmFuYnJpZXNlbi9pbmNyLWRvbS13ZXJld29sZi9fYnVpbGQvZGVmYXVsdC9tYWluLm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLRTs7Ozs7Ozs7Ozs7Ozs7O1UiLCJzb3VyY2VzQ29udGVudCI6WyJvcGVuISBDb3JlX2tlcm5lbFxub3BlbiEgSW5jcl9kb21cbm9wZW4hIEpzX29mX29jYW1sXG5cbmxldCAoKSA9XG4gIFN0YXJ0X2FwcC5zdGFydFxuICAgIChtb2R1bGUgQXBwKVxuICAgIH5iaW5kX3RvX2VsZW1lbnRfd2l0aF9pZDpcImFwcFwiIH5pbml0aWFsX21vZGVsOkFwcC5pbml0aWFsX21vZGVsXG4iXX0=
