/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("var TopBtn = document.querySelector('.btn');\nvar Nav = document.querySelector('nav');\nvar Imgitems = document.querySelectorAll('img');\ndocument.onload = function () {\n  Imgitems.forEach(function (i) {\n    i.setAttribute('loading', 'lazy');\n  });\n}();\nTopBtn.addEventListener('click', function () {\n  var scY = window.scrollY;\n  scY = Nav.scrollTop;\n  window.scrollTo(0, scY);\n});\n\n//google map set\n\n// 將 lat 與 lng 帶入後續的 Google Maps API 中\n\nfunction initMap() {\n  var map = new google.maps.Map(document.getElementById(\"map\"), {\n    center: {\n      lat: 24.960855,\n      lng: 121.259092\n    },\n    zoom: 15 // 設定較高的縮放級別\n  });\n\n  var marker = new google.maps.Marker({\n    position: map.getCenter(),\n    map: map,\n    title: '現在位置'\n  });\n  var dataLayer = new google.maps.Data();\n\n  // 加載 GeoJSON 數據\n  dataLayer.loadGeoJson('/src/map.geojson');\n\n  // 將數據添加到地圖上\n  dataLayer.setMap(map);\n\n  //   let infoWindow = new google.maps.infoWindow();\n  // if(navigator.geolocation){\n\n  //     // 創建一個 Google Maps 地圖實例\n  //     navigator.geolocation.getCurrentPosition(\n  //       (position) => {\n  //         const pos = {\n  //           lat: position.coords.latitude,\n  //           lng: position.coords.longitude,\n  //         };\n\n  //         infoWindow.setPosition(pos);\n  //         infoWindow.setContent(\"Location found.\");\n  //         infoWindow.open(map,marker);\n  //         map.setCenter(pos);\n\n  //       },\n  //       () => {\n  //         handleLocationError(true, infoWindow, map.getCenter());\n  //       }\n  //     );\n\n  //   ;\n\n  // }\n  // else{\n  //     handleLocationError(false,infoWindow,map.getCenter())\n  // }\n}\n\nfunction handleLocationError(browserHasGeolocation, infoWindow, pos) {\n  infoWindow.setPosition(pos);\n  infoWindow.setContent(browserHasGeolocation ? \"Error: The Geolocation service failed.\" : \"Error: Your browser doesn't support geolocation.\");\n  infoWindow.open(map);\n}\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./app.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;