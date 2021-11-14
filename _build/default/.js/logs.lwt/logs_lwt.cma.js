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
     Logs=global_data.Logs,
     Lwt=global_data.Lwt,
     _b_=
      [0,
       [18,[1,[0,0,caml_string_of_jsbytes("")]],[15,[17,0,0]]],
       caml_string_of_jsbytes("@[%a@]")],
     _a_=
      [0,
       [18,[1,[0,0,caml_string_of_jsbytes("")]],[15,[17,0,0]]],
       caml_string_of_jsbytes("@[%a@]")];
    function kmsg(k,opt,level,msgf)
     {if(opt)var sth=opt[1],src=sth;else var src=Logs[6];
      var match=caml_call1(Logs[7][4],src);
      if(match)
       {var level$0=match[1];
        if(level$0 < level)
         {if(1 === level)
           caml_call1(Logs[25],0);
          else
           if(2 === level)caml_call1(Logs[26],0);
          return caml_call1(k,0)}
        if(1 === level)
         caml_call1(Logs[25],0);
        else
         if(2 === level)caml_call1(Logs[26],0);
        var
         match$0=caml_call1(Lwt[1],0),
         unblock=match$0[2],
         ret=match$0[1],
         k$0=function(param){return caml_call2(Lwt[6],ret,k)},
         over=function(param){return caml_call2(Lwt[44],unblock,0)};
        return caml_call5(Logs[24],src,level,over,k$0,msgf)}
      return caml_call1(k,0)}
    function kunit(param){return caml_call1(Lwt[4],0)}
    function msg(src,level,msgf){return kmsg(kunit,src,level,msgf)}
    function app(src,msgf){return kmsg(kunit,src,0,msgf)}
    function err(src,msgf){return kmsg(kunit,src,1,msgf)}
    function warn(src,msgf){return kmsg(kunit,src,2,msgf)}
    function info(src,msgf){return kmsg(kunit,src,3,msgf)}
    function debug(src,msgf){return kmsg(kunit,src,4,msgf)}
    function on_error(src,opt,header,tags,pp,use,t)
     {if(opt)var sth=opt[1],level=sth;else var level=1;
      function _h_(param)
       {if(0 === param[0]){var v=param[1];return caml_call1(Lwt[4],v)}
        var e=param[1];
        function _i_(m){return caml_call5(m,header,tags,_a_,pp,e)}
        return kmsg(function(param){return caml_call1(use,e)},src,level,_i_)}
      return caml_call2(Lwt[6],t,_h_)}
    function on_error_msg(src,opt,header,tags,use,t)
     {if(opt)var sth=opt[1],level=sth;else var level=1;
      function _g_(param)
       {if(0 === param[0]){var v=param[1];return caml_call1(Lwt[4],v)}
        var match=param[1],e=match[2];
        return kmsg
                (use,
                 src,
                 level,
                 function(m){return caml_call5(m,header,tags,_b_,Logs[27],e)})}
      return caml_call2(Lwt[6],t,_g_)}
    function src_log(src)
     {function msg$0(level,msgf){return msg([0,src],level,msgf)}
      function kmsg$0(over,k,level,msgf){return kmsg(k,[0,src],level,msgf)}
      function app(msgf){return msg$0(0,msgf)}
      function err(msgf){return msg$0(1,msgf)}
      function warn(msgf){return msg$0(2,msgf)}
      function info(msgf){return msg$0(3,msgf)}
      function debug(msgf){return msg$0(4,msgf)}
      function on_error$0(level,header,tags,pp,use)
       {var _e_=[0,src];
        return function(_f_)
         {return on_error(_e_,level,header,tags,pp,use,_f_)}}
      function on_error_msg$0(level,header,tags,use)
       {var _c_=[0,src];
        return function(_d_)
         {return on_error_msg(_c_,level,header,tags,use,_d_)}}
      return [0,
              msg$0,
              app,
              err,
              warn,
              info,
              debug,
              kmsg$0,
              on_error$0,
              on_error_msg$0]}
    var
     Logs_lwt=
      [0,msg,app,err,warn,info,debug,kmsg,on_error,on_error_msg,src_log];
    runtime.caml_register_global(4,Logs_lwt,"Logs_lwt");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJsb2dzX2x3dC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
