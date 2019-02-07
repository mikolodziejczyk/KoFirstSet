/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 114);
/******/ })
/************************************************************************/
/******/ ({

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__consumeAsync_spec__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__consumeAsync_spec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__consumeAsync_spec__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__composeAsync_spec__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__composeAsync_spec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__composeAsync_spec__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repository_spec__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sequentialDownload_spec__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sequentialDownload_spec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__sequentialDownload_spec__);






/***/ }),

/***/ 115:
/***/ (function(module, exports) {

describe("Async functions for final consuming", function () {
});


/***/ }),

/***/ 116:
/***/ (function(module, exports) {



/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repository__ = __webpack_require__(118);

describe("Testing repository methods", function () {
    var repository = new __WEBPACK_IMPORTED_MODULE_0__repository__["a" /* Repository */]();
    it("getText resolves when expected", function (done) {
        repository.getText("John", false).then(function (value) {
            expect(value).toBe("John");
            done();
        }).catch(function () {
            fail("Shouldn't fail here.");
            done();
        });
    });
    it("getText fails when expected", function (done) {
        repository.getText("John", true).then(function (value) {
            fail("Shouldn't resolve here.");
            done();
        }).catch(function () {
            done();
        });
    });
    it("getLength resolves when expected", function (done) {
        repository.getLength("John", false).then(function (value) {
            expect(value).toBe(4);
            done();
        }).catch(function () {
            fail("Shouldn't fail here.");
            done();
        });
    });
    it("getLength fails when expected", function (done) {
        repository.getText("John", true).then(function (value) {
            fail("Shouldn't resolve here.");
            done();
        }).catch(function () {
            done();
        });
    });
});


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
var Repository = /** @class */ (function () {
    function Repository() {
    }
    Repository.prototype.getText = function (input, shouldFail) {
        var p = new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                if (!shouldFail) {
                    resolve(input);
                }
                else {
                    reject();
                }
            }, 10);
        });
        return p;
    };
    Repository.prototype.getLength = function (input, shouldFail) {
        var p = new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                try {
                    if (!shouldFail) {
                        resolve(input.length);
                    }
                    else {
                        reject();
                    }
                }
                catch (e) {
                    reject();
                }
            }, 10);
        });
        return p;
    };
    return Repository;
}());



/***/ }),

/***/ 119:
/***/ (function(module, exports) {

describe("Sequential download test", function () {
});


/***/ })

/******/ });
//# sourceMappingURL=UnitTesting_Async_Spec.js.map