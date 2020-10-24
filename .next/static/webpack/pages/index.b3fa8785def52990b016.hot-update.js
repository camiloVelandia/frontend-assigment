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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  width: 30%;\n  justify-content: space-around;\n  border-left: 1px solid white;\n  margin: 0;\n  align-items: center;\n  & button {\n    height: 30px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n  }\n  & img {\n    height: 30px;\n  }\n  @media (max-width: 992px) {\n    display:none;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  width: 60%;\n  margin-right: 0;\n  justify-content: space-between;\n  @media (max-width: 992px) {\n    width: 20%;\n    flex: 1;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 25px;\n  list-style: none;\n  padding: 0;\n  position: relative;\n  & li {\n    height: 100%;\n    & a {\n      height: 100%;\n      display: flex;\n      align-items: center;\n      & img {\n        margin-right: 3px;\n        height: 100%;\n      }\n    }\n  }\n  & button {\n    background-color: transparent;\n    height: 15px;\n    width: 15px;\n    border: none;\n    position: absolute;\n    left: 100%;\n    top: 10%;\n    outline: none;\n    cursor: pointer;\n    & img {\n      height: 100%;\n    }\n  }\n  @media (max-width: 992px) {\n   justify-content:flex-end;\n  }\n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 35px;\n  display: flex;\n  align-items: center;\n  & input[type=\"text\"] {\n    height: 100%;\n    border: none;\n    color: #c9c9c9;\n    border-bottom-right-radius: 15px;\n    width: 80%;\n    padding-left: 10px;\n  }\n  & button {\n    box-sizing: content-box;\n    height: 100%;\n    display: flex;\n    background-color: white;\n    border: none;\n    justify-content: center;\n    align-items: center;\n    margin-right: 3px;\n    border-top-left-radius: 15px;\n    cursor: pointer;\n  }\n  width: 25%;\n  @media (max-width: 992px) {\n    width: 10%;\n    flex:1;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 15%;\n  @media (max-width: 992px) {\n    width: 10%;\n    flex: .6;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: var(--brand-color);\n  color: white;\n  -webkit-box-shadow: 0px 5px 9px -6px #000000;\n  box-shadow: 0px 5px 9px -6px #000000;\n  display: flex;\n  align-items: center;\n  @media (max-width: 992px) {\n    flex-wrap:wrap\n    justify-content:space-between\n  }\n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvc3R5bGUuanMiXSwibmFtZXMiOlsiSGVhZGVyVGFnIiwic3R5bGVkIiwiaGVhZGVyIiwiTG9nbyIsImZpZ3VyZSIsIlNlYXJjaENvbnRhaW5lciIsImRpdiIsIlNlYXJjaEljb24iLCJpbWciLCJEcm9wRG93biIsInVsIiwiTmF2IiwibmF2IiwiQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVixtQkFBZjtBQVlBLElBQU1DLElBQUksR0FBR0YseURBQU0sQ0FBQ0csTUFBVixvQkFBVjtBQU9BLElBQU1DLGVBQWUsR0FBR0oseURBQU0sQ0FBQ0ssR0FBVixvQkFBckI7QUE4QkEsSUFBTUMsVUFBVSxHQUFHTix5REFBTSxDQUFDTyxHQUFWLG9CQUFoQjtBQUdBLElBQU1DLFFBQVEsR0FBR1IseURBQU0sQ0FBQ1MsRUFBVixvQkFBZDtBQW1DQSxJQUFNQyxHQUFHLEdBQUdWLHlEQUFNLENBQUNXLEdBQVYsb0JBQVQ7QUFVQSxJQUFNQyxPQUFPLEdBQUdaLHlEQUFNLENBQUNTLEVBQVYsb0JBQWIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjNmYTg3ODVkZWY1Mjk5MGIwMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUYWcgPSBzdHlsZWQuaGVhZGVyYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDlweCAtNnB4ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggOXB4IC02cHggIzAwMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgZmxleC13cmFwOndyYXBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlblxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuZmlndXJlYFxuICB3aWR0aDogMTUlO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICB3aWR0aDogMTAlO1xuICAgIGZsZXg6IC42O1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2M5YzljOTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAmIGJ1dHRvbiB7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgd2lkdGg6IDI1JTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBmbGV4OjE7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgU2VhcmNoSWNvbiA9IHN0eWxlZC5pbWdgXG4gIGhlaWdodDoyMHB4O1xuYDtcbmV4cG9ydCBjb25zdCBEcm9wRG93biA9IHN0eWxlZC51bGBcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICYgbGkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAmIGEge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAmIGltZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHRvcDogMTAlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICYgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZmxleDogMTtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBBY3Rpb25zID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJiBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==