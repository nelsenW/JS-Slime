/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector(\"#canvas\");\n  const ctx = canvas.getContext('2d');\n  canvas.height = window.innerHeight;\n  canvas.width = window.innerWidth;\n  let newGameView = new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  newGameView.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFLO0VBQy9DLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFNBQXZCLENBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBRUFILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQkMsTUFBTSxDQUFDQyxXQUF2QjtFQUNBTixNQUFNLENBQUNPLEtBQVAsR0FBZUYsTUFBTSxDQUFDRyxVQUF0QjtFQUdBLElBQUlDLFdBQVcsR0FBRyxJQUFJWiw2REFBSixDQUFhSyxHQUFiLENBQWxCO0VBQ0FPLFdBQVcsQ0FBQ0MsS0FBWjtBQUNILENBVkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXcuanNcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PntcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG5cbiAgICBsZXQgbmV3R2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY3R4KTtcbiAgICBuZXdHYW1lVmlldy5zdGFydCgpO1xufSlcbiJdLCJuYW1lcyI6WyJHYW1lVmlldyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJuZXdHYW1lVmlldyIsInN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _slime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slime.js */ \"./src/scripts/slime.js\");\n\nclass Game {\n  constructor() {\n    this.slime = new _slime_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([50, 50], this);\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    this.slime.draw(ctx);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxNQUFNQyxJQUFOLENBQVU7RUFDckJDLFdBQVcsR0FBRTtJQUNULEtBQUtDLEtBQUwsR0FBYSxJQUFJSCxpREFBSixDQUFVLENBQUMsRUFBRCxFQUFJLEVBQUosQ0FBVixFQUFtQixJQUFuQixDQUFiO0VBQ0g7O0VBRURJLElBQUksQ0FBQ0MsR0FBRCxFQUFLO0lBQ0xBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JDLE1BQU0sQ0FBQ0MsS0FBM0IsRUFBa0NELE1BQU0sQ0FBQ0UsTUFBekM7SUFDQSxLQUFLTixLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEdBQWhCO0VBQ0g7O0FBUm9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGltZSBmcm9tIFwiLi9zbGltZS5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zbGltZSA9IG5ldyBTbGltZShbNTAsNTBdICx0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCl7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zbGltZS5kcmF3KGN0eClcbiAgICB9XG59ICJdLCJuYW1lcyI6WyJTbGltZSIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsInNsaW1lIiwiZHJhdyIsImN0eCIsImNsZWFyUmVjdCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/scripts/game.js\");\n\nclass GameView {\n  constructor(ctx) {\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ctx = ctx;\n    this.gameSpeed = 20;\n  }\n\n  start() {\n    setInterval(() => {\n      this.game.draw(this.ctx);\n    }, this.gameSpeed);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLE1BQU1DLFFBQU4sQ0FBZTtFQUMxQkMsV0FBVyxDQUFDQyxHQUFELEVBQUs7SUFDWixLQUFLQyxJQUFMLEdBQVksSUFBSUosZ0RBQUosRUFBWjtJQUNBLEtBQUtHLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtFLFNBQUwsR0FBaUIsRUFBakI7RUFDSDs7RUFFREMsS0FBSyxHQUFFO0lBQ0hDLFdBQVcsQ0FBQyxNQUFNO01BQ2QsS0FBS0gsSUFBTCxDQUFVSSxJQUFWLENBQWUsS0FBS0wsR0FBcEI7SUFDSCxDQUZVLEVBRVIsS0FBS0UsU0FGRyxDQUFYO0VBR0g7O0FBWHlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzPzgwZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZS5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lU3BlZWQgPSAyMDtcbiAgICB9XG5cbiAgICBzdGFydCgpe1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgIH0sIHRoaXMuZ2FtZVNwZWVkKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImNvbnN0cnVjdG9yIiwiY3R4IiwiZ2FtZSIsImdhbWVTcGVlZCIsInN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/slime.js":
/*!******************************!*\
  !*** ./src/scripts/slime.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slime; }\n/* harmony export */ });\nclass Slime {\n  constructor(pos, game) {\n    this.pos = pos;\n    this.vel = [0, 0];\n    this.radius = 20;\n    this.game = game;\n    this.color = \"black\";\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fill();\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zbGltZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsS0FBTixDQUFXO0VBRXRCQyxXQUFXLENBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFXO0lBQ2xCLEtBQUtELEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtFLEdBQUwsR0FBVyxDQUFDLENBQUQsRUFBRyxDQUFILENBQVg7SUFDQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUtGLElBQUwsR0FBWUEsSUFBWjtJQUNBLEtBQUtHLEtBQUwsR0FBYSxPQUFiO0VBQ0g7O0VBRURDLElBQUksQ0FBQ0MsR0FBRCxFQUFLO0lBQ0xBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixLQUFLSCxLQUFyQjtJQUNBRSxHQUFHLENBQUNFLFNBQUo7SUFDQUYsR0FBRyxDQUFDRyxHQUFKLENBQVEsS0FBS1QsR0FBTCxDQUFTLENBQVQsQ0FBUixFQUFxQixLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUFyQixFQUFrQyxLQUFLRyxNQUF2QyxFQUErQyxDQUEvQyxFQUFrRCxJQUFJTyxJQUFJLENBQUNDLEVBQTNEO0lBQ0FMLEdBQUcsQ0FBQ00sSUFBSjtFQUNIOztBQWZxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtcHJvamVjdC8uL3NyYy9zY3JpcHRzL3NsaW1lLmpzPzY3MzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpbWV7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3MsIGdhbWUpeyBcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgICAgIHRoaXMudmVsID0gWzAsMF07XG4gICAgICAgIHRoaXMucmFkaXVzID0gMjA7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImJsYWNrXCJcbiAgICB9XG5cbiAgICBkcmF3KGN0eCl7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiU2xpbWUiLCJjb25zdHJ1Y3RvciIsInBvcyIsImdhbWUiLCJ2ZWwiLCJyYWRpdXMiLCJjb2xvciIsImRyYXciLCJjdHgiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/slime.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;