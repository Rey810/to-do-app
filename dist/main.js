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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DOMstuff.js":
/*!*************************!*\
  !*** ./src/DOMstuff.js ***!
  \*************************/
/*! exports provided: DOMstuff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMstuff\", function() { return DOMstuff; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar DOMstuff = {\n  createItemsContainer: function createItemsContainer() {\n    console.info(\"Inside the DOMstuff.displayToDoItems\");\n    var itemsContainer;\n    console.group(\"Checks for item container and creates if necessary\"); //creates a container for the item if it doesn't already exist\n\n    if (!document.querySelector(\"#item-container\")) {\n      itemsContainer = document.createElement(\"section\");\n      itemsContainer.id = \"item-container\";\n      document.body.appendChild(itemsContainer);\n      console.log(\"itemContainer didn't exist but now does\");\n    } else {\n      itemsContainer = document.querySelector(\"#item-container\");\n      console.log(\"itemContainer already existed so wasn't created again\");\n    }\n\n    console.groupEnd();\n  },\n  //creates items to populate the item\n  createItem: function createItem(itemsArray) {\n    console.info(\"Inside the DOMstuff.createItem\"); //add items to container\n\n    console.group(\"Creates items and appends them\");\n    console.time(\"Time to build all items and append them\");\n    var itemsContainer = document.querySelector(\"#item-container\");\n    itemsArray.map(function (item) {\n      var createItemInDiv = function createItemInDiv() {\n        //create the div that will hold an item\n        console.info(\"Inside the createItemInDiv\");\n        var itemDiv = document.createElement(\"div\");\n        itemDiv.classList.add(\"item\");\n        itemDiv.id = itemsArray.indexOf(item);\n        itemDiv.insertAdjacentHTML(\"afterbegin\", \"<h4>\".concat(item.name, \"</h4>\\n        <h4>\").concat(item.dueDate, \"</h4>\\n        <h4>\").concat(item.description, \"</h4>\\n        <h4>\").concat(item.priority));\n        itemsContainer.appendChild(itemDiv);\n        console.log(\"Item div with name, \".concat(item.name, \", created\"));\n      };\n\n      {\n        //contains the ids of all the created items\n        var createdItemIds = _toConsumableArray(itemsContainer.childNodes).map(function (item) {\n          return parseInt(item.id);\n        });\n\n        if (createdItemIds.includes(itemsArray.indexOf(item))) {\n          console.group(\"FOUND\");\n          console.log(\"Item \".concat(itemsArray.indexOf(item), \" in the itemsArray was found among the createdItemIds.\"));\n          console.log(\"Item \".concat(itemsArray.indexOf(item), \" will not be created AGAIN\"));\n          console.groupEnd();\n        } else {\n          console.group(\"NOT FOUND\");\n          console.log(\"Item \".concat(itemsArray.indexOf(item), \" in the itemsArray was not found among the createdItemIds\"));\n          console.log(\"So item \".concat(itemsArray.indexOf(item), \" will be created\"));\n          createItemInDiv();\n          console.groupEnd();\n        }\n      }\n    });\n    console.timeEnd(\"Time to build all items and append them\");\n    console.groupEnd();\n  }\n};\n\n//# sourceURL=webpack:///./src/DOMstuff.js?");

/***/ }),

/***/ "./src/functionality.js":
/*!******************************!*\
  !*** ./src/functionality.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMstuff.js */ \"./src/DOMstuff.js\");\n\nconsole.log(\"Beneath this is the imported DOMstuff object and it's encapsulated functions\");\nconsole.log(_DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"]); //To Do objects\n//create dynamically using a factory function\n//properties:\n//title\n//description\n//dueDate (date-fns package for formatting)\n//priority\n\nvar toDoItemFactory = function toDoItemFactory(dueDate) {\n  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"No Name\";\n  var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n  var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"low\";\n  return {\n    name: name,\n    dueDate: dueDate,\n    description: description,\n    priority: priority\n  };\n}; //sample items\n\n\nvar item1 = toDoItemFactory(\"First Item\", \"01-20-2020\", \"This is an item\", \"high\");\nvar item2 = toDoItemFactory(\"Second Item\", \"02-20-2020\", \"This is the second item\", \"low\"); //sample of an item creation attached to an eventlistener\n\nfunction createToDoItem() {\n  console.group(\"createToDoItem\");\n  console.info(\"inside the createToDoItem function\");\n  var newItem = toDoItemFactory();\n  itemsArray.push(newItem);\n  console.table(itemsArray);\n  console.log(\"the DOM stuff will follow now\");\n  console.groupEnd();\n  console.time(\"Time to do DOM stuff for a new item's creation\");\n  _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"].createItemsContainer();\n  _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"].createItem(itemsArray);\n  console.timeEnd(\"Time to do DOM stuff for a new item's creation\");\n}\n\nvar createItemButton = document.querySelector(\"#create\");\ncreateItemButton.addEventListener(\"click\", createToDoItem);\nvar itemsArray = []; //Projects or Lists\n//start off with a default list\n//create dynamically\n\n//# sourceURL=webpack:///./src/functionality.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var functionality = __webpack_require__(/*! ./functionality */ \"./src/functionality.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });