require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guide__ = __webpack_require__(19);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__guide__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_guide_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_547b570a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_guide_vue__ = __webpack_require__(22);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_guide_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_547b570a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_guide_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/guide/guide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] guide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-547b570a", Component.options)
  } else {
    hotAPI.reload("data-v-547b570a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      src: "../../static/images/littleTip-huang.jpg",
      src1: "../../static/images/index.jpg",
      src2: "../../static/images/record.jpg",
      src3: "../../static/images/me.jpg",
      src4: "../../static/images/share.png"
    };
  }
});

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "instruction"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": _vm.src
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "content content-title"
  }, [_vm._v("真自律是一款自律神器，将分数作为奖励惩罚手段，提醒对良好行为的关注和强化。")]), _vm._v(" "), _c('p', {
    staticClass: "content content-title"
  }, [_vm._v("将生活想象成通关打怪，打败自己的心魔加分，被心魔打败减分。")])], 1), _vm._v(" "), _c('p', {
    staticClass: "little-tip"
  }, [_vm._v("1、给大家分享一下我一天的记录：")]), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 早上7点没有按时起床，减1分，目前-1分；")], 1), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 起床看了10页书，加2分，目前1分；")], 1), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 在地铁上做了一个超难的算法题，加5分，目前6分；")], 1), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 工作刷微博，又分心了，扣2分，目前4分；")], 1), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 午饭吃的绿色蔬菜，忍住没有吃麻辣烫，奖励自己5分，目前9分；")], 1), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 下午碰到了杠精，但是控制住了自己的情绪，没有生气，必须表扬自己，加5分，目前14分；")], 1), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 晚饭没有忍住T_T，还是吃了麻辣烫，罪恶罪恶，减10分，目前4分；")], 1), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 第二天早上按时起床，加1分，目前5分；")], 1), _vm._v(" "), _c('p', {
    staticClass: "content prompts"
  }, [_vm._v("加减多少分没有具体标准，主要看心魔给自己带来的影响，一般控制在1-10分之间。")]), _vm._v(" "), _c('p', {
    staticClass: "little-tip"
  }, [_vm._v("2、用什么动力来督促自己坚持记录呢？")]), _vm._v(" "), _c('p', {
    staticClass: "content prompts"
  }, [_vm._v("（1）设置相应的奖励")]), _vm._v(" "), _c('p', {
    staticClass: "content prompts"
  }, [_vm._v("（2）减小记录的阻力")]), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_vm._v("将小程序放在微信浮窗里，或者添加到桌面，减小打开程序的步骤，从而减小自己记录的阻力。")]), _vm._v(" "), _c('img', {
    staticClass: "index-img",
    attrs: {
      "src": _vm.src4
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "little-tip"
  }, [_vm._v("3、小程序使用介绍")]), _vm._v(" "), _c('p', {
    staticClass: "content prompts"
  }, [_vm._v("（1）首页")]), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 清零功能：会将当前分数设为0，历史记录不会被清空。")], 1), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 撤销功能：撤销上一步的操作。")], 1), _vm._v(" "), _c('img', {
    staticClass: "index-img",
    attrs: {
      "src": _vm.src1
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "content prompts"
  }, [_vm._v("（2）记录页面")]), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 添加备注：备注默认为空，可以点击添加备注。")], 1), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 修改备注：备注添加完成后，可以修改。")], 1), _vm._v(" "), _c('img', {
    staticClass: "index-img",
    attrs: {
      "src": _vm.src2
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "content prompts"
  }, [_vm._v("（3）我的页面")]), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 清空记录：清空所有的历史记录，清空后记录不能恢复，谨慎操作~")], 1), _vm._v(" "), _c('p', {
    staticClass: "content tip"
  }, [_c('label', {
    staticClass: "point"
  }, [_vm._v("◉")]), _vm._v(" 意见反馈：对于小程序的建议、问题反馈、合作信息等，可以通过这个页面提交。")], 1), _vm._v(" "), _c('img', {
    staticClass: "index-img",
    attrs: {
      "src": _vm.src3
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-547b570a", esExports)
  }
}

/***/ })

},[18]);