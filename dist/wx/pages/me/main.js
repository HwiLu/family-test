require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__me__ = __webpack_require__(39);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__me__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_me_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_be73df7e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_me_vue__ = __webpack_require__(56);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(40)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_be73df7e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/me/me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-be73df7e", Component.options)
  } else {
    hotAPI.reload("data-v-be73df7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);

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

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
		data: function data() {
				return {
						// 用户信息
						userinfo: {},
						quote: ""
				};
		},
		onShow: function onShow() {
				var userinfo = wx.getStorageSync('userinfo');
				if (userinfo.openId) {
						this.userinfo = userinfo;
				}
		},

		methods: {
				//生成随机语句
				rankArray: function rankArray() {
						//Math.random()会生成0-1之间的小数，比如0.48204242025855937
						var a = Math.random() + ""; //加一个空字符串，是js中将数字转化为字符串常用的方法。
						console.log(a);
						//a.charAt(5)取a这个字符串的第6位数，能保证rand1为0-9之间的随机数
						var rand1 = a.charAt(5); //JavaScript charAt() 方法
						//创建一个数组对象
						var quotes = new Array();
						//将10个励志语句放到数组中
						quotes[1] = '不奋发，则心日颓靡；不检束，则心日恣肆';
						quotes[2] = '自制是一种秩序，一种对于快乐与欲望的控制';
						quotes[3] = '哪怕一点小小的克制，也会使人变得强而有力';
						quotes[4] = '做一个自律的人，像优秀的人学习，然后做好自己';
						quotes[5] = '真正的自由是在所有时候都能控制自己';
						quotes[6] = '每天爱自己多一点！！！';
						quotes[7] = '如果连自己都不能控制，有什么资格去谈自己想要的';
						quotes[8] = '登峰造极的成就源于自律';
						quotes[9] = '自我控制是最强者的本能';
						quotes[0] = '立志言为本，修身行乃先';
						//根据随机数rand1，在数组中找出随机语句，并赋值到quote上面
						this.quote = quotes[rand1];
				},
				showOpinion: function showOpinion() {
						wx.navigateTo({
								url: "/pages/opinion/main"

						});
				},
				showGuide: function showGuide() {
						wx.navigateTo({
								url: "/pages/guide/main"
						});
				}
		}

}, "onShow", function onShow() {
		// onShow是小程序的生命周期，每次显示页面都会触发，重新生成随机语句;
		// mounted是vue是生命周期，加载页面后会被触发;
		var userinfo = wx.getStorageSync('userinfo');
		//如果缓存中有userinfo的信息，说明用户登录了。
		if (userinfo.openId) {
				//将用户信息储存到data的userinfo字段里面，this.userinfo就是指的这个字段。
				this.userinfo = userinfo;

				//***需要添加的部分***
				this.rankArray();
		}
}));

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "userinfo"
  }, [_c('img', {
    attrs: {
      "src": _vm.userinfo.avatarUrl,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_c('label', [_vm._v(_vm._s(_vm.userinfo.nickName))]), _vm._v(" "), _c('p', {
    staticClass: "notice"
  }, [_vm._v(_vm._s(_vm.quote))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "contain"
  }, [_c('div', {
    staticClass: "row",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showGuide()
      }
    }
  }, [_c('label', {
    staticClass: "left"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/homework.png"
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "name"
  }, [_vm._v("  操作指引")]), _vm._v(" "), _c('label', {
    staticClass: "right"
  }, [_vm._v(">")])], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('label', {
    staticClass: "left"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/classroom.png"
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "name"
  }, [_vm._v("  小程序开发实战课程")]), _vm._v(" "), _c('label', {
    staticClass: "right"
  }, [_vm._v(">")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "contain"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('label', {
    staticClass: "left"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/delete.png"
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "name"
  }, [_vm._v("  清空记录")]), _vm._v(" "), _c('label', {
    staticClass: "right"
  }, [_vm._v("\n              >\n            ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "row",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.showOpinion()
      }
    }
  }, [_c('label', {
    staticClass: "left"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/approval.png"
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "name"
  }, [_vm._v("  意见反馈")]), _vm._v(" "), _c('label', {
    staticClass: "right"
  }, [_vm._v("\n              >\n            ")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-be73df7e", esExports)
  }
}

/***/ })

},[38]);