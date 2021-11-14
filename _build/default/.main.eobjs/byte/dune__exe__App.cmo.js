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
     cst_hello_world=caml_string_of_jsbytes("hello world"),
     cst_Dune_exe_App=caml_string_of_jsbytes("Dune__exe__App"),
     cst_Dune_exe_App$0=caml_string_of_jsbytes("Dune__exe__App"),
     Core_kernel_Nothing=global_data.Core_kernel__Nothing,
     Virtual_dom_Node=global_data.Virtual_dom__Node,
     Incr_dom_Component=global_data.Incr_dom__Component,
     Incr_dom_Incr=global_data.Incr_dom__Incr,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Core_kernel=global_data.Core_kernel;
    caml_call1(Ppx_module_timer_runtime[4],cst_Dune_exe_App);
    var
     cutoff=Core_kernel[231],
     Model=[0,cutoff],
     State=[0],
     t_of_sexp=Core_kernel_Nothing[11],
     sexp_of_t=Core_kernel_Nothing[12],
     Action=[0,t_of_sexp,sexp_of_t],
     initial_model=0;
    function on_startup(param,model){return Async_kernel_Deferred[18]}
    function create(model,param,_a_)
     {function _b_(model)
       {function apply_action(action,param,_c_)
         {return caml_call1(Core_kernel_Nothing[2],action)}
        var view=caml_call1(Virtual_dom_Node[4],cst_hello_world);
        return caml_call5
                (Incr_dom_Component[6],[0,apply_action],0,0,model,view)}
      return caml_call2(Incr_dom_Incr[76][4][5],model,_b_)}
    caml_call1(Ppx_module_timer_runtime[5],cst_Dune_exe_App$0);
    var Dune_exe_App=[0,Model,State,Action,initial_model,on_startup,create];
    runtime.caml_register_global(10,Dune_exe_App,"Dune__exe__App");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9ieXRlL2R1bmVfX2V4ZV9fQXBwLmNtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJjdXRvZmYiLCJ0X29mX3NleHAiLCJzZXhwX29mX3QiLCJpbml0aWFsX21vZGVsIiwib25fc3RhcnR1cCIsIm1vZGVsIiwiY3JlYXRlIiwiYXBwbHlfYWN0aW9uIiwiYWN0aW9uIiwidmlldyJdLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdmFuYnJpZXNlbi9pbmNyLWRvbS13ZXJld29sZi9fYnVpbGQvZGVmYXVsdC9hcHAubWwiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FPTUE7OztLQVFKQzs7O0tBR0VFO2FBRUFDLGlCQUE4QkMsT0FBUyxnQ0FBYTthQUVwREMsT0FBT0Q7TUFDVCxhQUNRQTtRQUNSLFNBQUlFLGFBQWFDO1VBQ2YseUNBRGVBLE9BQ2dCO1FBRXRCLElBQVBDLEtBQU87OzBDQUhQRixrQkFESUYsTUFJSkksS0FDcUM7TUFOekMsMENBRFNKLFVBT2dDOzsyQ0FYdkNGLGNBRUFDLFdBRUFFOztVIiwic291cmNlc0NvbnRlbnQiOlsib3BlbiEgQ29yZV9rZXJuZWxcbm9wZW4hIEFzeW5jX2tlcm5lbFxub3BlbiBJbmNyX2RvbVxuXG5tb2R1bGUgTW9kZWwgPSBzdHJ1Y3RcbiAgdHlwZSB0ID0gdW5pdFxuXG4gIGxldCBjdXRvZmYgPSBwaHlzX2VxdWFsXG5lbmRcblxubW9kdWxlIFN0YXRlID0gc3RydWN0XG4gIHR5cGUgdCA9IHVuaXRcbmVuZFxuXG5tb2R1bGUgQWN0aW9uID0gc3RydWN0XG4gIHR5cGUgdCA9IE5vdGhpbmcudCBbQEBkZXJpdmluZyBzZXhwXVxuZW5kXG5cbmxldCBpbml0aWFsX21vZGVsID0gKClcblxubGV0IG9uX3N0YXJ0dXAgfnNjaGVkdWxlX2FjdGlvbjpfIF9tb2RlbCA9IERlZmVycmVkLnVuaXRcblxubGV0IGNyZWF0ZSBtb2RlbCB+b2xkX21vZGVsOl8gfmluamVjdDpfID1cbiAgbGV0IG9wZW4gSW5jci5MZXRfc3ludGF4IGluXG4gIGxldCVtYXAgbW9kZWwgPSBtb2RlbCBpblxuICBsZXQgYXBwbHlfYWN0aW9uIGFjdGlvbiBfIH5zY2hlZHVsZV9hY3Rpb246XyA9XG4gICAgTm90aGluZy51bnJlYWNoYWJsZV9jb2RlIGFjdGlvblxuICBpblxuICBsZXQgdmlldyA9IFZkb20uTm9kZS50ZXh0IFwiaGVsbG8gd29ybGRcIiBpblxuICBDb21wb25lbnQuY3JlYXRlIH5hcHBseV9hY3Rpb24gbW9kZWwgdmlld1xuIl19
