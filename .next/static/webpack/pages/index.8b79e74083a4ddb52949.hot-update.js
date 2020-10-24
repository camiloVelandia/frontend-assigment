webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Aside/style.js":
/*!***********************************!*\
  !*** ./components/Aside/style.js ***!
  \***********************************/
/*! exports provided: AsideTag, ArticleContainer, Article, MainImage, Content, Heading, Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideTag", function() { return AsideTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContainer", function() { return ArticleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainImage", function() { return MainImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display:flex;\n  align-items:center;\n  padding-top:7px;\n  & button{\n    display:flex;\n    align-items:center;\n    height:30px;\n    background-color:transparent;\n    border:none;\n    flex:1;\n    color:#c9c9c9;\n    font-size:12px;\n    cursor:pointer;\n  }\n  & img{\n    height:20px;\n    padding-right:5px;\n    opacity:.7;\n  }\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0;\n  margin-bottom: 10px;\n  color: var(--brand-color);\n  position:relative;\n  font-size: 18px;\n  &::after {\n    content: \"\";\n    position:absolute;\n    width: 40%;\n    border-bottom: 1px solid var(--brand-color);\n    top:50%;\n    right:0;\n    transform:translateY(-50%)\n  }\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 15px;\n  & a {\n    margin: 0;\n    font-size: 14px;\n    text-decoration:none;\n    color:black;\n    font-weight:600\n  }\n  & small {\n    color: #c9c9c9;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    text-transform: capitalize;\n    border-bottom: 1px solid #c9c9c9;\n  }\n  @media (max-width: 431px) {\n  padding-left:0\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position:relative;\n  margin:0;\n  & img {\n    height: 150px;\n    width: 150px;\n    border-radius: 16px;\n  }\n  & span {\n    position: absolute;\n    top: 25px;\n    background-color: var(--brand-color);\n    z-index:10;\n    left:0;\n    color:white;\n    padding:5px 15px;\n    border-top-right-radius:10px;\n    border-bottom-right-radius:10px;\n    text-transform:uppercase;\n    font-weight:600;\n    font-size:12px\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  padding: 20px;\n  border-bottom: 1px solid #c9c9c9;\n  &.last {\n    border-bottom: none;\n  }\n  @media (max-width: 431px) {\n    flex-wrap:wrap;\n    justify-content:center;\n    text-align:center\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: white;\n  padding: 20px;\n  border-bottom: 1px solid #c9c9c9;\n  border-radius:20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100%;\n  width: 100%;\n  margin-top:80px;\n   @media (min-width: 992px) {\n  margin-top:0px;\n  max-width: 500px;\n  min-width: 400px;\n  margin-left: 20px;\n  width: 33%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var AsideTag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside(_templateObject());
var ArticleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Article = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article(_templateObject3());
var MainImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].figure(_templateObject4());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject6());
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Bc2lkZS9zdHlsZS5qcyJdLCJuYW1lcyI6WyJBc2lkZVRhZyIsInN0eWxlZCIsImFzaWRlIiwiQXJ0aWNsZUNvbnRhaW5lciIsImRpdiIsIkFydGljbGUiLCJhcnRpY2xlIiwiTWFpbkltYWdlIiwiZmlndXJlIiwiQ29udGVudCIsIkhlYWRpbmciLCJoMiIsIkFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEtBQVYsbUJBQWQ7QUFZQSxJQUFNQyxnQkFBZ0IsR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBdEI7QUFNQSxJQUFNQyxPQUFPLEdBQUdKLHlEQUFNLENBQUNLLE9BQVYsb0JBQWI7QUFjQSxJQUFNQyxTQUFTLEdBQUdOLHlEQUFNLENBQUNPLE1BQVYsb0JBQWY7QUF3QkEsSUFBTUMsT0FBTyxHQUFHUix5REFBTSxDQUFDRyxHQUFWLG9CQUFiO0FBd0JBLElBQU1NLE9BQU8sR0FBR1QseURBQU0sQ0FBQ1UsRUFBVixvQkFBYjtBQWtCQSxJQUFNQyxPQUFPLEdBQUdYLHlEQUFNLENBQUNHLEdBQVYsb0JBQWIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGI3OWU3NDA4M2E0ZGRiNTI5NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBBc2lkZVRhZyA9IHN0eWxlZC5hc2lkZWBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDo4MHB4O1xuICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIG1hcmdpbi10b3A6MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDMzJTtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBBcnRpY2xlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzljOWM5O1xuICBib3JkZXItcmFkaXVzOjIwcHg7XG5gO1xuZXhwb3J0IGNvbnN0IEFydGljbGUgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOWM5Yzk7XG4gICYubGFzdCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNDMxcHgpIHtcbiAgICBmbGV4LXdyYXA6d3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIHRleHQtYWxpZ246Y2VudGVyXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNYWluSW1hZ2UgPSBzdHlsZWQuZmlndXJlYFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbWFyZ2luOjA7XG4gICYgaW1nIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB9XG4gICYgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XG4gICAgei1pbmRleDoxMDtcbiAgICBsZWZ0OjA7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzo1cHggMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBmb250LXNpemU6MTJweFxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICYgYSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LXdlaWdodDo2MDBcbiAgfVxuICAmIHNtYWxsIHtcbiAgICBjb2xvcjogI2M5YzljOTtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOWM5Yzk7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQzMXB4KSB7XG4gIHBhZGRpbmctbGVmdDowXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkLmgyYFxuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBmb250LXNpemU6IDE4cHg7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgICB0b3A6NTAlO1xuICAgIHJpZ2h0OjA7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSlcbiAgfVxuXG5gO1xuXG5leHBvcnQgY29uc3QgQWN0aW9ucyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBwYWRkaW5nLXRvcDo3cHg7XG4gICYgYnV0dG9ue1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBmbGV4OjE7XG4gICAgY29sb3I6I2M5YzljOTtcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICAmIGltZ3tcbiAgICBoZWlnaHQ6MjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcbiAgICBvcGFjaXR5Oi43O1xuICB9XG5cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9