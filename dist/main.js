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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMstuff\", function() { return DOMstuff; });\nconst DOMstuff = {\r\n  //the form for to-do item info\r\n  createNewItemForm: () => {\r\n    console.info(\"Inside the createNewItemForm\");\r\n    let newItemForm = document.createElement(\"div\");\r\n    newItemForm.id = \"new-item-form\";\r\n    newItemForm.insertAdjacentHTML(\r\n      \"afterbegin\",\r\n      `\r\n    <input id=\"item-name\" type=\"text\" placeholder=\"Enter a title\" />\r\n    <input\r\n      id=\"item-description\"\r\n      type=\"text\"\r\n      placeholder=\"What do you need to do?\"\r\n    />\r\n    <input type=\"date\" id=\"item-due-date\" value=\"2020-03-27\" min=\"2020-03-25\" />\r\n    <input type=\"radio\" name=\"priority\" id=\"low\" checked />\r\n    <input type=\"radio\" name=\"priority\" id=\"medium\" />\r\n    <input type=\"radio\" name=\"priority\" id=\"high\" />\r\n    <button id=\"create\">Create an Item</button>`\r\n    );\r\n    document\r\n      .querySelector(\"#create-new-item-container\")\r\n      .appendChild(newItemForm);\r\n    console.log(\"Form created\");\r\n  },\r\n\r\n  removeItemFromDOM: (childID, parentID) => {\r\n    console.info(\"Inside the removeItemFromDOM\");\r\n    document\r\n      .querySelector(parentID)\r\n      .removeChild(document.querySelector(childID));\r\n    console.log(`Child: ${childID} removed from Parent: ${parentID}`);\r\n  },\r\n\r\n  //this will hold all the items\r\n  createItemsContainer: () => {\r\n    console.info(\"Inside the DOMstuff.displayToDoItems\");\r\n    let itemsContainer;\r\n    console.group(\"Checks for item container and creates if necessary\");\r\n    //creates a container for the item if it doesn't already exist\r\n    if (!document.querySelector(\"#item-container\")) {\r\n      itemsContainer = document.createElement(\"section\");\r\n      itemsContainer.id = \"item-container\";\r\n      document.body.appendChild(itemsContainer);\r\n      console.log(\"itemContainer didn't exist but now does\");\r\n    } else {\r\n      itemsContainer = document.querySelector(\"#item-container\");\r\n      console.log(\"itemContainer already existed so wasn't created again\");\r\n    }\r\n    console.groupEnd();\r\n  },\r\n  //creates items to populate the item\r\n  createItem: arrayOfItems => {\r\n    console.info(\"Inside the DOMstuff.createItem\");\r\n    //add items to container\r\n    console.group(\"Creates items and appends them\");\r\n    console.time(\"Time to build all items and append them\");\r\n    let itemsContainer = document.querySelector(\"#item-container\");\r\n\r\n    let itemsArray = arrayOfItems;\r\n    //if (project != \"\") {\r\n    //  console.log(\"About to perform the filter function\");\r\n    //  itemsArray = arrayOfItems.filter(item => item.parentID == project);\r\n    //}\r\n\r\n    arrayOfItems.map(item => {\r\n      //only gets called once an item is found in the array that doesn't already exist in the DOM\r\n      const createItemInDiv = () => {\r\n        //create the div that will hold an item\r\n        console.info(\"Inside the createItemInDiv\");\r\n        let itemDiv = document.createElement(\"div\");\r\n        itemDiv.classList.add(\"item\");\r\n        itemDiv.id = itemsArray.indexOf(item);\r\n        itemDiv.insertAdjacentHTML(\r\n          \"afterbegin\",\r\n          `<h4>Title: ${item.name}</h4>\r\n        <h4>Due Date:${item.dueDate}</h4>\r\n        <h4>Description:${item.description}</h4>\r\n        <h4>Project:${item.parentID}</h4>\r\n        <h4>Priority:${item.priority}`\r\n        );\r\n        itemsContainer.appendChild(itemDiv);\r\n        console.log(`Item div with name, ${item.name}, created`);\r\n      };\r\n\r\n      {\r\n        //contains the ids of all the created items\r\n        let createdItemIds = [...itemsContainer.childNodes].map(item =>\r\n          parseInt(item.id)\r\n        );\r\n        if (createdItemIds.includes(itemsArray.indexOf(item))) {\r\n          console.group(\"FOUND\");\r\n          console.log(\r\n            `Item ${itemsArray.indexOf(\r\n              item\r\n            )} in the itemsArray was found among the createdItemIds.`\r\n          );\r\n          console.log(\r\n            `Item ${itemsArray.indexOf(item)} will not be created AGAIN`\r\n          );\r\n          console.groupEnd();\r\n        } else {\r\n          console.group(\"NOT FOUND\");\r\n          console.log(\r\n            `Item ${itemsArray.indexOf(\r\n              item\r\n            )} in the itemsArray was not found among the createdItemIds`\r\n          );\r\n          console.log(`So item ${itemsArray.indexOf(item)} will be created`);\r\n          createItemInDiv();\r\n          console.groupEnd();\r\n        }\r\n      }\r\n    });\r\n\r\n    console.timeEnd(\"Time to build all items and append them\");\r\n    console.groupEnd();\r\n  },\r\n\r\n  toggleActiveClass: (selectedProject, projects) => {\r\n    console.info(\"Inside the toggleActiveClass\");\r\n    console.log(`${selectedProject.id} project was clicked`);\r\n    console.table(projects, [\"id\"]);\r\n    projects.map(project => project.classList.remove(\"active\"));\r\n    selectedProject.classList.add(\"active\");\r\n  }\r\n\r\n  // toggleDisplay:\r\n};\r\n\n\n//# sourceURL=webpack:///./src/DOMstuff.js?");

