module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./GlobalStyles.js":
/*!*************************!*\
  !*** ./GlobalStyles.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
/* -------------------------------------------------------------------------- */
/*----------------------------------Variables-------------------------------- */
/* -------------------------------------------------------------------------- */
:root{
  --brand-color:#1a80c7;
/* -------------------------------- Secondary ------------------------------- */
  --accet1-color:#028090;
  --accet1-variant-color:#005F6B;
  --accet1-disabled-color:#a6c7cb;
  --accet2-color:#E4FDE1;
  --accet3-color:#456990;
  --accet4-color:#F45B69;
  --bg-color:#F8F8F8;
/* ---------------------------------  Greys -------------------------------- */
  --light2-color:#F2F2F2;
  --light3-color:#EDEDED;
  --light4-color:#DADADA;
  --dark1-color:#333333;
  --dark2-color:#555555;
  --dark3-color:#777777;
  --dark4-color:#999999;
/* ------------------------------ Action color ------------------------------ */
  --status-critical-color:#FF4040;
  --status-warning-color:#FFAA15;
  --status-ok-color:#65b32e;
  --status-unknown-color:#cccccc;
/* --------------------------------- shadow --------------------------------- */
  --box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color:#edebeb;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}
/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}
/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}
/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input { /* 1 */
  overflow: visible;
}
/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select { /* 1 */
  text-transform: none;
}
/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}
/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}
/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}
/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}
/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}
/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}
/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}
/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/Article/index.js":
/*!*************************************!*\
  !*** ./components/Article/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/Article/style.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/frontend-assigment/components/Article/index.js";



const Article = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["ArticleTag"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "noticia"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Head"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "lorem ipsum dolor: voluptat consequat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Guardar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Info"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "./crop.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Noticias Docred"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "hace 12 h"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "publicado 12/12/8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "lectura: 3 min"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Category"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "",
        children: "medicina"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "",
        children: "medicina"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "",
        children: "medicina"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      children: "Lorem ipsum dolor sit amet consectetur adipiscing elit eros imperdiet eget, molestie tempus tincidunt sollicitudin platea auctor montes lobortis neque posuere, ridiculus laoreet volutpat ornare sodales rutrum convallis curabitur mauris. Sociis nisi eleifend bibendum porta nisl, porttitor mollis proin nullam pharetra, montes mauris rhoncus consequat. Lobortis vulputate penatibus congue dis viverra mollis tellus, orci imperdiet arcu ultrices natoque. Porta feugiat auctor nibh venenatis netus a, vivamus volutpat penatibus fermentum tincidunt phasellus ridiculus, vitae ut nascetur in class. Dis sapien leo et hendrerit habitant dapibus pretium condimentum, consequat eget risus varius lacus ultricies odio magnis maecenas, viverra sociosqu egestas penatibus iaculis lacinia sociis. Faucibus placerat nascetur tortor per ligula duis at ultrices donec torquent, aptent ad mus quam sodales gravida erat pharetra sem nec, aliquam eu eleifend pretium nunc curabitur dignissim ut diam."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Action"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "./estrella.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), " 50"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "./charlar.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined), " 40"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "./ver.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined), " 75"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./components/Article/style.js":
/*!*************************************!*\
  !*** ./components/Article/style.js ***!
  \*************************************/
/*! exports provided: ArticleTag, Head, Info, Image, Category, Text, Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleTag", function() { return ArticleTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ArticleTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article`
  height: 100%;
  width: 60%;
  background-color:white;
  border-radius:15px;
  padding:20px;
`;
const Head = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  & h1 {
    margin: 0;
    font-size: 25px;
    padding-right: 50px;
  }
  & button {
    border: none;
    background-color: var(--status-ok-color);
    border-top-left-radius:15px;
    border-bottom-right-radius:15px;
    color:white;
    padding:6px 19px;
    cursor:pointer
  }
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display:flex;
  align-items:center;
  margin-top:20px;
  & figure{
      height:30px;
    margin:0;
    margin-right:15px;
    & img{
      height:100%;
    }
  }
  & h3{
    margin:0;
    font-size:16px;
  }
  & ul{
      margin:0;
    padding:0;
    list-style:none;
    display:flex;
  }
  & li{
    color:#c9c9c9;
    border-left:1px solid #c9c9c9;
    padding:0 20px;
    font-size:14px;
    &:first-of-type{
      border-left:none;
      padding-left:0
    }
  }
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: 500px;
  background: rgb(34, 164, 252);
  background: linear-gradient(
    0deg,
    rgba(34, 164, 252, 1) 0%,
    rgba(14, 200, 177, 1) 100%
  );
  position: relative;
  margin-bottom: 40px;
  & span {
    position: absolute;
    top: 30px;
    color: white;
    background-color: var(--brand-color);
    padding:3px 13px;
    border-radius:0 5px  5px 0;
    text-transform:uppercase;
    font-size:14px
  }
`;
const Category = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  margin:15px 0;
  & a {
    background-color: var(--light2-color);
    color: var(--brand-color);
    margin-right: 15px;
    padding: 8px;
    border-radius: 5px;
    text-decoration: none;
    display: block;
    text-transform:capitalize;
    font-size:14px;
  }
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  
  
`;
const Action = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display:flex;
  height:40px;
  margin: 0 auto;
  width:60%;
  border:1px solid var(--brand-color);
  border-top-left-radius:15px;
  border-bottom-right-radius:15px;
  justify-content:space-between;
  align-items:center;
  padding:0 20px;
  margin-top:50px;
  & button{
    height:80%;
    background-color:transparent;
    border:none;
    cursor:pointer
  }
  & img{
    height:60%;
  }
`;

/***/ }),

