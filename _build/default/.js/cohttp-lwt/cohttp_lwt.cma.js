(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_int64_of_int32=runtime.caml_int64_of_int32,
     caml_ml_string_length=runtime.caml_ml_string_length,
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
     cst_Stream=caml_string_of_jsbytes("Stream"),
     cst_Stream$0=caml_string_of_jsbytes("Stream"),
     tp_loc=caml_string_of_jsbytes("cohttp-lwt/src/body.ml.t"),
     tp_loc$0=caml_string_of_jsbytes("cohttp-lwt/src/body.ml.t"),
     cst_Internal_Server_Error=caml_string_of_jsbytes("Internal Server Error"),
     cst_Not_found=caml_string_of_jsbytes("Not found: "),
     cst_Not_found$0=caml_string_of_jsbytes("Not found"),
     cst_location=caml_string_of_jsbytes("location"),
     cst_location$0=caml_string_of_jsbytes("location"),
     cst_Error=caml_string_of_jsbytes("Error: "),
     cst=caml_string_of_jsbytes("/"),
     cst_http=caml_string_of_jsbytes("http"),
     cst_cohttp_lwt_server=caml_string_of_jsbytes("cohttp.lwt.server"),
     cst_application_x_www_form_url=
      caml_string_of_jsbytes("application/x-www-form-urlencoded"),
     cst_content_type=caml_string_of_jsbytes("content-type"),
     cst_Client_connection_was_clos=
      caml_string_of_jsbytes("Client connection was closed"),
     cst_Failed_to_read_response=
      caml_string_of_jsbytes("Failed to read response: "),
     Cohttp_String_io=global_data.Cohttp__String_io,
     Lwt=global_data.Lwt,
     Lwt_stream=global_data.Lwt_stream,
     Cohttp_Body=global_data.Cohttp__Body,
     Lwt_list=global_data.Lwt_list,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Cohttp_Response=global_data.Cohttp__Response,
     Cohttp_Request=global_data.Cohttp__Request,
     Cohttp_Connection=global_data.Cohttp__Connection,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Stdlib=global_data.Stdlib,
     Uri=global_data.Uri,
     Cohttp_Header=global_data.Cohttp__Header,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_filename=global_data.Stdlib__filename,
     Logs=global_data.Logs,
     Cohttp_Transfer_io=global_data.Cohttp__Transfer_io,
     Lwt_mutex=global_data.Lwt_mutex,
     Stdlib_gc=global_data.Stdlib__gc,
     Cohttp_lwt=[0];
    caml_register_global(23,Cohttp_lwt,"Cohttp_lwt__");
    var
     return$0=Lwt[4],
     symbol_bind=Lwt[6],
     _a_=[0,caml_string_of_jsbytes("Stream")],
     _d_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid input "),
        [2,0,[11,caml_string_of_jsbytes(" while handling client"),0]]],
       caml_string_of_jsbytes("invalid input %s while handling client")],
     _e_=
      [0,
       [11,caml_string_of_jsbytes("IO error while handling client: "),[15,0]],
       caml_string_of_jsbytes("IO error while handling client: %a")],
     _c_=
      [0,
       [11,
        caml_string_of_jsbytes("Error handling "),
        [15,[11,caml_string_of_jsbytes(": "),[2,0,0]]]],
       caml_string_of_jsbytes("Error handling %a: %s")],
     _b_=[0,caml_string_of_jsbytes("Cohttp Lwt server module")],
     _f_=[0,0];
    function read_line(ic)
     {return caml_call1(return$0,caml_call1(Cohttp_String_io[2][3],ic))}
    function read(ic,n)
     {return caml_call1(return$0,caml_call2(Cohttp_String_io[2][4],ic,n))}
    function write(oc,str)
     {return caml_call1(return$0,caml_call2(Cohttp_String_io[2][5],oc,str))}
    function flush(oc)
     {return caml_call1(return$0,caml_call1(Cohttp_String_io[2][6],oc))}
    var
     Cohttp_lwt_String_io=
      [0,symbol_bind,return$0,read_line,read,write,flush];
    caml_register_global(26,Cohttp_lwt_String_io,"Cohttp_lwt__String_io");
    function t_of_sexp(sexp)
     {try
       {var _aU_=caml_call1(Cohttp_Body[3],sexp);return _aU_}
      catch(_aV_)
       {_aV_ = caml_wrap_exception(_aV_);
        if(_aV_ === Sexplib0_Sexp_conv_error[18])
         {if(0 === sexp[0])
           {var atom=sexp[1];
            return caml_string_notequal(atom,cst_Stream)
                    ?caml_call1(Sexplib0_Sexp_conv_error[19],0)
                    :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc,sexp)}
          var _aS_=sexp[1];
          if(_aS_)
           {var _aT_=_aS_[1];
            if(0 === _aT_[0])
             {var sexp_args=_aS_[2],atom$0=_aT_[1];
              if(caml_string_notequal(atom$0,cst_Stream$0))
               return caml_call1(Sexplib0_Sexp_conv_error[19],0);
              if(sexp_args && ! sexp_args[2])
               {var
                 v0=sexp_args[1],
                 v0$0=caml_call1(Sexplib0_Sexp_conv[47],v0);
                return [0,-977172320,v0$0]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[22],tp_loc,atom$0,sexp)}
            return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc,sexp)}
          return caml_call2(Sexplib0_Sexp_conv_error[25],tp_loc,sexp)}
        throw _aV_}}
    function t_of_sexp$0(sexp)
     {try
       {var _aQ_=t_of_sexp(sexp);return _aQ_}
      catch(_aR_)
       {_aR_ = caml_wrap_exception(_aR_);
        if(_aR_ === Sexplib0_Sexp_conv_error[18])
         return caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$0,sexp);
        throw _aR_}}
    function sexp_of_t(v)
     {if(typeof v !== "number" && ! (-976970511 <= v[1]))
       {var v0=v[2];
        return [1,[0,_a_,[0,caml_call1(Sexplib0_Sexp_conv[23],v0),0]]]}
      return caml_call1(Cohttp_Body[1],v)}
    var empty=Cohttp_Body[6];
    function create_stream(fn,arg)
     {var fin=[0,0];
      function _aN_(param)
       {if(fin[1])return Lwt[34];
        function _aO_(param)
         {if(typeof param === "number")
           return Lwt[34];
          else
           {if(0 === param[0]){var c=param[1];return caml_call1(Lwt[4],[0,c])}
            var c$0=param[1];
            fin[1] = 1;
            return caml_call1(Lwt[4],[0,c$0])}}
        var _aP_=caml_call1(fn,arg);
        return caml_call2(Lwt[69],_aP_,_aO_)}
      return caml_call1(Lwt_stream[1],_aN_)}
    function is_empty(body)
     {if(typeof body !== "number" && ! (-976970511 <= body[1]))
       {var s=body[2];return caml_call1(Lwt_stream[31],s)}
      var _aM_=caml_call1(Cohttp_Body[7],body);
      return caml_call1(Lwt[4],_aM_)}
    function to_string(body)
     {if(typeof body !== "number" && ! (-976970511 <= body[1]))
       {var
         s=body[2],
         b=caml_call1(Stdlib_buffer[1],1024),
         _aI_=
          function(param)
           {var _aL_=caml_call1(Stdlib_buffer[2],b);
            return caml_call1(Lwt[4],_aL_)},
         _aJ_=caml_call1(Stdlib_buffer[14],b),
         _aK_=caml_call2(Lwt_stream[47],_aJ_,s);
        return caml_call2(Lwt[69],_aK_,_aI_)}
      var _aH_=caml_call1(Cohttp_Body[4],body);
      return caml_call1(Lwt[4],_aH_)}
    function to_string_list(body)
     {if(typeof body !== "number" && ! (-976970511 <= body[1]))
       {var s=body[2];return caml_call1(Lwt_stream[13],s)}
      var _aG_=caml_call1(Cohttp_Body[5],body);
      return caml_call1(Lwt[4],_aG_)}
    function of_string(s){return caml_call1(Cohttp_Body[8],s)}
    function to_stream(body)
     {if(typeof body === "number")return caml_call1(Lwt_stream[9],0);
      var _aF_=body[1];
      if(-976970511 === _aF_)
       {var s=body[2];return caml_call1(Lwt_stream[9],[0,s,0])}
      if(-968575390 <= _aF_)
       {var sl=body[2];return caml_call1(Lwt_stream[9],sl)}
      var s$0=body[2];
      return s$0}
    function drain_body(body)
     {if(typeof body !== "number" && ! (-976970511 <= body[1]))
       {var s=body[2],_aE_=function(param){return 1};
        return caml_call2(Lwt_stream[26],_aE_,s)}
      return Lwt[33]}
    function of_string_list(l){return [0,-968575390,l]}
    function of_stream(s){return [0,-977172320,s]}
    function transfer_encoding(t)
     {if(typeof t !== "number" && ! (-976970511 <= t[1]))return 0;
      return caml_call1(Cohttp_Body[11],t)}
    function length(body)
     {if(typeof body !== "number" && ! (-976970511 <= body[1]))
       {var
         _aC_=
          function(buf)
           {var len=caml_int64_of_int32(caml_ml_string_length(buf));
            return caml_call1(Lwt[4],[0,len,[0,-976970511,buf]])},
         _aD_=to_string(body);
        return caml_call2(Lwt[69],_aD_,_aC_)}
      var _aB_=[0,caml_call1(Cohttp_Body[12],body),body];
      return caml_call1(Lwt[4],_aB_)}
    function write_body(fn,param)
     {if(typeof param === "number")return Lwt[33];
      var _aA_=param[1];
      if(-976970511 === _aA_){var s=param[2];return caml_call1(fn,s)}
      if(-968575390 <= _aA_)
       {var sl=param[2];return caml_call2(Lwt_list[1],fn,sl)}
      var st=param[2];
      return caml_call2(Lwt_stream[49],fn,st)}
    function map(f,t)
     {if(typeof t !== "number" && ! (-976970511 <= t[1]))
       {var s=t[2];return [0,-977172320,caml_call2(Lwt_stream[37],f,s)]}
      return caml_call2(Cohttp_Body[10],f,t)}
    var
     Cohttp_lwt_Body=
      [0,
       sexp_of_t,
       t_of_sexp$0,
       t_of_sexp,
       empty,
       of_string,
       of_string_list,
       map,
       transfer_encoding,
       is_empty,
       to_string,
       to_string_list,
       to_stream,
       of_stream,
       create_stream,
       length,
       write_body,
       drain_body];
    caml_register_global(33,Cohttp_lwt_Body,"Cohttp_lwt__Body");
    var Cohttp_lwt_S=[0];
    caml_register_global(34,Cohttp_lwt_S,"Cohttp_lwt__S");
    function Request(_az_)
     {var
       encoding=Cohttp_Request[1],
       version=Cohttp_Request[2],
       resource=Cohttp_Request[3],
       meth=Cohttp_Request[4],
       headers=Cohttp_Request[5],
       Fields=Cohttp_Request[6],
       t_of_sexp=Cohttp_Request[7],
       sexp_of_t=Cohttp_Request[8],
       make=Cohttp_Request[9],
       is_keep_alive=Cohttp_Request[10],
       uri=Cohttp_Request[11],
       make_for_client=Cohttp_Request[12],
       pp_hum=Cohttp_Request[13],
       Make=Cohttp_Request[14],
       include=
        caml_call1(Make,[0,_az_[1],_az_[2],_az_[3],_az_[4],_az_[5],_az_[6]]),
       IO=include[1],
       read=include[2],
       has_body=include[3],
       make_body_writer=include[4],
       make_body_reader=include[5],
       read_body_chunk=include[6],
       write_header=include[7],
       write_body=include[8],
       write=include[9];
      return [0,
              encoding,
              version,
              resource,
              meth,
              headers,
              Fields,
              t_of_sexp,
              sexp_of_t,
              make,
              is_keep_alive,
              uri,
              make_for_client,
              pp_hum,
              Make,
              IO,
              read,
              has_body,
              make_body_writer,
              make_body_reader,
              read_body_chunk,
              write_header,
              write_body,
              write]}
    function Response(_ay_)
     {var
       flush=Cohttp_Response[1],
       status=Cohttp_Response[2],
       version=Cohttp_Response[3],
       headers=Cohttp_Response[4],
       encoding=Cohttp_Response[5],
       Fields=Cohttp_Response[6],
       t_of_sexp=Cohttp_Response[7],
       sexp_of_t=Cohttp_Response[8],
       make=Cohttp_Response[9],
       pp_hum=Cohttp_Response[10],
       Make=Cohttp_Response[11],
       include=
        caml_call1(Make,[0,_ay_[1],_ay_[2],_ay_[3],_ay_[4],_ay_[5],_ay_[6]]),
       IO=include[1],
       read=include[2],
       has_body=include[3],
       make_body_writer=include[4],
       make_body_reader=include[5],
       read_body_chunk=include[6],
       write_header=include[7],
       write_body=include[8],
       write=include[9];
      return [0,
              flush,
              status,
              version,
              headers,
              encoding,
              Fields,
              t_of_sexp,
              sexp_of_t,
              make,
              pp_hum,
              Make,
              IO,
              read,
              has_body,
              make_body_writer,
              make_body_reader,
              read_body_chunk,
              write_header,
              write_body,
              write]}
    var Cohttp_lwt_Make=[0,Request,Response];
    caml_register_global(37,Cohttp_lwt_Make,"Cohttp_lwt__Make");
    var
     Cohttp_lwt_Server=
      [0,
       function(IO)
        {var
          Request$0=Request(IO),
          Response$0=Response(IO),
          src=caml_call2(Logs[7][1],_b_,cst_cohttp_lwt_server),
          Log=caml_call1(Logs[18],src);
         function make_response_action(opt,callback,param)
          {if(opt)
            var sth=opt[1],conn_closed=sth;
           else
            var conn_closed=function(_ax_){return 0};
           return [0,callback,conn_closed]}
         function make(conn_closed,callback,param)
          {function callback$0(conn,req,body)
            {function _av_(rsp){return [0,-71406943,rsp]}
             var _aw_=caml_call3(callback,conn,req,body);
             return caml_call2(Lwt[31][2],_aw_,_av_)}
           return make_response_action(conn_closed,callback$0,0)}
         function make_expert(conn_closed,callback,param)
          {function callback$0(conn,req,body)
            {function _at_(rsp){return [0,-116756726,rsp]}
             var _au_=caml_call3(callback,conn,req,body);
             return caml_call2(Lwt[31][2],_au_,_at_)}
           return make_response_action(conn_closed,callback$0,0)}
         caml_call1
          (Cohttp_Transfer_io[1],[0,IO[1],IO[2],IO[3],IO[4],IO[5],IO[6]]);
         function resolve_local_file(docroot,uri)
          {var
            _aq_=caml_call1(Uri[6],cst),
            _ar_=caml_call3(Uri[8],cst_http,_aq_,uri),
            _as_=caml_call1(Uri[25],_ar_),
            path=caml_call1(Uri[5],_as_),
            rel_path=
             caml_call3
              (Stdlib_string[4],path,1,caml_ml_string_length(path) - 1 | 0);
           return caml_call2(Stdlib_filename[4],docroot,rel_path)}
         function respond(headers,opt,status,body,param)
          {if(opt)var sth=opt[1],flush=sth;else var flush=1;
           if(headers)
            {var
              headers$0=headers[1],
              t=caml_call1(Cohttp_Header[34],headers$0),
              switch$0=0;
             if(typeof t === "number" && t)
              {var _ap_=transfer_encoding(body);switch$0 = 1}
             if(! switch$0)var _ap_=t;
             var encoding=_ap_}
           else
            var encoding=transfer_encoding(body);
           var
            res=
             caml_call6
              (Response$0[9],0,[0,status],[0,flush],[0,encoding],headers,0);
           return caml_call1(Lwt[4],[0,res,body])}
         function respond_string(opt,headers,status,body,param)
          {if(opt)var sth=opt[1],flush=sth;else var flush=1;
           var
            res=
             caml_call6
              (Response$0[9],
               0,
               [0,status],
               [0,flush],
               [0,[0,caml_int64_of_int32(caml_ml_string_length(body))]],
               headers,
               0),
            body$0=of_string(body);
           return caml_call1(Lwt[4],[0,res,body$0])}
         function respond_error(headers,opt,body,param)
          {if(opt)var sth=opt[1],status=sth;else var status=-732353682;
           return respond_string
                   (0,headers,status,caml_call2(Stdlib[28],cst_Error,body),0)}
         function respond_redirect(headers,uri,param)
          {if(headers)
            var
             h=headers[1],
             _an_=caml_call1(Uri[7],uri),
             headers$0=caml_call3(Cohttp_Header[10],h,cst_location,_an_);
           else
            var
             _ao_=caml_call1(Uri[7],uri),
             headers$0=caml_call2(Cohttp_Header[5],cst_location$0,_ao_);
           return respond([0,headers$0],0,398750242,50834029,0)}
         function respond_need_auth(headers,auth,param)
          {if(headers)
            var h=headers[1],headers$0=h;
           else
            var headers$0=caml_call1(Cohttp_Header[3],0);
           var headers$1=caml_call2(Cohttp_Header[38],headers$0,auth);
           return respond([0,headers$1],0,324098644,50834029,0)}
         function respond_not_found(uri,param)
          {if(uri)
            var
             uri$0=uri[1],
             _am_=caml_call1(Uri[7],uri$0),
             body=caml_call2(Stdlib[28],cst_Not_found,_am_);
           else
            var body=cst_Not_found$0;
           return respond_string(0,0,-358247754,body,0)}
         function handle_client(ic,oc,conn,callback)
          {function _U_(param)
            {if(typeof param === "number")return Lwt[33];
             if(144245463 <= param[1])
              {var
                data=param[2],
                _Z_=function(m){return caml_call4(m,0,0,_d_,data)};
               caml_call1(Log[3],_Z_);
               return Lwt[33]}
             var req=param[2],match=caml_call1(Request$0[17],req);
             if(4448519 === match)
              var
               reader=caml_call2(Request$0[19],req,ic),
               body_stream=create_stream(Request$0[20],reader),
               body=of_stream(body_stream);
             else
              var body=50834029;
             function ___(param)
              {if(-71406943 <= param[1])
                {var
                  match=param[2],
                  body=match[2],
                  res=match[1],
                  flush=caml_call1(Response$0[1],res),
                  _af_=
                   function(param)
                    {return caml_call1(Request$0[10],req)
                             ?handle_client(ic,oc,conn,callback)
                             :Lwt[33]},
                  _ag_=
                   function(writer)
                    {return write_body(caml_call1(Response$0[19],writer),body)},
                  _ah_=caml_call4(Response$0[20],[0,flush],_ag_,res,oc);
                 return caml_call2(Lwt[31][1],_ah_,_af_)}
               var match$0=param[2],io_handler=match$0[2],res$0=match$0[1];
               function _ai_(param)
                {function _ak_(param)
                  {return handle_client(ic,oc,conn,callback)}
                 var _al_=caml_call2(io_handler,ic,oc);
                 return caml_call2(Lwt[31][1],_al_,_ak_)}
               var _aj_=caml_call2(Response$0[18],res$0,oc);
               return caml_call2(Lwt[31][1],_aj_,_ai_)}
             function _W_(param){return drain_body(body)}
             function _X_(param)
              {function _$_(exn)
                {if(exn === Stdlib[9])return caml_call1(Lwt[5],Stdlib[9]);
                 function _ab_(f)
                  {var _ae_=caml_call1(Stdlib_printexc[1],exn);
                   return caml_call6(f,0,0,_c_,Request$0[13],req,_ae_)}
                 caml_call1(Log[3],_ab_);
                 function _ac_(rsp){return [0,-71406943,rsp]}
                 var _ad_=respond_error(0,0,cst_Internal_Server_Error,0);
                 return caml_call2(Lwt[31][2],_ad_,_ac_)}
               function _aa_(param){return caml_call3(callback,conn,req,body)}
               return caml_call2(Lwt[7],_aa_,_$_)}
             var _Y_=caml_call2(Lwt[8],_X_,_W_);
             return caml_call2(Lwt[31][1],_Y_,___)}
           var _V_=caml_call1(Request$0[16],ic);
           return caml_call2(Lwt[31][1],_V_,_U_)}
         function callback(spec,io_id,ic,oc)
          {var conn_id=caml_call1(Cohttp_Connection[3],0);
           function _N_(param)
            {var _T_=caml_call1(spec[2],[0,io_id,conn_id]);
             return caml_call1(Lwt[4],_T_)}
           function _O_(param)
            {function _P_(param)
              {if(0 === param[0])return Lwt[33];
               var e=param[1];
               function _S_(m){return caml_call5(m,0,0,_e_,IO[8],e)}
               caml_call1(Log[5],_S_);
               return Lwt[33]}
             function _Q_(param)
              {return handle_client(ic,oc,[0,io_id,conn_id],spec[1])}
             var _R_=caml_call1(IO[7],_Q_);
             return caml_call2(Lwt[31][1],_R_,_P_)}
           return caml_call2(Lwt[8],_O_,_N_)}
         return [0,
                 IO,
                 make_response_action,
                 make_expert,
                 make,
                 resolve_local_file,
                 respond,
                 respond_string,
                 respond_error,
                 respond_redirect,
                 respond_need_auth,
                 respond_not_found,
                 callback]}];
    caml_register_global(47,Cohttp_lwt_Server,"Cohttp_lwt__Server");
    var
     Cohttp_lwt_Client=
      [0,
       function(IO,Net)
        {var
          Response$0=Response(IO),
          Request$0=Request(IO),
          sexp_of_ctx=Net[2],
          default_ctx=Net[3];
         function read_response(closefn,ic,oc,meth)
          {function _I_(param)
            {if(typeof param === "number")
              return caml_call1
                      (Lwt[5],[0,Stdlib[7],cst_Client_connection_was_clos]);
             if(144245463 <= param[1])
              {var
                reason=param[2],
                _L_=caml_call2(Stdlib[28],cst_Failed_to_read_response,reason);
               return caml_call1(Lwt[5],[0,Stdlib[7],_L_])}
             var
              res=param[2],
              has_body=801894688 === meth?17505:caml_call1(Response$0[14],res);
             if(4448519 <= has_body)
              {var
                reader=caml_call2(Response$0[16],res,ic),
                stream=create_stream(Response$0[17],reader),
                _M_=caml_call1(Lwt_stream[33],stream);
               caml_call2(Lwt[27],_M_,closefn);
               var gcfn=function(st){return caml_call1(closefn,0)};
               caml_call2(Stdlib_gc[3],gcfn,stream);
               var body=of_stream(stream);
               return caml_call1(Lwt[4],[0,res,body])}
             caml_call1(closefn,0);
             return caml_call1(Lwt[4],[0,res,50834029])}
           var
            _J_=caml_call1(Response$0[13],ic),
            t=caml_call2(Lwt[31][1],_J_,_I_);
           caml_call2(Lwt[23],t,closefn);
           function _K_(exn){return caml_call1(closefn,0)}
           caml_call2(Lwt[28],t,_K_);
           return t}
         function call(opt,headers,_z_,chunked,param,uri)
          {if(opt)var sth=opt[1],ctx=sth;else var ctx=default_ctx;
           if(_z_)var sth$0=_z_[1],body=sth$0;else var body=50834029;
           if(headers)
            var h=headers[1],headers$0=h;
           else
            var headers$0=caml_call1(Cohttp_Header[3],0);
           function _A_(param$0)
            {var oc=param$0[3],ic=param$0[2];
             function closefn(param){return caml_call2(Net[7],ic,oc)}
             if(chunked)
              var v=chunked[1],chunked$0=v;
             else
              var
               _G_=
                3546230 === param
                 ?0
                 :492530731 === param?0:801894688 === param?0:1,
               chunked$0=_G_;
             if(chunked$0)
              var
               req=
                caml_call5
                 (Request$0[12],[0,headers$0],[0,chunked$0],0,param,uri),
               _C_=
                function(writer)
                 {return write_body(caml_call1(Request$0[22],writer),body)},
               sent=caml_call4(Request$0[23],0,_C_,req,oc);
             else
              var
               _E_=
                function(param$0)
                 {var
                   buf=param$0[2],
                   body_length=param$0[1],
                   req=
                    caml_call5
                     (Request$0[12],
                      [0,headers$0],
                      [0,chunked$0],
                      [0,body_length],
                      param,
                      uri);
                  function _H_(writer)
                   {return write_body(caml_call1(Request$0[22],writer),buf)}
                  return caml_call4(Request$0[23],0,_H_,req,oc)},
               _F_=length(body),
               sent=caml_call2(Lwt[31][1],_F_,_E_);
             function _D_(param$0){return read_response(closefn,ic,oc,param)}
             return caml_call2(Lwt[31][1],sent,_D_)}
           var _B_=caml_call2(Net[4],ctx,uri);
           return caml_call2(Lwt[31][1],_B_,_A_)}
         function head(ctx,headers,uri)
          {function _w_(_y_){return _y_[1]}
           var _x_=call(ctx,headers,0,0,801894688,uri);
           return caml_call2(Lwt[31][2],_x_,_w_)}
         function get(ctx,headers,uri)
          {return call(ctx,headers,0,0,3546230,uri)}
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
              (Cohttp_Header[11],
               headers,
               cst_content_type,
               cst_application_x_www_form_url),
            body=of_string(caml_call2(Uri[14],0,params));
           return post(ctx,[0,body],_f_,[0,headers$0],uri)}
         function callv(opt,uri,reqs)
          {if(opt)var sth=opt[1],ctx=sth;else var ctx=default_ctx;
           function _g_(param)
            {var oc=param[3],ic=param[2];
             function _i_(param)
              {var body=param[2],req=param[1];
               function _s_(param)
                {var _v_=caml_call1(Request$0[4],req);
                 return caml_call1(Lwt[4],_v_)}
               function _t_(writer)
                {return write_body(caml_call1(Request$0[22],writer),body)}
               var _u_=caml_call4(Request$0[23],0,_t_,req,oc);
               return caml_call2(Lwt[31][1],_u_,_s_)}
             var
              meth_stream=caml_call2(Lwt_stream[38],_i_,reqs),
              read_m=caml_call1(Lwt_mutex[1],0),
              last_body=[0,0];
             function closefn(param){return caml_call1(Lwt_mutex[3],read_m)}
             function _j_(meth)
              {function _m_(param)
                {function _p_(x)
                  {var body=x[2];last_body[1] = [0,body];return x}
                 function _q_(param){return read_response(closefn,ic,oc,meth)}
                 var _r_=caml_call2(Lwt_mutex[6],read_m,_q_);
                 return caml_call2(Lwt[31][2],_r_,_p_)}
               var _n_=last_body[1];
               if(_n_)
                var body=_n_[1],_o_=drain_body(body);
               else
                var _o_=Lwt[33];
               return caml_call2(Lwt[31][1],_o_,_m_)}
             var resps=caml_call2(Lwt_stream[38],_j_,meth_stream);
             function _k_(param){return caml_call2(Net[7],ic,oc)}
             var _l_=caml_call1(Lwt_stream[33],resps);
             caml_call2(Lwt[27],_l_,_k_);
             return caml_call1(Lwt[4],resps)}
           var _h_=caml_call2(Net[4],ctx,uri);
           return caml_call2(Lwt[31][1],_h_,_g_)}
         return [0,
                 sexp_of_ctx,
                 default_ctx,
                 call,
                 head,
                 get,
                 delete$0,
                 post,
                 put,
                 patch,
                 post_form,
                 callv]}];
    caml_register_global(50,Cohttp_lwt_Client,"Cohttp_lwt__Client");
    var Cohttp_lwt$0=[0];
    caml_register_global(51,Cohttp_lwt$0,"Cohttp_lwt");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJjb2h0dHBfbHd0LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
