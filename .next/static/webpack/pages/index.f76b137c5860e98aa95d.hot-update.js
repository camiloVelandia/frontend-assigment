webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header/style.js":
/*!************************************!*\
  !*** ./components/Header/style.js ***!
  \************************************/
/*! exports provided: HeaderTag, SearchContainer, SearchIcon, DropDown, Nav, Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTag", function() { return HeaderTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchContainer", function() { return SearchContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  list-style: none;\n  padding:0;\n  display: flex;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  display: flex;\n  width:100%;\n  justify-content:space-between\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  height: 25px;\n  list-style: none;\n  padding: 0;\n  position:relative;\n  & li {\n    height: 100%;\n    & a {\n      height: 100%;\n      display: flex;\n      align-items: center;\n      & img {\n        margin-right: 3px;\n      }\n    }\n  }\n  & button {\n    background-color: transparent;\n      height: 15px;\n      width: 15px;\n      border:none;\n      position:absolute;\n      left:100%;\n      top:10%;\n      outline:none;\n      cursor:pointer-events;\n    & img {\n      height: 100%;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  height:25px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid red;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  & input[type=\"text\"] {\n    height: 35px;\n    border: none;\n    color: #c9c9c9;\n    border-bottom-right-radius: 15px;\n  }\n  & button {\n    height: 35px;\n    display: flex;\n    background-color: white;\n    border: none;\n    justify-content: center;\n    align-items: center;\n    margin-right: 3px;\n    border-top-left-radius: 15px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: var(--brand-color);\n  border: 1px solid red;\n  color:white;\n  @media (min-width: 767px) {\n    display:flex;\n    align-items:center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var HeaderTag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header(_templateObject());
var SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3());
var DropDown = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject4());
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav(_templateObject5());
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject6());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvc3R5bGUuanMiXSwibmFtZXMiOlsiSGVhZGVyVGFnIiwic3R5bGVkIiwiaGVhZGVyIiwiU2VhcmNoQ29udGFpbmVyIiwiZGl2IiwiU2VhcmNoSWNvbiIsImltZyIsIkRyb3BEb3duIiwidWwiLCJOYXYiLCJuYXYiLCJBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVixtQkFBZjtBQVNBLElBQU1DLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBckI7QUFzQkEsSUFBTUMsVUFBVSxHQUFHSix5REFBTSxDQUFDSyxHQUFWLG9CQUFoQjtBQUlBLElBQU1DLFFBQVEsR0FBR04seURBQU0sQ0FBQ08sRUFBVixvQkFBZDtBQWdDQSxJQUFNQyxHQUFHLEdBQUdSLHlEQUFNLENBQUNTLEdBQVYsb0JBQVQ7QUFNQSxJQUFNQyxPQUFPLEdBQUdWLHlEQUFNLENBQUNPLEVBQVYsb0JBQWIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjc2YjEzN2M1ODYwZTk4YWE5NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUYWcgPSBzdHlsZWQuaGVhZGVyYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgY29sb3I6d2hpdGU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgU2VhcmNoQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNjOWM5Yzk7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgJiBidXR0b24ge1xuICAgIGhlaWdodDogMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgU2VhcmNoSWNvbiA9IHN0eWxlZC5pbWdgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgaGVpZ2h0OjI1cHg7XG5gO1xuZXhwb3J0IGNvbnN0IERyb3BEb3duID0gc3R5bGVkLnVsYFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGhlaWdodDogMjVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gICYgbGkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAmIGEge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAmIGltZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGJvcmRlcjpub25lO1xuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICBsZWZ0OjEwMCU7XG4gICAgICB0b3A6MTAlO1xuICAgICAgb3V0bGluZTpub25lO1xuICAgICAgY3Vyc29yOnBvaW50ZXItZXZlbnRzO1xuICAgICYgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDoxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlblxuYDtcbmV4cG9ydCBjb25zdCBBY3Rpb25zID0gc3R5bGVkLnVsYFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6MDtcbiAgZGlzcGxheTogZmxleDtcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==