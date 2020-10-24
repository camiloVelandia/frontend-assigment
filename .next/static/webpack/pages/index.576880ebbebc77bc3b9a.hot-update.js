webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Article/style.js":
/*!*************************************!*\
  !*** ./components/Article/style.js ***!
  \*************************************/
/*! exports provided: ArticleTag, Head, Info, Image, Category, Text, Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleTag", function() { return ArticleTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border:1px solid red;\n  display:flex;\n  height:40px;\n  margin: 0 auto;\n  width:60%;\n  border:1px solid var(--brand-color);\n  border-top-left-radius:15px;\n  border-bottom-right-radius:15px;\n  justify-content:space-between;\n  align-items:center;\n  padding:0 20px;\n  margin-top:50px;\n  & button{\n    height:80%;\n    background-color:transparent;\n    border:none;\n  }\n  & img{\n    height:60%;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  \n  border:1px solid red;\n  \n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  display: flex;\n  margin:15px 0;\n  & a {\n    background-color: var(--light2-color);\n    color: var(--brand-color);\n    margin-right: 15px;\n    padding: 8px;\n    border-radius: 5px;\n    text-decoration: none;\n    display: block;\n    text-transform:capitalize;\n    font-size:14px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  height: 500px;\n  background: rgb(34, 164, 252);\n  background: linear-gradient(\n    0deg,\n    rgba(34, 164, 252, 1) 0%,\n    rgba(14, 200, 177, 1) 100%\n  );\n  position: relative;\n  margin-bottom: 40px;\n  & span {\n    position: absolute;\n    top: 30px;\n    color: white;\n    background-color: var(--brand-color);\n    padding:3px 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border:1px solid red;\n  display:flex;\n  align-items:center;\n  margin-top:20px;\n  & figure{\n    border:1px solid red;\n    height:30px;\n    margin:0;\n    margin-right:15px;\n    & img{\n      height:100%;\n    }\n  }\n  & h3{\n    margin:0;\n    font-size:16px;\n  }\n  & ul{\n    border:1px solid red;\n    margin:0;\n    padding:0;\n    list-style:none;\n    display:flex;\n  }\n  & li{\n    color:#c9c9c9;\n    border-left:1px solid #c9c9c9;\n    padding:0 20px;\n    font-size:14px;\n    &:first-of-type{\n      border-left:none;\n      padding-left:0\n    }\n  }\n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100%;\n  width: 60%;\n  border:1px solid red;\n  background-color:white;\n  border-radius:15px;\n  padding:20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ArticleTag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article(_templateObject());
var Head = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var Category = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());
var Action = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlL3N0eWxlLmpzIl0sIm5hbWVzIjpbIkFydGljbGVUYWciLCJzdHlsZWQiLCJhcnRpY2xlIiwiSGVhZCIsImRpdiIsIkluZm8iLCJJbWFnZSIsIkNhdGVnb3J5IiwiVGV4dCIsIkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVixtQkFBaEI7QUFRQSxJQUFNQyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsb0JBQVY7QUFrQkEsSUFBTUMsSUFBSSxHQUFHSix5REFBTSxDQUFDRyxHQUFWLG9CQUFWO0FBb0NBLElBQU1FLEtBQUssR0FBR0wseURBQU0sQ0FBQ0csR0FBVixvQkFBWDtBQW9CQSxJQUFNRyxRQUFRLEdBQUdOLHlEQUFNLENBQUNHLEdBQVYsb0JBQWQ7QUFnQkEsSUFBTUksSUFBSSxHQUFHUCx5REFBTSxDQUFDRyxHQUFWLG9CQUFWO0FBS0EsSUFBTUssTUFBTSxHQUFHUix5REFBTSxDQUFDRyxHQUFWLG9CQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU3Njg4MGViYmViYzc3YmMzYjlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsZVRhZyA9IHN0eWxlZC5hcnRpY2xlYFxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlcjoxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBib3JkZXItcmFkaXVzOjE1cHg7XG4gIHBhZGRpbmc6MjBweDtcbmA7XG5leHBvcnQgY29uc3QgSGVhZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgJiBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICB9XG4gICYgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhdHVzLW9rLWNvbG9yKTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTVweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjZweCAxOXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjoxcHggc29saWQgcmVkO1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgbWFyZ2luLXRvcDoyMHB4O1xuICAmIGZpZ3VyZXtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBtYXJnaW46MDtcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgICAmIGltZ3tcbiAgICAgIGhlaWdodDoxMDAlO1xuICAgIH1cbiAgfVxuICAmIGgze1xuICAgIG1hcmdpbjowO1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICB9XG4gICYgdWx7XG4gICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gIH1cbiAgJiBsaXtcbiAgICBjb2xvcjojYzljOWM5O1xuICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjYzljOWM5O1xuICAgIHBhZGRpbmc6MCAyMHB4O1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICY6Zmlyc3Qtb2YtdHlwZXtcbiAgICAgIGJvcmRlci1sZWZ0Om5vbmU7XG4gICAgICBwYWRkaW5nLWxlZnQ6MFxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogcmdiKDM0LCAxNjQsIDI1Mik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMzQsIDE2NCwgMjUyLCAxKSAwJSxcbiAgICByZ2JhKDE0LCAyMDAsIDE3NywgMSkgMTAwJVxuICApO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICYgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtY29sb3IpO1xuICAgIHBhZGRpbmc6M3B4IDEwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOjE1cHggMDtcbiAgJiBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDItY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIFxuICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcbiAgXG5gO1xuZXhwb3J0IGNvbnN0IEFjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjoxcHggc29saWQgcmVkO1xuICBkaXNwbGF5OmZsZXg7XG4gIGhlaWdodDo0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6NjAlO1xuICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBwYWRkaW5nOjAgMjBweDtcbiAgbWFyZ2luLXRvcDo1MHB4O1xuICAmIGJ1dHRvbntcbiAgICBoZWlnaHQ6ODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOm5vbmU7XG4gIH1cbiAgJiBpbWd7XG4gICAgaGVpZ2h0OjYwJTtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=