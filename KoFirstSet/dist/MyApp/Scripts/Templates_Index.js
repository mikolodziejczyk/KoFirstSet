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
/******/ 	return __webpack_require__(__webpack_require__.s = 121);
/******/ })
/************************************************************************/
/******/ ({

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entry__ = __webpack_require__(122);

var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.people = ko.observableArray();
        this.makeFirstInactive = function () {
            _this.people()[0].to("2016-01-31");
        };
        this.people.push(new __WEBPACK_IMPORTED_MODULE_0__entry__["a" /* Entry */]("John", "Doe", "2010-01-01"));
        this.people.push(new __WEBPACK_IMPORTED_MODULE_0__entry__["a" /* Entry */]("Jane", "Smith", "2010-01-01", "2015-12-01", "Unknown 1/1", "UnknownCity"));
        this.people.push(new __WEBPACK_IMPORTED_MODULE_0__entry__["a" /* Entry */]("Tom", "Smith", "2010-01-01", "2015-12-01"));
        ko.applyBindings(this);
        console.log("App started succesfully.");
    }
    return App;
}());

var app = new App();
window["myApp"] = app;


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__address__ = __webpack_require__(123);

var Entry = /** @class */ (function () {
    function Entry(firstName, lastName, from, to, address1, city) {
        this.firstName = ko.observable();
        this.lastName = ko.observable();
        this.from = ko.observable();
        this.to = ko.observable();
        this.address = ko.observable();
        this.firstName(firstName);
        this.lastName(lastName);
        this.from(from);
        this.to(to);
        if (address1) {
            var address = new __WEBPACK_IMPORTED_MODULE_0__address__["a" /* Address */](address1, city);
            this.address(address);
        }
    }
    return Entry;
}());



/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var Address = /** @class */ (function () {
    function Address(address1, city) {
        this.address1 = ko.observable();
        this.city = ko.observable();
        this.address1(address1);
        this.city(city);
    }
    return Address;
}());



/***/ })

/******/ });
//# sourceMappingURL=Templates_Index.js.map