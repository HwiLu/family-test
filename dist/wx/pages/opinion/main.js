require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opinion__ = __webpack_require__(58);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__opinion__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_opinion_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07c45572_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_opinion_vue__ = __webpack_require__(61);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(59)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_opinion_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07c45572_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_opinion_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/opinion/opinion.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] opinion.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07c45572", Component.options)
  } else {
    hotAPI.reload("data-v-07c45572", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


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
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      opinion: "",
      addimage: "../../static/images/addimage.png",
      word_count: 0,
      src: [],
      img_count: 0,
      wechat: "",
      //用三元运算符直接读取缓存里面的用户信息
      userinfo: wx.getStorageSync('userinfo') ? wx.getStorageSync('userinfo') : {}
    };
  },

  watch: {
    opinion: function opinion() {
      this.word_count = this.opinion.length;
    },
    src: function src() {
      this.img_count = this.src.length;
    }
  },
  methods: {
    uploadPicture: function uploadPicture() {
      var that = this;
      wx.chooseImage({
        count: 2,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          //用that.src来调用data函数定义的src变量
          that.src.push(tempFilePaths);
          console.log('that.src', that.src);
        },
        fail: function fail() {
          wx.wx.showToast({
            title: '上传图片失败',
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
            success: function success(result) {},
            fail: function fail() {},
            complete: function complete() {}
          });
        },
        complete: function complete() {}
      });
    },
    submmit: function submmit() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = {
                  opinion: _this.opinion
                };

                wx.request({
                  url: "http:/localhost:5757/weapp/createopinion",
                  method: "POST",
                  data: data,
                  success: function success(res) {
                    console.log("请求成功");
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "contain"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('p', {
    staticClass: "name"
  }, [_vm._v("意见与反馈")])], 1), _vm._v(" "), _c('div', {
    staticClass: "row text"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.opinion),
      expression: "opinion"
    }],
    staticClass: "input",
    attrs: {
      "maxlength": "200",
      "placeholder": "点击这里输入您的建议",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.opinion)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.opinion = $event.target.value
      }
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "word-count"
  }, [_vm._v(_vm._s(_vm.word_count) + "/200")])], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', [_c('label', {
    staticClass: "name"
  }, [_vm._v("相关截图（选填）")]), _vm._v(" "), _c('label', {
    staticClass: "img-count"
  }, [_vm._v(_vm._s(_vm.img_count) + "/2")])], 1), _vm._v(" "), _vm._l((_vm.src), function(item, index) {
    return _c('label', {
      key: index
    }, [_c('img', {
      staticClass: "img",
      attrs: {
        "src": item
      }
    })])
  }), _vm._v(" "), (_vm.img_count < 2) ? _c('label', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.uploadPicture
    }
  }, [_c('img', {
    staticClass: "add-img",
    attrs: {
      "src": _vm.addimage
    }
  })]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("微信号（选填）")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.wechat),
      expression: "wechat"
    }],
    staticClass: "wechat-input",
    attrs: {
      "maxlength": "20",
      "placeholder": "如果想要详细交流，可以点击这里留下微信号哦~",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.wechat)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.wechat = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "button",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.submmit
    }
  }, [_vm._v("提交")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07c45572", esExports)
  }
}

/***/ })

},[57]);