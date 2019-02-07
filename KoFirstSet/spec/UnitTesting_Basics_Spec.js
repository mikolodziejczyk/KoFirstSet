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
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
/******/ })
/************************************************************************/
/******/ ({

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myclass_spec__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_spec__ = __webpack_require__(110);




/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myclass__ = __webpack_require__(109);

describe("This is a test suite", function () {
    var a;
    it("A passing test", function () {
        a = false;
        expect(a).toBe(false);
    });
    it("Another passing test", function () {
        a = false;
        expect(a).toBe(false);
    });
    it("A class test", function () {
        var mc = new __WEBPACK_IMPORTED_MODULE_0__myclass__["a" /* MyClass */]();
        var r = mc.add(1, 2);
        expect(r).toBe(3);
    });
});


/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyClass; });
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.add = function (first, second) {
        return first + second;
    };
    return MyClass;
}());



/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anotherclass__ = __webpack_require__(111);

describe("The second suite", function () {
    var a;
    it("A passing test", function () {
        a = false;
        expect(a).not.toBe(true);
    });
    it("Constructor should return an instance", function () {
        var instance = new __WEBPACK_IMPORTED_MODULE_0__anotherclass__["a" /* AnotherClass */]();
        expect(instance).toBeTruthy();
    });
    it("Equals a numeric value", function () {
        var a = 12;
        expect(a).toEqual(12);
        expect(a).not.toEqual(13);
        expect(a).toBeGreaterThan(11);
        expect(a).toBeGreaterThanOrEqual(12);
        expect(a).toBeLessThan(13);
        expect(a).toBeLessThanOrEqual(12);
    });
    it("Equals a string value", function () {
        var a = "hello";
        expect(a).toEqual("hello");
    });
    it("Equals object", function () {
        var a = { myProperty: "test" };
        var b = JSON.parse("{ \"myProperty\" : \"test\"}");
        expect(a).toEqual(b);
    });
    it("Matches", function () {
        var a = "Hello!";
        expect(a).toMatch(/hello/i);
        expect(a).not.toMatch(/^xxx/i);
    });
    it("Matches", function () {
        var a = "test";
        var b = undefined;
        var c = null;
        expect(a).toBeDefined();
        expect(b).toBeUndefined();
        expect(c).toBeNull();
        expect(b).not.toBeNull();
    });
    it("Contain", function () {
        var ar = ["Tom", "Dick", "Harry"];
        expect(ar).toContain("Harry");
        expect(ar).not.toContain("John");
    });
    it("Fails", function () {
        // fail("This test fails.");
    });
    it("Async test", function (done) {
        window.setTimeout(function () {
            expect(true).toBe(true);
            done();
        }, 1000);
    });
    it("Promise resolve test", function (done) {
        var p = __WEBPACK_IMPORTED_MODULE_0__anotherclass__["a" /* AnotherClass */].getPromise("Hello", false);
        p.then(function (s) {
            expect(s).toBe("Hello");
            done();
        });
        p.catch(function () { fail("The promise should not fail."); });
    });
    it("Promise fail test", function (done) {
        var p = __WEBPACK_IMPORTED_MODULE_0__anotherclass__["a" /* AnotherClass */].getPromise("Hello", true);
        p.then(function (s) { fail("The promise should not resolve."); });
        p.catch(function () { done(); });
    });
});


/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnotherClass; });
var AnotherClass = /** @class */ (function () {
    function AnotherClass() {
        console.log("An instance of AnotherClass created.");
    }
    AnotherClass.getPromise = function (result, shouldFail) {
        if (shouldFail === void 0) { shouldFail = false; }
        var p = new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                if (shouldFail)
                    reject();
                else
                    resolve(result);
            }, 100);
        });
        return p;
    };
    return AnotherClass;
}());



/***/ })

/******/ });
//# sourceMappingURL=UnitTesting_Basics_Spec.js.map