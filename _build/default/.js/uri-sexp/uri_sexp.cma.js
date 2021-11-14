(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
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
     cst$0=caml_string_of_jsbytes(""),
     cst_fragment=caml_string_of_jsbytes("fragment"),
     cst_host=caml_string_of_jsbytes("host"),
     cst_path=caml_string_of_jsbytes("path"),
     cst_port=caml_string_of_jsbytes("port"),
     cst_query=caml_string_of_jsbytes("query"),
     cst_scheme=caml_string_of_jsbytes("scheme"),
     cst_userinfo=caml_string_of_jsbytes("userinfo"),
     cst=caml_string_of_jsbytes(""),
     cst_Authority=caml_string_of_jsbytes("Authority"),
     cst_Fragment=caml_string_of_jsbytes("Fragment"),
     cst_Host=caml_string_of_jsbytes("Host"),
     cst_Path=caml_string_of_jsbytes("Path"),
     cst_Query=caml_string_of_jsbytes("Query"),
     cst_Query_key=caml_string_of_jsbytes("Query_key"),
     cst_Query_value=caml_string_of_jsbytes("Query_value"),
     cst_Scheme=caml_string_of_jsbytes("Scheme"),
     cst_Userinfo=caml_string_of_jsbytes("Userinfo"),
     cst_Authority$0=caml_string_of_jsbytes("Authority"),
     cst_Fragment$0=caml_string_of_jsbytes("Fragment"),
     cst_Host$0=caml_string_of_jsbytes("Host"),
     cst_Path$0=caml_string_of_jsbytes("Path"),
     cst_Query$0=caml_string_of_jsbytes("Query"),
     cst_Query_key$0=caml_string_of_jsbytes("Query_key"),
     cst_Query_value$0=caml_string_of_jsbytes("Query_value"),
     cst_Scheme$0=caml_string_of_jsbytes("Scheme"),
     cst_Userinfo$0=caml_string_of_jsbytes("Userinfo"),
     tp_loc=caml_string_of_jsbytes("lib_sexp/uri_sexp.ml.Derived.component"),
     tp_loc$0=caml_string_of_jsbytes("lib_sexp/uri_sexp.ml.Derived.component"),
     tp_loc$1=caml_string_of_jsbytes("lib_sexp/uri_sexp.ml.Derived.t"),
     Uri=global_data.Uri,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Assert_failure=global_data.Assert_failure,
     _q_=[0,caml_string_of_jsbytes("fragment")],
     _p_=[0,caml_string_of_jsbytes("query")],
     _o_=[0,caml_string_of_jsbytes("path")],
     _n_=[0,caml_string_of_jsbytes("port")],
     _m_=[0,caml_string_of_jsbytes("host")],
     _l_=[0,caml_string_of_jsbytes("userinfo")],
     _k_=[0,caml_string_of_jsbytes("scheme")],
     _j_=[0,caml_string_of_jsbytes("lib_sexp/uri_sexp.ml"),20,1],
     _b_=[0,caml_string_of_jsbytes("Path")],
     _c_=[0,caml_string_of_jsbytes("Host")],
     _d_=[0,caml_string_of_jsbytes("Query_value")],
     _e_=[0,caml_string_of_jsbytes("Userinfo")],
     _a_=[0,caml_string_of_jsbytes("Fragment")],
     _f_=[0,caml_string_of_jsbytes("Scheme")],
     _g_=[0,caml_string_of_jsbytes("Query")],
     _h_=[0,caml_string_of_jsbytes("Authority")],
     _i_=[0,caml_string_of_jsbytes("Query_key")];
    function component_of_sexp(sexp)
     {if(0 === sexp[0])
       {var atom=sexp[1];
        return caml_string_notequal(atom,cst_Authority)
                ?caml_string_notequal(atom,cst_Fragment)
                  ?caml_string_notequal(atom,cst_Host)
                    ?caml_string_notequal(atom,cst_Path)
                      ?caml_string_notequal(atom,cst_Query)
                        ?caml_string_notequal(atom,cst_Query_key)
                          ?caml_string_notequal(atom,cst_Query_value)
                            ?caml_string_notequal(atom,cst_Scheme)
                              ?caml_string_notequal(atom,cst_Userinfo)
                                ?caml_call1(Sexplib0_Sexp_conv_error[19],0)
                                :-145160103
                              :-178940859
                            :795008922
                          :-911188600
                        :-250086680
                      :892015045
                    :803994504
                  :127343600
                :-715788189}
      var _D_=sexp[1];
      if(_D_)
       {var _E_=_D_[1];
        if(0 === _E_[0])
         {var atom$0=_E_[1];
          return caml_string_notequal(atom$0,cst_Authority$0)
                  ?caml_string_notequal(atom$0,cst_Fragment$0)
                    ?caml_string_notequal(atom$0,cst_Host$0)
                      ?caml_string_notequal(atom$0,cst_Path$0)
                        ?caml_string_notequal(atom$0,cst_Query$0)
                          ?caml_string_notequal(atom$0,cst_Query_key$0)
                            ?caml_string_notequal(atom$0,cst_Query_value$0)
                              ?caml_string_notequal(atom$0,cst_Scheme$0)
                                ?caml_string_notequal(atom$0,cst_Userinfo$0)
                                  ?caml_call1(Sexplib0_Sexp_conv_error[19],0)
                                  :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp)
                                :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp)
                              :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp)
                            :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp)
                          :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp)
                        :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp)
                      :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp)
                    :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp)
                  :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp)}
        return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[25],tp_loc,sexp)}
    function component_of_sexp$0(sexp)
     {try
       {var _B_=component_of_sexp(sexp);return _B_}
      catch(_C_)
       {_C_ = caml_wrap_exception(_C_);
        if(_C_ === Sexplib0_Sexp_conv_error[18])
         return caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$0,sexp);
        throw _C_}}
    function sexp_of_component(param)
     {return -145160103 <= param
              ?127343600 === param
                ?_a_
                :803994504 <= param
                  ?892015045 <= param?_b_:_c_
                  :795008922 <= param?_d_:_e_
              :-250086680 <= param
                ?-178940859 <= param?_f_:_g_
                :-715788189 <= param?_h_:_i_}
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       var t=caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc$1,sexp);
      else
       {var
         field_sexps=sexp[1],
         scheme_field=[0,0],
         userinfo_field=[0,0],
         host_field=[0,0],
         port_field=[0,0],
         path_field=[0,0],
         query_field=[0,0],
         fragment_field=[0,0],
         duplicates=[0,0],
         extra=[0,0],
         param=field_sexps;
        for(;;)
         {if(param)
           {var _t_=param[1];
            if(1 === _t_[0])
             {var _u_=_t_[1];
              if(_u_)
               {var _v_=_u_[1];
                if(0 === _v_[0])
                 {var _w_=_u_[2],_x_=_v_[1],switch$0=0;
                  if(! _w_ || ! _w_[2])switch$0 = 1;
                  if(switch$0)
                   {var
                     tail=param[2],
                     field_sexp$6=
                      function(_A_)
                       {function field_sexp(param)
                         {if(_A_)
                           {if(_A_[2])throw [0,Assert_failure,_j_];
                            var x=_A_[1];
                            return x}
                          return caml_call2
                                  (Sexplib0_Sexp_conv_error[10],tp_loc$1,sexp)}
                        return field_sexp},
                     field_sexp=field_sexp$6(_w_);
                    if(caml_string_notequal(_x_,cst_fragment))
                     if(caml_string_notequal(_x_,cst_host))
                      if(caml_string_notequal(_x_,cst_path))
                       if(caml_string_notequal(_x_,cst_port))
                        if(caml_string_notequal(_x_,cst_query))
                         if(caml_string_notequal(_x_,cst_scheme))
                          if(caml_string_notequal(_x_,cst_userinfo))
                           {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_x_,extra[1]]}
                          else
                           if(userinfo_field[1])
                            duplicates[1] = [0,_x_,duplicates[1]];
                           else
                            {var
                              field_sexp$0=field_sexp(0),
                              fvalue=
                               caml_call2
                                (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp$0);
                             userinfo_field[1] = [0,fvalue]}
                         else
                          if(scheme_field[1])
                           duplicates[1] = [0,_x_,duplicates[1]];
                          else
                           {var
                             field_sexp$1=field_sexp(0),
                             fvalue$0=
                              caml_call2
                               (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp$1);
                            scheme_field[1] = [0,fvalue$0]}
                        else
                         if(query_field[1])
                          duplicates[1] = [0,_x_,duplicates[1]];
                         else
                          {var
                            v=field_sexp(0),
                            a_of_sexp=
                             function(sexp)
                              {if(1 === sexp[0])
                                {var _y_=sexp[1];
                                 if(_y_)
                                  {var _z_=_y_[2];
                                   if(_z_ && ! _z_[2])
                                    {var
                                      v1=_z_[1],
                                      v0=_y_[1],
                                      v0$0=caml_call1(Sexplib0_Sexp_conv[31],v0),
                                      v1$0=
                                       caml_call2(Sexplib0_Sexp_conv[44],Sexplib0_Sexp_conv[31],v1);
                                     return [0,v0$0,v1$0]}}}
                               return caml_call3
                                       (Sexplib0_Sexp_conv_error[2],tp_loc$1,2,sexp)},
                            fvalue$1=caml_call2(Sexplib0_Sexp_conv[44],a_of_sexp,v);
                           query_field[1] = [0,fvalue$1]}
                       else
                        if(port_field[1])
                         duplicates[1] = [0,_x_,duplicates[1]];
                        else
                         {var
                           field_sexp$2=field_sexp(0),
                           fvalue$2=
                            caml_call2
                             (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[34],field_sexp$2);
                          port_field[1] = [0,fvalue$2]}
                      else
                       if(path_field[1])
                        duplicates[1] = [0,_x_,duplicates[1]];
                       else
                        {var
                          field_sexp$3=field_sexp(0),
                          fvalue$3=caml_call1(Sexplib0_Sexp_conv[31],field_sexp$3);
                         path_field[1] = [0,fvalue$3]}
                     else
                      if(host_field[1])
                       duplicates[1] = [0,_x_,duplicates[1]];
                      else
                       {var
                         field_sexp$4=field_sexp(0),
                         fvalue$4=
                          caml_call2
                           (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp$4);
                        host_field[1] = [0,fvalue$4]}
                    else
                     if(fragment_field[1])
                      duplicates[1] = [0,_x_,duplicates[1]];
                     else
                      {var
                        field_sexp$5=field_sexp(0),
                        fvalue$5=
                         caml_call2
                          (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp$5);
                       fragment_field[1] = [0,fvalue$5]}
                    var param=tail;
                    continue}}}}
            caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$1,_t_)}
          if(duplicates[1])
           var
            t=
             caml_call3
              (Sexplib0_Sexp_conv_error[12],tp_loc$1,duplicates[1],sexp);
          else
           if(extra[1])
            var
             t=
              caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc$1,extra[1],sexp);
           else
            {var
              fragment_value=fragment_field[1],
              query_value=query_field[1],
              path_value=path_field[1],
              port_value=port_field[1],
              host_value=host_field[1],
              userinfo_value=userinfo_field[1],
              scheme_value=scheme_field[1];
             if(fragment_value)
              var v$0=fragment_value[1],v$1=v$0;
             else
              var v$1=0;
             if(query_value)var v$2=query_value[1],v$3=v$2;else var v$3=0;
             if(path_value)var v$4=path_value[1],v$5=v$4;else var v$5=cst;
             if(port_value)var v$6=port_value[1],v$7=v$6;else var v$7=0;
             if(host_value)var v$8=host_value[1],v$9=v$8;else var v$9=0;
             if(userinfo_value)
              var v$10=userinfo_value[1],v$11=v$10;
             else
              var v$11=0;
             if(scheme_value)
              var v$12=scheme_value[1],v$13=v$12;
             else
              var v$13=0;
             var t=[0,v$13,v$11,v$9,v$7,v$5,v$3,v$1]}
          break}}
      return caml_call8(Uri[10],t[1],t[2],t[3],t[4],[0,t[5]],[0,t[6]],t[7],0)}
    function sexp_of_t(t)
     {var
       v_fragment=caml_call1(Uri[40],t),
       v_query=caml_call1(Uri[12],t),
       v_path=caml_call1(Uri[25],t),
       v_port=caml_call1(Uri[38],t),
       v_host=caml_call1(Uri[35],t),
       v_userinfo=caml_call1(Uri[30],t),
       v_scheme=caml_call1(Uri[28],t),
       bnds=0;
      if(0 === v_fragment)
       var bnds$0=bnds;
      else
       var
        arg$5=
         caml_call1
          (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),
           v_fragment),
        bnd$5=[1,[0,_q_,[0,arg$5,0]]],
        bnds$0=[0,bnd$5,bnds];
      var _r_=v_query?0:1;
      if(_r_)
       var bnds$1=bnds$0;
      else
       var
        _s_=
         function(el)
          {var
            v1=el[2],
            v0=el[1],
            v0$0=caml_call1(Sexplib0_Sexp_conv[7],v0),
            v1$0=caml_call2(Sexplib0_Sexp_conv[20],Sexplib0_Sexp_conv[7],v1);
           return [1,[0,v0$0,[0,v1$0,0]]]},
        arg$4=caml_call1(caml_call1(Sexplib0_Sexp_conv[20],_s_),v_query),
        bnd$4=[1,[0,_p_,[0,arg$4,0]]],
        bnds$1=[0,bnd$4,bnds$0];
      if(runtime.caml_string_equal(cst$0,v_path))
       var bnds$2=bnds$1;
      else
       var
        arg$3=caml_call1(Sexplib0_Sexp_conv[7],v_path),
        bnd$3=[1,[0,_o_,[0,arg$3,0]]],
        bnds$2=[0,bnd$3,bnds$1];
      if(0 === v_port)
       var bnds$3=bnds$2;
      else
       var
        arg$2=
         caml_call1
          (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[10]),v_port),
        bnd$2=[1,[0,_n_,[0,arg$2,0]]],
        bnds$3=[0,bnd$2,bnds$2];
      if(0 === v_host)
       var bnds$4=bnds$3;
      else
       var
        arg$1=
         caml_call1
          (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),v_host),
        bnd$1=[1,[0,_m_,[0,arg$1,0]]],
        bnds$4=[0,bnd$1,bnds$3];
      if(0 === v_userinfo)
       var bnds$5=bnds$4;
      else
       var
        arg$0=
         caml_call1
          (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),
           v_userinfo),
        bnd$0=[1,[0,_l_,[0,arg$0,0]]],
        bnds$5=[0,bnd$0,bnds$4];
      if(0 === v_scheme)
       var bnds$6=bnds$5;
      else
       var
        arg=
         caml_call1
          (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),v_scheme),
        bnd=[1,[0,_k_,[0,arg,0]]],
        bnds$6=[0,bnd,bnds$5];
      return [1,bnds$6]}
    function compare(a,b){return caml_call2(Uri[2],a,b)}
    function equal(a,b){return caml_call2(Uri[3],a,b)}
    var
     Uri_sexp=
      [0,
       component_of_sexp$0,
       sexp_of_component,
       t_of_sexp,
       sexp_of_t,
       compare,
       equal];
    runtime.caml_register_global(51,Uri_sexp,"Uri_sexp");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1cmlfc2V4cC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
