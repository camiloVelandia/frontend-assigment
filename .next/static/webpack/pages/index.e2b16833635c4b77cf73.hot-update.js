webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Aside/style.js":
/*!***********************************!*\
  !*** ./components/Aside/style.js ***!
  \***********************************/
/*! exports provided: AsideTag, Article, MainImage, Content, Heading, Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideTag", function() { return AsideTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainImage", function() { return MainImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  display:flex;\n  align-items:center;\n  & button{\n    display:flex;\n    align-items:center;\n    height:30px;\n    background-color:transparent;\n    border:none;\n    flex:1;\n    color:#c9c9c9;\n    font-size:12px;\n    cursor:pointer;\n  }\n  & img{\n    height:20px;\n    padding-right:5px;\n  }\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  margin: 0;\n  margin-bottom: 10px;\n  color: var(--brand-color);\n    position:relative;\n  font-size: 18px;\n  &::after {\n    content: \"\";\n    position:absolute;\n    width: 40%;\n    border-bottom: 1px solid var(--brand-color);\n    top:50%;\n    right:0;\n    transform:translateY(-50%)\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  padding-left:15px;\n  & h3 {\n    margin: 0;\n    font-size: 14px;\n  }\n  & small {\n    color: #c9c9c9;\n    padding-top:9px;\n    padding-bottom:9px;\n    text-transform:capitalize;\n    break-before:1px solid #c9c9c9;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  position:relative;\n  margin:0;\n  & img {\n    height: 150px;\n    width: 150px;\n    border-radius: 16px;\n  }\n  & span {\n    position: absolute;\n    top: 25px;\n    background-color: var(--brand-color);\n    z-index:10;\n    left:0;\n    color:white;\n    padding:5px 15px;\n    border-top-right-radius:10px;\n    border-bottom-right-radius:10px;\n    text-transform:uppercase;\n    font-weight:600;\n    font-size:12px\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  display:flex;\n  background-color:white;\n  padding:20px;\n  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  height: 100%;\n  width:33%;\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var AsideTag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside(_templateObject());
var Article = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article(_templateObject2());
var MainImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].figure(_templateObject3());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject5());
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Bc2lkZS9zdHlsZS5qcyJdLCJuYW1lcyI6WyJBc2lkZVRhZyIsInN0eWxlZCIsImFzaWRlIiwiQXJ0aWNsZSIsImFydGljbGUiLCJNYWluSW1hZ2UiLCJmaWd1cmUiLCJDb250ZW50IiwiZGl2IiwiSGVhZGluZyIsImgyIiwiQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEtBQVYsbUJBQWQ7QUFPQSxJQUFNQyxPQUFPLEdBQUdGLHlEQUFNLENBQUNHLE9BQVYsb0JBQWI7QUFPQSxJQUFNQyxTQUFTLEdBQUdKLHlEQUFNLENBQUNLLE1BQVYsb0JBQWY7QUF5QkEsSUFBTUMsT0FBTyxHQUFHTix5REFBTSxDQUFDTyxHQUFWLG9CQUFiO0FBbUJBLElBQU1DLE9BQU8sR0FBR1IseURBQU0sQ0FBQ1MsRUFBVixvQkFBYjtBQWtCQSxJQUFNQyxPQUFPLEdBQUdWLHlEQUFNLENBQUNPLEdBQVYsb0JBQWIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTJiMTY4MzM2MzVjNGI3N2NmNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBBc2lkZVRhZyA9IHN0eWxlZC5hc2lkZWBcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOjMzJTtcbiAgXG4gIFxuYDtcbmV4cG9ydCBjb25zdCBBcnRpY2xlID0gc3R5bGVkLmFydGljbGVgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgZGlzcGxheTpmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBwYWRkaW5nOjIwcHg7XG4gIFxuYDtcbmV4cG9ydCBjb25zdCBNYWluSW1hZ2UgPSBzdHlsZWQuZmlndXJlYFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBtYXJnaW46MDtcbiAgJiBpbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIH1cbiAgJiBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgICB6LWluZGV4OjEwO1xuICAgIGxlZnQ6MDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjVweCAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGZvbnQtc2l6ZToxMnB4XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XG4gICYgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgJiBzbWFsbCB7XG4gICAgY29sb3I6ICNjOWM5Yzk7XG4gICAgcGFkZGluZy10b3A6OXB4O1xuICAgIHBhZGRpbmctYm90dG9tOjlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO1xuICAgIGJyZWFrLWJlZm9yZToxcHggc29saWQgI2M5YzljOTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuaDJgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tYnJhbmQtY29sb3IpO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBmb250LXNpemU6IDE4cHg7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgICB0b3A6NTAlO1xuICAgIHJpZ2h0OjA7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSlcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAmIGJ1dHRvbntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGhlaWdodDozMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgZmxleDoxO1xuICAgIGNvbG9yOiNjOWM5Yzk7XG4gICAgZm9udC1zaXplOjEycHg7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gIH1cbiAgJiBpbWd7XG4gICAgaGVpZ2h0OjIwcHg7XG4gICAgcGFkZGluZy1yaWdodDo1cHg7XG4gIH1cblxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=