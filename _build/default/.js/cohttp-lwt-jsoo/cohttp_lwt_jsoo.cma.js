(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring;
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
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_application_x_www_form_url=
      caml_string_of_jsbytes("application/x-www-form-urlencoded"),
     cst_content_type=caml_string_of_jsbytes("content-type"),
     cst_Cohttp_lwt_xhr_Make_api_X_=
      caml_string_of_jsbytes
       ("Cohttp_lwt_xhr.Make_api(X).Cohttp_lwt_xhr_callv_not_implemented"),
     cst_string=caml_string_of_jsbytes("string"),
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Cohttp_lwt_Body=global_data.Cohttp_lwt__Body,
     Cohttp_Code=global_data.Cohttp__Code,
     Cohttp_Response=global_data.Cohttp__Response,
     Lwt=global_data.Lwt,
     Js_of_ocaml_Firebug=global_data.Js_of_ocaml__Firebug,
     Js_of_ocaml_File=global_data.Js_of_ocaml__File,
     Cohttp_String_io=global_data.Cohttp__String_io,
     Stdlib_list=global_data.Stdlib__list,
     Js_of_ocaml_XmlHttpRequest=global_data.Js_of_ocaml__XmlHttpRequest,
     Uri=global_data.Uri,
     Cohttp_Header=global_data.Cohttp__Header,
     Cohttp_Request=global_data.Cohttp__Request,
     Js_of_ocaml_Typed_array=global_data.Js_of_ocaml__Typed_array,
     Stdlib_char=global_data.Stdlib__char,
     Stdlib_string=global_data.Stdlib__string,
     Cohttp_lwt_String_io=global_data.Cohttp_lwt__String_io,
     Cohttp_Header_io=global_data.Cohttp__Header_io,
     _a_=Lwt[69],
     _b_=Lwt[70],
     xhr=caml_call1(Js_of_ocaml_XmlHttpRequest[1],0),
     rt=xhr.responseType,
     xhr_response_supported=
      runtime.caml_string_equal(caml_string_of_jsstring(typeof rt),cst_string),
     _i_=[0,0],
     _j_=[0,540315116],
     _g_=[0,0],
     _h_=[0,540315116],
     _f_=[0,0],
     _e_=[0,0],
     _d_=[0,0],
     _c_=[1,0];
    function binary_string(str)
     {var
       t1=runtime.caml_ml_string_length(str),
       a=new (Js_of_ocaml_Typed_array[10])(t1),
       _an_=t1 - 1 | 0,
       _am_=0;
      if(! (_an_ < 0))
       {var i=_am_;
        for(;;)
         {var _ao_=runtime.caml_string_get(str,i);
          caml_call3(Js_of_ocaml_Typed_array[45],a,i,_ao_);
          var _ap_=i + 1 | 0;
          if(_an_ !== i){var i=_ap_;continue}
          break}}
      return a}
    function string_of_uint8array(u8a,offset,len)
     {function _ak_(i)
       {var _al_=caml_call2(Js_of_ocaml_Typed_array[47],u8a,offset + i | 0);
        return caml_call1(Stdlib_char[1],_al_)}
      return caml_call2(Stdlib_string[2],len,_ak_)}
    function Body_builder(P)
     {function chunked_body_str(text)
       {var body_len=text.length,pos=[0,0];
        function chunkerizer(param)
         {if(pos[1] === body_len)return caml_call1(Lwt[4],0);
          if(body_len <= (pos[1] + P[2] | 0))
           {var str=text.substring(pos[1]);
            pos[1] = body_len;
            var _ai_=[1,caml_call1(P[3],str)];
            return caml_call1(Lwt[4],_ai_)}
          var t4=pos[1] + P[2] | 0,str$0=text.substring(pos[1],t4);
          pos[1] = pos[1] + P[2] | 0;
          var _aj_=[0,caml_call1(P[3],str$0)];
          return caml_call1(Lwt[4],_aj_)}
        if(0 === body_len)return Cohttp_lwt_Body[4];
        var _ah_=caml_call2(Cohttp_lwt_Body[14],chunkerizer,0);
        return caml_call1(Cohttp_lwt_Body[13],_ah_)}
      function chunked_body_binary(ab)
       {var
         body_len=ab.byteLength,
         u8a=new (Js_of_ocaml_Typed_array[13])(ab),
         pos=[0,0];
        function chunkerizer(param)
         {if(pos[1] === body_len)return caml_call1(Lwt[4],0);
          if(body_len <= (pos[1] + P[2] | 0))
           {var str=string_of_uint8array(u8a,pos[1],body_len - pos[1] | 0);
            pos[1] = body_len;
            return caml_call1(Lwt[4],[1,str])}
          var str$0=string_of_uint8array(u8a,pos[1],P[2]);
          pos[1] = pos[1] + P[2] | 0;
          return caml_call1(Lwt[4],[0,str$0])}
        if(0 === body_len)return Cohttp_lwt_Body[4];
        var _ag_=caml_call2(Cohttp_lwt_Body[14],chunkerizer,0);
        return caml_call1(Cohttp_lwt_Body[13],_ag_)}
      function get(param)
       {if(571404121 <= param[1])
         {var ab=param[2];
          if(P[1])return chunked_body_binary(ab);
          var
           u8a=new (Js_of_ocaml_Typed_array[13])(ab),
           _ae_=string_of_uint8array(u8a,0,ab.byteLength);
          return caml_call1(Cohttp_lwt_Body[5],_ae_)}
        var js_str=param[2];
        if(P[1])return chunked_body_str(js_str);
        var _af_=caml_call1(P[3],js_str);
        return caml_call1(Cohttp_lwt_Body[5],_af_)}
      return [0,chunked_body_str,chunked_body_binary,get]}
    function Make_api(X)
     {var Request=X[1],Response=X[2],default_ctx=0;
      function sexp_of_ctx(param){return _c_}
      function call(param,headers,body,_ad_,meth,uri)
       {return caml_call4(X[3],headers,body,meth,uri)}
      function head(ctx,headers,uri)
       {function _aa_(_ac_){return _ac_[1]}
        var _ab_=call(ctx,headers,0,_d_,801894688,uri);
        return caml_call2(Lwt[70],_ab_,_aa_)}
      function get(ctx,headers,uri)
       {return call(ctx,headers,0,_e_,3546230,uri)}
      function delete$0(ctx,body,chunked,headers,uri)
       {return call(ctx,headers,body,chunked,492530731,uri)}
      function post(ctx,body,chunked,headers,uri)
       {return call(ctx,headers,body,chunked,891112544,uri)}
      function put(ctx,body,chunked,headers,uri)
       {return call(ctx,headers,body,chunked,3997359,uri)}
      function patch(ctx,body,chunked,headers,uri)
       {return call(ctx,headers,body,chunked,994393768,uri)}
      function post_form(ctx,headers,params,uri)
       {var
         headers$0=
          caml_call3
           (Cohttp_Header[9],
            headers,
            cst_content_type,
            cst_application_x_www_form_url),
         _$_=caml_call2(Uri[14],0,params),
         body=caml_call1(Cohttp_lwt_Body[5],_$_);
        return post(ctx,[0,body],_f_,[0,headers$0],uri)}
      var
       Cohttp_lwt_xhr_callv_not_imple=
        [248,cst_Cohttp_lwt_xhr_Make_api_X_,runtime.caml_fresh_oo_id(0)];
      function callv(param,uri,reqs)
       {return caml_call1(Lwt[5],Cohttp_lwt_xhr_callv_not_imple)}
      return [0,
              Request,
              Response,
              default_ctx,
              sexp_of_ctx,
              call,
              head,
              get,
              delete$0,
              post,
              put,
              patch,
              post_form,
              Cohttp_lwt_xhr_callv_not_imple,
              callv]}
    var Header_io=caml_call1(Cohttp_Header_io[1],Cohttp_lwt_String_io);
    function Make_client_async(P)
     {var Bb=Body_builder(P);
      function call(headers,body,meth,uri)
       {var t16=caml_call1(Js_of_ocaml_XmlHttpRequest[1],0);
        t16.withCredentials = ! ! P[4];
        if(xhr_response_supported)t16.responseType = "arraybuffer";
        var
         match=caml_call1(Lwt[21],0),
         wake=match[2],
         res=match[1],
         _H_=Js_of_ocaml_Js[7],
         t33=caml_jsstring_of_string(caml_call1(Uri[7],uri)),
         t32=caml_jsstring_of_string(caml_call1(Cohttp_Code[31],meth));
        t16.open(t32,t33,_H_);
        if(headers)
         {var
           headers$0=headers[1],
           _I_=
            function(k,v)
             {function ___(v)
               {var
                 t30=caml_jsstring_of_string(v),
                 t29=caml_jsstring_of_string(k);
                return t16.setRequestHeader(t29,t30)}
              return caml_call2(Stdlib_list[15],___,v)};
          caml_call2(Cohttp_Header[19],_I_,headers$0)}
        t16.onreadystatechange
        =
        runtime.caml_js_wrap_callback
         (function(param)
           {var match=t16.readyState;
            if(4 <= match)
             {var
               respText=
                function(param)
                 {function _Y_(s){return [0,-976970511,s]}
                  function _Z_(param){return [0,-976970511,""]}
                  return caml_call3
                          (Js_of_ocaml_Js[5][7],t16.responseText,_Z_,_Y_)};
              if(xhr_response_supported)
               var
                _R_=function(ab){return [0,571404121,ab]},
                _S_=
                 function(param)
                  {Js_of_ocaml_Firebug[1].log
                    ("XHR Response is not an arrayBuffer; using responseText");
                   return respText(0)},
                _T_=caml_call1(Js_of_ocaml_File[3][5],t16.response),
                b=caml_call3(Js_of_ocaml_Js[5][7],_T_,_S_,_R_);
              else
               var b=respText(0);
              var
               body=caml_call1(Bb[3],b),
               resp_headers=
                caml_string_of_jsstring(t16.getAllResponseHeaders()),
               channel=caml_call1(Cohttp_String_io[1],resp_headers),
               _U_=
                function(resp_headers)
                 {var
                   _W_=[0,caml_call1(Cohttp_lwt_Body[8],body)],
                   _X_=[0,caml_call1(Cohttp_Code[34],t16.status)];
                  return caml_call6
                          (Cohttp_Response[9],_h_,_X_,_g_,_W_,[0,resp_headers],0)},
               _V_=caml_call1(Header_io[1],channel),
               response=caml_call2(Lwt[70],_V_,_U_);
              return caml_call2(Lwt[44],wake,[0,response,body])}
            return 0});
        function _J_(param)
         {function _O_(param){return t16.abort()}
          caml_call2(Lwt[23],res,_O_);
          function _P_(param)
           {var b=param[2],r=param[1];
            function _Q_(r){return caml_call1(Lwt[4],[0,r,b])}
            return caml_call2(Lwt[69],r,_Q_)}
          return caml_call2(Lwt[69],res,_P_)}
        if(body)
         var
          body$0=body[1],
          _K_=
           function(body)
            {var
              bs=binary_string(body),
              t17=caml_call1(Js_of_ocaml_Js[5][2],bs),
              _N_=t16.send(t17);
             return caml_call1(Lwt[4],_N_)},
          _L_=caml_call2(_a_,caml_call1(Cohttp_lwt_Body[10],body$0),_K_);
        else
         var _M_=t16.send(Js_of_ocaml_Js[1]),_L_=caml_call1(Lwt[4],_M_);
        return caml_call2(_a_,_L_,_J_)}
      return Make_api
              ([0,
                [0,
                 Cohttp_Request[1],
                 Cohttp_Request[2],
                 Cohttp_Request[3],
                 Cohttp_Request[4],
                 Cohttp_Request[5],
                 Cohttp_Request[6],
                 Cohttp_Request[7],
                 Cohttp_Request[8],
                 Cohttp_Request[9],
                 Cohttp_Request[10],
                 Cohttp_Request[11],
                 Cohttp_Request[12]],
                [0,
                 Cohttp_Response[1],
                 Cohttp_Response[2],
                 Cohttp_Response[3],
                 Cohttp_Response[4],
                 Cohttp_Response[5],
                 Cohttp_Response[6],
                 Cohttp_Response[7],
                 Cohttp_Response[8],
                 Cohttp_Response[9]],
                call])}
    function Make_client_sync(P)
     {var Bb=Body_builder(P);
      function call(headers,body,meth,uri)
       {var t41=caml_call1(Js_of_ocaml_XmlHttpRequest[1],0);
        t41.withCredentials = ! ! P[4];
        if(xhr_response_supported)t41.responseType = "arraybuffer";
        var
         _r_=Js_of_ocaml_Js[8],
         t54=caml_jsstring_of_string(caml_call1(Uri[7],uri)),
         t53=caml_jsstring_of_string(caml_call1(Cohttp_Code[31],meth));
        t41.open(t53,t54,_r_);
        if(headers)
         {var
           headers$0=headers[1],
           _s_=
            function(k,v)
             {function _G_(v)
               {var
                 t51=caml_jsstring_of_string(v),
                 t50=caml_jsstring_of_string(k);
                return t41.setRequestHeader(t50,t51)}
              return caml_call2(Stdlib_list[15],_G_,v)};
          caml_call2(Cohttp_Header[19],_s_,headers$0)}
        function _t_(body)
         {function respText(param)
           {function _E_(s){return [0,-976970511,s]}
            function _F_(param){return [0,-976970511,""]}
            return caml_call3(Js_of_ocaml_Js[5][7],t41.responseText,_F_,_E_)}
          if(xhr_response_supported)
           var
            _x_=function(ab){return [0,571404121,ab]},
            _y_=
             function(param)
              {Js_of_ocaml_Firebug[1].log
                ("XHR Response is not an arrayBuffer; using responseText");
               return respText(0)},
            _z_=caml_call1(Js_of_ocaml_File[3][5],t41.response),
            b=caml_call3(Js_of_ocaml_Js[5][7],_z_,_y_,_x_);
          else
           var b=respText(0);
          var
           body$0=caml_call1(Bb[3],b),
           resp_headers=caml_string_of_jsstring(t41.getAllResponseHeaders());
          function _A_(resp_headers)
           {var
             _C_=[0,caml_call1(Cohttp_lwt_Body[8],body$0)],
             _D_=[0,caml_call1(Cohttp_Code[34],t41.status)],
             response=
              caml_call6
               (Cohttp_Response[9],_j_,_D_,_i_,_C_,[0,resp_headers],0);
            return caml_call1(Lwt[4],[0,response,body$0])}
          var _B_=caml_call1(Cohttp_String_io[1],resp_headers);
          return caml_call2(_a_,caml_call1(Header_io[1],_B_),_A_)}
        if(body)
         var
          body$0=body[1],
          _u_=
           function(body)
            {var
              bs=binary_string(body),
              t42=caml_call1(Js_of_ocaml_Js[5][2],bs);
             return t41.send(t42)},
          _v_=caml_call2(_b_,caml_call1(Cohttp_lwt_Body[10],body$0),_u_);
        else
         var _w_=t41.send(Js_of_ocaml_Js[1]),_v_=caml_call1(Lwt[4],_w_);
        return caml_call2(_a_,_v_,_t_)}
      return Make_api
              ([0,
                [0,
                 Cohttp_Request[1],
                 Cohttp_Request[2],
                 Cohttp_Request[3],
                 Cohttp_Request[4],
                 Cohttp_Request[5],
                 Cohttp_Request[6],
                 Cohttp_Request[7],
                 Cohttp_Request[8],
                 Cohttp_Request[9],
                 Cohttp_Request[10],
                 Cohttp_Request[11],
                 Cohttp_Request[12]],
                [0,
                 Cohttp_Response[1],
                 Cohttp_Response[2],
                 Cohttp_Response[3],
                 Cohttp_Response[4],
                 Cohttp_Response[5],
                 Cohttp_Response[6],
                 Cohttp_Response[7],
                 Cohttp_Response[8],
                 Cohttp_Response[9]],
                call])}
    var
     convert_body_string=caml_string_of_jsbytes,
     Client=Make_client_async([0,1,131072,convert_body_string,0]),
     convert_body_string$0=caml_string_of_jsbytes,
     Client_sync=Make_client_sync([0,0,0,convert_body_string$0,0]),
     _k_=
      [0,
       Client_sync[4],
       Client_sync[3],
       Client_sync[5],
       Client_sync[6],
       Client_sync[7],
       Client_sync[8],
       Client_sync[9],
       Client_sync[10],
       Client_sync[11],
       Client_sync[12],
       Client_sync[14]],
     _l_=
      [0,
       Client[4],
       Client[3],
       Client[5],
       Client[6],
       Client[7],
       Client[8],
       Client[9],
       Client[10],
       Client[11],
       Client[12],
       Client[14]];
    function _m_(_p_)
     {var _q_=Make_client_sync(_p_);
      return [0,
              _q_[4],
              _q_[3],
              _q_[5],
              _q_[6],
              _q_[7],
              _q_[8],
              _q_[9],
              _q_[10],
              _q_[11],
              _q_[12],
              _q_[14]]}
    var
     Cohttp_lwt_xhr=
      [0,
       function(_n_)
        {var _o_=Make_client_async(_n_);
         return [0,
                 _o_[4],
                 _o_[3],
                 _o_[5],
                 _o_[6],
                 _o_[7],
                 _o_[8],
                 _o_[9],
                 _o_[10],
                 _o_[11],
                 _o_[12],
                 _o_[14]]},
       _m_,
       _l_,
       _k_];
    runtime.caml_register_global(67,Cohttp_lwt_xhr,"Cohttp_lwt_xhr");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJjb2h0dHBfbHd0X2pzb28uY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
