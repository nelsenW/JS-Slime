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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const startGame = document.getElementById(\"startgame\");\n  const canvas = document.querySelector(\"#canvas\");\n  const ctx = canvas.getContext('2d');\n  canvas.height = window.innerHeight;\n  canvas.width = window.innerWidth;\n  let newGameView = new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\n  startGame.addEventListener(\"click\", () => {\n    newGameView.start();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUdBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFLO0VBQy9DLE1BQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFdBQXhCLENBQWxCO0VBQ0EsTUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtFQUNBLE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVo7RUFFQUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCQyxNQUFNLENBQUNDLFdBQXZCO0VBQ0FOLE1BQU0sQ0FBQ08sS0FBUCxHQUFlRixNQUFNLENBQUNHLFVBQXRCO0VBRUEsSUFBSUMsV0FBVyxHQUFHLElBQUlkLDZEQUFKLENBQWFPLEdBQWIsRUFBa0JGLE1BQWxCLENBQWxCO0VBRUFGLFNBQVMsQ0FBQ0QsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsTUFBTTtJQUN4Q1ksV0FBVyxDQUFDQyxLQUFaO0VBQ0QsQ0FGRDtBQUdILENBYkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXcuanNcIlxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+e1xuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRnYW1lXCIpXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIGxldCBuZXdHYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjdHgsIGNhbnZhcyk7XG4gICAgXG4gICAgc3RhcnRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBuZXdHYW1lVmlldy5zdGFydCgpOyBcbiAgICB9KVxufSlcbiJdLCJuYW1lcyI6WyJHYW1lVmlldyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm5ld0dhbWVWaWV3Iiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _slime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slime.js */ \"./src/scripts/slime.js\");\n\nclass Game {\n  constructor() {\n    this.gameSpeed = 20;\n    this.slime = new _slime_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([50, 50], this);\n  }\n\n  draw(ctx, canvas) {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    this.slime.animate(ctx);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxNQUFNQyxJQUFOLENBQVU7RUFDckJDLFdBQVcsR0FBRTtJQUNULEtBQUtDLFNBQUwsR0FBaUIsRUFBakI7SUFDQSxLQUFLQyxLQUFMLEdBQWEsSUFBSUosaURBQUosQ0FBVSxDQUFDLEVBQUQsRUFBSSxFQUFKLENBQVYsRUFBbUIsSUFBbkIsQ0FBYjtFQUNIOztFQUVESyxJQUFJLENBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFhO0lBQ2JELEdBQUcsQ0FBQ0UsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JELE1BQU0sQ0FBQ0UsS0FBM0IsRUFBa0NGLE1BQU0sQ0FBQ0csTUFBekM7SUFDQSxLQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUJMLEdBQW5CO0VBQ0g7O0FBVG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGltZSBmcm9tIFwiLi9zbGltZS5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5nYW1lU3BlZWQgPSAyMDtcbiAgICAgICAgdGhpcy5zbGltZSA9IG5ldyBTbGltZShbNTAsNTBdICx0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCwgY2FudmFzKXtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnNsaW1lLmFuaW1hdGUoY3R4KVxuICAgIH1cbn0gIl0sIm5hbWVzIjpbIlNsaW1lIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiZ2FtZVNwZWVkIiwic2xpbWUiLCJkcmF3IiwiY3R4IiwiY2FudmFzIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJhbmltYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/scripts/game.js\");\n\nclass GameView {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  start() {\n    this.bindKeyHandlers(); // setInterval(() => {\n    //     this.game.draw(this.ctx, this.canvas);\n    // }, this.gameSpeed);\n  }\n\n  bindKeyHandlers() {\n    window.addEventListener(\"keydown\", e => {\n      switch (e.code) {\n        case \"ArrowUp\":\n          this.game.slime.move(\"jump\");\n          break;\n\n        case \"ArrowLeft\":\n          this.game.slime.move(\"move left\");\n          break;\n\n        case \"ArrowRight\":\n          this.game.slime.move(\"move right\");\n          break;\n\n        case \"ArrowDown\":\n          this.game.slime.move(\"crouch\");\n          break;\n      }\n    });\n    window.addEventListener(\"keyup\", e => {});\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLE1BQU1DLFFBQU4sQ0FBZTtFQUMxQkMsV0FBVyxDQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBYTtJQUNwQixLQUFLRCxHQUFMLEdBQVdBLEdBQVg7SUFDQSxLQUFLQyxNQUFMLEdBQWNBLE1BQWQ7SUFDQSxLQUFLQyxJQUFMLEdBQVksSUFBSUwsZ0RBQUosRUFBWjtFQUNIOztFQUVETSxLQUFLLEdBQUU7SUFDSCxLQUFLQyxlQUFMLEdBREcsQ0FFSDtJQUNBO0lBQ0E7RUFDSDs7RUFFREEsZUFBZSxHQUFHO0lBQ2RDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBb0NDLENBQUQsSUFBTztNQUN0QyxRQUFPQSxDQUFDLENBQUNDLElBQVQ7UUFDSSxLQUFLLFNBQUw7VUFDSSxLQUFLTixJQUFMLENBQVVPLEtBQVYsQ0FBZ0JDLElBQWhCLENBQXFCLE1BQXJCO1VBQ0E7O1FBQ0osS0FBSyxXQUFMO1VBQ0ksS0FBS1IsSUFBTCxDQUFVTyxLQUFWLENBQWdCQyxJQUFoQixDQUFxQixXQUFyQjtVQUNBOztRQUNKLEtBQUssWUFBTDtVQUNJLEtBQUtSLElBQUwsQ0FBVU8sS0FBVixDQUFnQkMsSUFBaEIsQ0FBcUIsWUFBckI7VUFDQTs7UUFDSixLQUFLLFdBQUw7VUFDSSxLQUFLUixJQUFMLENBQVVPLEtBQVYsQ0FBZ0JDLElBQWhCLENBQXFCLFFBQXJCO1VBQ0E7TUFaUjtJQWNILENBZkQ7SUFnQkFMLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBa0NDLENBQUQsSUFBSyxDQUNyQyxDQUREO0VBRUg7O0FBakN5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcz84MGVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWUuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpe1xuICAgICAgICB0aGlzLmJpbmRLZXlIYW5kbGVycygpO1xuICAgICAgICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCwgdGhpcy5jYW52YXMpO1xuICAgICAgICAvLyB9LCB0aGlzLmdhbWVTcGVlZCk7XG4gICAgfVxuXG4gICAgYmluZEtleUhhbmRsZXJzICgpe1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChlLmNvZGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zbGltZS5tb3ZlKFwianVtcFwiKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc2xpbWUubW92ZShcIm1vdmUgbGVmdFwiKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc2xpbWUubW92ZShcIm1vdmUgcmlnaHRcIilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc2xpbWUubW92ZShcImNyb3VjaFwiKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSk9PntcbiAgICAgICAgfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImNvbnN0cnVjdG9yIiwiY3R4IiwiY2FudmFzIiwiZ2FtZSIsInN0YXJ0IiwiYmluZEtleUhhbmRsZXJzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwic2xpbWUiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/slime.js":
/*!******************************!*\
  !*** ./src/scripts/slime.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slime; }\n/* harmony export */ });\nconst CONSTANTS = {\n  GRAVITY: 0.98,\n  TERMINAL_VEL: 35,\n  SLIME_RADIUS: 20\n};\nclass Slime {\n  constructor(pos, game) {\n    this.pos = pos;\n    this.vel = [0, 0];\n    this.radius = 20;\n    this.game = game;\n    this.color = \"black\";\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawSlime(ctx);\n  }\n\n  drawSlime(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fill();\n  }\n\n  move(slimeMove) {\n    switch (slimeMove) {\n      case \"jump\":\n        this.vel[1] -= 8;\n        break;\n\n      case \"move left\":\n        this.vel[0] -= 8;\n        break;\n\n      case \"move right\":\n        this.vel[0] += 8;\n        break;\n\n      case \"crouch\":\n        this.crouch();\n        break;\n    }\n  }\n\n  crouch() {\n    console.log(\"crouch\");\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zbGltZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsU0FBUyxHQUFHO0VBQ2RDLE9BQU8sRUFBRSxJQURLO0VBRWRDLFlBQVksRUFBRSxFQUZBO0VBR2RDLFlBQVksRUFBRTtBQUhBLENBQWxCO0FBT2UsTUFBTUMsS0FBTixDQUFXO0VBRXRCQyxXQUFXLENBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFXO0lBQ2xCLEtBQUtELEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtFLEdBQUwsR0FBVyxDQUFDLENBQUQsRUFBRyxDQUFILENBQVg7SUFDQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUtGLElBQUwsR0FBWUEsSUFBWjtJQUNBLEtBQUtHLEtBQUwsR0FBYSxPQUFiO0VBQ0g7O0VBRURDLE9BQU8sQ0FBQ0MsR0FBRCxFQUFLO0lBQ1IsS0FBS0MsSUFBTDtJQUNBLEtBQUtDLFNBQUwsQ0FBZUYsR0FBZjtFQUNIOztFQUdERSxTQUFTLENBQUNGLEdBQUQsRUFBSztJQUNWQSxHQUFHLENBQUNHLFNBQUosR0FBZ0IsS0FBS0wsS0FBckI7SUFDQUUsR0FBRyxDQUFDSSxTQUFKO0lBQ0FKLEdBQUcsQ0FBQ0ssR0FBSixDQUFRLEtBQUtYLEdBQUwsQ0FBUyxDQUFULENBQVIsRUFBcUIsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBckIsRUFBa0MsS0FBS0csTUFBdkMsRUFBK0MsQ0FBL0MsRUFBa0QsSUFBSVMsSUFBSSxDQUFDQyxFQUEzRDtJQUNBUCxHQUFHLENBQUNRLElBQUo7RUFDSDs7RUFFRFAsSUFBSSxDQUFDUSxTQUFELEVBQVc7SUFDWCxRQUFRQSxTQUFSO01BQ0ksS0FBSyxNQUFMO1FBQ0ksS0FBS2IsR0FBTCxDQUFTLENBQVQsS0FBZSxDQUFmO1FBQ0E7O01BQ0osS0FBSyxXQUFMO1FBQ0ksS0FBS0EsR0FBTCxDQUFTLENBQVQsS0FBZSxDQUFmO1FBQ0E7O01BQ0osS0FBSyxZQUFMO1FBQ0ksS0FBS0EsR0FBTCxDQUFTLENBQVQsS0FBZSxDQUFmO1FBQ0E7O01BQ0osS0FBSyxRQUFMO1FBQ0ksS0FBS2MsTUFBTDtRQUNBO0lBWlI7RUFjSDs7RUFFREEsTUFBTSxHQUFFO0lBQ0pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7RUFDSDs7QUExQ3FCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvc2xpbWUuanM/NjczMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC45OCxcbiAgICBURVJNSU5BTF9WRUw6IDM1LCBcbiAgICBTTElNRV9SQURJVVM6IDIwXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpbWV7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3MsIGdhbWUpeyBcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgICAgIHRoaXMudmVsID0gWzAsMF07XG4gICAgICAgIHRoaXMucmFkaXVzID0gMjA7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImJsYWNrXCJcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCl7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICB0aGlzLmRyYXdTbGltZShjdHgpXG4gICAgfVxuXG5cbiAgICBkcmF3U2xpbWUoY3R4KXtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgbW92ZShzbGltZU1vdmUpe1xuICAgICAgICBzd2l0Y2ggKHNsaW1lTW92ZSl7XG4gICAgICAgICAgICBjYXNlIFwianVtcFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudmVsWzFdIC09IDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibW92ZSBsZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxbMF0gLT0gODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtb3ZlIHJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxbMF0gKz0gODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcm91Y2hcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3VjaCgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcm91Y2goKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcm91Y2hcIilcbiAgICB9XG59Il0sIm5hbWVzIjpbIkNPTlNUQU5UUyIsIkdSQVZJVFkiLCJURVJNSU5BTF9WRUwiLCJTTElNRV9SQURJVVMiLCJTbGltZSIsImNvbnN0cnVjdG9yIiwicG9zIiwiZ2FtZSIsInZlbCIsInJhZGl1cyIsImNvbG9yIiwiYW5pbWF0ZSIsImN0eCIsIm1vdmUiLCJkcmF3U2xpbWUiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwic2xpbWVNb3ZlIiwiY3JvdWNoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/slime.js\n");

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