/***/ "./components/Aside/index.js":
/*!***********************************!*\
  !*** ./components/Aside/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/Aside/style.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/frontend-assigment/components/Aside/index.js";



const index = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["AsideTag"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      children: "Noticias relacionadas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Article"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["MainImage"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "./desert.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "noticia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Content"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Lorem ipsum dolor: Volutpat consequat"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
          children: "Por: Lorem ipsum dolor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Actions"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./estrella.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined), " 50"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./charlar.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined), " 40"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./ver.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined), " 75"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Article"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["MainImage"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "./desert.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "noticia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Content"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Lorem ipsum dolor: Volutpat consequat"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
          children: "Por: Lorem ipsum dolor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Actions"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./estrella.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined), " 50"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./charlar.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined), " 40"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./ver.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, undefined), " 75"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Article"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["MainImage"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "./desert.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "noticia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Content"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Lorem ipsum dolor: Volutpat consequat"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
          children: "Por: Lorem ipsum dolor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Actions"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./estrella.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined), " 50"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./charlar.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined), " 40"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./ver.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined), " 75"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Article"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["MainImage"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "./desert.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "noticia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Content"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Lorem ipsum dolor: Volutpat consequat"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
          children: "Por: Lorem ipsum dolor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Actions"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./estrella.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, undefined), " 50"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./charlar.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, undefined), " 40"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./ver.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined), " 75"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./components/Aside/style.js":
/*!***********************************!*\
  !*** ./components/Aside/style.js ***!
  \***********************************/
/*! exports provided: AsideTag, Article, MainImage, Content, Heading, Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideTag", function() { return AsideTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainImage", function() { return MainImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AsideTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.aside`
  height: 100%;
  width:33%;
  
  
`;
const Article = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article`
  display:flex;
  background-color:white;
  padding:20px;
  border-bottom:1px solid #c9c9c9
`;
const MainImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.figure`
  position:relative;
  margin:0;
  & img {
    height: 150px;
    width: 150px;
    border-radius: 16px;
  }
  & span {
    position: absolute;
    top: 25px;
    background-color: var(--brand-color);
    z-index:10;
    left:0;
    color:white;
    padding:5px 15px;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    text-transform:uppercase;
    font-weight:600;
    font-size:12px
  }
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding-left:15px;
  & h3 {
    margin: 0;
    font-size: 14px;
  }
  & small {
    color: #c9c9c9;
    padding-top:7px;
    padding-bottom:7px;
    text-transform:capitalize;
    border-bottom:1px solid #c9c9c9;
  }
`;
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2`
  margin: 0;
  margin-bottom: 10px;
  color: var(--brand-color);
    position:relative;
  font-size: 18px;
  &::after {
    content: "";
    position:absolute;
    width: 40%;
    border-bottom: 1px solid var(--brand-color);
    top:50%;
    right:0;
    transform:translateY(-50%)
  }
`;
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display:flex;
  align-items:center;
  padding-top:7px;
  & button{
    display:flex;
    align-items:center;
    height:30px;
    background-color:transparent;
    border:none;
    flex:1;
    color:#c9c9c9;
    font-size:12px;
    cursor:pointer;
  }
  & img{
    height:20px;
    padding-right:5px;
    opacity:.7;
  }

`;

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/Footer/style.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/frontend-assigment/components/Footer/index.js";



const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["FooterTag"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Logo"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "./docred_logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "",
            children: "Pregunta frecuentes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "",
            children: "Contactanos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "",
            children: "Informacion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Copy"], {
      children: "DocRed \xA9 2019. Todos los derechos reservados"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer/style.js":
/*!************************************!*\
  !*** ./components/Footer/style.js ***!
  \************************************/
