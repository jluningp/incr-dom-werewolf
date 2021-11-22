open! Core_kernel
open! Incr_dom
open! Js_of_ocaml
open Async_kernel

let () =
  Async_js.init ();
  don't_wait_for
    ( Async_js.document_loaded () >>| fun () ->
      Start_app.start
        (module App)
        ~bind_to_element_with_id:"app" ~initial_model:App.Model.initial )
