webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Article/style.js":
/*!*************************************!*\
  !*** ./components/Article/style.js ***!
  \*************************************/
/*! exports provided: ArticleTag, Head, Info, Category, Text, Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleTag", function() { return ArticleTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  \n  border:1px solid red;\n  \n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  \n  border:1px solid red;\n  \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border:1px solid red;\n  display:flex;\n  align-items:center;\n  margin-top:20px;\n  & figure{\n    border:1px solid red;\n    height:30px;\n    margin:0;\n    margin-right:15px;\n    & img{\n      height:100%;\n    }\n  }\n  & h3{\n    margin:0;\n  }\n  & ul{\n    border:1px solid red;\n    margin:0;\n    padding:0;\n    list-style:none;\n    display:flex;\n  }\n  & li{\n    color:#c9c9c9;\n    border-right:1px solid #c9c9c9\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  display: flex;\n  & h1 {\n    margin: 0;\n    font-size: 25px;\n    padding-right: 50px;\n  }\n  & button {\n    border: none;\n    background-color: var(--status-ok-color);\n    border-top-left-radius:15px;\n    border-bottom-right-radius:15px;\n    color:white;\n    padding:6px 19px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100%;\n  width: 60%;\n  border:1px solid red;\n  background-color:white;\n  border-radius:15px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ArticleTag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article(_templateObject());
var Head = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var Category = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
var Action = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlL3N0eWxlLmpzIl0sIm5hbWVzIjpbIkFydGljbGVUYWciLCJzdHlsZWQiLCJhcnRpY2xlIiwiSGVhZCIsImRpdiIsIkluZm8iLCJDYXRlZ29yeSIsIlRleHQiLCJBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxPQUFWLG1CQUFoQjtBQU9BLElBQU1DLElBQUksR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBVjtBQWtCQSxJQUFNQyxJQUFJLEdBQUdKLHlEQUFNLENBQUNHLEdBQVYsb0JBQVY7QUE2QkEsSUFBTUUsUUFBUSxHQUFHTCx5REFBTSxDQUFDRyxHQUFWLG9CQUFkO0FBR0EsSUFBTUcsSUFBSSxHQUFHTix5REFBTSxDQUFDRyxHQUFWLG9CQUFWO0FBS0EsSUFBTUksTUFBTSxHQUFHUCx5REFBTSxDQUFDRyxHQUFWLG9CQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ0NmZjNTdmMmJlN2Y3MjZmMDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsZVRhZyA9IHN0eWxlZC5hcnRpY2xlYFxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlcjoxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBib3JkZXItcmFkaXVzOjE1cHg7XG5gO1xuZXhwb3J0IGNvbnN0IEhlYWQgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gICYgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxuICAmIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YXR1cy1vay1jb2xvcik7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjE1cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzo2cHggMTlweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEluZm8gPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIG1hcmdpbi10b3A6MjBweDtcbiAgJiBmaWd1cmV7XG4gICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgbWFyZ2luOjA7XG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgJiBpbWd7XG4gICAgICBoZWlnaHQ6MTAwJTtcbiAgICB9XG4gIH1cbiAgJiBoM3tcbiAgICBtYXJnaW46MDtcbiAgfVxuICAmIHVse1xuICAgIGJvcmRlcjoxcHggc29saWQgcmVkO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgZGlzcGxheTpmbGV4O1xuICB9XG4gICYgbGl7XG4gICAgY29sb3I6I2M5YzljOTtcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNjOWM5YzlcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbmA7XG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIFxuICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcbiAgXG5gO1xuZXhwb3J0IGNvbnN0IEFjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIFxuICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcbiAgXG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==