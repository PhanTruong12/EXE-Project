"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/gtag */ \"./utils/gtag.ts\");\n\n\n\n\nclass CustomDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    static async getInitialProps(ctx) {\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n        // Check if in production\n        const isProduction = \"development\" === \"production\";\n        return {\n            ...initialProps,\n            isProduction\n        };\n    }\n    render() {\n        const { isProduction } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: isProduction && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                                async: true,\n                                src: `https://www.googletagmanager.com/gtag/js?id=${_utils_gtag__WEBPACK_IMPORTED_MODULE_3__.GA_TRACKING_ID}`\n                            }, void 0, false, {\n                                fileName: \"E:\\\\FALL24\\\\exe\\\\EXE-Project\\\\EXE-Project\\\\pages\\\\_document.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: `\r\n                    window.dataLayer = window.dataLayer || [];\r\n                    function gtag(){dataLayer.push(arguments);}\r\n                    gtag('js', new Date());\r\n\r\n                    gtag('config', '${_utils_gtag__WEBPACK_IMPORTED_MODULE_3__.GA_TRACKING_ID}', {\r\n                      page_path: window.location.pathname,\r\n                    });\r\n                  `\n                                }\n                            }, void 0, false, {\n                                fileName: \"E:\\\\FALL24\\\\exe\\\\EXE-Project\\\\EXE-Project\\\\pages\\\\_document.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\FALL24\\\\exe\\\\EXE-Project\\\\EXE-Project\\\\pages\\\\_document.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\FALL24\\\\exe\\\\EXE-Project\\\\EXE-Project\\\\pages\\\\_document.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"E:\\\\FALL24\\\\exe\\\\EXE-Project\\\\EXE-Project\\\\pages\\\\_document.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"E:\\\\FALL24\\\\exe\\\\EXE-Project\\\\EXE-Project\\\\pages\\\\_document.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\FALL24\\\\exe\\\\EXE-Project\\\\EXE-Project\\\\pages\\\\_document.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\FALL24\\\\exe\\\\EXE-Project\\\\EXE-Project\\\\pages\\\\_document.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUN1RTtBQUN4RDtBQU1oQyxNQUFNTSx1QkFBdUJMLHNEQUFRQTtJQUNsRCxhQUFhTSxnQkFBZ0JDLEdBQW9CLEVBQTBCO1FBQ3pFLE1BQU1DLGVBQWUsTUFBTVIsb0VBQXdCLENBQUNPO1FBRXBELHlCQUF5QjtRQUN6QixNQUFNRSxlQUFlQyxrQkFBeUI7UUFFOUMsT0FBTztZQUNMLEdBQUdGLFlBQVk7WUFDZkM7UUFDRjtJQUNGO0lBRUFFLFNBQVM7UUFDUCxNQUFNLEVBQUVGLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQ0csS0FBSztRQUVuQyxxQkFDRSw4REFBQ0M7WUFBS0MsTUFBSzs7OEJBRVQsOERBQUNiLCtDQUFJQTs4QkFHRlEsOEJBQ0MsOERBQUNWLDJDQUFRQTs7MENBRVAsOERBQUNnQjtnQ0FDQ0MsS0FBSztnQ0FDTEMsS0FBSyxDQUFDLDRDQUE0QyxFQUFFYix1REFBY0EsQ0FBQyxDQUFDOzs7Ozs7MENBRXRFLDhEQUFDVztnQ0FDQ0cseUJBQXlCO29DQUN2QkMsUUFBUSxDQUFDOzs7OztvQ0FLUyxFQUFFZix1REFBY0EsQ0FBQzs7O2tCQUduQyxDQUFDO2dDQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNUiw4REFBQ2dCOztzQ0FFQyw4REFBQ2xCLCtDQUFJQTs7Ozs7c0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZWNvbW1lcmNlLy4vcGFnZXMvX2RvY3VtZW50LnRzeD9kMzdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0LCBEb2N1bWVudEluaXRpYWxQcm9wcywgRG9jdW1lbnRDb250ZXh0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcclxuaW1wb3J0IHsgR0FfVFJBQ0tJTkdfSUQgfSBmcm9tICcuLi91dGlscy9ndGFnJztcclxuXHJcbmludGVyZmFjZSBEb2N1bWVudFByb3BzIGV4dGVuZHMgRG9jdW1lbnRJbml0aWFsUHJvcHMge1xyXG4gIGlzUHJvZHVjdGlvbjogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21Eb2N1bWVudCBleHRlbmRzIERvY3VtZW50PERvY3VtZW50UHJvcHM+IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eDogRG9jdW1lbnRDb250ZXh0KTogUHJvbWlzZTxEb2N1bWVudFByb3BzPiB7XHJcbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGluIHByb2R1Y3Rpb25cclxuICAgIGNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5pbml0aWFsUHJvcHMsXHJcbiAgICAgIGlzUHJvZHVjdGlvbixcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXNQcm9kdWN0aW9uIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHsvKiBXZSBvbmx5IHdhbnQgdG8gYWRkIHRoZSBzY3JpcHRzIGlmIGluIHByb2R1Y3Rpb24gKi99XHJcbiAgICAgICAgICB7aXNQcm9kdWN0aW9uICYmIChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIHsvKiBHbG9iYWwgU2l0ZSBUYWcgKGd0YWcuanMpIC0gR29vZ2xlIEFuYWx5dGljcyAqL31cclxuICAgICAgICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICAgICAgICBhc3luY1xyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke0dBX1RSQUNLSU5HX0lEfWB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJyR7R0FfVFJBQ0tJTkdfSUR9Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICA8L2h0bWw+XHJcbiAgICApXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkZyYWdtZW50IiwiRG9jdW1lbnQiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJHQV9UUkFDS0lOR19JRCIsIkN1c3RvbURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiaW5pdGlhbFByb3BzIiwiaXNQcm9kdWN0aW9uIiwicHJvY2VzcyIsInJlbmRlciIsInByb3BzIiwiaHRtbCIsImxhbmciLCJzY3JpcHQiLCJhc3luYyIsInNyYyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "./utils/gtag.ts":
/*!***********************!*\
  !*** ./utils/gtag.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GA_TRACKING_ID: () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   event: () => (/* binding */ event),\n/* harmony export */   pageview: () => (/* binding */ pageview)\n/* harmony export */ });\nconst GA_TRACKING_ID = \"UA-114361661-6\" // This is your GA Tracking ID\n;\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({ action, category, label, value })=>{\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9ndGFnLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVPLE1BQU1BLGlCQUFpQkMsZ0JBQW9DLENBQUMsOEJBQThCO0NBQS9CO0FBR2xFLDRFQUE0RTtBQUNyRSxNQUFNRyxXQUFXLENBQUNDO0lBQ3ZCQyxPQUFPQyxJQUFJLENBQUMsVUFBVVAsZ0JBQWdCO1FBQ3BDUSxXQUFXSDtJQUNiO0FBQ0YsRUFBQztBQUVELDZFQUE2RTtBQUN0RSxNQUFNSSxRQUFRLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFpQjtJQUNyRVAsT0FBT0MsSUFBSSxDQUFDLFNBQVNHLFFBQVE7UUFDM0JJLGdCQUFnQkg7UUFDaEJJLGFBQWFIO1FBQ2JDLE9BQU9BO0lBQ1Q7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvLi91dGlscy9ndGFnLnRzPzEwZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3RhZ0V2ZW50VHlwZSB9IGZyb20gJ3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHQV9UUkFDS0lOR19JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOQUxZVElDU19JRCAvLyBUaGlzIGlzIHlvdXIgR0EgVHJhY2tpbmcgSURcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnlcclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvcGFnZXNcclxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIEdBX1RSQUNLSU5HX0lELCB7XHJcbiAgICBwYWdlX3BhdGg6IHVybCxcclxuICB9KVxyXG59XHJcblxyXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V2ZW50c1xyXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIGNhdGVnb3J5LCBsYWJlbCwgdmFsdWUgfTogR3RhZ0V2ZW50VHlwZSkgPT4ge1xyXG4gIHdpbmRvdy5ndGFnKCdldmVudCcsIGFjdGlvbiwge1xyXG4gICAgZXZlbnRfY2F0ZWdvcnk6IGNhdGVnb3J5LFxyXG4gICAgZXZlbnRfbGFiZWw6IGxhYmVsLFxyXG4gICAgdmFsdWU6IHZhbHVlLFxyXG4gIH0pXHJcbn0iXSwibmFtZXMiOlsiR0FfVFJBQ0tJTkdfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQU5BTFlUSUNTX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJjYXRlZ29yeSIsImxhYmVsIiwidmFsdWUiLCJldmVudF9jYXRlZ29yeSIsImV2ZW50X2xhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/gtag.ts\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();