/***/ }),

/***/ "./src/functionality.js":
/*!******************************!*\
  !*** ./src/functionality.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMstuff.js */ \"./src/DOMstuff.js\");\n\r\nconsole.log(\r\n  \"Beneath this is the imported DOMstuff object and it's encapsulated functions\"\r\n);\r\nconsole.log(_DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"]);\r\n\r\n//To Do objects\r\n//create dynamically using a factory function\r\n//properties:\r\n//title\r\n//description\r\n//dueDate (date-fns package for formatting)\r\n//priority\r\n\r\nconst toDoItemFactory = (\r\n  name,\r\n  description,\r\n  dueDate,\r\n  parentID,\r\n  priority = \"low\"\r\n) => {\r\n  return {\r\n    name,\r\n    description,\r\n    dueDate,\r\n    parentID,\r\n    priority\r\n  };\r\n};\r\n\r\nconst projectFactory = (id, itemsOfProject = []) => {\r\n  return { id, itemsOfProject };\r\n};\r\n\r\n//this stuff runs immediately\r\nlet itemsArray = [];\r\n//check if an array or a hash is better\r\n\r\nlet defaultProject = projectFactory(\"default\");\r\nlet anotherProject = projectFactory(\"another\");\r\nlet projectsHash = { defaultProject, anotherProject };\r\n\r\nfunction newItemForm() {\r\n  //when a button is clicked then the new form should be generated in\r\n  console.info(\"Inside the newItemForm\");\r\n\r\n  //toggles DOM existence of new item form\r\n  !document.querySelector(\"#new-item-form\")\r\n    ? _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"].createNewItemForm()\r\n    : _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"].removeItemFromDOM(\r\n        \"#new-item-form\",\r\n        \"#create-new-item-container\"\r\n      );\r\n\r\n  // only adds an event listener if the button exists\r\n  if (document.querySelector(\"#create\")) {\r\n    let createItemButton = document.querySelector(\"#create\");\r\n    createItemButton.addEventListener(\"click\", createToDoItem);\r\n  }\r\n}\r\n\r\n//sample of an item creation attached to an eventlistener\r\nfunction createToDoItem() {\r\n  console.group(\"createToDoItem\");\r\n  console.info(\"inside the createToDoItem function\");\r\n  let itemName = document.querySelector(\"#item-name\").value;\r\n  let itemDescription = document.querySelector(\"#item-description\").value;\r\n  let itemParentID = document.querySelector(\".active\").id;\r\n  let itemDueDate = document.querySelector(\"#item-due-date\").valueAsDate;\r\n  let itemPriority = [...document.getElementsByName(\"priority\")].filter(\r\n    priority => priority.checked\r\n  )[0].id;\r\n\r\n  let newItem = toDoItemFactory(\r\n    itemName,\r\n    itemDescription,\r\n    itemDueDate,\r\n    itemParentID,\r\n    itemPriority\r\n  );\r\n\r\n  itemsArray.push(newItem);\r\n  console.table(itemsArray);\r\n\r\n  Object.entries(projectsHash)\r\n    .filter(project => project[1].id == `${itemParentID}`)[0][1]\r\n    .itemsOfProject.push(newItem);\r\n  console.log(Object.entries(projectsHash));\r\n\r\n  console.log(\"the DOM stuff will follow now\");\r\n  console.groupEnd();\r\n  console.time(\"Time to do DOM stuff for a new item's creation\");\r\n  _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"].createItemsContainer();\r\n  _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"].createItem(itemsArray);\r\n  console.timeEnd(\"Time to do DOM stuff for a new item's creation\");\r\n}\r\n\r\n//add event listeners to each project div that exists\r\nlet projects = [...document.querySelectorAll(\".projects\")];\r\nprojects.map(projectDiv =>\r\n  projectDiv.addEventListener(\"click\", () => {\r\n    _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"].toggleActiveClass(projectDiv, projects);\r\n    //DOMstuff.toggleDisplay(itemsArray, projectDiv);\r\n  })\r\n);\r\n\r\n//New Item button\r\nlet newItemButton = document.querySelector(\"#new-item\");\r\nnewItemButton.addEventListener(\"click\", newItemForm);\r\n\n\n//# sourceURL=webpack:///./src/functionality.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var functionality = __webpack_require__(/*! ./functionality */ \"./src/functionality.js\");\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });