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
    className: "jsx-914041125",
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
      className: "jsx-914041125",
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
    className: "jsx-914041125" + " " + "social",
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
    paddingRight: "10px",
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
    paddingRight: "13px",
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
    paddingRight: "5px",
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
    paddingRight: "0px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "914041125",
    __self: this
  }, ".social.jsx-914041125{position:absolute;left:41.5%;top:70vh;border:1px dashed #99999959;border-radius:10%;padding:10px;background:white;}@media only screen and (max-height:550px){.social.jsx-914041125{position:absolute;top:35vh;left:2px;border:1px dashed #99999959;borderradius:10%;padding:10px;}.social.jsx-914041125 .icon.jsx-914041125{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWQvRGV2ZWxvcG1lbnQvc2l0ZS9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENTLEFBRytCLEFBV0UsQUFRSixjQUNoQixJQW5CVyxBQVdBLFNBQ0EsRUFYRixPQVlxQixFQVhGLDBCQVlULEVBWEQsZUFZSCxHQVhGLFVBWWIsR0FYaUIsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9zaWQvRGV2ZWxvcG1lbnQvc2l0ZS9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3ByaW5nIH0gZnJvbSAncmVhY3Qtc3ByaW5nL3JlbmRlcnByb3BzLmNqcyc7XG5pbXBvcnQgKiBhcyBlYXNpbmdzIGZyb20gJ2QzLWVhc2UnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9MYXlvdXQnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuY29uc3QgY3VzdG9tRWxhc3RpYyA9IGVhc2luZ3MuZWFzZUVsYXN0aWNPdXQucGVyaW9kKDAuNik7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8SGVhZD5cbiAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2hlYWRlci5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL3NrZXRjaC5qc1wiIC8+XG5cbiAgICA8c2VjdGlvblxuICAgICAgaWQ9XCJoZWFkZXJcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTcHJpbmdcbiAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCBtYXJnaW5Ub3A6ICctNTAlJyB9fVxuICAgICAgICB0bz17eyBvcGFjaXR5OiAxLCBtYXJnaW5Ub3A6ICctNSUnIH19XG4gICAgICAgIGNvbmZpZz17eyBkdXJhdGlvbjogMjAwMCwgZWFzaW5nOiBjdXN0b21FbGFzdGljIH19XG4gICAgICA+XG4gICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtwcm9wc30+XG4gICAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9TcHJpbmc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxuICAgICAgICA8SWNvbiBudW1iZXI9XCJmaXJzdFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2lka29wYXJkZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dpdEh1Yi5wbmdcIiBhbHQ9XCJHaXRIdWIgcHJvZmlsZVwiIHNpemU9XCI1MHB4XCIgcGFkZGluZ1JpZ2h0PVwiMTBweFwiIC8+XG4gICAgICAgIDxJY29uIG51bWJlcj1cInNlY29uZFwiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2lkLWtvcGFyZGUtMzQxMTI4OTUvXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvTGlua2VkSW4ucG5nXCIgYWx0PVwiTGlua2VkSW4gcHJvZmlsZVwiIHNpemU9XCI1MHB4XCIgcGFkZGluZ1JpZ2h0PVwiMTNweFwiIC8+XG4gICAgICAgIDxJY29uIG51bWJlcj1cInRoaXJkXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaWQta29wYXJkZS0zNDExMjg5NS9cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9CbG9nZ2VyLnBuZ1wiIGFsdD1cIlBlcnNvbmFsIEJsb2cgb24gQmxvZ2dlclwiIHNpemU9XCI0M3B4XCIgcGFkZGluZ1JpZ2h0PVwiNXB4XCIgLz5cbiAgICAgICAgPEljb24gbnVtYmVyPVwiZm91cnRoXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaWQta29wYXJkZS0zNDExMjg5NS9cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9TdGFja092ZXJmbG93LnBuZ1wiIGFsdD1cIlN0YWNrT3ZlcmZsb3cgcHJvZmlsZVwiIHNpemU9XCI1MHB4XCIgcGFkZGluZ1JpZ2h0PVwiMHB4XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuc29jaWFsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDQxLjUlO1xuICAgICAgICAgICAgdG9wOiA3MHZoO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICM5OTk5OTk1OTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NTBweCkge1xuICAgICAgICAgICAgLnNvY2lhbCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAzNXZoO1xuICAgICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOTk5OTk5NTk7XG4gICAgICAgICAgICAgIGJvcmRlcnJhZGl1czogMTAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNvY2lhbCAuaWNvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/sid/Development/site/components/Header/index.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.26529d132a6457ff0b00.hot-update.js.map