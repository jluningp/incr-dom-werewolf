(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Expect_test_collector_File$0=
      caml_string_of_jsbytes
       ("Expect_test_collector.File.Digest.of_string, unexpected length"),
     cst_Expect_test_collector_File$1=
      caml_string_of_jsbytes("Expect_test_collector.File.Digest.of_string"),
     cst_Expect_test_collector_File=
      caml_string_of_jsbytes("Expect_test_collector.File.Location.compare"),
     cst_end_pos=caml_string_of_jsbytes("end_pos"),
     cst_filename=caml_string_of_jsbytes("filename"),
     cst_line_number=caml_string_of_jsbytes("line_number"),
     cst_line_start=caml_string_of_jsbytes("line_start"),
     cst_start_pos=caml_string_of_jsbytes("start_pos"),
     cst_end_pos$0=caml_string_of_jsbytes("end_pos"),
     cst_start_pos$0=caml_string_of_jsbytes("start_pos"),
     cst_line_start$0=caml_string_of_jsbytes("line_start"),
     cst_line_number$0=caml_string_of_jsbytes("line_number"),
     cst_filename$0=caml_string_of_jsbytes("filename"),
     tp_loc=caml_string_of_jsbytes("file.ml.Location.T.t"),
     Base=global_data.Base,
     Base_Ppx_compare_lib=global_data.Base__Ppx_compare_lib,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Stdlib_filename=global_data.Stdlib__filename,
     Base_String=global_data.Base__String,
     Base_Comparable=global_data.Base__Comparable,
     Expect_test_common=[0];
    caml_register_global(28,Expect_test_common,"Expect_test_common__");
    var Expect_test_common_Import=[0];
    caml_register_global
     (29,Expect_test_common_Import,"Expect_test_common__Import");
    var
     hash_fold_t=Base_String[20],
     t_of_sexp=Base_String[21],
     sexp_of_t=Base_String[22],
     of_string=Base_String[23],
     to_string=Base_String[24],
     symbol=Base_String[25],
     symbol$0=Base_String[26],
     symbol$1=Base_String[27],
     symbol$2=Base_String[28],
     symbol$3=Base_String[29],
     symbol$4=Base_String[30],
     compare=Base_String[31],
     min=Base_String[32],
     max=Base_String[33],
     ascending=Base_String[34],
     descending=Base_String[35],
     between=Base_String[36],
     clamp_exn=Base_String[37],
     clamp=Base_String[38],
     comparator=Base_String[39],
     validate_lbound=Base_String[40],
     validate_ubound=Base_String[41],
     validate_bound=Base_String[42],
     pp=Base_String[43],
     equal=Base_String[108],
     _b_=[0,caml_string_of_jsbytes("end_pos")],
     _c_=[0,caml_string_of_jsbytes("start_pos")],
     _d_=[0,caml_string_of_jsbytes("line_start")],
     _e_=[0,caml_string_of_jsbytes("line_number")],
     _f_=[0,caml_string_of_jsbytes("filename")],
     _a_=[0,caml_string_of_jsbytes("common/file.ml"),74,22],
     _l_=[0,caml_string_of_jsbytes("body_location")],
     _m_=[0,caml_string_of_jsbytes("extid_location")],
     _n_=[0,caml_string_of_jsbytes("body")],
     _o_=[0,caml_string_of_jsbytes("tag")],
     _h_=[0,caml_string_of_jsbytes("Output")],
     _i_=[0,caml_string_of_jsbytes("Unreachable")],
     _j_=[0,caml_string_of_jsbytes("Exact")],
     _k_=[0,caml_string_of_jsbytes("Pretty")];
    function relative_to(dir,t)
     {return caml_call1(Stdlib_filename[5],t)
              ?caml_call2(Stdlib_filename[4],dir,t)
              :t}
    var
     Name=
      [0,
       relative_to,
       hash_fold_t,
       function(_O_){return runtime.Base_hash_string(_O_)},
       t_of_sexp,
       sexp_of_t,
       of_string,
       to_string,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       equal,
       compare,
       min,
       max,
       ascending,
       descending,
       between,
       clamp_exn,
       clamp,
       comparator,
       validate_lbound,
       validate_ubound,
       validate_bound,
       pp];
    try
     {var switch$0=0,v=runtime.caml_sys_getcwd(0);switch$0 = 1}
    catch(exn)
     {exn = caml_wrap_exception(exn);var dir_or_error=[0,3458171,exn]}
    if(switch$0)var dir_or_error=[0,17724,v];
    function initial_dir(param)
     {if(3458171 <= dir_or_error[1]){var exn=dir_or_error[2];throw exn}
      var v=dir_or_error[2];
      return v}
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       filename_field=[0,0],
       line_number_field=[0,0],
       line_start_field=[0,0],
       start_pos_field=[0,0],
       end_pos_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _D_=param[1];
          if(1 === _D_[0])
           {var _E_=_D_[1];
            if(_E_)
             {var _F_=_E_[1];
              if(0 === _F_[0])
               {var _G_=_E_[2],_H_=_F_[1],switch$0=0;
                if(! _G_ || ! _G_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$5=
                    function(_N_)
                     {function field_sexp(param)
                       {if(_N_)
                         {if(_N_[2])throw [0,Assert_failure,_a_];
                          var x=_N_[1];
                          return x}
                        return caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$5(_G_);
                  if(caml_string_notequal(_H_,cst_end_pos))
                   if(caml_string_notequal(_H_,cst_filename))
                    if(caml_string_notequal(_H_,cst_line_number))
                     if(caml_string_notequal(_H_,cst_line_start))
                      if(caml_string_notequal(_H_,cst_start_pos))
                       {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_H_,extra[1]]}
                      else
                       if(start_pos_field[1])
                        duplicates[1] = [0,_H_,duplicates[1]];
                       else
                        {var
                          field_sexp$0=field_sexp(0),
                          fvalue=caml_call1(Base[119],field_sexp$0);
                         start_pos_field[1] = [0,fvalue]}
                     else
                      if(line_start_field[1])
                       duplicates[1] = [0,_H_,duplicates[1]];
                      else
                       {var
                         field_sexp$1=field_sexp(0),
                         fvalue$0=caml_call1(Base[119],field_sexp$1);
                        line_start_field[1] = [0,fvalue$0]}
                    else
                     if(line_number_field[1])
                      duplicates[1] = [0,_H_,duplicates[1]];
                     else
                      {var
                        field_sexp$2=field_sexp(0),
                        fvalue$1=caml_call1(Base[119],field_sexp$2);
                       line_number_field[1] = [0,fvalue$1]}
                   else
                    if(filename_field[1])
                     duplicates[1] = [0,_H_,duplicates[1]];
                    else
                     {var
                       field_sexp$3=field_sexp(0),
                       fvalue$2=caml_call1(Name[4],field_sexp$3);
                      filename_field[1] = [0,fvalue$2]}
                  else
                   if(end_pos_field[1])
                    duplicates[1] = [0,_H_,duplicates[1]];
                   else
                    {var
                      field_sexp$4=field_sexp(0),
                      fvalue$3=caml_call1(Base[119],field_sexp$4);
                     end_pos_field[1] = [0,fvalue$3]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,_D_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc,extra[1],sexp);
        var
         _I_=filename_field[1],
         _J_=line_number_field[1],
         _K_=line_start_field[1],
         _L_=start_pos_field[1],
         _M_=end_pos_field[1];
        if(_I_ && _J_ && _K_ && _L_ && _M_)
         {var
           end_pos_value=_M_[1],
           start_pos_value=_L_[1],
           line_start_value=_K_[1],
           line_number_value=_J_[1],
           filename_value=_I_[1];
          return [0,
                  filename_value,
                  line_number_value,
                  line_start_value,
                  start_pos_value,
                  end_pos_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === filename_field[1]?1:0,cst_filename$0],
                  [0,
                   [0,0 === line_number_field[1]?1:0,cst_line_number$0],
                   [0,
                    [0,0 === line_start_field[1]?1:0,cst_line_start$0],
                    [0,
                     [0,0 === start_pos_field[1]?1:0,cst_start_pos$0],
                     [0,[0,0 === end_pos_field[1]?1:0,cst_end_pos$0],0]]]]])}}
    function sexp_of_t$0(param)
     {var
       v_end_pos=param[5],
       v_start_pos=param[4],
       v_line_start=param[3],
       v_line_number=param[2],
       v_filename=param[1],
       arg=caml_call1(Base[120],v_end_pos),
       bnds=[0,[1,[0,_b_,[0,arg,0]]],0],
       arg$0=caml_call1(Base[120],v_start_pos),
       bnds$0=[0,[1,[0,_c_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Base[120],v_line_start),
       bnds$1=[0,[1,[0,_d_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Base[120],v_line_number),
       bnds$2=[0,[1,[0,_e_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Name[5],v_filename),
       bnds$3=[0,[1,[0,_f_,[0,arg$3,0]]],bnds$2];
      return [1,bnds$3]}
    function compare$0(a,b)
     {if(caml_call2(Name[14],a[1],b[1]))
       {if(caml_call2(Base_Ppx_compare_lib[1],a,b))return 0;
        var n=caml_call2(Name[15],a[1],b[1]);
        if(0 === n)
         {var n$0=caml_call2(Base[115],a[2],b[2]);
          if(0 === n$0)
           {var n$1=caml_call2(Base[115],a[3],b[3]);
            if(0 === n$1)
             {var n$2=caml_call2(Base[115],a[4],b[4]);
              return 0 === n$2?caml_call2(Base[115],a[5],b[5]):n$2}
            return n$1}
          return n$0}
        return n}
      return caml_call1(Base[221],cst_Expect_test_collector_File)}
    var
     include=caml_call1(Base_Comparable[10],[0,compare$0,sexp_of_t$0]),
     symbol$5=include[1],
     symbol$6=include[2],
     symbol$7=include[3],
     symbol$8=include[4],
     symbol$9=include[5],
     symbol$10=include[6],
     equal$0=include[7],
     compare$1=include[8],
     min$0=include[9],
     max$0=include[10],
     ascending$0=include[11],
     descending$0=include[12],
     between$0=include[13],
     clamp_exn$0=include[14],
     clamp$0=include[15],
     comparator$0=include[16],
     validate_lbound$0=include[17],
     validate_ubound$0=include[18],
     validate_bound$0=include[19];
    function beginning_of_file(filename){return [0,filename,1,0,0,0]}
    var sexp_of_t$1=Base[165],compare$2=Base[160];
    function to_string$0(t){return t}
    function of_string$0(s)
     {var expected_length=32;
      if(caml_call2(Base[201],runtime.caml_ml_string_length(s),32))
       caml_call1(Base[221],cst_Expect_test_collector_File$0);
      var _B_=caml_call2(Base[181],expected_length,1),_A_=0;
      if(! (_B_ < 0))
       {var i=_A_;
        for(;;)
         {var match=runtime.caml_string_get(s,i),switch$0=0;
          if(58 <= match)
           {if(! (5 < (match - 97 | 0) >>> 0))switch$0 = 1}
          else
           if(48 <= match)switch$0 = 1;
          if(! switch$0)
           caml_call1(Base[221],cst_Expect_test_collector_File$1);
          var _C_=i + 1 | 0;
          if(_B_ !== i){var i=_C_;continue}
          break}}
      return s}
    var
     _g_=
      [0,
       t_of_sexp$0,
       sexp_of_t$0,
       beginning_of_file,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       symbol$10,
       equal$0,
       compare$1,
       min$0,
       max$0,
       ascending$0,
       descending$0,
       between$0,
       clamp_exn$0,
       clamp$0,
       comparator$0,
       validate_lbound$0,
       validate_ubound$0,
       validate_bound$0],
     Expect_test_common_File=
      [0,
       Name,
       initial_dir,
       _g_,
       [0,sexp_of_t$1,compare$2,of_string$0,to_string$0]];
    caml_register_global
     (38,Expect_test_common_File,"Expect_test_common__File");
    function sexp_of_t$2(of_a,param)
     {if(typeof param === "number")
       return 0 === param?_h_:_i_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(Sexplib0_Sexp_conv[7],v0);
          return [1,[0,_j_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call1(of_a,v0$1);
        return [1,[0,_k_,[0,v0$2,0]]]}}
    function compare$3(cmp_a,a_001,match)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_001,match))return 0;
      var switch$0=0;
      if(typeof a_001 === "number")
       {if(0 === a_001)
         {var switch$1=0;
          if(typeof match === "number")
           {if(0 === match)return 0}
          else
           if(0 === match[0])switch$1 = 1;
          if(! switch$1)return -1}
        else
         if(typeof match === "number")
          {if(1 === match)return 0;switch$0 = 1}
         else
          if(1 === match[0])return 1}
      else
       {if(0 === a_001[0])
         {var _y_=a_001[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_004=match[1];
            return caml_call2(Base_Ppx_compare_lib[4][8],_y_,b_004)}
          return -1}
        var _z_=a_001[1];
        if(typeof match === "number")
         {if(0 !== match)return -1;switch$0 = 1}
        else
         if(0 !== match[0])
          {var b_006=match[1];return caml_call2(cmp_a,_z_,b_006)}}
      return switch$0?1:1}
    function equal$1(cmp_a,a_007,match)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_007,match))return 1;
      var switch$0=0;
      if(typeof a_007 === "number")
       {if(0 === a_007)
         {var switch$1=0;
          if(typeof match === "number")
           {if(0 === match)return 1}
          else
           if(0 === match[0])switch$1 = 1;
          if(! switch$1)return 0}
        else
         if(typeof match === "number")
          {if(1 === match)return 1;switch$0 = 1}
         else
          if(1 === match[0])return 0}
      else
       {if(0 === a_007[0])
         {var _w_=a_007[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_010=match[1];
            return caml_call2(Base_Ppx_compare_lib[4][21],_w_,b_010)}
          return 0}
        var _x_=a_007[1];
        if(typeof match === "number")
         {if(0 !== match)return 0;switch$0 = 1}
        else
         if(0 !== match[0])
          {var b_012=match[1];return caml_call2(cmp_a,_x_,b_012)}}
      return switch$0?0:0}
    function map_pretty(t,f)
     {if(typeof t !== "number" && 1 === t[0])
       {var x=t[1];return [1,caml_call1(f,x)]}
      return t}
    var Body=[0,sexp_of_t$2,compare$3,equal$1,map_pretty];
    function sexp_of_t$3(of_a,param)
     {var
       v_body_location=param[4],
       v_extid_location=param[3],
       v_body=param[2],
       v_tag=param[1],
       arg=caml_call1(_g_[2],v_body_location),
       bnds=[0,[1,[0,_l_,[0,arg,0]]],0],
       arg$0=caml_call1(_g_[2],v_extid_location),
       bnds$0=[0,[1,[0,_m_,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Body[1],of_a,v_body),
       bnds$1=[0,[1,[0,_n_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7],v_tag),
       bnds$2=[0,[1,[0,_o_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function compare$4(cmp_a,a_013,b_014)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_013,b_014))return 0;
      var
       n=
        caml_call3
         (Base_Ppx_compare_lib[4][12],
          Base_Ppx_compare_lib[4][8],
          a_013[1],
          b_014[1]);
      if(0 === n)
       {var n$0=caml_call3(Body[2],cmp_a,a_013[2],b_014[2]);
        if(0 === n$0)
         {var n$1=caml_call2(_g_[11],a_013[3],b_014[3]);
          return 0 === n$1?caml_call2(_g_[11],a_013[4],b_014[4]):n$1}
        return n$0}
      return n}
    function equal$2(cmp_a,a_019,b_020)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_019,b_020))return 1;
      var
       _s_=
        caml_call3
         (Base_Ppx_compare_lib[4][25],
          Base_Ppx_compare_lib[4][21],
          a_019[1],
          b_020[1]);
      if(_s_)
       {var _t_=caml_call3(Body[3],cmp_a,a_019[2],b_020[2]);
        if(_t_)
         {var _u_=caml_call2(_g_[10],a_019[3],b_020[3]);
          if(_u_)return caml_call2(_g_[10],a_019[4],b_020[4]);
          var _v_=_u_}
        else
         var _v_=_t_}
      else
       var _v_=_s_;
      return _v_}
    function sexp_of_t$4(v){return sexp_of_t$3(Sexplib0_Sexp_conv[7],v)}
    function compare$5(a_025,b_026)
     {return compare$4(Base_Ppx_compare_lib[4][8],a_025,b_026)}
    var Raw=[0,sexp_of_t$4,compare$5];
    function map_pretty$0(init,f)
     {var _p_=init[4],_q_=init[3],_r_=caml_call2(Body[4],init[2],f);
      return [0,init[1],_r_,_q_,_p_]}
    var
     Expect_test_common_Expectation=
      [0,Body,sexp_of_t$3,compare$4,equal$2,Raw,map_pretty$0];
    caml_register_global
     (39,Expect_test_common_Expectation,"Expect_test_common__Expectation");
    var Std=[0],Expect_test_common$0=[0,Std];
    caml_register_global(40,Expect_test_common$0,"Expect_test_common");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJleHBlY3RfdGVzdF9jb21tb24uY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbImVxdWFsIl0sInNvdXJjZXMiOlsiL1VzZXJzL2p2YW5icmllc2VuLy5vcGFtL2RlZmF1bHQvbGliL29jYW1sL3N0cmluZy5tbGkiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrWEFBOzs7Ozs7Ozs7Ozs7Ozs7O007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FBQUE7Ozs7Ozs7Ozs7Ozs7OztNIiwic291cmNlc0NvbnRlbnQiOlsiKCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPQ2FtbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgWGF2aWVyIExlcm95LCBwcm9qZXQgQ3Jpc3RhbCwgSU5SSUEgUm9jcXVlbmNvdXJ0ICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICBDb3B5cmlnaHQgMTk5NiBJbnN0aXR1dCBOYXRpb25hbCBkZSBSZWNoZXJjaGUgZW4gSW5mb3JtYXRpcXVlIGV0ICAgICAqKVxuKCogICAgIGVuIEF1dG9tYXRpcXVlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogICBBbGwgcmlnaHRzIHJlc2VydmVkLiAgVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiAgICAqKVxuKCogICB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMi4xLCB3aXRoIHRoZSAgICAgICAgICAqKVxuKCogICBzcGVjaWFsIGV4Y2VwdGlvbiBvbiBsaW5raW5nIGRlc2NyaWJlZCBpbiB0aGUgZmlsZSBMSUNFTlNFLiAgICAgICAgICAqKVxuKCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKVxuXG4oKiogU3RyaW5nIG9wZXJhdGlvbnMuXG5cbiAgQSBzdHJpbmcgaXMgYW4gaW1tdXRhYmxlIGRhdGEgc3RydWN0dXJlIHRoYXQgY29udGFpbnMgYVxuICBmaXhlZC1sZW5ndGggc2VxdWVuY2Ugb2YgKHNpbmdsZS1ieXRlKSBjaGFyYWN0ZXJzLiBFYWNoIGNoYXJhY3RlclxuICBjYW4gYmUgYWNjZXNzZWQgaW4gY29uc3RhbnQgdGltZSB0aHJvdWdoIGl0cyBpbmRleC5cblxuICBHaXZlbiBhIHN0cmluZyBbc10gb2YgbGVuZ3RoIFtsXSwgd2UgY2FuIGFjY2VzcyBlYWNoIG9mIHRoZSBbbF1cbiAgY2hhcmFjdGVycyBvZiBbc10gdmlhIGl0cyBpbmRleCBpbiB0aGUgc2VxdWVuY2UuIEluZGV4ZXMgc3RhcnQgYXRcbiAgWzBdLCBhbmQgd2Ugd2lsbCBjYWxsIGFuIGluZGV4IHZhbGlkIGluIFtzXSBpZiBpdCBmYWxscyB3aXRoaW4gdGhlXG4gIHJhbmdlIFtbMC4uLmwtMV1dIChpbmNsdXNpdmUpLiBBIHBvc2l0aW9uIGlzIHRoZSBwb2ludCBiZXR3ZWVuIHR3b1xuICBjaGFyYWN0ZXJzIG9yIGF0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSBzdHJpbmcuICBXZSBjYWxsIGFcbiAgcG9zaXRpb24gdmFsaWQgaW4gW3NdIGlmIGl0IGZhbGxzIHdpdGhpbiB0aGUgcmFuZ2UgW1swLi4ubF1dXG4gIChpbmNsdXNpdmUpLiBOb3RlIHRoYXQgdGhlIGNoYXJhY3RlciBhdCBpbmRleCBbbl0gaXMgYmV0d2VlblxuICBwb3NpdGlvbnMgW25dIGFuZCBbbisxXS5cblxuICBUd28gcGFyYW1ldGVycyBbc3RhcnRdIGFuZCBbbGVuXSBhcmUgc2FpZCB0byBkZXNpZ25hdGUgYSB2YWxpZFxuICBzdWJzdHJpbmcgb2YgW3NdIGlmIFtsZW4gPj0gMF0gYW5kIFtzdGFydF0gYW5kIFtzdGFydCtsZW5dIGFyZVxuICB2YWxpZCBwb3NpdGlvbnMgaW4gW3NdLlxuXG4gIE5vdGU6IE9DYW1sIHN0cmluZ3MgdXNlZCB0byBiZSBtb2RpZmlhYmxlIGluIHBsYWNlLCBmb3IgaW5zdGFuY2UgdmlhXG4gIHRoZSB7IVN0cmluZy5zZXR9IGFuZCB7IVN0cmluZy5ibGl0fSBmdW5jdGlvbnMgZGVzY3JpYmVkIGJlbG93LiBUaGlzXG4gIHVzYWdlIGlzIG9ubHkgcG9zc2libGUgd2hlbiB0aGUgY29tcGlsZXIgaXMgcHV0IGluIFwidW5zYWZlLXN0cmluZ1wiXG4gIG1vZGUgYnkgZ2l2aW5nIHRoZSBbLXVuc2FmZS1zdHJpbmddIGNvbW1hbmQtbGluZSBvcHRpb24uIFRoaXNcbiAgY29tcGF0aWJpbGl0eSBtb2RlIG1ha2VzIHRoZSB0eXBlcyBbc3RyaW5nXSBhbmQgW2J5dGVzXSAoc2VlIG1vZHVsZVxuICB7IUJ5dGVzfSkgaW50ZXJjaGFuZ2VhYmxlIHNvIHRoYXQgZnVuY3Rpb25zIGV4cGVjdGluZyBieXRlIHNlcXVlbmNlc1xuICBjYW4gYWxzbyBhY2NlcHQgc3RyaW5ncyBhcyBhcmd1bWVudHMgYW5kIG1vZGlmeSB0aGVtLlxuXG4gIFRoZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIFtieXRlc10gYW5kIFtzdHJpbmddIHdhcyBpbnRyb2R1Y2VkIGluIE9DYW1sXG4gIDQuMDIsIGFuZCB0aGUgXCJ1bnNhZmUtc3RyaW5nXCIgY29tcGF0aWJpbGl0eSBtb2RlIHdhcyB0aGUgZGVmYXVsdFxuICB1bnRpbCBPQ2FtbCA0LjA1LiBTdGFydGluZyB3aXRoIDQuMDYsIHRoZSBjb21wYXRpYmlsaXR5IG1vZGUgaXNcbiAgb3B0LWluOyB3ZSBpbnRlbmQgdG8gcmVtb3ZlIHRoZSBvcHRpb24gaW4gdGhlIGZ1dHVyZS5cbiopXG5cbmV4dGVybmFsIGxlbmd0aCA6IHN0cmluZyAtPiBpbnQgPSBcIiVzdHJpbmdfbGVuZ3RoXCJcbigqKiBSZXR1cm4gdGhlIGxlbmd0aCAobnVtYmVyIG9mIGNoYXJhY3RlcnMpIG9mIHRoZSBnaXZlbiBzdHJpbmcuICopXG5cbmV4dGVybmFsIGdldCA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciA9IFwiJXN0cmluZ19zYWZlX2dldFwiXG4oKiogW1N0cmluZy5nZXQgcyBuXSByZXR1cm5zIHRoZSBjaGFyYWN0ZXIgYXQgaW5kZXggW25dIGluIHN0cmluZyBbc10uXG4gICBZb3UgY2FuIGFsc28gd3JpdGUgW3MuW25dXSBpbnN0ZWFkIG9mIFtTdHJpbmcuZ2V0IHMgbl0uXG4gICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbbl0gbm90IGEgdmFsaWQgaW5kZXggaW4gW3NdLiAqKVxuXG5cbmV4dGVybmFsIHNldCA6IGJ5dGVzIC0+IGludCAtPiBjaGFyIC0+IHVuaXQgPSBcIiVzdHJpbmdfc2FmZV9zZXRcIlxuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIEJ5dGVzLnNldCBpbnN0ZWFkLlwiXVxuKCoqIFtTdHJpbmcuc2V0IHMgbiBjXSBtb2RpZmllcyBieXRlIHNlcXVlbmNlIFtzXSBpbiBwbGFjZSxcbiAgIHJlcGxhY2luZyB0aGUgYnl0ZSBhdCBpbmRleCBbbl0gd2l0aCBbY10uXG4gICBZb3UgY2FuIGFsc28gd3JpdGUgW3MuW25dIDwtIGNdIGluc3RlYWQgb2YgW1N0cmluZy5zZXQgcyBuIGNdLlxuICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW25dIGlzIG5vdCBhIHZhbGlkIGluZGV4IGluIFtzXS5cblxuICAgQGRlcHJlY2F0ZWQgVGhpcyBpcyBhIGRlcHJlY2F0ZWQgYWxpYXMgb2YgeyFCeXRlcy5zZXR9LlsgXSAqKVxuXG5leHRlcm5hbCBjcmVhdGUgOiBpbnQgLT4gYnl0ZXMgPSBcImNhbWxfY3JlYXRlX3N0cmluZ1wiXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWQgXCJVc2UgQnl0ZXMuY3JlYXRlIGluc3RlYWQuXCJdXG4oKiogW1N0cmluZy5jcmVhdGUgbl0gcmV0dXJucyBhIGZyZXNoIGJ5dGUgc2VxdWVuY2Ugb2YgbGVuZ3RoIFtuXS5cbiAgIFRoZSBzZXF1ZW5jZSBpcyB1bmluaXRpYWxpemVkIGFuZCBjb250YWlucyBhcmJpdHJhcnkgYnl0ZXMuXG4gICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbbiA8IDBdIG9yIFtuID4gXXshU3lzLm1heF9zdHJpbmdfbGVuZ3RofS5cblxuICAgQGRlcHJlY2F0ZWQgVGhpcyBpcyBhIGRlcHJlY2F0ZWQgYWxpYXMgb2YgeyFCeXRlcy5jcmVhdGV9LlsgXSAqKVxuXG52YWwgbWFrZSA6IGludCAtPiBjaGFyIC0+IHN0cmluZ1xuKCoqIFtTdHJpbmcubWFrZSBuIGNdIHJldHVybnMgYSBmcmVzaCBzdHJpbmcgb2YgbGVuZ3RoIFtuXSxcbiAgIGZpbGxlZCB3aXRoIHRoZSBjaGFyYWN0ZXIgW2NdLlxuICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW24gPCAwXSBvciBbbiA+IF17IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0uICopXG5cbnZhbCBpbml0IDogaW50IC0+IChpbnQgLT4gY2hhcikgLT4gc3RyaW5nXG4oKiogW1N0cmluZy5pbml0IG4gZl0gcmV0dXJucyBhIHN0cmluZyBvZiBsZW5ndGggW25dLCB3aXRoIGNoYXJhY3RlclxuICAgIFtpXSBpbml0aWFsaXplZCB0byB0aGUgcmVzdWx0IG9mIFtmIGldIChjYWxsZWQgaW4gaW5jcmVhc2luZ1xuICAgIGluZGV4IG9yZGVyKS5cblxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtuIDwgMF0gb3IgW24gPiBdeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9LlxuICAgIEBzaW5jZSA0LjAyLjBcbiopXG5cbnZhbCBjb3B5IDogc3RyaW5nIC0+IHN0cmluZyBbQEBvY2FtbC5kZXByZWNhdGVkXVxuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGdpdmVuIHN0cmluZy5cblxuICAgIEBkZXByZWNhdGVkIEJlY2F1c2Ugc3RyaW5ncyBhcmUgaW1tdXRhYmxlLCBpdCBkb2Vzbid0IG1ha2UgbXVjaFxuICAgIHNlbnNlIHRvIG1ha2UgaWRlbnRpY2FsIGNvcGllcyBvZiB0aGVtLiAqKVxuXG52YWwgc3ViIDogc3RyaW5nIC0+IGludCAtPiBpbnQgLT4gc3RyaW5nXG4oKiogW1N0cmluZy5zdWIgcyBzdGFydCBsZW5dIHJldHVybnMgYSBmcmVzaCBzdHJpbmcgb2YgbGVuZ3RoIFtsZW5dLFxuICAgY29udGFpbmluZyB0aGUgc3Vic3RyaW5nIG9mIFtzXSB0aGF0IHN0YXJ0cyBhdCBwb3NpdGlvbiBbc3RhcnRdIGFuZFxuICAgaGFzIGxlbmd0aCBbbGVuXS5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtzdGFydF0gYW5kIFtsZW5dIGRvIG5vdFxuICAgZGVzaWduYXRlIGEgdmFsaWQgc3Vic3RyaW5nIG9mIFtzXS4gKilcblxudmFsIGZpbGwgOiBieXRlcyAtPiBpbnQgLT4gaW50IC0+IGNoYXIgLT4gdW5pdFxuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIEJ5dGVzLmZpbGwgaW5zdGVhZC5cIl1cbigqKiBbU3RyaW5nLmZpbGwgcyBzdGFydCBsZW4gY10gbW9kaWZpZXMgYnl0ZSBzZXF1ZW5jZSBbc10gaW4gcGxhY2UsXG4gICByZXBsYWNpbmcgW2xlbl0gYnl0ZXMgd2l0aCBbY10sIHN0YXJ0aW5nIGF0IFtzdGFydF0uXG4gICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbc3RhcnRdIGFuZCBbbGVuXSBkbyBub3RcbiAgIGRlc2lnbmF0ZSBhIHZhbGlkIHJhbmdlIG9mIFtzXS5cblxuICAgQGRlcHJlY2F0ZWQgVGhpcyBpcyBhIGRlcHJlY2F0ZWQgYWxpYXMgb2YgeyFCeXRlcy5maWxsfS5bIF0gKilcblxudmFsIGJsaXQgOiBzdHJpbmcgLT4gaW50IC0+IGJ5dGVzIC0+IGludCAtPiBpbnQgLT4gdW5pdFxuKCoqIFNhbWUgYXMgeyFCeXRlcy5ibGl0X3N0cmluZ30uICopXG5cbnZhbCBjb25jYXQgOiBzdHJpbmcgLT4gc3RyaW5nIGxpc3QgLT4gc3RyaW5nXG4oKiogW1N0cmluZy5jb25jYXQgc2VwIHNsXSBjb25jYXRlbmF0ZXMgdGhlIGxpc3Qgb2Ygc3RyaW5ncyBbc2xdLFxuICAgIGluc2VydGluZyB0aGUgc2VwYXJhdG9yIHN0cmluZyBbc2VwXSBiZXR3ZWVuIGVhY2guXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgdGhlIHJlc3VsdCBpcyBsb25nZXIgdGhhblxuICAgIHshU3lzLm1heF9zdHJpbmdfbGVuZ3RofSBieXRlcy4gKilcblxudmFsIGl0ZXIgOiAoY2hhciAtPiB1bml0KSAtPiBzdHJpbmcgLT4gdW5pdFxuKCoqIFtTdHJpbmcuaXRlciBmIHNdIGFwcGxpZXMgZnVuY3Rpb24gW2ZdIGluIHR1cm4gdG8gYWxsXG4gICB0aGUgY2hhcmFjdGVycyBvZiBbc10uICBJdCBpcyBlcXVpdmFsZW50IHRvXG4gICBbZiBzLlswXTsgZiBzLlsxXTsgLi4uOyBmIHMuW1N0cmluZy5sZW5ndGggcyAtIDFdOyAoKV0uICopXG5cbnZhbCBpdGVyaSA6IChpbnQgLT4gY2hhciAtPiB1bml0KSAtPiBzdHJpbmcgLT4gdW5pdFxuKCoqIFNhbWUgYXMgeyFTdHJpbmcuaXRlcn0sIGJ1dCB0aGVcbiAgIGZ1bmN0aW9uIGlzIGFwcGxpZWQgdG8gdGhlIGluZGV4IG9mIHRoZSBlbGVtZW50IGFzIGZpcnN0IGFyZ3VtZW50XG4gICAoY291bnRpbmcgZnJvbSAwKSwgYW5kIHRoZSBjaGFyYWN0ZXIgaXRzZWxmIGFzIHNlY29uZCBhcmd1bWVudC5cbiAgIEBzaW5jZSA0LjAwLjAgKilcblxudmFsIG1hcCA6IChjaGFyIC0+IGNoYXIpIC0+IHN0cmluZyAtPiBzdHJpbmdcbigqKiBbU3RyaW5nLm1hcCBmIHNdIGFwcGxpZXMgZnVuY3Rpb24gW2ZdIGluIHR1cm4gdG8gYWxsIHRoZVxuICAgIGNoYXJhY3RlcnMgb2YgW3NdIChpbiBpbmNyZWFzaW5nIGluZGV4IG9yZGVyKSBhbmQgc3RvcmVzIHRoZVxuICAgIHJlc3VsdHMgaW4gYSBuZXcgc3RyaW5nIHRoYXQgaXMgcmV0dXJuZWQuXG4gICAgQHNpbmNlIDQuMDAuMCAqKVxuXG52YWwgbWFwaSA6IChpbnQgLT4gY2hhciAtPiBjaGFyKSAtPiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogW1N0cmluZy5tYXBpIGYgc10gY2FsbHMgW2ZdIHdpdGggZWFjaCBjaGFyYWN0ZXIgb2YgW3NdIGFuZCBpdHNcbiAgICBpbmRleCAoaW4gaW5jcmVhc2luZyBpbmRleCBvcmRlcikgYW5kIHN0b3JlcyB0aGUgcmVzdWx0cyBpbiBhIG5ld1xuICAgIHN0cmluZyB0aGF0IGlzIHJldHVybmVkLlxuICAgIEBzaW5jZSA0LjAyLjAgKilcblxudmFsIHRyaW0gOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGhvdXQgbGVhZGluZyBhbmQgdHJhaWxpbmdcbiAgIHdoaXRlc3BhY2UuICBUaGUgY2hhcmFjdGVycyByZWdhcmRlZCBhcyB3aGl0ZXNwYWNlIGFyZTogWycgJ10sXG4gICBbJ1xcMDEyJ10sIFsnXFxuJ10sIFsnXFxyJ10sIGFuZCBbJ1xcdCddLiAgSWYgdGhlcmUgaXMgbmVpdGhlciBsZWFkaW5nIG5vclxuICAgdHJhaWxpbmcgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgaW4gdGhlIGFyZ3VtZW50LCByZXR1cm4gdGhlIG9yaWdpbmFsXG4gICBzdHJpbmcgaXRzZWxmLCBub3QgYSBjb3B5LlxuICAgQHNpbmNlIDQuMDAuMCAqKVxuXG52YWwgZXNjYXBlZCA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgICByZXByZXNlbnRlZCBieSBlc2NhcGUgc2VxdWVuY2VzLCBmb2xsb3dpbmcgdGhlIGxleGljYWxcbiAgICBjb252ZW50aW9ucyBvZiBPQ2FtbC5cbiAgICBBbGwgY2hhcmFjdGVycyBvdXRzaWRlIHRoZSBBU0NJSSBwcmludGFibGUgcmFuZ2UgKDMyLi4xMjYpIGFyZVxuICAgIGVzY2FwZWQsIGFzIHdlbGwgYXMgYmFja3NsYXNoIGFuZCBkb3VibGUtcXVvdGUuXG5cbiAgICBJZiB0aGVyZSBpcyBubyBzcGVjaWFsIGNoYXJhY3RlciBpbiB0aGUgYXJndW1lbnQgdGhhdCBuZWVkc1xuICAgIGVzY2FwaW5nLCByZXR1cm4gdGhlIG9yaWdpbmFsIHN0cmluZyBpdHNlbGYsIG5vdCBhIGNvcHkuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgdGhlIHJlc3VsdCBpcyBsb25nZXIgdGhhblxuICAgIHshU3lzLm1heF9zdHJpbmdfbGVuZ3RofSBieXRlcy5cblxuICAgIFRoZSBmdW5jdGlvbiB7IVNjYW5mLnVuZXNjYXBlZH0gaXMgYSBsZWZ0IGludmVyc2Ugb2YgW2VzY2FwZWRdLFxuICAgIGkuZS4gW1NjYW5mLnVuZXNjYXBlZCAoZXNjYXBlZCBzKSA9IHNdIGZvciBhbnkgc3RyaW5nIFtzXSAodW5sZXNzXG4gICAgW2VzY2FwZSBzXSBmYWlscykuICopXG5cbnZhbCBpbmRleCA6IHN0cmluZyAtPiBjaGFyIC0+IGludFxuKCoqIFtTdHJpbmcuaW5kZXggcyBjXSByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3RcbiAgIG9jY3VycmVuY2Ugb2YgY2hhcmFjdGVyIFtjXSBpbiBzdHJpbmcgW3NdLlxuICAgQHJhaXNlIE5vdF9mb3VuZCBpZiBbY10gZG9lcyBub3Qgb2NjdXIgaW4gW3NdLiAqKVxuXG52YWwgaW5kZXhfb3B0OiBzdHJpbmcgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW1N0cmluZy5pbmRleF9vcHQgcyBjXSByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3RcbiAgICBvY2N1cnJlbmNlIG9mIGNoYXJhY3RlciBbY10gaW4gc3RyaW5nIFtzXSwgb3JcbiAgICBbTm9uZV0gaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXS5cbiAgICBAc2luY2UgNC4wNSAqKVxuXG52YWwgcmluZGV4IDogc3RyaW5nIC0+IGNoYXIgLT4gaW50XG4oKiogW1N0cmluZy5yaW5kZXggcyBjXSByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdFxuICAgb2NjdXJyZW5jZSBvZiBjaGFyYWN0ZXIgW2NdIGluIHN0cmluZyBbc10uXG4gICBAcmFpc2UgTm90X2ZvdW5kIGlmIFtjXSBkb2VzIG5vdCBvY2N1ciBpbiBbc10uICopXG5cbnZhbCByaW5kZXhfb3B0OiBzdHJpbmcgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW1N0cmluZy5yaW5kZXhfb3B0IHMgY10gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZVxuICAgIG9mIGNoYXJhY3RlciBbY10gaW4gc3RyaW5nIFtzXSwgb3IgW05vbmVdIGlmIFtjXSBkb2VzIG5vdCBvY2N1ciBpblxuICAgIFtzXS5cbiAgICBAc2luY2UgNC4wNSAqKVxuXG52YWwgaW5kZXhfZnJvbSA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBpbnRcbigqKiBbU3RyaW5nLmluZGV4X2Zyb20gcyBpIGNdIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZVxuICAgZmlyc3Qgb2NjdXJyZW5jZSBvZiBjaGFyYWN0ZXIgW2NdIGluIHN0cmluZyBbc10gYWZ0ZXIgcG9zaXRpb24gW2ldLlxuICAgW1N0cmluZy5pbmRleCBzIGNdIGlzIGVxdWl2YWxlbnQgdG8gW1N0cmluZy5pbmRleF9mcm9tIHMgMCBjXS5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpXSBpcyBub3QgYSB2YWxpZCBwb3NpdGlvbiBpbiBbc10uXG4gICBAcmFpc2UgTm90X2ZvdW5kIGlmIFtjXSBkb2VzIG5vdCBvY2N1ciBpbiBbc10gYWZ0ZXIgcG9zaXRpb24gW2ldLiAqKVxuXG52YWwgaW5kZXhfZnJvbV9vcHQ6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW1N0cmluZy5pbmRleF9mcm9tX29wdCBzIGkgY10gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlXG4gICAgZmlyc3Qgb2NjdXJyZW5jZSBvZiBjaGFyYWN0ZXIgW2NdIGluIHN0cmluZyBbc10gYWZ0ZXIgcG9zaXRpb24gW2ldXG4gICAgb3IgW05vbmVdIGlmIFtjXSBkb2VzIG5vdCBvY2N1ciBpbiBbc10gYWZ0ZXIgcG9zaXRpb24gW2ldLlxuXG4gICAgW1N0cmluZy5pbmRleF9vcHQgcyBjXSBpcyBlcXVpdmFsZW50IHRvIFtTdHJpbmcuaW5kZXhfZnJvbV9vcHQgcyAwIGNdLlxuICAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpXSBpcyBub3QgYSB2YWxpZCBwb3NpdGlvbiBpbiBbc10uXG5cbiAgICBAc2luY2UgNC4wNVxuKilcblxudmFsIHJpbmRleF9mcm9tIDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludFxuKCoqIFtTdHJpbmcucmluZGV4X2Zyb20gcyBpIGNdIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZVxuICAgbGFzdCBvY2N1cnJlbmNlIG9mIGNoYXJhY3RlciBbY10gaW4gc3RyaW5nIFtzXSBiZWZvcmUgcG9zaXRpb24gW2krMV0uXG4gICBbU3RyaW5nLnJpbmRleCBzIGNdIGlzIGVxdWl2YWxlbnQgdG9cbiAgIFtTdHJpbmcucmluZGV4X2Zyb20gcyAoU3RyaW5nLmxlbmd0aCBzIC0gMSkgY10uXG4gICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbaSsxXSBpcyBub3QgYSB2YWxpZCBwb3NpdGlvbiBpbiBbc10uXG4gICBAcmFpc2UgTm90X2ZvdW5kIGlmIFtjXSBkb2VzIG5vdCBvY2N1ciBpbiBbc10gYmVmb3JlIHBvc2l0aW9uIFtpKzFdLiAqKVxuXG52YWwgcmluZGV4X2Zyb21fb3B0OiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gaW50IG9wdGlvblxuKCoqIFtTdHJpbmcucmluZGV4X2Zyb21fb3B0IHMgaSBjXSByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGVcbiAgIGxhc3Qgb2NjdXJyZW5jZSBvZiBjaGFyYWN0ZXIgW2NdIGluIHN0cmluZyBbc10gYmVmb3JlIHBvc2l0aW9uIFtpKzFdXG4gICBvciBbTm9uZV0gaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXSBiZWZvcmUgcG9zaXRpb24gW2krMV0uXG5cbiAgIFtTdHJpbmcucmluZGV4X29wdCBzIGNdIGlzIGVxdWl2YWxlbnQgdG9cbiAgIFtTdHJpbmcucmluZGV4X2Zyb21fb3B0IHMgKFN0cmluZy5sZW5ndGggcyAtIDEpIGNdLlxuICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2krMV0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLlxuXG4gICAgQHNpbmNlIDQuMDVcbiopXG5cbnZhbCBjb250YWlucyA6IHN0cmluZyAtPiBjaGFyIC0+IGJvb2xcbigqKiBbU3RyaW5nLmNvbnRhaW5zIHMgY10gdGVzdHMgaWYgY2hhcmFjdGVyIFtjXVxuICAgYXBwZWFycyBpbiB0aGUgc3RyaW5nIFtzXS4gKilcblxudmFsIGNvbnRhaW5zX2Zyb20gOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gYm9vbFxuKCoqIFtTdHJpbmcuY29udGFpbnNfZnJvbSBzIHN0YXJ0IGNdIHRlc3RzIGlmIGNoYXJhY3RlciBbY11cbiAgIGFwcGVhcnMgaW4gW3NdIGFmdGVyIHBvc2l0aW9uIFtzdGFydF0uXG4gICBbU3RyaW5nLmNvbnRhaW5zIHMgY10gaXMgZXF1aXZhbGVudCB0b1xuICAgW1N0cmluZy5jb250YWluc19mcm9tIHMgMCBjXS5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtzdGFydF0gaXMgbm90IGEgdmFsaWQgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG52YWwgcmNvbnRhaW5zX2Zyb20gOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gYm9vbFxuKCoqIFtTdHJpbmcucmNvbnRhaW5zX2Zyb20gcyBzdG9wIGNdIHRlc3RzIGlmIGNoYXJhY3RlciBbY11cbiAgIGFwcGVhcnMgaW4gW3NdIGJlZm9yZSBwb3NpdGlvbiBbc3RvcCsxXS5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtzdG9wIDwgMF0gb3IgW3N0b3ArMV0gaXMgbm90IGEgdmFsaWRcbiAgIHBvc2l0aW9uIGluIFtzXS4gKilcblxudmFsIHVwcGVyY2FzZSA6IHN0cmluZyAtPiBzdHJpbmdcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBTdHJpbmcudXBwZXJjYXNlX2FzY2lpIGluc3RlYWQuXCJdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggYWxsIGxvd2VyY2FzZSBsZXR0ZXJzXG4gICB0cmFuc2xhdGVkIHRvIHVwcGVyY2FzZSwgaW5jbHVkaW5nIGFjY2VudGVkIGxldHRlcnMgb2YgdGhlIElTT1xuICAgTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0LlxuICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCBsb3dlcmNhc2UgOiBzdHJpbmcgLT4gc3RyaW5nXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWQgXCJVc2UgU3RyaW5nLmxvd2VyY2FzZV9hc2NpaSBpbnN0ZWFkLlwiXVxuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIGFsbCB1cHBlcmNhc2UgbGV0dGVyc1xuICAgdHJhbnNsYXRlZCB0byBsb3dlcmNhc2UsIGluY2x1ZGluZyBhY2NlbnRlZCBsZXR0ZXJzIG9mIHRoZSBJU09cbiAgIExhdGluLTEgKDg4NTktMSkgY2hhcmFjdGVyIHNldC5cbiAgIEBkZXByZWNhdGVkIEZ1bmN0aW9ucyBvcGVyYXRpbmcgb24gTGF0aW4tMSBjaGFyYWN0ZXIgc2V0IGFyZSBkZXByZWNhdGVkLiAqKVxuXG52YWwgY2FwaXRhbGl6ZSA6IHN0cmluZyAtPiBzdHJpbmdcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBTdHJpbmcuY2FwaXRhbGl6ZV9hc2NpaSBpbnN0ZWFkLlwiXVxuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIHRoZSBmaXJzdCBjaGFyYWN0ZXIgc2V0IHRvIHVwcGVyY2FzZSxcbiAgIHVzaW5nIHRoZSBJU08gTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0Li5cbiAgIEBkZXByZWNhdGVkIEZ1bmN0aW9ucyBvcGVyYXRpbmcgb24gTGF0aW4tMSBjaGFyYWN0ZXIgc2V0IGFyZSBkZXByZWNhdGVkLiAqKVxuXG52YWwgdW5jYXBpdGFsaXplIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIFN0cmluZy51bmNhcGl0YWxpemVfYXNjaWkgaW5zdGVhZC5cIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byBsb3dlcmNhc2UsXG4gICB1c2luZyB0aGUgSVNPIExhdGluLTEgKDg4NTktMSkgY2hhcmFjdGVyIHNldC4uXG4gICBAZGVwcmVjYXRlZCBGdW5jdGlvbnMgb3BlcmF0aW5nIG9uIExhdGluLTEgY2hhcmFjdGVyIHNldCBhcmUgZGVwcmVjYXRlZC4gKilcblxudmFsIHVwcGVyY2FzZV9hc2NpaSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCBhbGwgbG93ZXJjYXNlIGxldHRlcnNcbiAgIHRyYW5zbGF0ZWQgdG8gdXBwZXJjYXNlLCB1c2luZyB0aGUgVVMtQVNDSUkgY2hhcmFjdGVyIHNldC5cbiAgIEBzaW5jZSA0LjAzLjAgKilcblxudmFsIGxvd2VyY2FzZV9hc2NpaSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCBhbGwgdXBwZXJjYXNlIGxldHRlcnNcbiAgIHRyYW5zbGF0ZWQgdG8gbG93ZXJjYXNlLCB1c2luZyB0aGUgVVMtQVNDSUkgY2hhcmFjdGVyIHNldC5cbiAgIEBzaW5jZSA0LjAzLjAgKilcblxudmFsIGNhcGl0YWxpemVfYXNjaWkgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggdGhlIGZpcnN0IGNoYXJhY3RlciBzZXQgdG8gdXBwZXJjYXNlLFxuICAgdXNpbmcgdGhlIFVTLUFTQ0lJIGNoYXJhY3RlciBzZXQuXG4gICBAc2luY2UgNC4wMy4wICopXG5cbnZhbCB1bmNhcGl0YWxpemVfYXNjaWkgOiBzdHJpbmcgLT4gc3RyaW5nXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggdGhlIGZpcnN0IGNoYXJhY3RlciBzZXQgdG8gbG93ZXJjYXNlLFxuICAgdXNpbmcgdGhlIFVTLUFTQ0lJIGNoYXJhY3RlciBzZXQuXG4gICBAc2luY2UgNC4wMy4wICopXG5cbnR5cGUgdCA9IHN0cmluZ1xuKCoqIEFuIGFsaWFzIGZvciB0aGUgdHlwZSBvZiBzdHJpbmdzLiAqKVxuXG52YWwgY29tcGFyZTogdCAtPiB0IC0+IGludFxuKCoqIFRoZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBzdHJpbmdzLCB3aXRoIHRoZSBzYW1lIHNwZWNpZmljYXRpb24gYXNcbiAgICB7IVN0ZGxpYi5jb21wYXJlfS4gIEFsb25nIHdpdGggdGhlIHR5cGUgW3RdLCB0aGlzIGZ1bmN0aW9uIFtjb21wYXJlXVxuICAgIGFsbG93cyB0aGUgbW9kdWxlIFtTdHJpbmddIHRvIGJlIHBhc3NlZCBhcyBhcmd1bWVudCB0byB0aGUgZnVuY3RvcnNcbiAgICB7IVNldC5NYWtlfSBhbmQgeyFNYXAuTWFrZX0uICopXG5cbnZhbCBlcXVhbDogdCAtPiB0IC0+IGJvb2xcbigqKiBUaGUgZXF1YWwgZnVuY3Rpb24gZm9yIHN0cmluZ3MuXG4gICAgQHNpbmNlIDQuMDMuMCAqKVxuXG52YWwgc3BsaXRfb25fY2hhcjogY2hhciAtPiBzdHJpbmcgLT4gc3RyaW5nIGxpc3RcbigqKiBbU3RyaW5nLnNwbGl0X29uX2NoYXIgc2VwIHNdIHJldHVybnMgdGhlIGxpc3Qgb2YgYWxsIChwb3NzaWJseSBlbXB0eSlcbiAgICBzdWJzdHJpbmdzIG9mIFtzXSB0aGF0IGFyZSBkZWxpbWl0ZWQgYnkgdGhlIFtzZXBdIGNoYXJhY3Rlci5cblxuICAgIFRoZSBmdW5jdGlvbidzIG91dHB1dCBpcyBzcGVjaWZpZWQgYnkgdGhlIGZvbGxvd2luZyBpbnZhcmlhbnRzOlxuXG4gICAgLSBUaGUgbGlzdCBpcyBub3QgZW1wdHkuXG4gICAgLSBDb25jYXRlbmF0aW5nIGl0cyBlbGVtZW50cyB1c2luZyBbc2VwXSBhcyBhIHNlcGFyYXRvciByZXR1cm5zIGFcbiAgICAgIHN0cmluZyBlcXVhbCB0byB0aGUgaW5wdXQgKFtTdHJpbmcuY29uY2F0IChTdHJpbmcubWFrZSAxIHNlcClcbiAgICAgIChTdHJpbmcuc3BsaXRfb25fY2hhciBzZXAgcykgPSBzXSkuXG4gICAgLSBObyBzdHJpbmcgaW4gdGhlIHJlc3VsdCBjb250YWlucyB0aGUgW3NlcF0gY2hhcmFjdGVyLlxuXG4gICAgQHNpbmNlIDQuMDQuMFxuKilcblxuKCoqIHsxIEl0ZXJhdG9yc30gKilcblxudmFsIHRvX3NlcSA6IHQgLT4gY2hhciBTZXEudFxuKCoqIEl0ZXJhdGUgb24gdGhlIHN0cmluZywgaW4gaW5jcmVhc2luZyBpbmRleCBvcmRlci4gTW9kaWZpY2F0aW9ucyBvZiB0aGVcbiAgICBzdHJpbmcgZHVyaW5nIGl0ZXJhdGlvbiB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGUgaXRlcmF0b3IuXG4gICAgQHNpbmNlIDQuMDcgKilcblxudmFsIHRvX3NlcWkgOiB0IC0+IChpbnQgKiBjaGFyKSBTZXEudFxuKCoqIEl0ZXJhdGUgb24gdGhlIHN0cmluZywgaW4gaW5jcmVhc2luZyBvcmRlciwgeWllbGRpbmcgaW5kaWNlcyBhbG9uZyBjaGFyc1xuICAgIEBzaW5jZSA0LjA3ICopXG5cbnZhbCBvZl9zZXEgOiBjaGFyIFNlcS50IC0+IHRcbigqKiBDcmVhdGUgYSBzdHJpbmcgZnJvbSB0aGUgZ2VuZXJhdG9yXG4gICAgQHNpbmNlIDQuMDcgKilcblxuKCoqLyoqKVxuXG4oKiBUaGUgZm9sbG93aW5nIGlzIGZvciBzeXN0ZW0gdXNlIG9ubHkuIERvIG5vdCBjYWxsIGRpcmVjdGx5LiAqKVxuXG5leHRlcm5hbCB1bnNhZmVfZ2V0IDogc3RyaW5nIC0+IGludCAtPiBjaGFyID0gXCIlc3RyaW5nX3Vuc2FmZV9nZXRcIlxuZXh0ZXJuYWwgdW5zYWZlX3NldCA6IGJ5dGVzIC0+IGludCAtPiBjaGFyIC0+IHVuaXQgPSBcIiVzdHJpbmdfdW5zYWZlX3NldFwiXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWRdXG5leHRlcm5hbCB1bnNhZmVfYmxpdCA6XG4gIHN0cmluZyAtPiBpbnQgLT4gYnl0ZXMgLT4gaW50IC0+IGludCAtPiB1bml0XG4gID0gXCJjYW1sX2JsaXRfc3RyaW5nXCIgW0BAbm9hbGxvY11cbmV4dGVybmFsIHVuc2FmZV9maWxsIDpcbiAgYnl0ZXMgLT4gaW50IC0+IGludCAtPiBjaGFyIC0+IHVuaXQgPSBcImNhbWxfZmlsbF9zdHJpbmdcIiBbQEBub2FsbG9jXVxuICBbQEBvY2FtbC5kZXByZWNhdGVkXVxuIl19
