(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_int_compare=runtime.caml_int_compare,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_sys_argv=runtime.caml_sys_argv,
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
     cst_undocumented$0=caml_string_of_jsbytes("undocumented"),
     cst_E=caml_string_of_jsbytes("E"),
     partial=[17,0,0],
     partial$0=
      [11,
       caml_string_of_jsbytes("(uid "),
       [4,
        0,
        0,
        0,
        [12,
         41,
         [17,
          0,
          [12,
           32,
           [18,
            [1,
             [0,
              [11,caml_string_of_jsbytes("<1>"),0],
              caml_string_of_jsbytes("<1>")]],
            [11,
             caml_string_of_jsbytes("(doc "),
             [3,0,[12,41,[17,0,[12,41,partial]]]]]]]]]]],
     partial$1=
      [1,
       [0,[11,caml_string_of_jsbytes("<1>"),0],caml_string_of_jsbytes("<1>")]],
     cst_undocumented=caml_string_of_jsbytes("undocumented"),
     cst_app$0=caml_string_of_jsbytes("app"),
     cst_debug$0=caml_string_of_jsbytes("debug"),
     cst_error$0=caml_string_of_jsbytes("error"),
     cst_info$0=caml_string_of_jsbytes("info"),
     cst_quiet$0=caml_string_of_jsbytes("quiet"),
     cst_warning$0=caml_string_of_jsbytes("warning"),
     cst_app=caml_string_of_jsbytes("app"),
     cst_error=caml_string_of_jsbytes("error"),
     cst_warning=caml_string_of_jsbytes("warning"),
     cst_info=caml_string_of_jsbytes("info"),
     cst_debug=caml_string_of_jsbytes("debug"),
     cst_quiet=caml_string_of_jsbytes("quiet"),
     cst_ERROR=caml_string_of_jsbytes("ERROR"),
     cst_WARNING=caml_string_of_jsbytes("WARNING"),
     cst_INFO=caml_string_of_jsbytes("INFO"),
     cst_DEBUG=caml_string_of_jsbytes("DEBUG"),
     cst_application=caml_string_of_jsbytes("application"),
     Stdlib=global_data.Stdlib,
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_map=global_data.Stdlib__map,
     Stdlib_filename=global_data.Stdlib__filename,
     Stdlib_sys=global_data.Stdlib__sys,
     strf=Stdlib_format[129],
     _C_=
      [0,
       [18,[1,[0,0,caml_string_of_jsbytes("")]],[15,[17,0,0]]],
       caml_string_of_jsbytes("@[%a@]")],
     _B_=
      [0,
       [18,[1,[0,0,caml_string_of_jsbytes("")]],[15,[17,0,0]]],
       caml_string_of_jsbytes("@[%a@]")],
     _z_=[0,[17,0,[17,4,0]],caml_string_of_jsbytes("@]@.")],
     _A_=
      [0,
       [15,[18,[1,[0,0,caml_string_of_jsbytes("")]],0]],
       caml_string_of_jsbytes("%a@[")],
     _w_=
      [0,
       [12,91,[2,0,[11,caml_string_of_jsbytes("] "),0]]],
       caml_string_of_jsbytes("[%s] ")],
     _x_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": ["),
         [2,0,[11,caml_string_of_jsbytes("] "),0]]]],
       caml_string_of_jsbytes("%s: [%s] ")],
     _y_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": ["),
         [15,[11,caml_string_of_jsbytes("] "),0]]]],
       caml_string_of_jsbytes("%s: [%a] ")],
     _u_=[0,[12,91,[2,0,[12,93,0]]],caml_string_of_jsbytes("[%s]")],
     _v_=[0,[12,91,[15,[12,93,0]]],caml_string_of_jsbytes("[%a]")],
     _q_=
      [0,
       [17,[0,caml_string_of_jsbytes("@,"),0,0],0],
       caml_string_of_jsbytes("@,")],
     _p_=[0,[15,0],caml_string_of_jsbytes("%a")],
     _r_=
      [0,
       [18,
        [1,
         [0,
          [11,caml_string_of_jsbytes("<1>"),0],
          caml_string_of_jsbytes("<1>")]],
        [12,123,0]],
       caml_string_of_jsbytes("@[<1>{")],
     _s_=[0,[12,125,[17,0,0]],caml_string_of_jsbytes("}@]")],
     _o_=
      [0,
       [11,
        caml_string_of_jsbytes("tag named "),
        [2,0,[11,caml_string_of_jsbytes(" not found in set"),0]]],
       caml_string_of_jsbytes("tag named %s not found in set")],
     _n_=
      [0,
       [18,
        [1,
         [0,
          [11,caml_string_of_jsbytes("<1>"),0],
          caml_string_of_jsbytes("<1>")]],
        [12,
         40,
         [15,
          [17,
           [0,caml_string_of_jsbytes("@ "),1,0],
           [18,
            [1,[0,0,caml_string_of_jsbytes("")]],
            [15,[17,0,[12,41,[17,0,0]]]]]]]]],
       caml_string_of_jsbytes("@[<1>(%a@ @[%a@])@]")],
     _m_=
      [0,
       [11,caml_string_of_jsbytes("tag:"),[2,0,0]],
       caml_string_of_jsbytes("tag:%s")],
     _j_=
      [0,
       [18,
        [1,
         [0,
          [11,caml_string_of_jsbytes("<1>"),0],
          caml_string_of_jsbytes("<1>")]],
        [11,
         caml_string_of_jsbytes("(src"),
         [17,
          [0,caml_string_of_jsbytes("@ "),1,0],
          [18,
           [1,
            [0,
             [11,caml_string_of_jsbytes("<1>"),0],
             caml_string_of_jsbytes("<1>")]],
           [11,
            caml_string_of_jsbytes("(name "),
            [3,
             0,
             [12,
              41,
              [17,
               0,
               [17,
                [0,caml_string_of_jsbytes("@ "),1,0],
                [18,partial$1,partial$0]]]]]]]]]],
       caml_string_of_jsbytes
        ("@[<1>(src@ @[<1>(name %S)@]@ @[<1>(uid %d)@] @[<1>(doc %S)@])@]")],
     _c_=[0,[0,2]],
     _d_=[0,0],
     _e_=[0,[0,3]],
     _f_=[0,[0,1]],
     _g_=[0,[0,4]],
     _h_=[0,[0,0]],
     _b_=
      [0,
       [3,0,[11,caml_string_of_jsbytes(": unknown log level"),0]],
       caml_string_of_jsbytes("%S: unknown log level")],
     _a_=[0,2],
     _k_=[0,caml_string_of_jsbytes("The application log")];
    function pp_print_text(ppf,s)
     {var len=runtime.caml_ml_string_length(s),left=[0,0],right=[0,0];
      function flush(param)
       {var _Z_=caml_call3(Stdlib_string[4],s,left[1],right[1] - left[1] | 0);
        caml_call2(Stdlib_format[13],ppf,_Z_);
        right[1]++;
        left[1] = right[1];
        return 0}
      for(;;)
       {if(right[1] !== len)
         {if(10 === caml_string_get(s,right[1]))
           {flush(0);caml_call2(Stdlib_format[32],ppf,0);continue}
          if(32 === caml_string_get(s,right[1]))
           {flush(0);caml_call2(Stdlib_format[25],ppf,0);continue}
          right[1]++;
          continue}
        var _Y_=left[1] !== len?1:0;
        return _Y_?flush(0):_Y_}}
    var level=[0,_a_];
    function level$0(param){return level[1]}
    function pp_level(ppf,param)
     {switch(param)
       {case 0:return 0;
        case 1:return caml_call2(Stdlib_format[13],ppf,cst_ERROR);
        case 2:return caml_call2(Stdlib_format[13],ppf,cst_WARNING);
        case 3:return caml_call2(Stdlib_format[13],ppf,cst_INFO);
        default:return caml_call2(Stdlib_format[13],ppf,cst_DEBUG)}}
    function level_to_string(param)
     {if(param)
       switch(param[1])
        {case 0:return cst_app;
         case 1:return cst_error;
         case 2:return cst_warning;
         case 3:return cst_info;
         default:return cst_debug}
      return cst_quiet}
    function level_of_string(l)
     {return caml_string_notequal(l,cst_app$0)
              ?caml_string_notequal(l,cst_debug$0)
                ?caml_string_notequal(l,cst_error$0)
                  ?caml_string_notequal(l,cst_info$0)
                    ?caml_string_notequal(l,cst_quiet$0)
                      ?caml_string_notequal(l,cst_warning$0)
                        ?[1,[0,3854881,caml_call2(strf,_b_,l)]]
                        :_c_
                      :_d_
                    :_e_
                  :_f_
                :_g_
              :_h_}
    var id=[0,-1],_i_=[0,0];
    function create(opt,name)
     {if(opt)var sth=opt[1],doc=sth;else var doc=cst_undocumented;
      var _X_=level[1];
      id[1]++;
      var src=[0,id[1],name,doc,_X_];
      _i_[1] = [0,src,_i_[1]];
      return src}
    function name(s){return s[2]}
    function doc(s){return s[3]}
    function level$1(s){return s[4]}
    function set_level(s,l){s[4] = l;return 0}
    function equal(src0,src1){return src0[1] === src1[1]?1:0}
    function compare(src0,src1){return caml_int_compare(src0[1],src1[1])}
    function pp(ppf,src)
     {return caml_call5(Stdlib_format[125],ppf,_j_,src[2],src[1],src[3])}
    function list(param){return _i_[1]}
    var default$0=create(_k_,cst_application);
    function set_level$0(opt,l)
     {if(opt)var sth=opt[1],all=sth;else var all=1;
      level[1] = l;
      if(all)
       {var _V_=list(0),_W_=function(s){return set_level(s,l)};
        return caml_call2(Stdlib_list[15],_W_,_V_)}
      return all}
    var id$0=[0,-1],_l_=0;
    function def(opt,name,pp)
     {if(opt)var sth=opt[1],doc=sth;else var doc=cst_undocumented$0;
      var E=[248,cst_E,runtime.caml_fresh_oo_id(0)];
      function of_univ(param)
       {if(param[1] === E){var x=param[2];return x}return 0}
      function to_univ(x){return [0,E,[0,x]]}
      id$0[1]++;
      return [0,id$0[1],to_univ,of_univ,name,doc,pp]}
    function name$0(d){return d[4]}
    function doc$0(d){return d[5]}
    function printer(d){return d[6]}
    function pp_def(ppf,d){return caml_call3(Stdlib_format[125],ppf,_m_,d[4])}
    function list$0(param){return _l_}
    function pp$0(ppf,param)
     {var v=param[2],d=param[1];
      return caml_call6(Stdlib_format[125],ppf,_n_,pp_def,d,d[6],v)}
    function compare$0(param,_U_)
     {var k1=_U_[1],k0=param[1];return caml_int_compare(k0[1],k1[1])}
    var
     Key=[0,compare$0],
     M=caml_call1(Stdlib_map[1],Key),
     empty=M[1],
     is_empty=M[2];
    function mem(k,s){return caml_call2(M[3],[0,k],s)}
    function add(k,v,s){return caml_call3(M[4],[0,k],[0,k,v],s)}
    function rem(k,s){return caml_call2(M[7],[0,k],s)}
    function find(k,s)
     {try
       {var
         match=caml_call2(M[28],[0,k],s),
         v=match[2],
         k$0=match[1],
         _R_=caml_call1(k$0[2],v),
         _S_=caml_call1(k[3],_R_);
        return _S_}
      catch(_T_)
       {_T_ = caml_wrap_exception(_T_);
        if(_T_ === Stdlib[8])return 0;
        throw _T_}}
    function get(k,s)
     {var match=find(k,s);
      if(match){var v=match[1];return v}
      var _Q_=caml_call2(strf,_o_,k[4]);
      return caml_call1(Stdlib[1],_Q_)}
    function fold(f,s,acc)
     {function _P_(param,t,acc){return caml_call2(f,t,acc)}
      return caml_call3(M[13],_P_,s,acc)}
    function pp_set(ppf,s)
     {function pp_tag(tag,is_first)
       {if(! is_first)caml_call2(Stdlib_format[125],ppf,_q_);
        caml_call4(Stdlib_format[125],ppf,_p_,pp$0,tag);
        return 0}
      caml_call2(Stdlib_format[125],ppf,_r_);
      fold(pp_tag,s,1);
      caml_call2(Stdlib_format[125],ppf,_s_);
      return 0}
    function _t_(param){return 0}
    var reporter_mutex=[0,[0,function(param){return 0},_t_]];
    function set_reporter_mutex(lock,unlock)
     {reporter_mutex[1] = [0,lock,unlock];return 0}
    var
     nop_reporter=
      [0,
       function(param,_O_,over,k,_N_)
        {caml_call1(over,0);return caml_call1(k,0)}],
     reporter=[0,nop_reporter];
    function set_reporter(r){reporter[1] = r;return 0}
    function reporter$0(param){return reporter[1]}
    function report(src,level,over,k,msgf)
     {function over$0(param)
       {caml_call1(over,0);return caml_call1(reporter_mutex[1][2],0)}
      caml_call1(reporter_mutex[1][1],0);
      return caml_call5(reporter[1][1],src,level,over$0,k,msgf)}
    function pp_header(ppf,param)
     {var h=param[2],l=param[1];
      if(h){var h$0=h[1];return caml_call3(Stdlib_format[125],ppf,_u_,h$0)}
      return 0 === l?0:caml_call4(Stdlib_format[125],ppf,_v_,pp_level,l)}
    var n=caml_sys_argv(0).length - 1;
    if(0 === n)
     var x=caml_call1(Stdlib_filename[13],Stdlib_sys[1]);
    else
     var
      _D_=runtime.caml_check_bound(caml_sys_argv(0),0)[1],
      x=caml_call1(Stdlib_filename[13],_D_);
    var pf=Stdlib_format[125];
    function pp_exec_header(ppf,param)
     {var h=param[2],l=param[1];
      if(0 === l)
       {if(h){var h$0=h[1];return caml_call3(pf,ppf,_w_,h$0)}return 0}
      if(h){var h$1=h[1];return caml_call4(pf,ppf,_x_,x,h$1)}
      return caml_call5(pf,ppf,_y_,x,pp_level,l)}
    function format_reporter(opt,_K_,_J_,param)
     {if(opt)var sth=opt[1],pp_header=sth;else var pp_header=pp_exec_header;
      if(_K_)var sth$0=_K_[1],app=sth$0;else var app=Stdlib_format[107];
      if(_J_)var sth$1=_J_[1],dst=sth$1;else var dst=Stdlib_format[108];
      function report(src,level,over,k,msgf)
       {function k$0(param){caml_call1(over,0);return caml_call1(k,0)}
        return caml_call1
                (msgf,
                 function(header,tags,fmt)
                  {var
                    ppf=0 === level?app:dst,
                    _L_=caml_call2(Stdlib[98],fmt,_z_),
                    _M_=caml_call2(Stdlib[98],_A_,_L_);
                   return caml_call5
                           (Stdlib_format[132],k$0,ppf,_M_,pp_header,[0,level,header])})}
      return [0,report]}
    var err_count=[0,0];
    function err_count$0(param){return err_count[1]}
    function incr_err_count(param){err_count[1]++;return 0}
    var warn_count=[0,0];
    function warn_count$0(param){return warn_count[1]}
    function incr_warn_count(param){warn_count[1]++;return 0}
    function over(param){return 0}
    function kmsg(k,opt,level,msgf)
     {if(opt)var sth=opt[1],src=sth;else var src=default$0;
      var match=src[4];
      if(match)
       {var level$0=match[1];
        if(level$0 < level)
         {if(1 === level)err_count[1]++;else if(2 === level)warn_count[1]++;
          return caml_call1(k,0)}
        if(1 === level)err_count[1]++;else if(2 === level)warn_count[1]++;
        return report(src,level,over,k,msgf)}
      return caml_call1(k,0)}
    function kunit(param){return 0}
    function msg(src,level,msgf){return kmsg(kunit,src,level,msgf)}
    function app(src,msgf){return kmsg(kunit,src,0,msgf)}
    function err(src,msgf){return kmsg(kunit,src,1,msgf)}
    function warn(src,msgf){return kmsg(kunit,src,2,msgf)}
    function info(src,msgf){return kmsg(kunit,src,3,msgf)}
    function debug(src,msgf){return kmsg(kunit,src,4,msgf)}
    function on_error(src,opt,header,tags,pp,use,param)
     {if(opt)var sth=opt[1],level=sth;else var level=1;
      if(0 === param[0]){var v=param[1];return v}
      var e=param[1];
      function _I_(m){return caml_call5(m,header,tags,_B_,pp,e)}
      return kmsg(function(param){return caml_call1(use,e)},src,level,_I_)}
    function on_error_msg(src,opt,header,tags,use,param)
     {if(opt)var sth=opt[1],level=sth;else var level=1;
      if(0 === param[0]){var v=param[1];return v}
      var match=param[1],msg=match[2];
      return kmsg
              (use,
               src,
               level,
               function(m)
                {return caml_call5(m,header,tags,_C_,pp_print_text,msg)})}
    function src_log(src)
     {function msg$0(level,msgf){return msg([0,src],level,msgf)}
      function kmsg$0(k,level,msgf){return kmsg(k,[0,src],level,msgf)}
      function app(msgf){return msg$0(0,msgf)}
      function err(msgf){return msg$0(1,msgf)}
      function warn(msgf){return msg$0(2,msgf)}
      function info(msgf){return msg$0(3,msgf)}
      function debug(msgf){return msg$0(4,msgf)}
      function on_error$0(level,header,tags,pp,use)
       {var _G_=[0,src];
        return function(_H_)
         {return on_error(_G_,level,header,tags,pp,use,_H_)}}
      function on_error_msg$0(level,header,tags,use)
       {var _E_=[0,src];
        return function(_F_)
         {return on_error_msg(_E_,level,header,tags,use,_F_)}}
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
     Logs=
      [0,
       level$0,
       set_level$0,
       pp_level,
       level_to_string,
       level_of_string,
       default$0,
       [0,create,name,doc,level$1,set_level,equal,compare,pp,list],
       [0,
        def,
        name$0,
        doc$0,
        printer,
        pp_def,
        list$0,
        pp$0,
        empty,
        is_empty,
        mem,
        add,
        rem,
        find,
        get,
        fold,
        pp_set],
       msg,
       app,
       err,
       warn,
       info,
       debug,
       kmsg,
       on_error,
       on_error_msg,
       src_log,
       nop_reporter,
       format_reporter,
       reporter$0,
       set_reporter,
       set_reporter_mutex,
       report,
       incr_err_count,
       incr_warn_count,
       pp_print_text,
       pp_header,
       err_count$0,
       warn_count$0];
    runtime.caml_register_global(53,Logs,"Logs");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJsb2dzLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
