webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header/style.js":
/*!************************************!*\
  !*** ./components/Header/style.js ***!
  \************************************/
/*! exports provided: HeaderTag, Logo, SearchContainer, SearchIcon, DropDown, Nav, Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTag", function() { return HeaderTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchContainer", function() { return SearchContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style: none;\n  padding:0;\n  display: flex;\n  width:30%;\n  justify-content:space-around;\n  border-left:1px solid white;\n  margin:0;\n  align-items:center;\n  & button{\n    height:30px;\n    background-color:transparent;\n    border:none;\n    cursor:pointer;\n\n  }\n  & img{\n    height:30px;\n\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  width:60%;\n  margin-right:0;\n  justify-content:space-between;\n  \n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 25px;\n  list-style: none;\n  padding: 0;\n  position:relative;\n  & li {\n    height: 100%;\n    & a {\n      height: 100%;\n      display: flex;\n      align-items: center;\n      & img {\n        margin-right: 3px;\n        height:100%;\n      }\n    }\n  }\n  & button {\n    background-color: transparent;\n      height: 15px;\n      width: 15px;\n      border:none;\n      position:absolute;\n      left:100%;\n      top:10%;\n      outline:none;\n      cursor:pointer;\n    & img {\n      height: 100%;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height:20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 35px;\n  display: flex;\n  align-items: center;\n  & input[type=\"text\"] {\n    height: 32px;\n    border: none;\n    color: #c9c9c9;\n    border-bottom-right-radius: 15px;\n  }\n  & button {\n    height: 35px;\n    display: flex;\n    background-color: white;\n    border: none;\n    justify-content: center;\n    align-items: center;\n    margin-right: 3px;\n    border-top-left-radius: 15px;\n    cursor: pointer;\n  }\n  width:25%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width:15%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: var(--brand-color);\n  color:white;\n  @media (min-width: 767px) {\n    display:flex;\n    align-items:center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var HeaderTag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header(_templateObject());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].figure(_templateObject2());
var SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject4());
var DropDown = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject5());
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav(_templateObject6());
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject7());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvc3R5bGUuanMiXSwibmFtZXMiOlsiSGVhZGVyVGFnIiwic3R5bGVkIiwiaGVhZGVyIiwiTG9nbyIsImZpZ3VyZSIsIlNlYXJjaENvbnRhaW5lciIsImRpdiIsIlNlYXJjaEljb24iLCJpbWciLCJEcm9wRG93biIsInVsIiwiTmF2IiwibmF2IiwiQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVixtQkFBZjtBQVFBLElBQU1DLElBQUksR0FBR0YseURBQU0sQ0FBQ0csTUFBVixvQkFBVjtBQUdBLElBQU1DLGVBQWUsR0FBR0oseURBQU0sQ0FBQ0ssR0FBVixvQkFBckI7QUF1QkEsSUFBTUMsVUFBVSxHQUFHTix5REFBTSxDQUFDTyxHQUFWLG9CQUFoQjtBQUdBLElBQU1DLFFBQVEsR0FBR1IseURBQU0sQ0FBQ1MsRUFBVixvQkFBZDtBQWdDQSxJQUFNQyxHQUFHLEdBQUdWLHlEQUFNLENBQUNXLEdBQVYsb0JBQVQ7QUFPQSxJQUFNQyxPQUFPLEdBQUdaLHlEQUFNLENBQUNTLEVBQVYsb0JBQWIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDA0YzBkNmU2YTljOGMyOTVhNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUYWcgPSBzdHlsZWQuaGVhZGVyYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XG4gIGNvbG9yOndoaXRlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuZmlndXJlYFxuICB3aWR0aDoxNSU7XG5gO1xuZXhwb3J0IGNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2M5YzljOTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgfVxuICAmIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgd2lkdGg6MjUlO1xuYDtcbmV4cG9ydCBjb25zdCBTZWFyY2hJY29uID0gc3R5bGVkLmltZ2BcbiAgaGVpZ2h0OjIwcHg7XG5gO1xuZXhwb3J0IGNvbnN0IERyb3BEb3duID0gc3R5bGVkLnVsYFxuICBoZWlnaHQ6IDI1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAmIGxpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgJiBhIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgJiBpbWcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIGxlZnQ6MTAwJTtcbiAgICAgIHRvcDoxMCU7XG4gICAgICBvdXRsaW5lOm5vbmU7XG4gICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAmIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOjYwJTtcbiAgbWFyZ2luLXJpZ2h0OjA7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICBcbmA7XG5leHBvcnQgY29uc3QgQWN0aW9ucyA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzowO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDozMCU7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1sZWZ0OjFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luOjA7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgJiBidXR0b257XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcblxuICB9XG4gICYgaW1ne1xuICAgIGhlaWdodDozMHB4O1xuXG4gIH1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==