/*! exports provided: FooterTag, Logo, Nav, Copy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTag", function() { return FooterTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Copy", function() { return Copy; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer`
  background-color: var(--brand-color);
  color: white;
  
  -webkit-box-shadow: 0px -4px 6px -4px #000000;
  box-shadow: 0px -4px 6px -4px #000000;
  @media (min-width: 767px) {
    display: flex;
    align-items: center;
  }
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.figure`
  width: 15%;
`;
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav`
  width: 55%;
  & ul{
    display:flex;
    justify-content:space-around;
    padding:0;
    list-style:none
  }
  & a{
    text-decoration:none;
    color:white;
  }
`;
const Copy = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  width: 35%;
  opacity:.5;
  text-align:right;
  padding-right:5%
`;

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/Header/style.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/frontend-assigment/components/Header/index.js";



const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["HeaderTag"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Logo"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "./docred_logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["SearchContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["SearchIcon"], {
          src: "./lupa.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "\xBFQue estas buscando?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["DropDown"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./casa.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined), " inicio"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "./abajo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Actions"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./campana.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./usuario.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "./configuraciones.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/style.js":
/*!************************************!*\
  !*** ./components/Header/style.js ***!
  \************************************/
/*! exports provided: HeaderTag, Logo, SearchContainer, SearchIcon, DropDown, Nav, Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTag", function() { return HeaderTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchContainer", function() { return SearchContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeaderTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header`
  background-color: var(--brand-color);
  color:white;
  @media (min-width: 767px) {
    display:flex;
    align-items:center;
  }
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.figure`
  width:15%;
`;
const SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: 35px;
  display: flex;
  align-items: center;
  & input[type="text"] {
    height: 32px;
    border: none;
    color: #c9c9c9;
    border-bottom-right-radius: 15px;
  }
  & button {
    height: 35px;
    display: flex;
    background-color: white;
    border: none;
    justify-content: center;
    align-items: center;
    margin-right: 3px;
    border-top-left-radius: 15px;
    cursor: pointer;
  }
  width:25%;
`;
const SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`
  height:20px;
`;
const DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul`
  height: 25px;
  list-style: none;
  padding: 0;
  position:relative;
  & li {
    height: 100%;
    & a {
      height: 100%;
      display: flex;
      align-items: center;
      & img {
        margin-right: 3px;
        height:100%;
      }
    }
  }
  & button {
    background-color: transparent;
      height: 15px;
      width: 15px;
      border:none;
      position:absolute;
      left:100%;
      top:10%;
      outline:none;
      cursor:pointer;
    & img {
      height: 100%;
    }
  }
`;
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav`
  display: flex;
  width:60%;
  margin-right:0;
  justify-content:space-between;
  
`;
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul`
  list-style: none;
  padding:0;
  display: flex;
  width:30%;
  justify-content:space-around;
  border-left:1px solid white;
  margin:0;
  align-items:center;
  & button{
    height:30px;
    background-color:transparent;
    border:none;
    cursor:pointer;

  }
  & img{
    height:30px;

  }
`;

/***/ }),

/***/ "./components/Main/index.js":
/*!**********************************!*\
  !*** ./components/Main/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/Main/style.js");
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Article */ "./components/Article/index.js");
/* harmony import */ var _Aside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Aside */ "./components/Aside/index.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/frontend-assigment/components/Main/index.js";





const Main = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["MainTag"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Article__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Aside__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/Main/style.js":
/*!**********************************!*\
  !*** ./components/Main/style.js ***!
  \**********************************/
/*! exports provided: MainTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTag", function() { return MainTag; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`
  height:100%;
  display:flex;
  justify-content:space-around;
  padding:100px 20px;
`;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Main */ "./components/Main/index.js");
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GlobalStyles */ "./GlobalStyles.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/frontend-assigment/pages/index.js";






