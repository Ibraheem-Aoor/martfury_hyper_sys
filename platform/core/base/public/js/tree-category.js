(()=>{function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}var r;(r=jQuery).fn.filetree=function(t){var o={animationSpeed:"slow",console:!1};function a(e){return e=r.extend(o,e),this.each((function(){r(this).find("li").on("click",".file-opener-i",(function(e){return e.preventDefault(),r(this).hasClass("fa-plus-square")?(r(this).addClass("fa-minus-square"),r(this).removeClass("fa-plus-square")):(r(this).addClass("fa-plus-square"),r(this).removeClass("fa-minus-square")),r(this).parent().toggleClass("closed").toggleClass("open"),!1}))}))}if("object"==e(t)||!t)return a.apply(this,arguments)},function(r){r.fn.dragScroll=function(t){function o(){var e,o,a=r(this),n=r.extend({scrollVertical:!1,scrollHorizontal:!0,cursor:null},t),l=!1;a.on({mousemove:function(t){l&&function(t,a){var l=r(a);n.scrollVertical&&l.scrollTop(l.scrollTop()+(e-t.pageY)),n.scrollHorizontal&&l.scrollLeft(l.scrollLeft()+(o-t.pageX))}(t,this)},mousedown:function(r){a.css("cursor",n.cursor?n.cursor:n.scrollVertical&&n.scrollHorizontal?"move":n.scrollVertical?"row-resize":n.scrollHorizontal?"col-resize":void 0),l=!0,e=r.pageY,o=r.pageX},mouseup:function(){l=!1,a.css("cursor","auto")},mouseleave:function(){l=!1,a.css("cursor","auto")}})}if("object"==e(t)||!t)return o.apply(this,arguments)}}(jQuery),$((function(){$treeWrapper=$(".file-tree-wrapper"),$treeWrapper.dragScroll();var e=$(".tree-form-container").find(".tree-loading"),r=$(".tree-categories-container").find(".tree-loading");function t(e){r.removeClass("d-none"),$treeWrapper.filetree().removeClass("d-none").hide().slideDown("slow"),r.addClass("d-none"),e&&$(".file-tree-wrapper").find('li[data-id="'+e+'"] .category-name:first').addClass("active")}function o(e){$(".tree-form-body").html(e),Botble.initResources(),Botble.handleCounterUp(),Botble.initMediaIntegrate(),window.EditorManagement&&(new EditorManagement).init()}function a(r,t){var a;(a=$.ajaxSetup().data)&&(delete a.ref_from,delete a.ref_lang),$.ajax({url:r,type:"GET",beforeSend:function(){e.removeClass("d-none"),$(".file-tree-wrapper").find("a.active").removeClass("active"),t&&t.addClass("active")},success:function(e){e.error?Botble.showError(e.message):o(e.data)},error:function(e){Botble.handleError(e)},complete:function(){e.addClass("d-none")}})}t(),$(document).on("click",".tree-categories-container .toggle-tree",(function(e){var r=$(e.currentTarget);r.hasClass("open-tree")?(r.text(r.data("collapse")),$(".tree-categories-container").find(".folder-root.closed").removeClass("closed").addClass("open")):(r.text(r.data("expand")),$(".tree-categories-container").find(".folder-root.open").removeClass("open").addClass("closed")),r.toggleClass("open-tree")})),$(document).on("click",".file-tree-wrapper .fetch-data",(function(e){e.preventDefault();var r=$(e.currentTarget);r.attr("href")?a(r.attr("href"),r):($(".file-tree-wrapper").find("a.active").removeClass("active"),r.addClass("active"))})),$(document).on("click",".tree-categories-create",(function(r){r.preventDefault(),function(r){var t={};n.get("ref_lang")&&(t.ref_lang=n.get("ref_lang")),$.ajax({url:r,type:"GET",data:t,beforeSend:function(){e.removeClass("d-none")},success:function(e){e.error?Botble.showError(e.message):o(e.data)},error:function(e){Botble.handleError(e)},complete:function(){e.addClass("d-none")}})}($(r.currentTarget).attr("href"))}));var n=new URLSearchParams(window.location.search);function l(e,r){var o=$(".file-tree-wrapper");$.ajax({url:o.data("url"),type:"GET",success:function(a){a.error?Botble.showError(a.message):(o.html(a.data),t(e),jQuery().tooltip&&$('[data-bs-toggle="tooltip"]').tooltip({placement:"top",boundary:"window"}),r&&r())},error:function(e){Botble.handleError(e)}})}$(document).on("click","#list-others-language a",(function(e){e.preventDefault(),a($(e.currentTarget).prop("href"))})),$(document).on("submit",".tree-form-container form",(function(r){var t;r.preventDefault();var a=$(r.currentTarget),n=a.serializeArray(),s=null===(t=r.originalEvent)||void 0===t?void 0:t.submitter,i=!1;s&&s.name&&(i="apply"===s.value,n.push({name:s.name,value:s.value})),$.ajax({url:a.attr("action"),type:a.attr("method")||"POST",data:n,beforeSend:function(){e.removeClass("d-none")},success:function(r){if(r.error)Botble.showError(r.message);else{Botble.showSuccess(r.message),e.addClass("d-none");var t=i&&r.data.model?r.data.model.id:null;l(t,(function(){if(t){var a=$('.folder-root[data-id="'+t+'"] a.fetch-data');a.length?a.trigger("click"):location.reload()}else if($(".tree-categories-create").length)$(".tree-categories-create").trigger("click");else{var n;o(null===(n=r.data)||void 0===n?void 0:n.form),e.addClass("d-none")}}))}},error:function(r){Botble.handleError(r),e.addClass("d-none")}})})),$(document).on("click",".deleteDialog",(function(e){e.preventDefault();var r=$(e.currentTarget);$(".delete-crud-entry").data("section",r.data("section")),$(".modal-confirm-delete").modal("show")})),$(".delete-crud-entry").on("click",(function(e){e.preventDefault();var r=$(e.currentTarget);r.addClass("button-loading");var t=r.data("section");$.ajax({url:t,type:"DELETE",success:function(e){e.error?Botble.showError(e.message):(Botble.showSuccess(e.message),l(),$(".tree-categories-create").length?$(".tree-categories-create").trigger("click"):o("")),r.closest(".modal").modal("hide"),r.removeClass("button-loading")},error:function(e){Botble.handleError(e),r.removeClass("button-loading")}})}))}))})();
