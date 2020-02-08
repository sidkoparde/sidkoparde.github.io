webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/index.jsx":
/*!*************************************!*\
  !*** ./components/Header/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring/renderprops.cjs */ "./node_modules/react-spring/renderprops.cjs.js");
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layout */ "./components/Layout.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card */ "./components/Header/Card.jsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Icon */ "./components/Header/Icon.jsx");
var _jsxFileName = "/Users/sid/Development/site/components/Header/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var customElastic = d3_ease__WEBPACK_IMPORTED_MODULE_3__["easeElasticOut"].period(0.6);

var Header = function Header() {
  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("link", {
    href: "/static/header.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("script", {
    src: "/static/sketch.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("section", {
    id: "header",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    },
    className: "jsx-1300177347",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_2__["Spring"], {
    from: {
      opacity: 0,
      marginTop: '-50%'
    },
    to: {
      opacity: 1,
      marginTop: '-5%'
    },
    config: {
      duration: 2000,
      easing: customElastic
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, function (props) {
    return __jsx("div", {
      style: props,
      className: "jsx-1300177347",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
  }), __jsx("div", {
    className: "jsx-1300177347" + " " + "social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    number: "first",
    href: "https://github.com/sidkoparde",
    src: "/static/images/GitHub.png",
    alt: "GitHub profile",
    size: "50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    number: "second",
    href: "https://www.linkedin.com/in/sid-koparde-34112895/",
    src: "/static/images/LinkedIn.png",
    alt: "LinkedIn profile",
    size: "50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    number: "third",
    href: "https://www.linkedin.com/in/sid-koparde-34112895/",
    src: "/static/images/Blogger.png",
    alt: "Personal Blog on Blogger",
    size: "40px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    number: "fourth",
    href: "https://www.linkedin.com/in/sid-koparde-34112895/",
    src: "/static/images/StackOverflow.png",
    alt: "StackOverflow profile",
    size: "50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1300177347",
    __self: this
  }, ".social.jsx-1300177347{position:absolute;top:70vh;border:1px dashed #99999959;border-radius:10%;padding:10px;}@media only screen and (max-height:550px){.social.jsx-1300177347{position:absolute;top:35vh;left:2px;border:1px dashed #99999959;borderradius:10%;padding:10px;}.social.jsx-1300177347 .icon.jsx-1300177347{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWQvRGV2ZWxvcG1lbnQvc2l0ZS9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENTLEFBRytCLEFBU0UsQUFRSixjQUNoQixJQWpCUyxBQVNFLFNBUmlCLEFBU2pCLFNBQ21CLG1CQVRaLFNBVUMsU0FUTixRQVVFLEtBVGpCLFFBVUUiLCJmaWxlIjoiL1VzZXJzL3NpZC9EZXZlbG9wbWVudC9zaXRlL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTcHJpbmcgfSBmcm9tICdyZWFjdC1zcHJpbmcvcmVuZGVycHJvcHMuY2pzJztcbmltcG9ydCAqIGFzIGVhc2luZ3MgZnJvbSAnZDMtZWFzZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0xheW91dCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG5jb25zdCBjdXN0b21FbGFzdGljID0gZWFzaW5ncy5lYXNlRWxhc3RpY091dC5wZXJpb2QoMC42KTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvaGVhZGVyLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvc2tldGNoLmpzXCIgLz5cblxuICAgIDxzZWN0aW9uXG4gICAgICBpZD1cImhlYWRlclwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFNwcmluZ1xuICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIG1hcmdpblRvcDogJy01MCUnIH19XG4gICAgICAgIHRvPXt7IG9wYWNpdHk6IDEsIG1hcmdpblRvcDogJy01JScgfX1cbiAgICAgICAgY29uZmlnPXt7IGR1cmF0aW9uOiAyMDAwLCBlYXNpbmc6IGN1c3RvbUVsYXN0aWMgfX1cbiAgICAgID5cbiAgICAgICAgeyhwcm9wcykgPT4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Byb3BzfT5cbiAgICAgICAgICAgIDxDYXJkIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1NwcmluZz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XG4gICAgICAgIDxJY29uIG51bWJlcj1cImZpcnN0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zaWRrb3BhcmRlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvR2l0SHViLnBuZ1wiIGFsdD1cIkdpdEh1YiBwcm9maWxlXCIgc2l6ZT1cIjUwcHhcIiAvPlxuICAgICAgICA8SWNvbiBudW1iZXI9XCJzZWNvbmRcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NpZC1rb3BhcmRlLTM0MTEyODk1L1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0xpbmtlZEluLnBuZ1wiIGFsdD1cIkxpbmtlZEluIHByb2ZpbGVcIiBzaXplPVwiNTBweFwiIC8+XG4gICAgICAgIDxJY29uIG51bWJlcj1cInRoaXJkXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaWQta29wYXJkZS0zNDExMjg5NS9cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9CbG9nZ2VyLnBuZ1wiIGFsdD1cIlBlcnNvbmFsIEJsb2cgb24gQmxvZ2dlclwiIHNpemU9XCI0MHB4XCIgLz5cbiAgICAgICAgPEljb24gbnVtYmVyPVwiZm91cnRoXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaWQta29wYXJkZS0zNDExMjg5NS9cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9TdGFja092ZXJmbG93LnBuZ1wiIGFsdD1cIlN0YWNrT3ZlcmZsb3cgcHJvZmlsZVwiIHNpemU9XCI1MHB4XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuc29jaWFsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNzB2aDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOTk5OTk5NTk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDU1MHB4KSB7XG4gICAgICAgICAgICAuc29jaWFsIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDM1dmg7XG4gICAgICAgICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICM5OTk5OTk1OTtcbiAgICAgICAgICAgICAgYm9yZGVycmFkaXVzOiAxMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc29jaWFsIC5pY29uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/sid/Development/site/components/Header/index.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.4bae77cdd91070dfd9d8.hot-update.js.map