const index = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vR2xvYmFsU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXJ0aWNsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FydGljbGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Bc2lkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FzaWRlL3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4vc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJBcnRpY2xlIiwiQXJ0aWNsZVRhZyIsInN0eWxlZCIsImFydGljbGUiLCJIZWFkIiwiZGl2IiwiSW5mbyIsIkltYWdlIiwiQ2F0ZWdvcnkiLCJUZXh0IiwiQWN0aW9uIiwiaW5kZXgiLCJBc2lkZVRhZyIsImFzaWRlIiwiTWFpbkltYWdlIiwiZmlndXJlIiwiQ29udGVudCIsIkhlYWRpbmciLCJoMiIsIkFjdGlvbnMiLCJGb290ZXIiLCJGb290ZXJUYWciLCJmb290ZXIiLCJMb2dvIiwiTmF2IiwibmF2IiwiQ29weSIsInAiLCJIZWFkZXIiLCJIZWFkZXJUYWciLCJoZWFkZXIiLCJTZWFyY2hDb250YWluZXIiLCJTZWFyY2hJY29uIiwiaW1nIiwiRHJvcERvd24iLCJ1bCIsIk1haW4iLCJNYWluVGFnIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0FBQ29DLElBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNM0IsS0FBSyxHQUFHLE1BQU07QUFDbEIsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FURDs7QUFXZUEsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNqQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1WYXJpYWJsZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjpyb290e1xuICAtLWJyYW5kLWNvbG9yOiMxYTgwYzc7XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTZWNvbmRhcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAtLWFjY2V0MS1jb2xvcjojMDI4MDkwO1xuICAtLWFjY2V0MS12YXJpYW50LWNvbG9yOiMwMDVGNkI7XG4gIC0tYWNjZXQxLWRpc2FibGVkLWNvbG9yOiNhNmM3Y2I7XG4gIC0tYWNjZXQyLWNvbG9yOiNFNEZERTE7XG4gIC0tYWNjZXQzLWNvbG9yOiM0NTY5OTA7XG4gIC0tYWNjZXQ0LWNvbG9yOiNGNDVCNjk7XG4gIC0tYmctY29sb3I6I0Y4RjhGODtcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgR3JleXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLS1saWdodDItY29sb3I6I0YyRjJGMjtcbiAgLS1saWdodDMtY29sb3I6I0VERURFRDtcbiAgLS1saWdodDQtY29sb3I6I0RBREFEQTtcbiAgLS1kYXJrMS1jb2xvcjojMzMzMzMzO1xuICAtLWRhcmsyLWNvbG9yOiM1NTU1NTU7XG4gIC0tZGFyazMtY29sb3I6Izc3Nzc3NztcbiAgLS1kYXJrNC1jb2xvcjojOTk5OTk5O1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFjdGlvbiBjb2xvciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLS1zdGF0dXMtY3JpdGljYWwtY29sb3I6I0ZGNDA0MDtcbiAgLS1zdGF0dXMtd2FybmluZy1jb2xvcjojRkZBQTE1O1xuICAtLXN0YXR1cy1vay1jb2xvcjojNjViMzJlO1xuICAtLXN0YXR1cy11bmtub3duLWNvbG9yOiNjY2NjY2M7XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2hhZG93IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAtLWJveC1zaGFkb3c6MCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTBweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbiAgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNlZGViZWI7XG59XG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xufVxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG59XG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5idXR0b24sXG5pbnB1dCB7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5idXR0b24sXG5zZWxlY3QgeyAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5bdHlwZT1cImNoZWNrYm94XCJdLFxuW3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMiAqL1xufVxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuLyogTWlzY1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcnRpY2xlVGFnLCBIZWFkLCBJbmZvLCBUZXh0LCBBY3Rpb24sIENhdGVnb3J5LCBJbWFnZSB9IGZyb20gXCIuL3N0eWxlXCI7XG5cbmNvbnN0IEFydGljbGUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFydGljbGVUYWc+XG4gICAgICA8SW1hZ2U+XG4gICAgICAgIDxpbWcgIC8+XG4gICAgICAgIDxzcGFuPm5vdGljaWE8L3NwYW4+XG4gICAgICA8L0ltYWdlPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxoMT5sb3JlbSBpcHN1bSBkb2xvcjogdm9sdXB0YXQgY29uc2VxdWF0PC9oMT5cbiAgICAgICAgPGJ1dHRvbj5HdWFyZGFyPC9idXR0b24+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SW5mbz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgPGltZyBzcmM9Jy4vY3JvcC5wbmcnLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPk5vdGljaWFzIERvY3JlZDwvaDM+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPmhhY2UgMTIgaDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5wdWJsaWNhZG8gMTIvMTIvODwvbGk+XG4gICAgICAgICAgICAgIDxsaT5sZWN0dXJhOiAzIG1pbjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSW5mbz5cbiAgICAgIDxDYXRlZ29yeT5cbiAgICAgICAgPGEgaHJlZj1cIlwiPm1lZGljaW5hPC9hPlxuICAgICAgICA8YSBocmVmPVwiXCI+bWVkaWNpbmE8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJcIj5tZWRpY2luYTwvYT5cbiAgICAgIDwvQ2F0ZWdvcnk+XG4gICAgICA8VGV4dD5cbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGVyb3MgaW1wZXJkaWV0XG4gICAgICAgIGVnZXQsIG1vbGVzdGllIHRlbXB1cyB0aW5jaWR1bnQgc29sbGljaXR1ZGluIHBsYXRlYSBhdWN0b3IgbW9udGVzXG4gICAgICAgIGxvYm9ydGlzIG5lcXVlIHBvc3VlcmUsIHJpZGljdWx1cyBsYW9yZWV0IHZvbHV0cGF0IG9ybmFyZSBzb2RhbGVzIHJ1dHJ1bVxuICAgICAgICBjb252YWxsaXMgY3VyYWJpdHVyIG1hdXJpcy4gU29jaWlzIG5pc2kgZWxlaWZlbmQgYmliZW5kdW0gcG9ydGEgbmlzbCxcbiAgICAgICAgcG9ydHRpdG9yIG1vbGxpcyBwcm9pbiBudWxsYW0gcGhhcmV0cmEsIG1vbnRlcyBtYXVyaXMgcmhvbmN1cyBjb25zZXF1YXQuXG4gICAgICAgIExvYm9ydGlzIHZ1bHB1dGF0ZSBwZW5hdGlidXMgY29uZ3VlIGRpcyB2aXZlcnJhIG1vbGxpcyB0ZWxsdXMsIG9yY2lcbiAgICAgICAgaW1wZXJkaWV0IGFyY3UgdWx0cmljZXMgbmF0b3F1ZS4gUG9ydGEgZmV1Z2lhdCBhdWN0b3IgbmliaCB2ZW5lbmF0aXNcbiAgICAgICAgbmV0dXMgYSwgdml2YW11cyB2b2x1dHBhdCBwZW5hdGlidXMgZmVybWVudHVtIHRpbmNpZHVudCBwaGFzZWxsdXNcbiAgICAgICAgcmlkaWN1bHVzLCB2aXRhZSB1dCBuYXNjZXR1ciBpbiBjbGFzcy4gRGlzIHNhcGllbiBsZW8gZXQgaGVuZHJlcml0XG4gICAgICAgIGhhYml0YW50IGRhcGlidXMgcHJldGl1bSBjb25kaW1lbnR1bSwgY29uc2VxdWF0IGVnZXQgcmlzdXMgdmFyaXVzIGxhY3VzXG4gICAgICAgIHVsdHJpY2llcyBvZGlvIG1hZ25pcyBtYWVjZW5hcywgdml2ZXJyYSBzb2Npb3NxdSBlZ2VzdGFzIHBlbmF0aWJ1c1xuICAgICAgICBpYWN1bGlzIGxhY2luaWEgc29jaWlzLiBGYXVjaWJ1cyBwbGFjZXJhdCBuYXNjZXR1ciB0b3J0b3IgcGVyIGxpZ3VsYVxuICAgICAgICBkdWlzIGF0IHVsdHJpY2VzIGRvbmVjIHRvcnF1ZW50LCBhcHRlbnQgYWQgbXVzIHF1YW0gc29kYWxlcyBncmF2aWRhIGVyYXRcbiAgICAgICAgcGhhcmV0cmEgc2VtIG5lYywgYWxpcXVhbSBldSBlbGVpZmVuZCBwcmV0aXVtIG51bmMgY3VyYWJpdHVyIGRpZ25pc3NpbVxuICAgICAgICB1dCBkaWFtLlxuICAgICAgPC9UZXh0PlxuICAgICAgPEFjdGlvbj5cbiAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vZXN0cmVsbGEuc3ZnXCIgLz4gNTBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2NoYXJsYXIuc3ZnXCIgLz4gNDBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL3Zlci5zdmdcIiAvPiA3NVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvQWN0aW9uPlxuICAgIDwvQXJ0aWNsZVRhZz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEFydGljbGVUYWcgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBib3JkZXItcmFkaXVzOjE1cHg7XG4gIHBhZGRpbmc6MjBweDtcbmA7XG5leHBvcnQgY29uc3QgSGVhZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gICYgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxuICAmIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YXR1cy1vay1jb2xvcik7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjE1cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzo2cHggMTlweDtcbiAgICBjdXJzb3I6cG9pbnRlclxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBtYXJnaW4tdG9wOjIwcHg7XG4gICYgZmlndXJle1xuICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgbWFyZ2luOjA7XG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgJiBpbWd7XG4gICAgICBoZWlnaHQ6MTAwJTtcbiAgICB9XG4gIH1cbiAgJiBoM3tcbiAgICBtYXJnaW46MDtcbiAgICBmb250LXNpemU6MTZweDtcbiAgfVxuICAmIHVse1xuICAgICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gIH1cbiAgJiBsaXtcbiAgICBjb2xvcjojYzljOWM5O1xuICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjYzljOWM5O1xuICAgIHBhZGRpbmc6MCAyMHB4O1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICY6Zmlyc3Qtb2YtdHlwZXtcbiAgICAgIGJvcmRlci1sZWZ0Om5vbmU7XG4gICAgICBwYWRkaW5nLWxlZnQ6MFxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYigzNCwgMTY0LCAyNTIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMGRlZyxcbiAgICByZ2JhKDM0LCAxNjQsIDI1MiwgMSkgMCUsXG4gICAgcmdiYSgxNCwgMjAwLCAxNzcsIDEpIDEwMCVcbiAgKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAmIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgICBwYWRkaW5nOjNweCAxM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6MCA1cHggIDVweCAwO1xuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6MTRweFxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnkgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46MTVweCAwO1xuICAmIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Mi1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6MTRweDtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgXG4gIFxuYDtcbmV4cG9ydCBjb25zdCBBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OmZsZXg7XG4gIGhlaWdodDo0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6NjAlO1xuICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBwYWRkaW5nOjAgMjBweDtcbiAgbWFyZ2luLXRvcDo1MHB4O1xuICAmIGJ1dHRvbntcbiAgICBoZWlnaHQ6ODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgY3Vyc29yOnBvaW50ZXJcbiAgfVxuICAmIGltZ3tcbiAgICBoZWlnaHQ6NjAlO1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEFzaWRlVGFnLFxuICBNYWluSW1hZ2UsXG4gIENvbnRlbnQsXG4gIEFydGljbGUsXG4gIEFjdGlvbnMsXG4gIEhlYWRpbmcsXG59IGZyb20gXCIuL3N0eWxlXCI7XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBc2lkZVRhZz5cbiAgICAgIDxIZWFkaW5nPk5vdGljaWFzIHJlbGFjaW9uYWRhczwvSGVhZGluZz5cbiAgICAgIDxBcnRpY2xlPlxuICAgICAgICA8TWFpbkltYWdlPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9kZXNlcnQuanBnXCIgLz5cbiAgICAgICAgICA8c3Bhbj5ub3RpY2lhPC9zcGFuPlxuICAgICAgICA8L01haW5JbWFnZT5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPGgzPkxvcmVtIGlwc3VtIGRvbG9yOiBWb2x1dHBhdCBjb25zZXF1YXQ8L2gzPlxuICAgICAgICAgIDxzbWFsbD5Qb3I6IExvcmVtIGlwc3VtIGRvbG9yPC9zbWFsbD5cbiAgICAgICAgICA8QWN0aW9ucz5cbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9lc3RyZWxsYS5zdmdcIiAvPiA1MFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vY2hhcmxhci5zdmdcIiAvPiA0MFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vdmVyLnN2Z1wiIC8+IDc1XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0FjdGlvbnM+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgIDwvQXJ0aWNsZT5cbiAgICAgIDxBcnRpY2xlPlxuICAgICAgICA8TWFpbkltYWdlPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9kZXNlcnQuanBnXCIgLz5cbiAgICAgICAgICA8c3Bhbj5ub3RpY2lhPC9zcGFuPlxuICAgICAgICA8L01haW5JbWFnZT5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPGgzPkxvcmVtIGlwc3VtIGRvbG9yOiBWb2x1dHBhdCBjb25zZXF1YXQ8L2gzPlxuICAgICAgICAgIDxzbWFsbD5Qb3I6IExvcmVtIGlwc3VtIGRvbG9yPC9zbWFsbD5cbiAgICAgICAgICA8QWN0aW9ucz5cbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9lc3RyZWxsYS5zdmdcIiAvPiA1MFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vY2hhcmxhci5zdmdcIiAvPiA0MFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vdmVyLnN2Z1wiIC8+IDc1XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0FjdGlvbnM+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgIDwvQXJ0aWNsZT5cbiAgICAgIDxBcnRpY2xlPlxuICAgICAgICA8TWFpbkltYWdlPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9kZXNlcnQuanBnXCIgLz5cbiAgICAgICAgICA8c3Bhbj5ub3RpY2lhPC9zcGFuPlxuICAgICAgICA8L01haW5JbWFnZT5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPGgzPkxvcmVtIGlwc3VtIGRvbG9yOiBWb2x1dHBhdCBjb25zZXF1YXQ8L2gzPlxuICAgICAgICAgIDxzbWFsbD5Qb3I6IExvcmVtIGlwc3VtIGRvbG9yPC9zbWFsbD5cbiAgICAgICAgICA8QWN0aW9ucz5cbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9lc3RyZWxsYS5zdmdcIiAvPiA1MFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vY2hhcmxhci5zdmdcIiAvPiA0MFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vdmVyLnN2Z1wiIC8+IDc1XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0FjdGlvbnM+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgIDwvQXJ0aWNsZT5cbiAgICAgIDxBcnRpY2xlPlxuICAgICAgICA8TWFpbkltYWdlPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9kZXNlcnQuanBnXCIgLz5cbiAgICAgICAgICA8c3Bhbj5ub3RpY2lhPC9zcGFuPlxuICAgICAgICA8L01haW5JbWFnZT5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPGgzPkxvcmVtIGlwc3VtIGRvbG9yOiBWb2x1dHBhdCBjb25zZXF1YXQ8L2gzPlxuICAgICAgICAgIDxzbWFsbD5Qb3I6IExvcmVtIGlwc3VtIGRvbG9yPC9zbWFsbD5cbiAgICAgICAgICA8QWN0aW9ucz5cbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9lc3RyZWxsYS5zdmdcIiAvPiA1MFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vY2hhcmxhci5zdmdcIiAvPiA0MFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vdmVyLnN2Z1wiIC8+IDc1XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0FjdGlvbnM+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgIDwvQXJ0aWNsZT5cbiAgICA8L0FzaWRlVGFnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEFzaWRlVGFnID0gc3R5bGVkLmFzaWRlYFxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOjMzJTtcbiAgXG4gIFxuYDtcbmV4cG9ydCBjb25zdCBBcnRpY2xlID0gc3R5bGVkLmFydGljbGVgXG4gIGRpc3BsYXk6ZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgcGFkZGluZzoyMHB4O1xuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYzljOWM5XG5gO1xuZXhwb3J0IGNvbnN0IE1haW5JbWFnZSA9IHN0eWxlZC5maWd1cmVgXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBtYXJnaW46MDtcbiAgJiBpbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIH1cbiAgJiBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgICB6LWluZGV4OjEwO1xuICAgIGxlZnQ6MDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjVweCAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGZvbnQtc2l6ZToxMnB4XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDoxNXB4O1xuICAmIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICYgc21hbGwge1xuICAgIGNvbG9yOiAjYzljOWM5O1xuICAgIHBhZGRpbmctdG9wOjdweDtcbiAgICBwYWRkaW5nLWJvdHRvbTo3cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYzljOWM5O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5oMmBcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tYnJhbmQtY29sb3IpO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBmb250LXNpemU6IDE4cHg7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgICB0b3A6NTAlO1xuICAgIHJpZ2h0OjA7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSlcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgcGFkZGluZy10b3A6N3B4O1xuICAmIGJ1dHRvbntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGhlaWdodDozMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgZmxleDoxO1xuICAgIGNvbG9yOiNjOWM5Yzk7XG4gICAgZm9udC1zaXplOjEycHg7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gIH1cbiAgJiBpbWd7XG4gICAgaGVpZ2h0OjIwcHg7XG4gICAgcGFkZGluZy1yaWdodDo1cHg7XG4gICAgb3BhY2l0eTouNztcbiAgfVxuXG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvZ28sIEZvb3RlclRhZywgTmF2LCBDb3B5IH0gZnJvbSBcIi4vc3R5bGVcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb290ZXJUYWc+XG4gICAgICA8TG9nbz5cbiAgICAgICAgPGltZyBzcmM9XCIuL2RvY3JlZF9sb2dvLnBuZ1wiIC8+XG4gICAgICA8L0xvZ28+XG4gICAgICA8TmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlByZWd1bnRhIGZyZWN1ZW50ZXM8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiXCI+Q29udGFjdGFub3M8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiXCI+SW5mb3JtYWNpb248L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvTmF2PlxuICAgICAgPENvcHk+RG9jUmVkIMKpIDIwMTkuIFRvZG9zIGxvcyBkZXJlY2hvcyByZXNlcnZhZG9zPC9Db3B5PlxuICAgIDwvRm9vdGVyVGFnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBGb290ZXJUYWcgPSBzdHlsZWQuZm9vdGVyYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IC00cHggNnB4IC00cHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMHB4IC00cHggNnB4IC00cHggIzAwMDAwMDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuZmlndXJlYFxuICB3aWR0aDogMTUlO1xuYDtcbmV4cG9ydCBjb25zdCBOYXYgPSBzdHlsZWQubmF2YFxuICB3aWR0aDogNTUlO1xuICAmIHVse1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmc6MDtcbiAgICBsaXN0LXN0eWxlOm5vbmVcbiAgfVxuICAmIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgQ29weSA9IHN0eWxlZC5wYFxuICB3aWR0aDogMzUlO1xuICBvcGFjaXR5Oi41O1xuICB0ZXh0LWFsaWduOnJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OjUlXG5gOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBIZWFkZXJUYWcsXG4gIFNlYXJjaENvbnRhaW5lcixcbiAgU2VhcmNoSWNvbixcbiAgRHJvcERvd24sXG4gIE5hdixcbiAgQWN0aW9ucyxcbiAgTG9nb1xufSBmcm9tIFwiLi9zdHlsZVwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhlYWRlclRhZz5cbiAgICAgIDxMb2dvPlxuICAgICAgICA8aW1nIHNyYz1cIi4vZG9jcmVkX2xvZ28ucG5nXCIgLz5cbiAgICAgIDwvTG9nbz5cbiAgICAgIDxTZWFyY2hDb250YWluZXI+XG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgPFNlYXJjaEljb24gc3JjPVwiLi9sdXBhLnN2Z1wiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIsK/UXVlIGVzdGFzIGJ1c2NhbmRvP1wiIC8+XG4gICAgICA8L1NlYXJjaENvbnRhaW5lcj5cbiAgICAgIDxOYXY+XG4gICAgICAgIDxEcm9wRG93bj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Nhc2Euc3ZnXCIgLz4gaW5pY2lvXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2FiYWpvLnN2Z1wiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRHJvcERvd24+XG4gICAgICAgIFxuICAgICAgICAgIDxBY3Rpb25zPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9jYW1wYW5hLnN2Z1wiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vdXN1YXJpby5zdmdcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2NvbmZpZ3VyYWNpb25lcy5zdmdcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9BY3Rpb25zPlxuICAgICAgICBcbiAgICAgIDwvTmF2PlxuICAgIDwvSGVhZGVyVGFnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUYWcgPSBzdHlsZWQuaGVhZGVyYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XG4gIGNvbG9yOndoaXRlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuZmlndXJlYFxuICB3aWR0aDoxNSU7XG5gO1xuZXhwb3J0IGNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2M5YzljOTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgfVxuICAmIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgd2lkdGg6MjUlO1xuYDtcbmV4cG9ydCBjb25zdCBTZWFyY2hJY29uID0gc3R5bGVkLmltZ2BcbiAgaGVpZ2h0OjIwcHg7XG5gO1xuZXhwb3J0IGNvbnN0IERyb3BEb3duID0gc3R5bGVkLnVsYFxuICBoZWlnaHQ6IDI1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAmIGxpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgJiBhIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgJiBpbWcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIGxlZnQ6MTAwJTtcbiAgICAgIHRvcDoxMCU7XG4gICAgICBvdXRsaW5lOm5vbmU7XG4gICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAmIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOjYwJTtcbiAgbWFyZ2luLXJpZ2h0OjA7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICBcbmA7XG5leHBvcnQgY29uc3QgQWN0aW9ucyA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzowO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDozMCU7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1sZWZ0OjFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luOjA7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgJiBidXR0b257XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcblxuICB9XG4gICYgaW1ne1xuICAgIGhlaWdodDozMHB4O1xuXG4gIH1cbmA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TWFpblRhZ30gZnJvbSAnLi9zdHlsZSdcblxuaW1wb3J0IEFydGljbGUgZnJvbSAnLi4vQXJ0aWNsZSdcbmltcG9ydCBBc2lkZSBmcm9tICcuLi9Bc2lkZSdcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWFpblRhZz5cbiAgICAgIDxBcnRpY2xlLz5cbiAgICAgIDxBc2lkZS8+XG4gICAgPC9NYWluVGFnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgTWFpblRhZyA9IHN0eWxlZC5tYWluYFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOjEwMHB4IDIwcHg7XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbic7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL0dsb2JhbFN0eWxlc1wiO1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWFpbiAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=