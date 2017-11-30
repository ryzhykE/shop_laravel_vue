webpackJsonp([0],{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(62)
/* template */
var __vue_template__ = __webpack_require__(63)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Blog\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cad36262", Component.options)
  } else {
    hotAPI.reload("data-v-cad36262", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__show_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__list__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            blogs: [],
            value: true
        };
    },

    components: {
        defaultComponent: __WEBPACK_IMPORTED_MODULE_0__show_vue___default.a,
        listComponent: __WEBPACK_IMPORTED_MODULE_1__list___default.a
    },
    mounted: function mounted() {
        var vm = this;
        vm.fetchBlogs();
    },

    computed: {
        dynamicComponent: function dynamicComponent() {
            var vm = this;
            if (vm.value) {
                return 'default-component';
            } else {
                return 'list-component';
            }
        }
    },
    methods: {
        fetchBlogs: function fetchBlogs() {
            var self = this;
            axios.get('api/blogs').then(function (response) {
                return self.blogs = response.data.blogs;
            });
        }
    }

});

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("div", { staticClass: "btn-group" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-default",
              on: {
                click: function($event) {
                  _vm.value = !_vm.value
                }
              }
            },
            [
              _c("span", {
                staticClass: "glyphicon",
                class: _vm.value ? "glyphicon-th-list" : "glyphicon-th",
                domProps: { textContent: _vm._s(_vm.value ? "List" : "Grid") }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c(_vm.dynamicComponent, { tag: "comment" })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cad36262", module.exports)
  }
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(68)
/* template */
var __vue_template__ = __webpack_require__(69)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Blog\\show.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c99fa10", Component.options)
  } else {
    hotAPI.reload("data-v-3c99fa10", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(66)
/* template */
var __vue_template__ = __webpack_require__(67)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Blog\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bdfdd19e", Component.options)
  } else {
    hotAPI.reload("data-v-bdfdd19e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0, false, false)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("h1", { staticClass: "my-4" }, [
            _vm._v("Page Heading\n                "),
            _c("small", [_vm._v("Secondary Text")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3 card mb-3" }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                src: "http://placehold.it/300x300",
                alt: "Card image cap"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h2", { staticClass: "card-title" }, [_vm._v("Post Title")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-primary", attrs: { href: "#" } },
                [_vm._v("Read More →")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer text-muted" }, [
              _vm._v(
                "\n                    Posted on January 1, 2017 by\n                    "
              ),
              _c("a", { attrs: { href: "#" } }, [_vm._v("Start Bootstrap")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3 card mb-3" }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                src: "http://placehold.it/300x300",
                alt: "Card image cap"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h2", { staticClass: "card-title" }, [_vm._v("Post Title")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-primary", attrs: { href: "#" } },
                [_vm._v("Read More →")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer text-muted" }, [
              _vm._v(
                "\n                    Posted on January 1, 2017 by\n                    "
              ),
              _c("a", { attrs: { href: "#" } }, [_vm._v("Start Bootstrap")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3 card mb-3" }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                src: "http://placehold.it/300x300",
                alt: "Card image cap"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h2", { staticClass: "card-title" }, [_vm._v("Post Title")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-primary", attrs: { href: "#" } },
                [_vm._v("Read More →")]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bdfdd19e", module.exports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0, false, false)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("h1", { staticClass: "my-4" }, [
            _vm._v("Page Heading\n                "),
            _c("small", [_vm._v("Secondary Text")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card mb-4" }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                src: "http://placehold.it/750x300",
                alt: "Card image cap"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h2", { staticClass: "card-title" }, [_vm._v("Post Title")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-primary", attrs: { href: "#" } },
                [_vm._v("Read More →")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer text-muted" }, [
              _vm._v(
                "\n                    Posted on January 1, 2017 by\n                    "
              ),
              _c("a", { attrs: { href: "#" } }, [_vm._v("Start Bootstrap")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card mb-4" }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                src: "http://placehold.it/750x300",
                alt: "Card image cap"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h2", { staticClass: "card-title" }, [_vm._v("Post Title")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-primary", attrs: { href: "#" } },
                [_vm._v("Read More →")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer text-muted" }, [
              _vm._v(
                "\n                    Posted on January 1, 2017 by\n                    "
              ),
              _c("a", { attrs: { href: "#" } }, [_vm._v("Start Bootstrap")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card mb-4" }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                src: "http://placehold.it/750x300",
                alt: "Card image cap"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h2", { staticClass: "card-title" }, [_vm._v("Post Title")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-primary", attrs: { href: "#" } },
                [_vm._v("Read More →")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer text-muted" }, [
              _vm._v(
                "\n                    Posted on January 1, 2017 by\n                    "
              ),
              _c("a", { attrs: { href: "#" } }, [_vm._v("Start Bootstrap")])
            ])
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "pagination justify-content-center mb-4" }, [
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("← Older")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item disabled" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("Newer →")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c99fa10", module.exports)
  }
}

/***/ })

});