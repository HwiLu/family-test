require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(24);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_142681a7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(37);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_142681a7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-142681a7", Component.options)
  } else {
    hotAPI.reload("data-v-142681a7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_loginWindow__ = __webpack_require__(27);
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
	components: {
		loginWindow: __WEBPACK_IMPORTED_MODULE_0__components_loginWindow__["a" /* default */]
	},

	data: function data() {
		return {
			mark: 0,
			userinfo: {},
			loginShow: false

		};
	},

	methods: {
		addMark: function addMark(add) {
			this.mark = this.mark + add;
			console.log("this.mark", this.mark);
		},
		getModel: function getModel(val) {
			this.loginShow = val[0];
			this.userinfo = val[1];
		}
	},
	showOpinion: function showOpinion() {
		wx.navigateTo({
			url: '/pages/opinion/main'
		});
	},
	mounted: function mounted() {
		var userinfo = wx.getStorageSync('userinfo');
		if (userinfo.openId) {
			this.userinfo = userinfo;
			console.log('用户信息：', userinfo);
		} else {
			wx.hideTabBar();
			this.loginShow = true;
		}
	}
});

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_loginWindow_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_626ea473_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_loginWindow_vue__ = __webpack_require__(36);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_loginWindow_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_626ea473_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_loginWindow_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/loginWindow.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loginWindow.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-626ea473", Component.options)
  } else {
    hotAPI.reload("data-v-626ea473", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wafer2_client_sdk__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wafer2_client_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wafer2_client_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util_js__ = __webpack_require__(35);
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
    methods: {
        login: function login() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_1_wafer2_client_sdk___default.a.setLoginUrl(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].loginUrl);
            __WEBPACK_IMPORTED_MODULE_1_wafer2_client_sdk___default.a.login({
                success: function success(userInfo) {
                    console.log('登录成功', userInfo);
                    _this.loginSuccess(userInfo);
                    _this.$emit('changeShow', false, userInfo);
                    wx.showTabBar();
                    Object(__WEBPACK_IMPORTED_MODULE_2__utils_util_js__["a" /* default */])("登陆成功");
                },
                fail: function fail(err) {
                    console.log('登录失败', err);
                }
            });
        },
        loginSuccess: function loginSuccess(userInfo) {
            wx.setStorageSync('userinfo', userInfo);
        }
    }
});

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var host = "http://localhost:5757";

var config = {
	host: host,
	loginUrl: host + "/weapp/login"
};
/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showSuccess;
/* unused harmony export showModel */
function showSuccess(text) {
    wx.showToast({
        title: text,
        icon: 'success',
        duration: 2000
    });
}
function showModel(title, content) {
    wx.showModal({
        title: title,
        content: content,
        showCancel: false
    });
}

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "modal-mask"
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "../../static/images/littleTip-huang.jpg"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content-text"
  }, [_c('p', {
    staticClass: "key-bold"
  }, [_vm._v("真自律是一款自律神器。")]), _vm._v(" "), _c('p', {
    staticClass: "key-bold"
  }, [_vm._v("将生活想象成通关打怪，打败自己的心魔加分，被心魔打败减分。")]), _vm._v(" "), _c('p', {
    staticClass: "little-tip"
  }, [_vm._v("举个例子：")]), _vm._v(" "), _c('p', {
    staticClass: "little-content"
  }, [_vm._v("午饭忍住没有吃麻辣烫，吃的绿色蔬菜，加5分；")]), _vm._v(" "), _c('p', {
    staticClass: "little-content"
  }, [_vm._v("\n            但是晚饭还是没有忍住T_T，罪恶罪恶，减10分。\n          ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.login
    }
  }, [_vm._v("授权登录")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-626ea473", esExports)
  }
}

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.loginShow) ? _c('div', [_c('loginWindow', {
    attrs: {
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "changeShow": function($event) {
        _vm.getModel(arguments)
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "show"
  }, [_c('div', {
    staticClass: "mark-text"
  }, [_vm._v("当前分数")]), _vm._v(" "), _c('div', {
    staticClass: "mark"
  }, [_vm._v(_vm._s(_vm.mark))]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "button right",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.addMark(1)
      }
    }
  }, [_vm._v("+1")]), _vm._v(" "), _c('div', {
    staticClass: "button left",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.addMark(-1)
      }
    }
  }, [_vm._v("-1")])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "button right",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.addMark(5)
      }
    }
  }, [_vm._v("+5")]), _vm._v(" "), _c('div', {
    staticClass: "button left",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.addMark(-5)
      }
    }
  }, [_vm._v("-5")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-142681a7", esExports)
  }
}

/***/ })

},[23]);