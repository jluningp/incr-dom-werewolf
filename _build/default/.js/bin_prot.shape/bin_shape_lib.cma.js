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
    var
     global_data=runtime.caml_get_global_data(),
     cst_Free_type_variable_Vid=
      caml_string_of_jsbytes("Free type variable: '%{Vid}"),
     cst_Free_type_variable=caml_string_of_jsbytes("Free type variable: '"),
     cst_apply_incorrect_type_appli=
      caml_string_of_jsbytes("apply, incorrect type application arity"),
     cst_top_level=caml_string_of_jsbytes("top-level"),
     cst_impossible_lookup_group_un=
      caml_string_of_jsbytes
       ("impossible: lookup_group, unbound type-identifier: %{Tid}"),
     cst_impossible_lookup_group_un$0=
      caml_string_of_jsbytes
       ("impossible: lookup_group, unbound type-identifier: "),
     cst_annotate=caml_string_of_jsbytes("annotate"),
     cst_base=caml_string_of_jsbytes("base"),
     cst_tuple=caml_string_of_jsbytes("tuple"),
     cst_record=caml_string_of_jsbytes("record"),
     cst_variant=caml_string_of_jsbytes("variant"),
     cst_poly_variant=caml_string_of_jsbytes("poly_variant"),
     cst_application=caml_string_of_jsbytes("application"),
     cst_rec_app=caml_string_of_jsbytes("rec_app"),
     cst_var=caml_string_of_jsbytes("var"),
     cst_some=caml_string_of_jsbytes("some"),
     cst_none=caml_string_of_jsbytes("none"),
     cst_Location_s=caml_string_of_jsbytes("%{Location}: %s"),
     cst_Bin_shape_lib_Bin_shape_Fo=
      caml_string_of_jsbytes
       ("Bin_shape_lib.Bin_shape.For_typerep.Not_a_tuple"),
     Assert_failure=global_data.Assert_failure,
     Base_List=global_data.Base__List,
     Base=global_data.Base,
     Base_Option=global_data.Base__Option,
     Base_Map=global_data.Base__Map,
     Base_Comparator=global_data.Base__Comparator,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Base_String=global_data.Base__String,
     Base_Int=global_data.Base__Int,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Printf=global_data.Base__Printf,
     Md5_lib=global_data.Md5_lib,
     Bin_shape_lib=[0];
    caml_register_global(121,Bin_shape_lib,"Bin_shape_lib");
    var
     sexp_of_t=Base_String[22],
     of_string=Base_String[23],
     to_string=Base_String[24],
     sexp_of_t$0=Base_String[22],
     of_string$0=Base_String[23],
     to_string$0=Base_String[24],
     compare=Base_String[31],
     _M_=
      [0,
       caml_string_of_jsbytes
        ("shape/src/bin_shape.ml.For_typerep.Not_a_tuple")],
     _N_=[0,caml_string_of_jsbytes("_none_"),0,-1],
     _I_=[0,0],
     _J_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("The shape for an inherited type is not described as a polymorphic-variant: "),
        [2,0,0]],
       caml_string_of_jsbytes
        ("The shape for an inherited type is not described as a polymorphic-variant: %s")],
     _x_=[0,caml_string_of_jsbytes("Annotate")],
     _y_=[0,caml_string_of_jsbytes("Base")],
     _z_=[0,caml_string_of_jsbytes("Record")],
     _A_=[0,caml_string_of_jsbytes("Variant")],
     _B_=[0,caml_string_of_jsbytes("Tuple")],
     _C_=[0,caml_string_of_jsbytes("Poly_variant")],
     _D_=[0,caml_string_of_jsbytes("Var")],
     _E_=[0,caml_string_of_jsbytes("Rec_app")],
     _F_=[0,caml_string_of_jsbytes("Top_app")],
     _w_=[0,0],
     _t_=[0,caml_string_of_jsbytes("members")],
     _u_=[0,caml_string_of_jsbytes("loc")],
     _v_=[0,caml_string_of_jsbytes("gid")],
     _r_=[0,caml_string_of_jsbytes("Constr")],
     _s_=[0,caml_string_of_jsbytes("Inherit")],
     _q_=[0,caml_string_of_jsbytes("Exp")],
     _p_=[0,caml_string_of_jsbytes("...")],
     _g_=[0,caml_string_of_jsbytes("Annotate")],
     _h_=[0,caml_string_of_jsbytes("Base")],
     _i_=[0,caml_string_of_jsbytes("Tuple")],
     _j_=[0,caml_string_of_jsbytes("Record")],
     _k_=[0,caml_string_of_jsbytes("Variant")],
     _l_=[0,caml_string_of_jsbytes("Poly_variant")],
     _m_=[0,caml_string_of_jsbytes("Application")],
     _n_=[0,caml_string_of_jsbytes("Rec_app")],
     _o_=[0,caml_string_of_jsbytes("Var")],
     _f_=[0,caml_string_of_jsbytes("")],
     _e_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("Different shapes for duplicated polymorphic constructor: `"),
        [2,0,0]],
       caml_string_of_jsbytes
        ("Different shapes for duplicated polymorphic constructor: `%s")],
     _d_=[0,17724,0],
     _c_=[0,caml_string_of_jsbytes("sorted")],
     _a_=[11,caml_string_of_jsbytes(": "),[2,0,0]],
     _b_=[0,0];
    function eval_fail(loc,fmt)
     {function _bF_(s)
       {var
         _bG_=
          [0,
           [24,
            _b_,
            function(param,custom_printf_001)
             {return caml_call1(to_string,custom_printf_001)},
            _a_],
           cst_Location_s],
         _bH_=caml_call3(Base_Printf[2],_bG_,loc,s);
        return caml_call1(Base[220],_bH_)}
      return caml_call2(Base_Printf[4],_bF_,fmt)}
    function equal_option(equal,a,b)
     {if(a)
       {if(b){var y=b[1],x=a[1];return caml_call2(equal,x,y)}}
      else
       if(! b)return 1;
      return 0}
    function create(loc,eq,xs$1)
     {function _bD_(param,_bE_)
       {var s2=_bE_[1],s1=param[1];return caml_call2(Base_String[31],s1,s2)}
      var param$0=caml_call2(Base_List[61],xs$1,_bD_);
      if(param$0)
       {var
         xs$0=param$0[2],
         match$0=param$0[1],
         value$0=match$0[2],
         key$0=match$0[1],
         acc$1=[0,[0,key$0,value$0],0],
         acc=acc$1,
         last_key=key$0,
         last_value=value$0,
         param=xs$0;
        for(;;)
         {if(param)
           {var xs=param[2],match=param[1],value=match[2],key=match[1];
            if(! caml_call2(Base_String[27],last_key,key))
             {var
               acc$0=[0,[0,key,value],acc],
               acc=acc$0,
               last_key=key,
               last_value=value,
               param=xs;
              continue}
            if(caml_call2(eq,last_value,value)){var param=xs;continue}
            var match$1=[0,-1062743954,key]}
          else
           var match$1=[0,17724,caml_call1(Base_List[37],acc)];
          break}}
      else
       var match$1=_d_;
      if(17724 <= match$1[1]){var sorted=match$1[2];return [0,sorted]}
      var s=match$1[2];
      return caml_call2(eval_fail(loc,_e_),s,0)}
    function map(t,f)
     {function _bC_(param)
       {var v=param[2],k=param[1];return [0,k,caml_call1(f,v)]}
      return [0,caml_call2(Base_List[74],t[1],_bC_)]}
    var
     compare$0=Md5_lib[1],
     to_binary=Md5_lib[3],
     to_hex=Md5_lib[6],
     of_hex_exn=Md5_lib[7],
     string=Md5_lib[8];
    function to_md5(t){return t}
    function of_md5(t){return t}
    function sexp_of_t$1(t)
     {var _bB_=caml_call1(to_hex,t);return caml_call1(Base[165],_bB_)}
    function t_of_sexp(s)
     {return caml_call1(of_hex_exn,caml_call1(Base[164],s))}
    function uuid(u){return caml_call1(string,caml_call1(to_string$0,u))}
    function int$0(x){return caml_call1(string,caml_call1(Base_Int[11],x))}
    function pair(x,y)
     {var _bz_=caml_call1(to_binary,y),_bA_=caml_call1(to_binary,x);
      return caml_call1(string,caml_call2(Base[217],_bA_,_bz_))}
    function list(l)
     {var _by_=caml_call2(Base_List[74],l,to_binary);
      return caml_call1(string,caml_call2(Base_String[50],_f_,_by_))}
    function constructor(s,l)
     {var _bx_=caml_call1(to_binary,list(l));
      return caml_call1(string,caml_call2(Base[217],s,_bx_))}
    function sexp_of_t$2(of_a,param)
     {switch(param[0])
       {case 0:
         var
          v1=param[2],
          v0$0=param[1],
          v0$1=caml_call1(sexp_of_t$0,v0$0),
          v1$0=caml_call1(of_a,v1);
         return [1,[0,_g_,[0,v0$1,[0,v1$0,0]]]];
        case 1:
         var
          v1$1=param[2],
          v0$2=param[1],
          v0$3=caml_call1(sexp_of_t$0,v0$2),
          v1$2=caml_call2(Base[140],of_a,v1$1);
         return [1,[0,_h_,[0,v0$3,[0,v1$2,0]]]];
        case 2:
         var v0$4=param[1],v0$5=caml_call2(Base[140],of_a,v0$4);
         return [1,[0,_i_,[0,v0$5,0]]];
        case 3:
         var
          v0$6=param[1],
          _bv_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[165],v0),
              v1$0=caml_call1(of_a,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$7=caml_call2(Base[140],_bv_,v0$6);
         return [1,[0,_j_,[0,v0$7,0]]];
        case 4:
         var
          v0$8=param[1],
          _bw_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[165],v0),
              v1$0=caml_call2(Base[140],of_a,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$9=caml_call2(Base[140],_bw_,v0$8);
         return [1,[0,_k_,[0,v0$9,0]]];
        case 5:
         var
          v0$10=param[1],
          of_a$0=caml_call1(Base[153],of_a),
          v_sorted=v0$10[1],
          bnds=0,
          _bu_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[165],v0),
              v1$0=caml_call1(of_a$0,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          arg=caml_call2(Base[140],_bu_,v_sorted),
          bnds$0=[0,[1,[0,_c_,[0,arg,0]]],bnds],
          v0=[1,bnds$0];
         return [1,[0,_l_,[0,v0,0]]];
        case 6:
         var
          v1$3=param[2],
          v0$11=param[1],
          v0$12=caml_call1(of_a,v0$11),
          v1$4=caml_call2(Base[140],of_a,v1$3);
         return [1,[0,_m_,[0,v0$12,[0,v1$4,0]]]];
        case 7:
         var
          v1$5=param[2],
          v0$13=param[1],
          v0$14=caml_call1(Base[120],v0$13),
          v1$6=caml_call2(Base[140],of_a,v1$5);
         return [1,[0,_n_,[0,v0$14,[0,v1$6,0]]]];
        default:
         var v0$15=param[1],v0$16=caml_call1(Base[120],v0$15);
         return [1,[0,_o_,[0,v0$16,0]]]}}
    function map$0(x,f)
     {switch(x[0])
       {case 0:var x$0=x[2],u=x[1];return [0,u,caml_call1(f,x$0)];
        case 1:var xs=x[2],s=x[1];return [1,s,caml_call2(Base_List[74],xs,f)];
        case 2:var xs$0=x[1];return [2,caml_call2(Base_List[74],xs$0,f)];
        case 3:
         var
          l=x[1],
          _bp_=
           function(param)
            {var x=param[2],s=param[1];return [0,s,caml_call1(f,x)]};
         return [3,caml_call2(Base_List[74],l,_bp_)];
        case 4:
         var
          l$0=x[1],
          _bq_=
           function(param)
            {var xs=param[2],s=param[1];
             return [0,s,caml_call2(Base_List[74],xs,f)]};
         return [4,caml_call2(Base_List[74],l$0,_bq_)];
        case 5:
         var t=x[1],_br_=Base_Option[30];
         return [5,map(t,function(_bt_){return caml_call2(_br_,_bt_,f)})];
        case 6:
         var l$1=x[2],x$1=x[1],_bs_=caml_call2(Base_List[74],l$1,f);
         return [6,caml_call1(f,x$1),_bs_];
        case 7:
         var l$2=x[2],t$0=x[1];return [7,t$0,caml_call2(Base_List[74],l$2,f)];
        default:var v=x[1];return [8,v]}}
    function to_string$1(t)
     {var _bo_=sexp_of_t$2(function(param){return _p_},t);
      return caml_call1(Base[84][16],_bo_)}
    function digest_layer(param)
     {switch(param[0])
       {case 0:
         var x=param[2],u=param[1];
         return constructor(cst_annotate,[0,uuid(u),[0,x,0]]);
        case 1:
         var l=param[2],u$0=param[1],_be_=[0,list(l),0];
         return constructor(cst_base,[0,uuid(u$0),_be_]);
        case 2:var l$0=param[1];return constructor(cst_tuple,[0,list(l$0),0]);
        case 3:
         var
          l$1=param[1],
          _bf_=0,
          _bg_=
           function(param)
            {var t=param[2],s=param[1];return pair(caml_call1(string,s),t)};
         return constructor
                 (cst_record,
                  [0,list(caml_call2(Base_List[74],l$1,_bg_)),_bf_]);
        case 4:
         var
          l$2=param[1],
          _bh_=0,
          _bi_=
           function(param)
            {var l=param[2],s=param[1],_bn_=list(l);
             return pair(caml_call1(string,s),_bn_)};
         return constructor
                 (cst_variant,
                  [0,list(caml_call2(Base_List[74],l$2,_bi_)),_bh_]);
        case 5:
         var
          table=param[1],
          _bj_=0,
          _bk_=
           function(param)
            {var y=param[2],x$0=param[1];
             if(y)
              var x=y[1],_bm_=constructor(cst_some,[0,x,0]);
             else
              var _bm_=constructor(cst_none,0);
             return pair(caml_call1(string,x$0),_bm_)};
         return constructor
                 (cst_poly_variant,
                  [0,list(caml_call2(Base_List[74],table[1],_bk_)),_bj_]);
        case 6:
         var l$3=param[2],x$0=param[1];
         return constructor(cst_application,[0,x$0,[0,list(l$3),0]]);
        case 7:
         var l$4=param[2],n=param[1],_bl_=[0,list(l$4),0];
         return constructor(cst_rec_app,[0,int$0(n),_bl_]);
        default:var n$0=param[1];return constructor(cst_var,[0,int$0(n$0),0])}}
    function to_digest(param){var x=param[1];return x}
    function to_digest$0(x)
     {switch(x[0])
       {case 0:var x$0=x[1];return digest_layer([5,x$0]);
        case 1:var match=x[1],x$1=match[2];return x$1;
        default:var x$2=x[1];return x$2}}
    function equal(x,y)
     {var _bc_=to_digest$0(y),_bd_=caml_call2(compare$0,to_digest$0(x),_bc_);
      return caml_call2(Base[202],_bd_,0)}
    function opaque(x){return [2,to_digest$0(x)]}
    function create$0(x)
     {var x$0=map$0(x,to_digest$0),desc=to_string$1(x$0);
      switch(x$0[0])
       {case 0:return [1,[0,desc,digest_layer(x$0)]];
        case 1:return [1,[0,desc,digest_layer(x$0)]];
        case 5:var l=x$0[1];return [0,l];
        case 6:return [1,[0,desc,digest_layer(x$0)]];
        case 7:return [1,[0,desc,digest_layer(x$0)]];
        default:return [1,[0,desc,digest_layer(x$0)]]}}
    function var$0(x){return create$0([8,x])}
    function apply(def,l){return create$0([6,def,l])}
    function recurse(tid,l){return create$0([7,tid,l])}
    function get_poly_variant(x)
     {if(1 === x[0]){var match=x[1],desc=match[1];return [1,desc]}
      var l=x[1],_a$_=Base_Option[30];
      function _ba_(x){return [2,x]}
      return [0,map(l,function(_bb_){return caml_call2(_a$_,_bb_,_ba_)})]}
    var Def=[0];
    function annotate(u,x){return create$0([0,u,x])}
    function basetype(u,l){return create$0([1,u,l])}
    function tuple(l){return create$0([2,l])}
    function poly_variant(loc,l)
     {return create$0
              ([5,
                create
                 (loc,
                  function(_a9_,_a__){return equal_option(equal,_a9_,_a__)},
                  l)])}
    function var$1(x){return create$0([8,x])}
    function apply$0(x,l){return create$0([6,x,l])}
    function recurse$0(t,l){return create$0([7,t,l])}
    function define(x){return x}
    function record(l){return create$0([3,l])}
    function variant(l){return create$0([4,l])}
    function create$1(e){return [0,to_digest$0(e)]}
    var
     Canonical_digest=
      [0,
       to_digest,
       [0,var$0,recurse,apply,opaque,get_poly_variant],
       Def,
       [0,
        annotate,
        basetype,
        tuple,
        poly_variant,
        var$1,
        recurse$0,
        apply$0,
        define,
        record,
        variant,
        create$1]];
    function compare$1(a_064,b_065)
     {if(caml_call2(Ppx_compare_lib[1],a_064,b_065))return 0;
      var b_067=b_065[1],a_066=a_064[1];
      function cmp_a(a_068,b_069){return compare$1(a_068,b_069)}
      if(caml_call2(Ppx_compare_lib[1],a_066,b_067))return 0;
      var switch$0=0;
      switch(a_066[0])
       {case 0:
         var _aP_=a_066[1];
         if(0 === b_067[0])
          {var
            b_015=b_067[2],
            b_013=b_067[1],
            a_014=a_066[2],
            n=caml_call2(compare,_aP_,b_013);
           return 0 === n?cmp_a(a_014,b_015):n}
         return -1;
        case 1:
         var _aQ_=a_066[2],_aR_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:
            var
             b_019=b_067[2],
             b_017=b_067[1],
             n$0=caml_call2(compare,_aR_,b_017);
            if(0 === n$0)
             {var _aS_=function(a_020,b_021){return cmp_a(a_020,b_021)};
              return caml_call3(Base[136],_aS_,_aQ_,b_019)}
            return n$0;
           default:return -1}
         break;
        case 2:
         var _aT_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:
            var
             b_023=b_067[1],
             _aU_=function(a_024,b_025){return cmp_a(a_024,b_025)};
            return caml_call3(Base[136],_aU_,_aT_,b_023);
           default:return -1}
         break;
        case 3:
         var _aV_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:
            var
             b_027=b_067[1],
             _aW_=
              function(a_028,b_029)
               {var
                 t_031=a_028[2],
                 t_030=a_028[1],
                 t_033=b_029[2],
                 t_032=b_029[1],
                 n=caml_call2(Base[160],t_030,t_032);
                return 0 === n?cmp_a(t_031,t_033):n};
            return caml_call3(Base[136],_aW_,_aV_,b_027);
           default:return -1}
         break;
        case 4:
         var _aX_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:
            var
             b_035=b_067[1],
             _aY_=
              function(a_036,b_037)
               {var
                 t_039=a_036[2],
                 t_038=a_036[1],
                 t_041=b_037[2],
                 t_040=b_037[1],
                 n=caml_call2(Base[160],t_038,t_040);
                if(0 === n)
                 {var _a8_=function(a_042,b_043){return cmp_a(a_042,b_043)};
                  return caml_call3(Base[136],_a8_,t_039,t_041)}
                return n};
            return caml_call3(Base[136],_aY_,_aX_,b_035);
           default:return -1}
         break;
        case 5:
         var _aZ_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:
            var b_045=b_067[1];
            if(caml_call2(Ppx_compare_lib[1],_aZ_,b_045))return 0;
            var
             _aM_=b_045[1],
             _aN_=_aZ_[1],
             _aO_=
              function(a_004,b_005)
               {var
                 t_007=a_004[2],
                 t_006=a_004[1],
                 t_009=b_005[2],
                 t_008=b_005[1],
                 n=caml_call2(Base[160],t_006,t_008);
                if(0 === n)
                 {var _a7_=function(a_048,b_049){return cmp_a(a_048,b_049)};
                  return caml_call3(Base[149],_a7_,t_007,t_009)}
                return n};
            return caml_call3(Base[136],_aO_,_aN_,_aM_);
           default:return -1}
         break;
        case 6:
         var _a0_=a_066[2],_a1_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:switch$0 = 5;break;
           case 6:
            var b_053=b_067[2],b_051=b_067[1],n$1=cmp_a(_a1_,b_051);
            if(0 === n$1)
             {var _a2_=function(a_054,b_055){return cmp_a(a_054,b_055)};
              return caml_call3(Base[136],_a2_,_a0_,b_053)}
            return n$1;
           default:return -1}
         break;
        case 7:
         var _a3_=a_066[2],_a4_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:switch$0 = 5;break;
           case 6:switch$0 = 6;break;
           case 7:
            var
             b_059=b_067[2],
             b_057=b_067[1],
             n$2=caml_call2(Base[115],_a4_,b_057);
            if(0 === n$2)
             {var _a5_=function(a_060,b_061){return cmp_a(a_060,b_061)};
              return caml_call3(Base[136],_a5_,_a3_,b_059)}
            return n$2;
           default:return -1}
         break;
        default:
         var _a6_=a_066[1];
         switch(b_067[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:switch$0 = 3;break;
           case 4:switch$0 = 4;break;
           case 5:switch$0 = 5;break;
           case 6:switch$0 = 6;break;
           case 7:return 1;
           default:var b_063=b_067[1];return caml_call2(Base[115],_a6_,b_063)}}
      switch(switch$0)
       {case 0:return 1;
        case 1:return 1;
        case 2:return 1;
        case 3:return 1;
        case 4:return 1;
        case 5:return 1;
        default:return 1}}
    function sexp_of_t$3(param)
     {var v0=param[1],v0$0=sexp_of_t$2(sexp_of_t$3,v0);
      return [1,[0,_q_,[0,v0$0,0]]]}
    function equal_t0(x,y)
     {var _aL_=compare$1(x,y);return caml_call2(Base[202],_aL_,0)}
    function var$2(x){return [0,[8,x]]}
    function apply$1(d,xs){return [0,[6,d,xs]]}
    function recurse$1(r,xs){return [0,[7,r,xs]]}
    function get_poly_variant$0(param)
     {var _aK_=param[1];
      if(5 === _aK_[0]){var tab=_aK_[1];return [0,tab]}
      return [1,to_string$1(_aK_)]}
    function opaque$0(t){return t}
    function to_digest$1(param)
     {var e=param[1];return digest_layer(map$0(e,to_digest$1))}
    function to_digest$2(e){return to_digest$1(e)}
    function annotate$0(u,x){return [0,[0,u,x]]}
    function basetype$0(u,xs){return [0,[1,u,xs]]}
    function tuple$0(xs){return [0,[2,xs]]}
    function poly_variant$0(loc,xs)
     {return [0,
              [5,
               create
                (loc,
                 function(_aI_,_aJ_){return equal_option(equal_t0,_aI_,_aJ_)},
                 xs)]]}
    function var$3(n){return [0,[8,n]]}
    function recurse$2(r,xs){return recurse$1(r,xs)}
    function apply$2(d,xs){return apply$1(d,xs)}
    function define$0(x){return x}
    function record$0(xs){return [0,[3,xs]]}
    function variant$0(xs){return [0,[4,xs]]}
    function create$2(exp){return exp}
    var
     Create=
      [0,
       annotate$0,
       basetype$0,
       tuple$0,
       poly_variant$0,
       var$3,
       recurse$2,
       apply$2,
       define$0,
       record$0,
       variant$0,
       create$2];
    function to_string_hum(t)
     {var _aH_=sexp_of_t$3(t);return caml_call2(Base[84][14],0,_aH_)}
    var
     Def$0=[0],
     Exp1=[0,var$2,recurse$1,apply$1,opaque$0,get_poly_variant$0],
     sexp_of_t$4=Base_String[22],
     of_string$1=Base_String[23],
     to_string$2=Base_String[24],
     symbol=Base_String[27],
     compare$2=Base_String[31],
     equal$0=Base_String[108],
     sexp_of_t$5=Base_String[22],
     of_string$2=Base_String[23],
     to_string$3=Base_String[24],
     comparator=Base_String[39],
     compare$3=Base[115],
     sexp_of_t$6=Base[120],
     r=[0,0];
    function group(loc,trips)
     {var u=r[1];
      r[1] = caml_call2(Base[180],1,u);
      function _aG_(param)
       {var t=param[3],vs=param[2],x=param[1];return [0,x,[0,vs,t]]}
      var members=caml_call2(Base_List[74],trips,_aG_);
      return [0,u,loc,members]}
    function lookup(g,tid)
     {var match=caml_call3(Base_List[125][4],g[3],symbol,tid);
      if(match){var scheme=match[1];return scheme}
      var
       _aD_=0,
       _aE_=0,
       _aF_=
        [0,
         [11,
          cst_impossible_lookup_group_un$0,
          [24,
           _w_,
           function(param,custom_printf_108)
            {return caml_call1(to_string$2,custom_printf_108)},
           _aE_]],
         cst_impossible_lookup_group_un];
      return caml_call2(eval_fail(g[2],_aF_),tid,_aD_)}
    function annotate$1(v0,v1){return [0,v0,v1]}
    function basetype$1(v0,v1){return [1,v0,v1]}
    function record$1(v0){return [2,v0]}
    function variant$1(v0){return [3,v0]}
    function tuple$1(v0){return [4,v0]}
    function rec_app(v0,v1){return [7,v0,v1]}
    function top_app(v0,v1,v2){return [8,v0,v1,v2]}
    function of_a(param)
     {switch(param[0])
       {case 0:
         var
          v1=param[2],
          v0$0=param[1],
          v0$1=caml_call1(sexp_of_t$0,v0$0),
          v1$0=of_a(v1);
         return [1,[0,_x_,[0,v0$1,[0,v1$0,0]]]];
        case 1:
         var
          v1$1=param[2],
          v0$2=param[1],
          v0$3=caml_call1(sexp_of_t$0,v0$2),
          v1$2=caml_call2(Base[140],of_a,v1$1);
         return [1,[0,_y_,[0,v0$3,[0,v1$2,0]]]];
        case 2:
         var
          v0$4=param[1],
          _aA_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[165],v0),
              v1$0=of_a(v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$5=caml_call2(Base[140],_aA_,v0$4);
         return [1,[0,_z_,[0,v0$5,0]]];
        case 3:
         var
          v0$6=param[1],
          _aB_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(Base[165],v0),
              v1$0=caml_call2(Base[140],of_a,v1);
             return [1,[0,v0$0,[0,v1$0,0]]]},
          v0$7=caml_call2(Base[140],_aB_,v0$6);
         return [1,[0,_A_,[0,v0$7,0]]];
        case 4:
         var v0$8=param[1],v0$9=caml_call2(Base[140],of_a,v0$8);
         return [1,[0,_B_,[0,v0$9,0]]];
        case 5:
         var
          v0$10=param[1],
          v1$3=v0$10[2],
          v0$11=v0$10[1],
          v0$12=caml_call1(sexp_of_t,v0$11),
          _aC_=
           function(param)
            {if(-59723313 <= param[1])
              {var
                v0=param[2],
                v1=v0[2],
                v0$0=v0[1],
                v0$1=caml_call1(Base[165],v0$0),
                v1$0=caml_call2(Base[153],of_a,v1);
               return [1,[0,_r_,[0,[1,[0,v0$1,[0,v1$0,0]]],0]]]}
             var
              v0$2=param[2],
              v1$1=v0$2[2],
              v0$3=v0$2[1],
              v0$4=caml_call1(sexp_of_t,v0$3),
              v1$2=of_a(v1$1);
             return [1,[0,_s_,[0,[1,[0,v0$4,[0,v1$2,0]]],0]]]},
          v1$4=caml_call2(Base[140],_aC_,v1$3),
          v0$13=[1,[0,v0$12,[0,v1$4,0]]];
         return [1,[0,_C_,[0,v0$13,0]]];
        case 6:
         var
          v0$14=param[1],
          v1$5=v0$14[2],
          v0$15=v0$14[1],
          v0$16=caml_call1(sexp_of_t,v0$15),
          v1$6=caml_call1(sexp_of_t$5,v1$5),
          v0$17=[1,[0,v0$16,[0,v1$6,0]]];
         return [1,[0,_D_,[0,v0$17,0]]];
        case 7:
         var
          v1$7=param[2],
          v0$18=param[1],
          v0$19=caml_call1(sexp_of_t$4,v0$18),
          v1$8=caml_call2(Base[140],of_a,v1$7);
         return [1,[0,_E_,[0,v0$19,[0,v1$8,0]]]];
        default:
         var
          v2=param[3],
          v1$9=param[2],
          v0$20=param[1],
          v_members=v0$20[3],
          v_loc=v0$20[2],
          v_gid=v0$20[1],
          bnds=0,
          _az_=
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=caml_call1(sexp_of_t$4,v0),
              v1$0=v1[2],
              v0$1=v1[1],
              v0$2=caml_call2(Base[140],sexp_of_t$5,v0$1),
              v1$1=of_a(v1$0),
              v1$2=[1,[0,v0$2,[0,v1$1,0]]];
             return [1,[0,v0$0,[0,v1$2,0]]]},
          arg=caml_call2(Base[140],_az_,v_members),
          bnds$0=[0,[1,[0,_t_,[0,arg,0]]],bnds],
          arg$0=caml_call1(sexp_of_t,v_loc),
          bnds$1=[0,[1,[0,_u_,[0,arg$0,0]]],bnds$0],
          arg$1=caml_call1(sexp_of_t$6,v_gid),
          bnds$2=[0,[1,[0,_v_,[0,arg$1,0]]],bnds$1],
          v0=[1,bnds$2],
          v1$10=caml_call1(sexp_of_t$4,v1$9),
          v2$0=caml_call2(Base[140],of_a,v2);
         return [1,[0,_F_,[0,v0,[0,v1$10,[0,v2$0,0]]]]]}}
    function constr(s,t){return [0,-59723313,[0,s,t]]}
    function inherit(loc,t){return [0,-72987685,[0,loc,t]]}
    function var$4(loc,t){return [6,[0,loc,t]]}
    function poly_variant$1(loc,xs){return [5,[0,loc,xs]]}
    function is_cyclic_0(via_VR,group,tid)
     {var set=[0,0];
      function visited(tid)
       {return caml_call3(Base_List[6],set[1],tid,equal$0)}
      function trav_tid(tid)
       {var match=lookup(group,tid),body=match[2];return trav(body)}
      function trav(param)
       {var param$0=param;
        for(;;)
         {switch(param$0[0])
           {case 0:var param$1=param$0[2],param$0=param$1;continue;
            case 1:var ts=param$0[2];break;
            case 2:
             var xs=param$0[1];
             if(via_VR)
              {var _av_=function(param){var t=param[2];return trav(t)};
               return caml_call2(Base_List[9],xs,_av_)}
             return 0;
            case 3:
             var xs$0=param$0[1];
             if(via_VR)
              {var
                _aw_=
                 function(param)
                  {var ts=param[2];return caml_call2(Base_List[9],ts,trav)};
               return caml_call2(Base_List[9],xs$0,_aw_)}
             return 0;
            case 4:var ts=param$0[1];break;
            case 5:
             var
              match=param$0[1],
              cs=match[2],
              _ax_=
               function(param)
                {if(-59723313 <= param[1])
                  {var _ay_=param[2][2];
                   if(_ay_){var t=_ay_[1];return trav(t)}
                   return 0}
                 var match=param[2],t$0=match[2];
                 return trav(t$0)};
             return caml_call2(Base_List[9],cs,_ax_);
            case 6:return 0;
            case 7:
             var ts$0=param$0[2],tid=param$0[1];
             if(! visited(tid)){set[1] = [0,tid,set[1]];trav_tid(tid)}
             return caml_call2(Base_List[9],ts$0,trav);
            default:var ts=param$0[3]}
          return caml_call2(Base_List[9],ts,trav)}}
      trav_tid(tid);
      var res=visited(tid);
      return res}
    var _G_=1,_H_=0;
    function Evaluation(Canonical)
     {var _P_=Base_List[10],_Q_=caml_call1(Base_Map[5],[0,comparator]);
      function _R_(t,param)
       {var v=param[2],k=param[1];return caml_call3(Base_Map[26],t,k,v)}
      function create(_au_){return caml_call3(_P_,_au_,_Q_,_R_)}
      function lookup$0(t,k){return caml_call2(Base_Map[34],t,k)}
      var Venv=[0,lookup$0,create],Applicand=[0];
      function compare(a_109,b_110)
       {var
         t_112=a_109[2],
         t_111=a_109[1],
         t_114=b_110[2],
         t_113=b_110[1],
         n=caml_call2(compare$3,t_111,t_113);
        return 0 === n?caml_call2(compare$2,t_112,t_114):n}
      function sexp_of_t(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(sexp_of_t$6,v0),
         v1$0=caml_call1(sexp_of_t$4,v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       T=[0,compare,sexp_of_t],
       include=caml_call1(Base_Comparator[4],T),
       comparator$0=include[1];
      function find(t,k){return caml_call2(Base_Map[34],t,k)}
      var empty=caml_call1(Base_Map[5],[0,comparator$0]);
      function extend(t,k,v){return caml_call3(Base_Map[26],t,k,v)}
      var Tenv=[0,find,empty,extend];
      function return$0(x,param,tenv){return x}
      function bind(t,f,depth,tenv)
       {var x=caml_call2(t,depth,tenv);
        return caml_call2(caml_call1(f,x),depth,tenv)}
      function look_env(key,param,tenv)
       {var result=caml_call2(Tenv[1],tenv,key);
        function _at_(param){var x=param[2];return [0,x]}
        return caml_call2(Base_Option[30],result,_at_)}
      function extend_new_tid(key,def_t,depth,tenv)
       {var
         value=[0,-271630457,depth],
         tenv$0=caml_call3(Tenv[3],tenv,key,value);
        return [1,caml_call2(def_t,caml_call2(Base[180],depth,1),tenv$0)]}
      function exec(t){return caml_call2(t,0,Tenv[2])}
      var
       Defining=[0,return$0,bind,look_env,extend_new_tid,exec],
       symbol_bind=Defining[2],
       return$1=Defining[1];
      function sequence_defining(xs,f)
       {function loop(acc_ys,param)
         {if(param)
           {var
             xs=param[2],
             x=param[1],
             _as_=function(y){return loop([0,y,acc_ys],xs)};
            return caml_call2(symbol_bind,caml_call1(f,x),_as_)}
          return caml_call1(return$1,caml_call1(Base_List[37],acc_ys))}
        return loop(0,xs)}
      function eval_app(group,tid,args)
       {var
         gid=group[1],
         match=lookup(group,tid),
         body=match[2],
         formals=match[1];
        switch(body[0])
         {case 2:
          case 3:var record_or_normal_variant=1;break;
          default:var record_or_normal_variant=0}
        var
         cyclic=is_cyclic_0(_G_,group,tid),
         cyclic_no_VR=is_cyclic_0(_H_,group,tid),
         switch$0=0;
        if(record_or_normal_variant && cyclic)switch$0 = 1;
        if(! switch$0 && ! cyclic_no_VR)
         {var match$0=caml_call2(Base_List[92],formals,args);
          if(match$0)
           var x=match$0[1],venv=caml_call1(Venv[2],x);
          else
           var venv=caml_call1(Base[220],cst_apply_incorrect_type_appli);
          return _S_(group,venv,body)}
        function _ap_(param)
         {if(0 === param[0])
           {var r=param[1];
            return caml_call1(return$1,caml_call2(Canonical[2][2],r,args))}
          var def=param[1];
          return caml_call1(return$1,caml_call2(Canonical[2][3],def,args))}
        function _aq_(param)
         {if(param){var recurse=param[1];return caml_call1(return$1,recurse)}
          var _ar_=eval_definition(group,formals,body);
          return caml_call2(Defining[4],[0,gid,tid],_ar_)}
        return caml_call2
                (symbol_bind,
                 caml_call2
                  (symbol_bind,caml_call1(Defining[3],[0,gid,tid]),_aq_),
                 _ap_)}
      function eval_definition(group,formals,body)
       {function _am_(i,x){return [0,x,caml_call1(Canonical[2][1],i)]}
        var
         _an_=caml_call2(Base_List[94],formals,_am_),
         venv=caml_call1(Venv[2],_an_);
        function _ao_(v)
         {return caml_call1(return$1,caml_call1(Canonical[4][8],v))}
        return caml_call2(symbol_bind,_S_(group,venv,body),_ao_)}
      function eval_poly_constr(group,venv,c)
       {if(-59723313 <= c[1])
         {var _ah_=c[2],_ai_=_ah_[2],_aj_=_ah_[1];
          if(_ai_)
           {var
             t=_ai_[1],
             _ak_=
              function(v)
               {return caml_call1
                        (return$1,[0,[0,_aj_,[0,caml_call1(Canonical[2][4],v)]],0])};
            return caml_call2(symbol_bind,_S_(group,venv,t),_ak_)}
          return caml_call1(return$1,[0,[0,_aj_,0],0])}
        var match=c[2],t$0=match[2],loc=match[1];
        function _al_(v)
         {var match=caml_call1(Canonical[2][5],v);
          if(0 === match[0])
           {var tab=match[1];return caml_call1(return$1,tab[1])}
          var desc=match[1];
          return caml_call2(eval_fail(loc,_J_),desc,0)}
        return caml_call2(symbol_bind,_S_(group,venv,t$0),_al_)}
      function eval_list(group,venv,ts)
       {return sequence_defining
                (ts,function(_ag_){return _S_(group,venv,_ag_)})}
      function _S_(group,venv,t)
       {switch(t[0])
         {case 0:
           var
            t$0=t[2],
            s=t[1],
            _U_=
             function(v)
              {return caml_call1(return$1,caml_call2(Canonical[4][1],s,v))};
           return caml_call2(symbol_bind,_S_(group,venv,t$0),_U_);
          case 1:
           var
            ts=t[2],
            s$0=t[1],
            _V_=
             function(vs)
              {return caml_call1(return$1,caml_call2(Canonical[4][2],s$0,vs))};
           return caml_call2(symbol_bind,eval_list(group,venv,ts),_V_);
          case 2:
           var
            binds=t[1],
            _W_=
             function(binds)
              {return caml_call1(return$1,caml_call1(Canonical[4][9],binds))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (binds,
                      function(param)
                       {var x=param[2],s=param[1];
                        function _af_(y){return caml_call1(return$1,[0,s,y])}
                        return caml_call2(symbol_bind,_S_(group,venv,x),_af_)}),
                    _W_);
          case 3:
           var
            alts=t[1],
            _X_=
             function(alts)
              {return caml_call1(return$1,caml_call1(Canonical[4][10],alts))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (alts,
                      function(param)
                       {var xs=param[2],s=param[1];
                        function _ae_(ys){return caml_call1(return$1,[0,s,ys])}
                        return caml_call2(symbol_bind,eval_list(group,venv,xs),_ae_)}),
                    _X_);
          case 4:
           var
            ts$0=t[1],
            _Y_=
             function(vs)
              {return caml_call1(return$1,caml_call1(Canonical[4][3],vs))};
           return caml_call2(symbol_bind,eval_list(group,venv,ts$0),_Y_);
          case 5:
           var
            match=t[1],
            cs=match[2],
            loc=match[1],
            _Z_=
             function(xss)
              {var _ad_=caml_call1(Base_List[134],xss);
               return caml_call1
                       (return$1,caml_call2(Canonical[4][4],loc,_ad_))};
           return caml_call2
                   (symbol_bind,
                    sequence_defining
                     (cs,
                      function(_ac_){return eval_poly_constr(group,venv,_ac_)}),
                    _Z_);
          case 6:
           var
            match$0=t[1],
            vid=match$0[2],
            loc$0=match$0[1],
            match$1=caml_call2(Venv[1],venv,vid);
           if(match$1){var x=match$1[1];return caml_call1(return$1,x)}
           var ___=0,_$_=0;
           return caml_call2
                   (eval_fail
                     (loc$0,
                      [0,
                       [11,
                        cst_Free_type_variable,
                        [24,
                         _I_,
                         function(param,custom_printf_115)
                          {return caml_call1(to_string$3,custom_printf_115)},
                         _$_]],
                       cst_Free_type_variable_Vid]),
                    vid,
                    ___);
          case 7:
           var
            args=t[2],
            tid=t[1],
            _aa_=function(args){return eval_app(group,tid,args)};
           return caml_call2(symbol_bind,eval_list(group,venv,args),_aa_);
          default:
           var
            args$0=t[3],
            tid$0=t[2],
            in_group=t[1],
            _ab_=function(args){return eval_app(in_group,tid$0,args)};
           return caml_call2(symbol_bind,eval_list(group,venv,args$0),_ab_)}}
      function eval$0(t)
       {var
         group$0=group(caml_call1(of_string,cst_top_level),0),
         venv=caml_call1(Venv[2],0),
         _T_=_S_(group$0,venv,t),
         v=caml_call1(Defining[5],_T_);
        return caml_call1(Canonical[4][11],v)}
      return [0,
              Venv,
              Applicand,
              Tenv,
              Defining,
              symbol_bind,
              return$1,
              sequence_defining,
              eval_list,
              eval_poly_constr,
              eval_definition,
              eval_app,
              eval$0]}
    var
     Exp=[0],
     include=Evaluation([0,to_digest$2,Exp1,Def$0,Create]),
     _K_=include[12],
     Evaluation_to_digest=Evaluation(Canonical_digest);
    function eval_to_digest(exp)
     {var _O_=caml_call1(Evaluation_to_digest[12],exp);
      return caml_call1(Canonical_digest[1],_O_)}
    function eval_to_digest_string(exp)
     {return caml_call1(to_hex,eval_to_digest(exp))}
    var
     Not_a_tuple=
      [248,cst_Bin_shape_lib_Bin_shape_Fo,runtime.caml_fresh_oo_id(0)];
    function _L_(param)
     {if(param[1] === Not_a_tuple)
       {var v0=param[2],v0$0=of_a(v0);return [1,[0,_M_,[0,v0$0,0]]]}
      throw [0,Assert_failure,_N_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Not_a_tuple,_L_);
    function deconstruct_tuple_exn(t)
     {if(4 === t[0]){var ts=t[1];return ts}throw [0,Not_a_tuple,t]}
    var
     Bin_shape_lib_Bin_shape=
      [0,
       of_a,
       [0,of_string$1],
       [0,of_string$2],
       [0,of_string],
       [0,of_string$0],
       group,
       tuple$1,
       record$1,
       variant$1,
       constr,
       inherit,
       poly_variant$1,
       rec_app,
       top_app,
       var$4,
       basetype$1,
       annotate$1,
       [0,compare$0,t_of_sexp,sexp_of_t$1,to_hex,to_md5,of_md5],
       [0,
        compare$1,
        sexp_of_t$3,
        to_string_hum,
        to_digest$2,
        Exp,
        Def$0,
        [0,
         Create[1],
         Create[2],
         Create[3],
         Create[4],
         Create[5],
         Create[7],
         Create[6],
         Create[8],
         Create[9],
         Create[10],
         Create[11]]],
       _K_,
       eval_to_digest,
       eval_to_digest_string,
       [0,deconstruct_tuple_exn]];
    caml_register_global
     (135,Bin_shape_lib_Bin_shape,"Bin_shape_lib__Bin_shape");
    var Bin_shape_lib_Std=[0];
    caml_register_global(136,Bin_shape_lib_Std,"Bin_shape_lib__Std");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiaW5fc2hhcGVfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJlcXVhbCQwIl0sInNvdXJjZXMiOlsiL1VzZXJzL2p2YW5icmllc2VuLy5vcGFtL2RlZmF1bHQvbGliL29jYW1sL3N0cmluZy5tbGkiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrWEFBOzs7Ozs7Ozs7TTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBQUFBLFEiLCJzb3VyY2VzQ29udGVudCI6WyIoKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9DYW1sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICBYYXZpZXIgTGVyb3ksIHByb2pldCBDcmlzdGFsLCBJTlJJQSBSb2NxdWVuY291cnQgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIENvcHlyaWdodCAxOTk2IEluc3RpdHV0IE5hdGlvbmFsIGRlIFJlY2hlcmNoZSBlbiBJbmZvcm1hdGlxdWUgZXQgICAgICopXG4oKiAgICAgZW4gQXV0b21hdGlxdWUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuICBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mICAgICopXG4oKiAgIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAyLjEsIHdpdGggdGhlICAgICAgICAgICopXG4oKiAgIHNwZWNpYWwgZXhjZXB0aW9uIG9uIGxpbmtpbmcgZGVzY3JpYmVkIGluIHRoZSBmaWxlIExJQ0VOU0UuICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG5cbigqKiBTdHJpbmcgb3BlcmF0aW9ucy5cblxuICBBIHN0cmluZyBpcyBhbiBpbW11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBjb250YWlucyBhXG4gIGZpeGVkLWxlbmd0aCBzZXF1ZW5jZSBvZiAoc2luZ2xlLWJ5dGUpIGNoYXJhY3RlcnMuIEVhY2ggY2hhcmFjdGVyXG4gIGNhbiBiZSBhY2Nlc3NlZCBpbiBjb25zdGFudCB0aW1lIHRocm91Z2ggaXRzIGluZGV4LlxuXG4gIEdpdmVuIGEgc3RyaW5nIFtzXSBvZiBsZW5ndGggW2xdLCB3ZSBjYW4gYWNjZXNzIGVhY2ggb2YgdGhlIFtsXVxuICBjaGFyYWN0ZXJzIG9mIFtzXSB2aWEgaXRzIGluZGV4IGluIHRoZSBzZXF1ZW5jZS4gSW5kZXhlcyBzdGFydCBhdFxuICBbMF0sIGFuZCB3ZSB3aWxsIGNhbGwgYW4gaW5kZXggdmFsaWQgaW4gW3NdIGlmIGl0IGZhbGxzIHdpdGhpbiB0aGVcbiAgcmFuZ2UgW1swLi4ubC0xXV0gKGluY2x1c2l2ZSkuIEEgcG9zaXRpb24gaXMgdGhlIHBvaW50IGJldHdlZW4gdHdvXG4gIGNoYXJhY3RlcnMgb3IgYXQgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIHN0cmluZy4gIFdlIGNhbGwgYVxuICBwb3NpdGlvbiB2YWxpZCBpbiBbc10gaWYgaXQgZmFsbHMgd2l0aGluIHRoZSByYW5nZSBbWzAuLi5sXV1cbiAgKGluY2x1c2l2ZSkuIE5vdGUgdGhhdCB0aGUgY2hhcmFjdGVyIGF0IGluZGV4IFtuXSBpcyBiZXR3ZWVuXG4gIHBvc2l0aW9ucyBbbl0gYW5kIFtuKzFdLlxuXG4gIFR3byBwYXJhbWV0ZXJzIFtzdGFydF0gYW5kIFtsZW5dIGFyZSBzYWlkIHRvIGRlc2lnbmF0ZSBhIHZhbGlkXG4gIHN1YnN0cmluZyBvZiBbc10gaWYgW2xlbiA+PSAwXSBhbmQgW3N0YXJ0XSBhbmQgW3N0YXJ0K2xlbl0gYXJlXG4gIHZhbGlkIHBvc2l0aW9ucyBpbiBbc10uXG5cbiAgTm90ZTogT0NhbWwgc3RyaW5ncyB1c2VkIHRvIGJlIG1vZGlmaWFibGUgaW4gcGxhY2UsIGZvciBpbnN0YW5jZSB2aWFcbiAgdGhlIHshU3RyaW5nLnNldH0gYW5kIHshU3RyaW5nLmJsaXR9IGZ1bmN0aW9ucyBkZXNjcmliZWQgYmVsb3cuIFRoaXNcbiAgdXNhZ2UgaXMgb25seSBwb3NzaWJsZSB3aGVuIHRoZSBjb21waWxlciBpcyBwdXQgaW4gXCJ1bnNhZmUtc3RyaW5nXCJcbiAgbW9kZSBieSBnaXZpbmcgdGhlIFstdW5zYWZlLXN0cmluZ10gY29tbWFuZC1saW5lIG9wdGlvbi4gVGhpc1xuICBjb21wYXRpYmlsaXR5IG1vZGUgbWFrZXMgdGhlIHR5cGVzIFtzdHJpbmddIGFuZCBbYnl0ZXNdIChzZWUgbW9kdWxlXG4gIHshQnl0ZXN9KSBpbnRlcmNoYW5nZWFibGUgc28gdGhhdCBmdW5jdGlvbnMgZXhwZWN0aW5nIGJ5dGUgc2VxdWVuY2VzXG4gIGNhbiBhbHNvIGFjY2VwdCBzdHJpbmdzIGFzIGFyZ3VtZW50cyBhbmQgbW9kaWZ5IHRoZW0uXG5cbiAgVGhlIGRpc3RpbmN0aW9uIGJldHdlZW4gW2J5dGVzXSBhbmQgW3N0cmluZ10gd2FzIGludHJvZHVjZWQgaW4gT0NhbWxcbiAgNC4wMiwgYW5kIHRoZSBcInVuc2FmZS1zdHJpbmdcIiBjb21wYXRpYmlsaXR5IG1vZGUgd2FzIHRoZSBkZWZhdWx0XG4gIHVudGlsIE9DYW1sIDQuMDUuIFN0YXJ0aW5nIHdpdGggNC4wNiwgdGhlIGNvbXBhdGliaWxpdHkgbW9kZSBpc1xuICBvcHQtaW47IHdlIGludGVuZCB0byByZW1vdmUgdGhlIG9wdGlvbiBpbiB0aGUgZnV0dXJlLlxuKilcblxuZXh0ZXJuYWwgbGVuZ3RoIDogc3RyaW5nIC0+IGludCA9IFwiJXN0cmluZ19sZW5ndGhcIlxuKCoqIFJldHVybiB0aGUgbGVuZ3RoIChudW1iZXIgb2YgY2hhcmFjdGVycykgb2YgdGhlIGdpdmVuIHN0cmluZy4gKilcblxuZXh0ZXJuYWwgZ2V0IDogc3RyaW5nIC0+IGludCAtPiBjaGFyID0gXCIlc3RyaW5nX3NhZmVfZ2V0XCJcbigqKiBbU3RyaW5nLmdldCBzIG5dIHJldHVybnMgdGhlIGNoYXJhY3RlciBhdCBpbmRleCBbbl0gaW4gc3RyaW5nIFtzXS5cbiAgIFlvdSBjYW4gYWxzbyB3cml0ZSBbcy5bbl1dIGluc3RlYWQgb2YgW1N0cmluZy5nZXQgcyBuXS5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtuXSBub3QgYSB2YWxpZCBpbmRleCBpbiBbc10uICopXG5cblxuZXh0ZXJuYWwgc2V0IDogYnl0ZXMgLT4gaW50IC0+IGNoYXIgLT4gdW5pdCA9IFwiJXN0cmluZ19zYWZlX3NldFwiXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWQgXCJVc2UgQnl0ZXMuc2V0IGluc3RlYWQuXCJdXG4oKiogW1N0cmluZy5zZXQgcyBuIGNdIG1vZGlmaWVzIGJ5dGUgc2VxdWVuY2UgW3NdIGluIHBsYWNlLFxuICAgcmVwbGFjaW5nIHRoZSBieXRlIGF0IGluZGV4IFtuXSB3aXRoIFtjXS5cbiAgIFlvdSBjYW4gYWxzbyB3cml0ZSBbcy5bbl0gPC0gY10gaW5zdGVhZCBvZiBbU3RyaW5nLnNldCBzIG4gY10uXG4gICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbbl0gaXMgbm90IGEgdmFsaWQgaW5kZXggaW4gW3NdLlxuXG4gICBAZGVwcmVjYXRlZCBUaGlzIGlzIGEgZGVwcmVjYXRlZCBhbGlhcyBvZiB7IUJ5dGVzLnNldH0uWyBdICopXG5cbmV4dGVybmFsIGNyZWF0ZSA6IGludCAtPiBieXRlcyA9IFwiY2FtbF9jcmVhdGVfc3RyaW5nXCJcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBCeXRlcy5jcmVhdGUgaW5zdGVhZC5cIl1cbigqKiBbU3RyaW5nLmNyZWF0ZSBuXSByZXR1cm5zIGEgZnJlc2ggYnl0ZSBzZXF1ZW5jZSBvZiBsZW5ndGggW25dLlxuICAgVGhlIHNlcXVlbmNlIGlzIHVuaW5pdGlhbGl6ZWQgYW5kIGNvbnRhaW5zIGFyYml0cmFyeSBieXRlcy5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtuIDwgMF0gb3IgW24gPiBdeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9LlxuXG4gICBAZGVwcmVjYXRlZCBUaGlzIGlzIGEgZGVwcmVjYXRlZCBhbGlhcyBvZiB7IUJ5dGVzLmNyZWF0ZX0uWyBdICopXG5cbnZhbCBtYWtlIDogaW50IC0+IGNoYXIgLT4gc3RyaW5nXG4oKiogW1N0cmluZy5tYWtlIG4gY10gcmV0dXJucyBhIGZyZXNoIHN0cmluZyBvZiBsZW5ndGggW25dLFxuICAgZmlsbGVkIHdpdGggdGhlIGNoYXJhY3RlciBbY10uXG4gICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbbiA8IDBdIG9yIFtuID4gXXshU3lzLm1heF9zdHJpbmdfbGVuZ3RofS4gKilcblxudmFsIGluaXQgOiBpbnQgLT4gKGludCAtPiBjaGFyKSAtPiBzdHJpbmdcbigqKiBbU3RyaW5nLmluaXQgbiBmXSByZXR1cm5zIGEgc3RyaW5nIG9mIGxlbmd0aCBbbl0sIHdpdGggY2hhcmFjdGVyXG4gICAgW2ldIGluaXRpYWxpemVkIHRvIHRoZSByZXN1bHQgb2YgW2YgaV0gKGNhbGxlZCBpbiBpbmNyZWFzaW5nXG4gICAgaW5kZXggb3JkZXIpLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW24gPCAwXSBvciBbbiA+IF17IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0uXG4gICAgQHNpbmNlIDQuMDIuMFxuKilcblxudmFsIGNvcHkgOiBzdHJpbmcgLT4gc3RyaW5nIFtAQG9jYW1sLmRlcHJlY2F0ZWRdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgZ2l2ZW4gc3RyaW5nLlxuXG4gICAgQGRlcHJlY2F0ZWQgQmVjYXVzZSBzdHJpbmdzIGFyZSBpbW11dGFibGUsIGl0IGRvZXNuJ3QgbWFrZSBtdWNoXG4gICAgc2Vuc2UgdG8gbWFrZSBpZGVudGljYWwgY29waWVzIG9mIHRoZW0uICopXG5cbnZhbCBzdWIgOiBzdHJpbmcgLT4gaW50IC0+IGludCAtPiBzdHJpbmdcbigqKiBbU3RyaW5nLnN1YiBzIHN0YXJ0IGxlbl0gcmV0dXJucyBhIGZyZXNoIHN0cmluZyBvZiBsZW5ndGggW2xlbl0sXG4gICBjb250YWluaW5nIHRoZSBzdWJzdHJpbmcgb2YgW3NdIHRoYXQgc3RhcnRzIGF0IHBvc2l0aW9uIFtzdGFydF0gYW5kXG4gICBoYXMgbGVuZ3RoIFtsZW5dLlxuICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW3N0YXJ0XSBhbmQgW2xlbl0gZG8gbm90XG4gICBkZXNpZ25hdGUgYSB2YWxpZCBzdWJzdHJpbmcgb2YgW3NdLiAqKVxuXG52YWwgZmlsbCA6IGJ5dGVzIC0+IGludCAtPiBpbnQgLT4gY2hhciAtPiB1bml0XG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWQgXCJVc2UgQnl0ZXMuZmlsbCBpbnN0ZWFkLlwiXVxuKCoqIFtTdHJpbmcuZmlsbCBzIHN0YXJ0IGxlbiBjXSBtb2RpZmllcyBieXRlIHNlcXVlbmNlIFtzXSBpbiBwbGFjZSxcbiAgIHJlcGxhY2luZyBbbGVuXSBieXRlcyB3aXRoIFtjXSwgc3RhcnRpbmcgYXQgW3N0YXJ0XS5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtzdGFydF0gYW5kIFtsZW5dIGRvIG5vdFxuICAgZGVzaWduYXRlIGEgdmFsaWQgcmFuZ2Ugb2YgW3NdLlxuXG4gICBAZGVwcmVjYXRlZCBUaGlzIGlzIGEgZGVwcmVjYXRlZCBhbGlhcyBvZiB7IUJ5dGVzLmZpbGx9LlsgXSAqKVxuXG52YWwgYmxpdCA6IHN0cmluZyAtPiBpbnQgLT4gYnl0ZXMgLT4gaW50IC0+IGludCAtPiB1bml0XG4oKiogU2FtZSBhcyB7IUJ5dGVzLmJsaXRfc3RyaW5nfS4gKilcblxudmFsIGNvbmNhdCA6IHN0cmluZyAtPiBzdHJpbmcgbGlzdCAtPiBzdHJpbmdcbigqKiBbU3RyaW5nLmNvbmNhdCBzZXAgc2xdIGNvbmNhdGVuYXRlcyB0aGUgbGlzdCBvZiBzdHJpbmdzIFtzbF0sXG4gICAgaW5zZXJ0aW5nIHRoZSBzZXBhcmF0b3Igc3RyaW5nIFtzZXBdIGJldHdlZW4gZWFjaC5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiB0aGUgcmVzdWx0IGlzIGxvbmdlciB0aGFuXG4gICAgeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9IGJ5dGVzLiAqKVxuXG52YWwgaXRlciA6IChjaGFyIC0+IHVuaXQpIC0+IHN0cmluZyAtPiB1bml0XG4oKiogW1N0cmluZy5pdGVyIGYgc10gYXBwbGllcyBmdW5jdGlvbiBbZl0gaW4gdHVybiB0byBhbGxcbiAgIHRoZSBjaGFyYWN0ZXJzIG9mIFtzXS4gIEl0IGlzIGVxdWl2YWxlbnQgdG9cbiAgIFtmIHMuWzBdOyBmIHMuWzFdOyAuLi47IGYgcy5bU3RyaW5nLmxlbmd0aCBzIC0gMV07ICgpXS4gKilcblxudmFsIGl0ZXJpIDogKGludCAtPiBjaGFyIC0+IHVuaXQpIC0+IHN0cmluZyAtPiB1bml0XG4oKiogU2FtZSBhcyB7IVN0cmluZy5pdGVyfSwgYnV0IHRoZVxuICAgZnVuY3Rpb24gaXMgYXBwbGllZCB0byB0aGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgYXMgZmlyc3QgYXJndW1lbnRcbiAgIChjb3VudGluZyBmcm9tIDApLCBhbmQgdGhlIGNoYXJhY3RlciBpdHNlbGYgYXMgc2Vjb25kIGFyZ3VtZW50LlxuICAgQHNpbmNlIDQuMDAuMCAqKVxuXG52YWwgbWFwIDogKGNoYXIgLT4gY2hhcikgLT4gc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFtTdHJpbmcubWFwIGYgc10gYXBwbGllcyBmdW5jdGlvbiBbZl0gaW4gdHVybiB0byBhbGwgdGhlXG4gICAgY2hhcmFjdGVycyBvZiBbc10gKGluIGluY3JlYXNpbmcgaW5kZXggb3JkZXIpIGFuZCBzdG9yZXMgdGhlXG4gICAgcmVzdWx0cyBpbiBhIG5ldyBzdHJpbmcgdGhhdCBpcyByZXR1cm5lZC5cbiAgICBAc2luY2UgNC4wMC4wICopXG5cbnZhbCBtYXBpIDogKGludCAtPiBjaGFyIC0+IGNoYXIpIC0+IHN0cmluZyAtPiBzdHJpbmdcbigqKiBbU3RyaW5nLm1hcGkgZiBzXSBjYWxscyBbZl0gd2l0aCBlYWNoIGNoYXJhY3RlciBvZiBbc10gYW5kIGl0c1xuICAgIGluZGV4IChpbiBpbmNyZWFzaW5nIGluZGV4IG9yZGVyKSBhbmQgc3RvcmVzIHRoZSByZXN1bHRzIGluIGEgbmV3XG4gICAgc3RyaW5nIHRoYXQgaXMgcmV0dXJuZWQuXG4gICAgQHNpbmNlIDQuMDIuMCAqKVxuXG52YWwgdHJpbSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aG91dCBsZWFkaW5nIGFuZCB0cmFpbGluZ1xuICAgd2hpdGVzcGFjZS4gIFRoZSBjaGFyYWN0ZXJzIHJlZ2FyZGVkIGFzIHdoaXRlc3BhY2UgYXJlOiBbJyAnXSxcbiAgIFsnXFwwMTInXSwgWydcXG4nXSwgWydcXHInXSwgYW5kIFsnXFx0J10uICBJZiB0aGVyZSBpcyBuZWl0aGVyIGxlYWRpbmcgbm9yXG4gICB0cmFpbGluZyB3aGl0ZXNwYWNlIGNoYXJhY3RlciBpbiB0aGUgYXJndW1lbnQsIHJldHVybiB0aGUgb3JpZ2luYWxcbiAgIHN0cmluZyBpdHNlbGYsIG5vdCBhIGNvcHkuXG4gICBAc2luY2UgNC4wMC4wICopXG5cbnZhbCBlc2NhcGVkIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgIHJlcHJlc2VudGVkIGJ5IGVzY2FwZSBzZXF1ZW5jZXMsIGZvbGxvd2luZyB0aGUgbGV4aWNhbFxuICAgIGNvbnZlbnRpb25zIG9mIE9DYW1sLlxuICAgIEFsbCBjaGFyYWN0ZXJzIG91dHNpZGUgdGhlIEFTQ0lJIHByaW50YWJsZSByYW5nZSAoMzIuLjEyNikgYXJlXG4gICAgZXNjYXBlZCwgYXMgd2VsbCBhcyBiYWNrc2xhc2ggYW5kIGRvdWJsZS1xdW90ZS5cblxuICAgIElmIHRoZXJlIGlzIG5vIHNwZWNpYWwgY2hhcmFjdGVyIGluIHRoZSBhcmd1bWVudCB0aGF0IG5lZWRzXG4gICAgZXNjYXBpbmcsIHJldHVybiB0aGUgb3JpZ2luYWwgc3RyaW5nIGl0c2VsZiwgbm90IGEgY29weS5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiB0aGUgcmVzdWx0IGlzIGxvbmdlciB0aGFuXG4gICAgeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9IGJ5dGVzLlxuXG4gICAgVGhlIGZ1bmN0aW9uIHshU2NhbmYudW5lc2NhcGVkfSBpcyBhIGxlZnQgaW52ZXJzZSBvZiBbZXNjYXBlZF0sXG4gICAgaS5lLiBbU2NhbmYudW5lc2NhcGVkIChlc2NhcGVkIHMpID0gc10gZm9yIGFueSBzdHJpbmcgW3NdICh1bmxlc3NcbiAgICBbZXNjYXBlIHNdIGZhaWxzKS4gKilcblxudmFsIGluZGV4IDogc3RyaW5nIC0+IGNoYXIgLT4gaW50XG4oKiogW1N0cmluZy5pbmRleCBzIGNdIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdFxuICAgb2NjdXJyZW5jZSBvZiBjaGFyYWN0ZXIgW2NdIGluIHN0cmluZyBbc10uXG4gICBAcmFpc2UgTm90X2ZvdW5kIGlmIFtjXSBkb2VzIG5vdCBvY2N1ciBpbiBbc10uICopXG5cbnZhbCBpbmRleF9vcHQ6IHN0cmluZyAtPiBjaGFyIC0+IGludCBvcHRpb25cbigqKiBbU3RyaW5nLmluZGV4X29wdCBzIGNdIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdFxuICAgIG9jY3VycmVuY2Ugb2YgY2hhcmFjdGVyIFtjXSBpbiBzdHJpbmcgW3NdLCBvclxuICAgIFtOb25lXSBpZiBbY10gZG9lcyBub3Qgb2NjdXIgaW4gW3NdLlxuICAgIEBzaW5jZSA0LjA1ICopXG5cbnZhbCByaW5kZXggOiBzdHJpbmcgLT4gY2hhciAtPiBpbnRcbigqKiBbU3RyaW5nLnJpbmRleCBzIGNdIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0XG4gICBvY2N1cnJlbmNlIG9mIGNoYXJhY3RlciBbY10gaW4gc3RyaW5nIFtzXS5cbiAgIEByYWlzZSBOb3RfZm91bmQgaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXS4gKilcblxudmFsIHJpbmRleF9vcHQ6IHN0cmluZyAtPiBjaGFyIC0+IGludCBvcHRpb25cbigqKiBbU3RyaW5nLnJpbmRleF9vcHQgcyBjXSByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBvY2N1cnJlbmNlXG4gICAgb2YgY2hhcmFjdGVyIFtjXSBpbiBzdHJpbmcgW3NdLCBvciBbTm9uZV0gaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluXG4gICAgW3NdLlxuICAgIEBzaW5jZSA0LjA1ICopXG5cbnZhbCBpbmRleF9mcm9tIDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludFxuKCoqIFtTdHJpbmcuaW5kZXhfZnJvbSBzIGkgY10gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlXG4gICBmaXJzdCBvY2N1cnJlbmNlIG9mIGNoYXJhY3RlciBbY10gaW4gc3RyaW5nIFtzXSBhZnRlciBwb3NpdGlvbiBbaV0uXG4gICBbU3RyaW5nLmluZGV4IHMgY10gaXMgZXF1aXZhbGVudCB0byBbU3RyaW5nLmluZGV4X2Zyb20gcyAwIGNdLlxuICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2ldIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIGluIFtzXS5cbiAgIEByYWlzZSBOb3RfZm91bmQgaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXSBhZnRlciBwb3NpdGlvbiBbaV0uICopXG5cbnZhbCBpbmRleF9mcm9tX29wdDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludCBvcHRpb25cbigqKiBbU3RyaW5nLmluZGV4X2Zyb21fb3B0IHMgaSBjXSByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGVcbiAgICBmaXJzdCBvY2N1cnJlbmNlIG9mIGNoYXJhY3RlciBbY10gaW4gc3RyaW5nIFtzXSBhZnRlciBwb3NpdGlvbiBbaV1cbiAgICBvciBbTm9uZV0gaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXSBhZnRlciBwb3NpdGlvbiBbaV0uXG5cbiAgICBbU3RyaW5nLmluZGV4X29wdCBzIGNdIGlzIGVxdWl2YWxlbnQgdG8gW1N0cmluZy5pbmRleF9mcm9tX29wdCBzIDAgY10uXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2ldIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIGluIFtzXS5cblxuICAgIEBzaW5jZSA0LjA1XG4qKVxuXG52YWwgcmluZGV4X2Zyb20gOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gaW50XG4oKiogW1N0cmluZy5yaW5kZXhfZnJvbSBzIGkgY10gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlXG4gICBsYXN0IG9jY3VycmVuY2Ugb2YgY2hhcmFjdGVyIFtjXSBpbiBzdHJpbmcgW3NdIGJlZm9yZSBwb3NpdGlvbiBbaSsxXS5cbiAgIFtTdHJpbmcucmluZGV4IHMgY10gaXMgZXF1aXZhbGVudCB0b1xuICAgW1N0cmluZy5yaW5kZXhfZnJvbSBzIChTdHJpbmcubGVuZ3RoIHMgLSAxKSBjXS5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpKzFdIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIGluIFtzXS5cbiAgIEByYWlzZSBOb3RfZm91bmQgaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXSBiZWZvcmUgcG9zaXRpb24gW2krMV0uICopXG5cbnZhbCByaW5kZXhfZnJvbV9vcHQ6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW1N0cmluZy5yaW5kZXhfZnJvbV9vcHQgcyBpIGNdIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZVxuICAgbGFzdCBvY2N1cnJlbmNlIG9mIGNoYXJhY3RlciBbY10gaW4gc3RyaW5nIFtzXSBiZWZvcmUgcG9zaXRpb24gW2krMV1cbiAgIG9yIFtOb25lXSBpZiBbY10gZG9lcyBub3Qgb2NjdXIgaW4gW3NdIGJlZm9yZSBwb3NpdGlvbiBbaSsxXS5cblxuICAgW1N0cmluZy5yaW5kZXhfb3B0IHMgY10gaXMgZXF1aXZhbGVudCB0b1xuICAgW1N0cmluZy5yaW5kZXhfZnJvbV9vcHQgcyAoU3RyaW5nLmxlbmd0aCBzIC0gMSkgY10uXG4gICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbaSsxXSBpcyBub3QgYSB2YWxpZCBwb3NpdGlvbiBpbiBbc10uXG5cbiAgICBAc2luY2UgNC4wNVxuKilcblxudmFsIGNvbnRhaW5zIDogc3RyaW5nIC0+IGNoYXIgLT4gYm9vbFxuKCoqIFtTdHJpbmcuY29udGFpbnMgcyBjXSB0ZXN0cyBpZiBjaGFyYWN0ZXIgW2NdXG4gICBhcHBlYXJzIGluIHRoZSBzdHJpbmcgW3NdLiAqKVxuXG52YWwgY29udGFpbnNfZnJvbSA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBib29sXG4oKiogW1N0cmluZy5jb250YWluc19mcm9tIHMgc3RhcnQgY10gdGVzdHMgaWYgY2hhcmFjdGVyIFtjXVxuICAgYXBwZWFycyBpbiBbc10gYWZ0ZXIgcG9zaXRpb24gW3N0YXJ0XS5cbiAgIFtTdHJpbmcuY29udGFpbnMgcyBjXSBpcyBlcXVpdmFsZW50IHRvXG4gICBbU3RyaW5nLmNvbnRhaW5zX2Zyb20gcyAwIGNdLlxuICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW3N0YXJ0XSBpcyBub3QgYSB2YWxpZCBwb3NpdGlvbiBpbiBbc10uICopXG5cbnZhbCByY29udGFpbnNfZnJvbSA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBib29sXG4oKiogW1N0cmluZy5yY29udGFpbnNfZnJvbSBzIHN0b3AgY10gdGVzdHMgaWYgY2hhcmFjdGVyIFtjXVxuICAgYXBwZWFycyBpbiBbc10gYmVmb3JlIHBvc2l0aW9uIFtzdG9wKzFdLlxuICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW3N0b3AgPCAwXSBvciBbc3RvcCsxXSBpcyBub3QgYSB2YWxpZFxuICAgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG52YWwgdXBwZXJjYXNlIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIFN0cmluZy51cHBlcmNhc2VfYXNjaWkgaW5zdGVhZC5cIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCBhbGwgbG93ZXJjYXNlIGxldHRlcnNcbiAgIHRyYW5zbGF0ZWQgdG8gdXBwZXJjYXNlLCBpbmNsdWRpbmcgYWNjZW50ZWQgbGV0dGVycyBvZiB0aGUgSVNPXG4gICBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuXG4gICBAZGVwcmVjYXRlZCBGdW5jdGlvbnMgb3BlcmF0aW5nIG9uIExhdGluLTEgY2hhcmFjdGVyIHNldCBhcmUgZGVwcmVjYXRlZC4gKilcblxudmFsIGxvd2VyY2FzZSA6IHN0cmluZyAtPiBzdHJpbmdcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBTdHJpbmcubG93ZXJjYXNlX2FzY2lpIGluc3RlYWQuXCJdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggYWxsIHVwcGVyY2FzZSBsZXR0ZXJzXG4gICB0cmFuc2xhdGVkIHRvIGxvd2VyY2FzZSwgaW5jbHVkaW5nIGFjY2VudGVkIGxldHRlcnMgb2YgdGhlIElTT1xuICAgTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0LlxuICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCBjYXBpdGFsaXplIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIFN0cmluZy5jYXBpdGFsaXplX2FzY2lpIGluc3RlYWQuXCJdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggdGhlIGZpcnN0IGNoYXJhY3RlciBzZXQgdG8gdXBwZXJjYXNlLFxuICAgdXNpbmcgdGhlIElTTyBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuLlxuICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCB1bmNhcGl0YWxpemUgOiBzdHJpbmcgLT4gc3RyaW5nXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWQgXCJVc2UgU3RyaW5nLnVuY2FwaXRhbGl6ZV9hc2NpaSBpbnN0ZWFkLlwiXVxuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIHRoZSBmaXJzdCBjaGFyYWN0ZXIgc2V0IHRvIGxvd2VyY2FzZSxcbiAgIHVzaW5nIHRoZSBJU08gTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0Li5cbiAgIEBkZXByZWNhdGVkIEZ1bmN0aW9ucyBvcGVyYXRpbmcgb24gTGF0aW4tMSBjaGFyYWN0ZXIgc2V0IGFyZSBkZXByZWNhdGVkLiAqKVxuXG52YWwgdXBwZXJjYXNlX2FzY2lpIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIGFsbCBsb3dlcmNhc2UgbGV0dGVyc1xuICAgdHJhbnNsYXRlZCB0byB1cHBlcmNhc2UsIHVzaW5nIHRoZSBVUy1BU0NJSSBjaGFyYWN0ZXIgc2V0LlxuICAgQHNpbmNlIDQuMDMuMCAqKVxuXG52YWwgbG93ZXJjYXNlX2FzY2lpIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIGFsbCB1cHBlcmNhc2UgbGV0dGVyc1xuICAgdHJhbnNsYXRlZCB0byBsb3dlcmNhc2UsIHVzaW5nIHRoZSBVUy1BU0NJSSBjaGFyYWN0ZXIgc2V0LlxuICAgQHNpbmNlIDQuMDMuMCAqKVxuXG52YWwgY2FwaXRhbGl6ZV9hc2NpaSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byB1cHBlcmNhc2UsXG4gICB1c2luZyB0aGUgVVMtQVNDSUkgY2hhcmFjdGVyIHNldC5cbiAgIEBzaW5jZSA0LjAzLjAgKilcblxudmFsIHVuY2FwaXRhbGl6ZV9hc2NpaSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byBsb3dlcmNhc2UsXG4gICB1c2luZyB0aGUgVVMtQVNDSUkgY2hhcmFjdGVyIHNldC5cbiAgIEBzaW5jZSA0LjAzLjAgKilcblxudHlwZSB0ID0gc3RyaW5nXG4oKiogQW4gYWxpYXMgZm9yIHRoZSB0eXBlIG9mIHN0cmluZ3MuICopXG5cbnZhbCBjb21wYXJlOiB0IC0+IHQgLT4gaW50XG4oKiogVGhlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIHN0cmluZ3MsIHdpdGggdGhlIHNhbWUgc3BlY2lmaWNhdGlvbiBhc1xuICAgIHshU3RkbGliLmNvbXBhcmV9LiAgQWxvbmcgd2l0aCB0aGUgdHlwZSBbdF0sIHRoaXMgZnVuY3Rpb24gW2NvbXBhcmVdXG4gICAgYWxsb3dzIHRoZSBtb2R1bGUgW1N0cmluZ10gdG8gYmUgcGFzc2VkIGFzIGFyZ3VtZW50IHRvIHRoZSBmdW5jdG9yc1xuICAgIHshU2V0Lk1ha2V9IGFuZCB7IU1hcC5NYWtlfS4gKilcblxudmFsIGVxdWFsOiB0IC0+IHQgLT4gYm9vbFxuKCoqIFRoZSBlcXVhbCBmdW5jdGlvbiBmb3Igc3RyaW5ncy5cbiAgICBAc2luY2UgNC4wMy4wICopXG5cbnZhbCBzcGxpdF9vbl9jaGFyOiBjaGFyIC0+IHN0cmluZyAtPiBzdHJpbmcgbGlzdFxuKCoqIFtTdHJpbmcuc3BsaXRfb25fY2hhciBzZXAgc10gcmV0dXJucyB0aGUgbGlzdCBvZiBhbGwgKHBvc3NpYmx5IGVtcHR5KVxuICAgIHN1YnN0cmluZ3Mgb2YgW3NdIHRoYXQgYXJlIGRlbGltaXRlZCBieSB0aGUgW3NlcF0gY2hhcmFjdGVyLlxuXG4gICAgVGhlIGZ1bmN0aW9uJ3Mgb3V0cHV0IGlzIHNwZWNpZmllZCBieSB0aGUgZm9sbG93aW5nIGludmFyaWFudHM6XG5cbiAgICAtIFRoZSBsaXN0IGlzIG5vdCBlbXB0eS5cbiAgICAtIENvbmNhdGVuYXRpbmcgaXRzIGVsZW1lbnRzIHVzaW5nIFtzZXBdIGFzIGEgc2VwYXJhdG9yIHJldHVybnMgYVxuICAgICAgc3RyaW5nIGVxdWFsIHRvIHRoZSBpbnB1dCAoW1N0cmluZy5jb25jYXQgKFN0cmluZy5tYWtlIDEgc2VwKVxuICAgICAgKFN0cmluZy5zcGxpdF9vbl9jaGFyIHNlcCBzKSA9IHNdKS5cbiAgICAtIE5vIHN0cmluZyBpbiB0aGUgcmVzdWx0IGNvbnRhaW5zIHRoZSBbc2VwXSBjaGFyYWN0ZXIuXG5cbiAgICBAc2luY2UgNC4wNC4wXG4qKVxuXG4oKiogezEgSXRlcmF0b3JzfSAqKVxuXG52YWwgdG9fc2VxIDogdCAtPiBjaGFyIFNlcS50XG4oKiogSXRlcmF0ZSBvbiB0aGUgc3RyaW5nLCBpbiBpbmNyZWFzaW5nIGluZGV4IG9yZGVyLiBNb2RpZmljYXRpb25zIG9mIHRoZVxuICAgIHN0cmluZyBkdXJpbmcgaXRlcmF0aW9uIHdpbGwgYmUgcmVmbGVjdGVkIGluIHRoZSBpdGVyYXRvci5cbiAgICBAc2luY2UgNC4wNyAqKVxuXG52YWwgdG9fc2VxaSA6IHQgLT4gKGludCAqIGNoYXIpIFNlcS50XG4oKiogSXRlcmF0ZSBvbiB0aGUgc3RyaW5nLCBpbiBpbmNyZWFzaW5nIG9yZGVyLCB5aWVsZGluZyBpbmRpY2VzIGFsb25nIGNoYXJzXG4gICAgQHNpbmNlIDQuMDcgKilcblxudmFsIG9mX3NlcSA6IGNoYXIgU2VxLnQgLT4gdFxuKCoqIENyZWF0ZSBhIHN0cmluZyBmcm9tIHRoZSBnZW5lcmF0b3JcbiAgICBAc2luY2UgNC4wNyAqKVxuXG4oKiovKiopXG5cbigqIFRoZSBmb2xsb3dpbmcgaXMgZm9yIHN5c3RlbSB1c2Ugb25seS4gRG8gbm90IGNhbGwgZGlyZWN0bHkuICopXG5cbmV4dGVybmFsIHVuc2FmZV9nZXQgOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgPSBcIiVzdHJpbmdfdW5zYWZlX2dldFwiXG5leHRlcm5hbCB1bnNhZmVfc2V0IDogYnl0ZXMgLT4gaW50IC0+IGNoYXIgLT4gdW5pdCA9IFwiJXN0cmluZ191bnNhZmVfc2V0XCJcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZF1cbmV4dGVybmFsIHVuc2FmZV9ibGl0IDpcbiAgc3RyaW5nIC0+IGludCAtPiBieXRlcyAtPiBpbnQgLT4gaW50IC0+IHVuaXRcbiAgPSBcImNhbWxfYmxpdF9zdHJpbmdcIiBbQEBub2FsbG9jXVxuZXh0ZXJuYWwgdW5zYWZlX2ZpbGwgOlxuICBieXRlcyAtPiBpbnQgLT4gaW50IC0+IGNoYXIgLT4gdW5pdCA9IFwiY2FtbF9maWxsX3N0cmluZ1wiIFtAQG5vYWxsb2NdXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWRdXG4iXX0=
