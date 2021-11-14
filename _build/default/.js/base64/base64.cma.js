(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_bytes_set16=runtime.caml_bytes_set16,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_register_global=runtime.caml_register_global,
     caml_string_get16=runtime.caml_string_get16,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_unsafe_get=runtime.caml_string_unsafe_get,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Length_of_alphabet_must_be=
      caml_string_of_jsbytes("Length of alphabet must be 64"),
     cst_Alphabet_can_not_contain_p=
      caml_string_of_jsbytes("Alphabet can not contain padding character"),
     cst_ABCDEFGHIJKLMNOPQRSTUVWXYZ=
      caml_string_of_jsbytes
       ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
     cst_ABCDEFGHIJKLMNOPQRSTUVWXYZ$0=
      caml_string_of_jsbytes
       ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),
     cst_Base64_Out_of_bounds=caml_string_of_jsbytes("Base64.Out_of_bounds"),
     cst_Base64_Too_much_input=caml_string_of_jsbytes("Base64.Too_much_input"),
     Stdlib=global_data.Stdlib,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Assert_failure=global_data.Assert_failure,
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_char=global_data.Stdlib__char,
     Stdlib_sys=global_data.Stdlib__sys,
     Base64=[0];
    caml_register_global(12,Base64,"Base64__");
    var Base64_Unsafe=[0];
    caml_register_global(13,Base64_Unsafe,"Base64__Unsafe");
    var
     _e_=
      [0,
       [11,caml_string_of_jsbytes("Invalid bounds"),0],
       caml_string_of_jsbytes("Invalid bounds")],
     _f_=
      [0,
       [11,caml_string_of_jsbytes("Wrong padding"),0],
       caml_string_of_jsbytes("Wrong padding")],
     _g_=
      [0,
       [11,caml_string_of_jsbytes("Malformed input"),0],
       caml_string_of_jsbytes("Malformed input")],
     _h_=
      [0,
       [11,caml_string_of_jsbytes("Too much input"),0],
       caml_string_of_jsbytes("Too much input")],
     _c_=[0,caml_string_of_jsbytes("src/base64.ml"),135,15],
     _b_=
      [0,
       [11,caml_string_of_jsbytes("Invalid bounds"),0],
       caml_string_of_jsbytes("Invalid bounds")];
    function symbol(x,y)
     {if(y < 1)throw Stdlib[13];
      return 0 < x?1 + runtime.caml_div(x - 1 | 0,y) | 0:0}
    function unsafe_set_uint8(t,off,v)
     {runtime.caml_bytes_unsafe_set(t,off,caml_call1(Stdlib_char[1],v));
      return 0}
    function make_alphabet(alphabet)
     {if(64 !== caml_ml_string_length(alphabet))
       caml_call1(Stdlib[1],cst_Length_of_alphabet_must_be);
      if(caml_call2(Stdlib_string[22],alphabet,61))
       caml_call1(Stdlib[1],cst_Alphabet_can_not_contain_p);
      function _z_(i){return runtime.caml_string_get(alphabet,i)}
      var
       emap=caml_call2(Stdlib_array[2],caml_ml_string_length(alphabet),_z_),
       dmap=runtime.caml_make_vect(256,-1);
      function _A_(idx,chr)
       {runtime.caml_check_bound(dmap,chr)[1 + chr] = idx;return 0}
      caml_call2(Stdlib_string[9],_A_,alphabet);
      return [0,emap,dmap]}
    function length_alphabet(param){var emap=param[1];return emap.length - 1}
    function alphabet(param){var emap=param[1];return emap}
    var
     default_alphabet=make_alphabet(cst_ABCDEFGHIJKLMNOPQRSTUVWXYZ),
     uri_safe_alphabet=make_alphabet(cst_ABCDEFGHIJKLMNOPQRSTUVWXYZ$0),
     unsafe_set_be_uint16=
      Stdlib_sys[11]
       ?caml_bytes_set16
       :function(t,off,v)
         {return caml_bytes_set16(t,off,runtime.caml_bswap16(v))},
     Out_of_bounds=[248,cst_Base64_Out_of_bounds,caml_fresh_oo_id(0)],
     Too_much_input=[248,cst_Base64_Too_much_input,caml_fresh_oo_id(0)];
    function get_uint8(t,off)
     {var _x_=off < 0?1:0,_y_=_x_ || (caml_ml_string_length(t) <= off?1:0);
      if(_y_)throw Out_of_bounds;
      return caml_string_unsafe_get(t,off)}
    var padding=61;
    function error_msgf(fmt)
     {function _w_(err){return [1,[0,3854881,err]]}
      return caml_call2(Stdlib_format[135],_w_,fmt)}
    function _a_(pad,param,opt,len,input)
     {var emap=param[1];
      if(opt)var sth=opt[1],off=sth;else var off=0;
      if(len)
       var len$0=len[1],len$1=len$0;
      else
       var len$1=caml_ml_string_length(input) - off | 0;
      if
       (0
        <=
        len$1
        &&
        0
        <=
        off
        &&
        !
        ((caml_ml_string_length(input) - len$1 | 0) < off))
       {var
         n=symbol(len$1,3) * 4 | 0,
         res=caml_create_bytes(n),
         emap$0=function(i){return emap[1 + i]},
         emit=
          function(b1,b2,b3,i)
           {var _u_=emap$0((b1 << 4 | b2 >>> 4 | 0) & 63);
            unsafe_set_be_uint16(res,i,emap$0((b1 >>> 2 | 0) & 63) << 8 | _u_);
            var _v_=emap$0(b3 & 63);
            return unsafe_set_be_uint16
                    (res,
                     i + 2 | 0,
                     emap$0((b2 << 2 | b3 >>> 6 | 0) & 63) << 8 | _v_)},
         j=0,
         i=0;
        for(;;)
         {if(i !== len$1)
           if(i === (len$1 - 1 | 0))
            emit(caml_string_unsafe_get(input,off + i | 0),0,0,j);
           else
            {if(i !== (len$1 - 2 | 0))
              {emit
                (caml_string_unsafe_get(input,off + i | 0),
                 caml_string_unsafe_get(input,(off + i | 0) + 1 | 0),
                 caml_string_unsafe_get(input,(off + i | 0) + 2 | 0),
                 j);
               var i$0=i + 3 | 0,j$0=j + 4 | 0,j=j$0,i=i$0;
               continue}
             emit
              (caml_string_unsafe_get(input,off + i | 0),
               caml_string_unsafe_get(input,(off + i | 0) + 1 | 0),
               0,
               j)}
          var i$3=(3 - (len$1 % 3 | 0) | 0) % 3 | 0;
          if(pad)
           {var i$1=i$3;
            for(;;)
             {if(0 === i$1)
               return [0,[0,caml_call1(Stdlib_bytes[42],res),0,n]];
              unsafe_set_uint8(res,n - i$1 | 0,padding);
              var i$2=i$1 - 1 | 0,i$1=i$2;
              continue}}
          return [0,[0,caml_call1(Stdlib_bytes[42],res),0,n - i$3 | 0]]}}
      return error_msgf(_b_)}
    function encode(opt,_t_,off,len,input)
     {if(opt)var sth=opt[1],pad=sth;else var pad=1;
      if(_t_)
       var sth$0=_t_[1],alphabet=sth$0;
      else
       var alphabet=default_alphabet;
      var err=_a_(pad,alphabet,off,len,input);
      if(0 === err[0])
       {var match=err[1],len$0=match[3],off$0=match[2],res=match[1];
        return [0,caml_call3(Stdlib_string[4],res,off$0,len$0)]}
      return err}
    function encode_string(pad,alphabet,input)
     {var match=encode(pad,alphabet,0,0,input);
      if(0 === match[0]){var res=match[1];return res}
      throw [0,Assert_failure,_c_]}
    function encode_sub(opt,_s_,off,len,input)
     {if(opt)var sth=opt[1],pad=sth;else var pad=1;
      if(_s_)
       var sth$0=_s_[1],alphabet=sth$0;
      else
       var alphabet=default_alphabet;
      return _a_(pad,alphabet,off,len,input)}
    function encode_exn(pad,alphabet,off,len,input)
     {var match=encode(pad,alphabet,off,len,input);
      if(0 === match[0]){var v=match[1];return v}
      var match$0=match[1],err=match$0[2];
      return caml_call1(Stdlib[1],err)}
    function _d_(opt,param,_i_,len,input)
     {var dmap=param[2];
      if(opt)var sth=opt[1],pad=sth;else var pad=1;
      if(_i_)var sth$0=_i_[1],off=sth$0;else var off=0;
      if(len)
       var len$0=len[1],len$1=len$0;
      else
       var len$1=caml_ml_string_length(input) - off | 0;
      if
       (0
        <=
        len$1
        &&
        0
        <=
        off
        &&
        !
        ((caml_ml_string_length(input) - len$1 | 0) < off))
       {var
         n=symbol(len$1,4) * 4 | 0,
         n$0=symbol(n,4) * 3 | 0,
         t=caml_create_bytes(n$0),
         get_uint8_or_padding=
          pad
           ?function(t,i)
             {if(len$1 <= i)throw Out_of_bounds;
              return get_uint8(t,off + i | 0)}
           :function(t,i)
             {try
               {var _q_=i < len$1?get_uint8(t,off + i | 0):padding;return _q_}
              catch(_r_)
               {_r_ = caml_wrap_exception(_r_);
                if(_r_ === Out_of_bounds)return padding;
                throw _r_}},
         emit=
          function(a,b,c,d,j)
           {var x=a << 18 | b << 12 | c << 6 | d,v=x >>> 8 | 0,switch$0=0;
            if(0 <= j && ! (caml_ml_bytes_length(t) < (j + 1 | 0)))
             {var switch$1=0;
              if(0 <= j && ! (caml_ml_bytes_length(t) < (j + 2 | 0)))
               {unsafe_set_be_uint16(t,j,v);switch$1 = 1}
              if(! switch$1)unsafe_set_uint8(t,j,v >>> 8 | 0)}
            else
             switch$0 = 1;
            var v$0=x & 255,off=j + 2 | 0;
            if(0 <= off && ! (caml_ml_bytes_length(t) <= off))
             return unsafe_set_uint8(t,off,v$0);
            return 0},
         dmap$0=
          function(i){var x=dmap[1 + i];if(x === -1)throw Stdlib[8];return x},
         only_padding=
          function(pad,idx)
           {var pad$0=[0,pad + 3 | 0],idx$0=[0,idx];
            for(;;)
             {if((idx$0[1] + 4 | 0) < len$1)
               {var
                 _o_=15677 !== caml_string_get16(input,off + idx$0[1] | 0)?1:0,
                 _p_=
                  _o_
                  ||
                  (15677
                    !==
                    caml_string_get16(input,(off + idx$0[1] | 0) + 2 | 0)
                    ?1
                    :0);
                if(_p_)throw Stdlib[8];
                idx$0[1] = idx$0[1] + 4 | 0;
                pad$0[1] = pad$0[1] + 3 | 0;
                continue}
              for(;;)
               {if(idx$0[1] < len$1)
                 {if(caml_string_unsafe_get(input,off + idx$0[1] | 0) !== 61)
                   throw Stdlib[8];
                  idx$0[1]++;
                  continue}
                return pad$0[1]}}};
        try
         {var j=0,i=0;
          for(;;)
           {if(i === n)
             var pad$5=0;
            else
             {var x=get_uint8_or_padding(input,i + 3 | 0);
              try
               {var pad$4=0,_m_=dmap$0(x),pad$0=pad$4,d=_m_}
              catch(exn$0)
               {exn$0 = caml_wrap_exception(exn$0);
                var switch$0=0;
                if(exn$0 === Stdlib[8] && x === 61)
                 var pad$0=1,d=0;
                else
                 switch$0 = 1;
                if(switch$0)throw exn$0;
                var exn=exn$0}
              var x$0=get_uint8_or_padding(input,i + 2 | 0);
              try
               {var _l_=dmap$0(x$0),pad$1=pad$0,c=_l_}
              catch(exn)
               {exn = caml_wrap_exception(exn);
                var switch$1=0;
                if(exn === Stdlib[8] && x$0 === 61 && 1 === pad$0)
                 {var pad$1=2,c=0;switch$1 = 1}
                if(! switch$1)throw exn;
                var exn$0=exn}
              var x$1=get_uint8_or_padding(input,i + 1 | 0);
              try
               {var _k_=dmap$0(x$1),pad$2=pad$1,b=_k_}
              catch(exn)
               {exn = caml_wrap_exception(exn);
                var switch$2=0;
                if(exn === Stdlib[8] && x$1 === 61 && 2 === pad$1)
                 {var pad$2=3,b=0;switch$2 = 1}
                if(! switch$2)throw exn;
                var exn$1=exn}
              var x$2=get_uint8_or_padding(input,i);
              try
               {var _j_=dmap$0(x$2),pad$3=pad$2,a=_j_}
              catch(exn)
               {exn = caml_wrap_exception(exn);
                var switch$3=0;
                if(exn === Stdlib[8] && x$2 === 61 && 3 === pad$2)
                 {var pad$3=4,a=0;switch$3 = 1}
                if(! switch$3)throw exn;
                var exn$2=exn}
              emit(a,b,c,d,j);
              if((i + 4 | 0) === n)
               var pad$5=0 === pad$3?0:4 === pad$3?3:pad$3;
              else
               {if(0 === pad$3)
                 {var i$0=i + 4 | 0,j$0=j + 3 | 0,j=j$0,i=i$0;continue}
                if(4 === pad$3)
                 var pad$5=only_padding(3,i + 4 | 0);
                else
                 {if(1 === pad)throw Too_much_input;
                  var pad$5=only_padding(pad$3,i + 4 | 0)}}}
            break}}
        catch(_n_)
         {_n_ = caml_wrap_exception(_n_);
          if(_n_ === Out_of_bounds)return error_msgf(_f_);
          if(_n_ === Stdlib[8])return error_msgf(_g_);
          if(_n_ === Too_much_input)return error_msgf(_h_);
          throw _n_}
        return 0 === pad$5
                ?[0,[0,caml_call1(Stdlib_bytes[42],t),0,n$0]]
                :[0,[0,caml_call1(Stdlib_bytes[42],t),0,n$0 - pad$5 | 0]]}
      return error_msgf(_e_)}
    function decode(pad,opt,off,len,input)
     {if(opt)var sth=opt[1],alphabet=sth;else var alphabet=default_alphabet;
      var err=_d_(pad,alphabet,off,len,input);
      if(0 === err[0])
       {var match=err[1],len$0=match[3],off$0=match[2],res=match[1];
        return [0,caml_call3(Stdlib_string[4],res,off$0,len$0)]}
      return err}
    function decode_sub(pad,opt,off,len,input)
     {if(opt)var sth=opt[1],alphabet=sth;else var alphabet=default_alphabet;
      return _d_(pad,alphabet,off,len,input)}
    function decode_exn(pad,alphabet,off,len,input)
     {var match=decode(pad,alphabet,off,len,input);
      if(0 === match[0]){var res=match[1];return res}
      var match$0=match[1],err=match$0[2];
      return caml_call1(Stdlib[1],err)}
    var
     Base64$0=
      [0,
       default_alphabet,
       uri_safe_alphabet,
       make_alphabet,
       length_alphabet,
       alphabet,
       decode_exn,
       decode_sub,
       decode,
       encode,
       encode_string,
       encode_sub,
       encode_exn];
    caml_register_global(22,Base64$0,"Base64");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiYXNlNjQuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
