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
    className: "jsx-2315652916",
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
      className: "jsx-2315652916",
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
    className: "jsx-2315652916" + " " + "social",
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
    size: "43px",
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
    id: "2315652916",
    __self: this
  }, ".social.jsx-2315652916{position:absolute;top:70vh;border:1px dashed #99999959;border-radius:10%;padding:10px;background:white;}@media only screen and (max-height:550px){.social.jsx-2315652916{position:absolute;top:35vh;left:2px;border:1px dashed #99999959;borderradius:10%;padding:10px;}.social.jsx-2315652916 .icon.jsx-2315652916{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWQvRGV2ZWxvcG1lbnQvc2l0ZS9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENTLEFBRytCLEFBVUUsQUFRSixjQUNoQixJQWxCUyxBQVVFLFNBVGlCLEFBVWpCLFNBQ21CLG1CQVZaLFNBV0MsU0FWTixRQVdFLEtBVkUsUUFXakIsU0FWRiIsImZpbGUiOiIvVXNlcnMvc2lkL0RldmVsb3BtZW50L3NpdGUvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNwcmluZyB9IGZyb20gJ3JlYWN0LXNwcmluZy9yZW5kZXJwcm9wcy5janMnO1xuaW1wb3J0ICogYXMgZWFzaW5ncyBmcm9tICdkMy1lYXNlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vTGF5b3V0JztcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbmNvbnN0IGN1c3RvbUVsYXN0aWMgPSBlYXNpbmdzLmVhc2VFbGFzdGljT3V0LnBlcmlvZCgwLjYpO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPEhlYWQ+XG4gICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9oZWFkZXIuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9za2V0Y2guanNcIiAvPlxuXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPVwiaGVhZGVyXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8U3ByaW5nXG4gICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgbWFyZ2luVG9wOiAnLTUwJScgfX1cbiAgICAgICAgdG89e3sgb3BhY2l0eTogMSwgbWFyZ2luVG9wOiAnLTUlJyB9fVxuICAgICAgICBjb25maWc9e3sgZHVyYXRpb246IDIwMDAsIGVhc2luZzogY3VzdG9tRWxhc3RpYyB9fVxuICAgICAgPlxuICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17cHJvcHN9PlxuICAgICAgICAgICAgPENhcmQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvU3ByaW5nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cbiAgICAgICAgPEljb24gbnVtYmVyPVwiZmlyc3RcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NpZGtvcGFyZGVcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9HaXRIdWIucG5nXCIgYWx0PVwiR2l0SHViIHByb2ZpbGVcIiBzaXplPVwiNTBweFwiIC8+XG4gICAgICAgIDxJY29uIG51bWJlcj1cInNlY29uZFwiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2lkLWtvcGFyZGUtMzQxMTI4OTUvXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvTGlua2VkSW4ucG5nXCIgYWx0PVwiTGlua2VkSW4gcHJvZmlsZVwiIHNpemU9XCI1MHB4XCIgLz5cbiAgICAgICAgPEljb24gbnVtYmVyPVwidGhpcmRcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NpZC1rb3BhcmRlLTM0MTEyODk1L1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0Jsb2dnZXIucG5nXCIgYWx0PVwiUGVyc29uYWwgQmxvZyBvbiBCbG9nZ2VyXCIgc2l6ZT1cIjQzcHhcIiAvPlxuICAgICAgICA8SWNvbiBudW1iZXI9XCJmb3VydGhcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NpZC1rb3BhcmRlLTM0MTEyODk1L1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL1N0YWNrT3ZlcmZsb3cucG5nXCIgYWx0PVwiU3RhY2tPdmVyZmxvdyBwcm9maWxlXCIgc2l6ZT1cIjUwcHhcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5zb2NpYWwge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA3MHZoO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICM5OTk5OTk1OTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NTBweCkge1xuICAgICAgICAgICAgLnNvY2lhbCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAzNXZoO1xuICAgICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOTk5OTk5NTk7XG4gICAgICAgICAgICAgIGJvcmRlcnJhZGl1czogMTAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNvY2lhbCAuaWNvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/sid/Development/site/components/Header/index.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.a1431488da4647cde4aa.hot-update.js.map