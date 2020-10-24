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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  display:flex;\n  & button{\n    height:30px;\n    background-color:transparent;\n    border:none;\n  }\n  & img{\n    height:20px;\n  }\n\n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  position:relative;\n  margin:0;\n  & img {\n    height: 150px;\n    width: 150px;\n    border-radius: 16px;\n  }\n  & span {\n    position: absolute;\n    top: 30px;\n    background-color: var(--brand-color);\n    z-index:10;\n    left:0;\n    color:white;\n    padding:5px 15px;\n    border-top-right-radius:10px;\n    border-bottom-right-radius:10px;\n    text-transform:uppercase;\n    font-weight:600;\n    font-size:14px\n  }\n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  height: 100%;\n  width:30%;\n  \n  \n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Bc2lkZS9zdHlsZS5qcyJdLCJuYW1lcyI6WyJBc2lkZVRhZyIsInN0eWxlZCIsImFzaWRlIiwiQXJ0aWNsZSIsImFydGljbGUiLCJNYWluSW1hZ2UiLCJmaWd1cmUiLCJDb250ZW50IiwiZGl2IiwiSGVhZGluZyIsImgyIiwiQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEtBQVYsbUJBQWQ7QUFPQSxJQUFNQyxPQUFPLEdBQUdGLHlEQUFNLENBQUNHLE9BQVYsb0JBQWI7QUFPQSxJQUFNQyxTQUFTLEdBQUdKLHlEQUFNLENBQUNLLE1BQVYsb0JBQWY7QUF3QkEsSUFBTUMsT0FBTyxHQUFHTix5REFBTSxDQUFDTyxHQUFWLG9CQUFiO0FBSUEsSUFBTUMsT0FBTyxHQUFHUix5REFBTSxDQUFDUyxFQUFWLG9CQUFiO0FBa0JBLElBQU1DLE9BQU8sR0FBR1YseURBQU0sQ0FBQ08sR0FBVixvQkFBYiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZGI1YzNkMzNhOTlhOTQ0NGFhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEFzaWRlVGFnID0gc3R5bGVkLmFzaWRlYFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6MzAlO1xuICBcbiAgXG5gO1xuZXhwb3J0IGNvbnN0IEFydGljbGUgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBkaXNwbGF5OmZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIHBhZGRpbmc6MjBweDtcbiAgXG5gO1xuZXhwb3J0IGNvbnN0IE1haW5JbWFnZSA9IHN0eWxlZC5maWd1cmVgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIG1hcmdpbjowO1xuICAmIGltZyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuICAmIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtY29sb3IpO1xuICAgIHotaW5kZXg6MTA7XG4gICAgbGVmdDowO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6NXB4IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgZm9udC1zaXplOjE0cHhcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuXG5gO1xuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuaDJgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tYnJhbmQtY29sb3IpO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBmb250LXNpemU6IDE4cHg7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgICB0b3A6NTAlO1xuICAgIHJpZ2h0OjA7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSlcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGRpc3BsYXk6ZmxleDtcbiAgJiBidXR0b257XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6bm9uZTtcbiAgfVxuICAmIGltZ3tcbiAgICBoZWlnaHQ6MjBweDtcbiAgfVxuXG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==