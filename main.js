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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMstuff\", function() { return DOMstuff; });\n/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/util.js */ \"./src/util/util.js\");\n\r\n\r\nconst DOMstuff = {\r\n  //the form for to-do item info\r\n  createNewItemForm: () => {\r\n    console.info(\"Inside the createNewItemForm\");\r\n    let newItemForm = document.createElement(\"div\");\r\n    newItemForm.id = \"new-item-form\";\r\n    newItemForm.insertAdjacentHTML(\r\n      \"afterbegin\",\r\n      `\r\n    <input id=\"item-name\" type=\"text\" placeholder=\"Enter a title\" />\r\n    <input\r\n      id=\"item-description\"\r\n      type=\"text\"\r\n      placeholder=\"What do you need to do?\"\r\n    />\r\n    <input type=\"date\" id=\"item-due-date\" value=\"2020-03-27\" min=\"2020-03-25\" />\r\n    <input type=\"radio\" name=\"priority\" id=\"low\" checked />\r\n    <input type=\"radio\" name=\"priority\" id=\"medium\" />\r\n    <input type=\"radio\" name=\"priority\" id=\"high\" />\r\n    <button id=\"create\">Create an Item</button>`\r\n    );\r\n    document\r\n      .querySelector(\"#create-new-item-container\")\r\n      .appendChild(newItemForm);\r\n    console.log(\"Form created\");\r\n  },\r\n\r\n  //this will hold all the items\r\n  createItemsContainer: () => {\r\n    console.info(\"Inside the DOMstuff.displayToDoItems\");\r\n    let itemsContainer;\r\n    console.group(\"Checks for item container and creates if necessary\");\r\n    //creates a container for the item if it doesn't already exist\r\n    if (!document.querySelector(\"#item-container\")) {\r\n      itemsContainer = document.createElement(\"section\");\r\n      itemsContainer.id = \"item-container\";\r\n      document.body.appendChild(itemsContainer);\r\n      console.log(\"itemContainer didn't exist but now does\");\r\n    } else {\r\n      itemsContainer = document.querySelector(\"#item-container\");\r\n      console.log(\"itemContainer already existed so wasn't created again\");\r\n    }\r\n    console.groupEnd();\r\n  },\r\n  //creates items to populate the item\r\n  createItem: arrayOfItems => {\r\n    console.info(\"Inside the DOMstuff.createItem\");\r\n    //add items to container\r\n    console.group(\"Creates items and appends them\");\r\n    console.time(\"Time to build all items and append them\");\r\n    let itemsContainer = document.querySelector(\"#item-container\");\r\n\r\n    let itemsArray = arrayOfItems;\r\n    //if (project != \"\") {\r\n    //  console.log(\"About to perform the filter function\");\r\n    //  itemsArray = arrayOfItems.filter(item => item.parentID == project);\r\n    //}\r\n\r\n    arrayOfItems.map(item => {\r\n      {\r\n        //contains the ids of all the created items\r\n        let createdItemIds = [...itemsContainer.childNodes].map(item =>\r\n          parseInt(item.id)\r\n        );\r\n\r\n        //checks whether an item in the array has been created or not\r\n        if (createdItemIds.includes(itemsArray.indexOf(item))) {\r\n          console.group(\"FOUND\");\r\n          console.log(\r\n            `Item ${itemsArray.indexOf(\r\n              item\r\n            )} in the itemsArray was found among the createdItemIds.`\r\n          );\r\n          console.log(\r\n            `Item ${itemsArray.indexOf(item)} will not be created AGAIN`\r\n          );\r\n          console.groupEnd();\r\n        } else {\r\n          console.group(\"NOT FOUND\");\r\n          console.log(\r\n            `Item ${itemsArray.indexOf(\r\n              item\r\n            )} in the itemsArray was not found among the createdItemIds`\r\n          );\r\n          console.log(`So item ${itemsArray.indexOf(item)} will be created`);\r\n          _util_util_js__WEBPACK_IMPORTED_MODULE_0__[\"createItemInDiv\"](item);\r\n          console.groupEnd();\r\n        }\r\n      }\r\n    });\r\n\r\n    console.timeEnd(\"Time to build all items and append them\");\r\n    console.groupEnd();\r\n  },\r\n\r\n  createNewProjectForm: () => {\r\n    console.info(\"Inside createNewProjectForm\");\r\n    let newProjectContainer = document.querySelector(\"#new-project-container\");\r\n    newProjectContainer.removeChild(\r\n      document.querySelector(\"#create-new-project\")\r\n    );\r\n    let newProjectForm = document.createElement(\"div\");\r\n    newProjectForm.id = \"new-project-form\";\r\n    newProjectForm.insertAdjacentHTML(\r\n      \"afterbegin\",\r\n      `<input type=\"text\" id=\"project-name\" placeholder=\"New Project\" />\r\n      <button id=\"submit-new-project\">Add Project</button>`\r\n    );\r\n    newProjectContainer.appendChild(newProjectForm);\r\n  },\r\n\r\n  addProject: project => {\r\n    console.log(\"Inside the addProject\");\r\n    console.log(\r\n      `Here is the id of the project to be added to DOM: ${project.id}`\r\n    );\r\n    //add project to DOM here\r\n    let projectsContainer = document.querySelector(\"#all-projects\");\r\n    let projectToAddToDOM = document.createElement(\"button\");\r\n    projectToAddToDOM.className = \"projects\";\r\n    projectToAddToDOM.id = `${project.id.toLowerCase()}`;\r\n    projectToAddToDOM.textContent = `${project.id.toUpperCase()}`;\r\n    projectsContainer.appendChild(projectToAddToDOM);\r\n    //remove the active class from the other projects\r\n    //and make the new project the active one\r\n    _util_util_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleActiveClass\"](projectToAddToDOM);\r\n    //add an eventlistener to newly created project\r\n    //an anonymous function is used so that parameters can be passed\r\n    projectToAddToDOM.addEventListener(\"click\", () =>\r\n      _util_util_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleActiveClass\"](projectToAddToDOM)\r\n    );\r\n    _util_util_js__WEBPACK_IMPORTED_MODULE_0__[\"newListener\"](`#${projectToAddToDOM.id}`, \"click\", () => {\r\n      _util_util_js__WEBPACK_IMPORTED_MODULE_0__[\"displayProjectItems\"](project);\r\n    });\r\n  },\r\n\r\n  createProject: arrayOfProjects => {\r\n    console.log(\"Inside the createProject\");\r\n    //check if project exists in the DOM already. If it doesn't, add it to the DOM\r\n    let projectsArray = arrayOfProjects;\r\n    let projects = document.querySelectorAll(\".projects\");\r\n\r\n    console.group(\r\n      `Loops through nodeList (length: ${projects.length}) and adds projects to DOM (if not already added)`\r\n    );\r\n    let DOMprojectIDs = [];\r\n    //loops through the node list and only adds the IDS of projects\r\n    console.log(\"Inserting DOMprojectIDS into an array\");\r\n    for (let i = 0; i < projects.length; i++) {\r\n      DOMprojectIDs.push(projects[i].id);\r\n    }\r\n    console.log(DOMprojectIDs);\r\n    //only includes projects that are not in the DOM\r\n    let filteredProjectsArray = projectsArray.filter(\r\n      project => !DOMprojectIDs.includes(project.id)\r\n    );\r\n    console.table(filteredProjectsArray);\r\n    // each project here gets passed to the addProject function to add it to the DOM\r\n    console.log(\r\n      `Number of projects to be added to DOM: ${filteredProjectsArray.length}`\r\n    );\r\n    //This will always be 1 or 0 in length\r\n    filteredProjectsArray.map(project => DOMstuff.addProject(project));\r\n    console.groupEnd();\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/DOMstuff.js?");

/***/ }),

/***/ "./src/functionality.js":
/*!******************************!*\
  !*** ./src/functionality.js ***!
  \******************************/
/*! exports provided: itemsArray, deleteItemFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"itemsArray\", function() { return itemsArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteItemFromArray\", function() { return deleteItemFromArray; });\n/* harmony import */ var _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMstuff.js */ \"./src/DOMstuff.js\");\n/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/util.js */ \"./src/util/util.js\");\n\r\n\r\n\r\nconsole.log(\r\n  \"Beneath this is the imported DOMstuff object and it's encapsulated functions\"\r\n);\r\n\r\nconsole.log(_DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"]);\r\n\r\n//To Do objects\r\n//create dynamically using a factory function\r\n//properties:\r\n//title\r\n//description\r\n//dueDate (date-fns package for formatting)\r\n//priority\r\n\r\nconst toDoItemFactory = (\r\n  name,\r\n  description,\r\n  dueDate,\r\n  parentID,\r\n  priority = \"low\",\r\n  id = _util_util_js__WEBPACK_IMPORTED_MODULE_1__[\"uniqueNumber\"]()\r\n) => {\r\n  return {\r\n    name,\r\n    description,\r\n    dueDate,\r\n    parentID,\r\n    priority,\r\n    id\r\n  };\r\n};\r\n\r\nconst projectFactory = (id, itemsOfProject = []) => {\r\n  return { id, itemsOfProject };\r\n};\r\n\r\n//this stuff runs immediately\r\n//the initial items array is empty\r\n// the initial projects array contains the default project\r\nlet itemsArray = [];\r\nlet defaultProject = projectFactory(\"default\");\r\nlet projectsArray = [defaultProject];\r\n\r\nconst newItemForm = () => {\r\n  //when a button is clicked then the new form should be generated in\r\n  console.info(\"Inside the newItemForm\");\r\n\r\n  //toggles DOM existence of new item form\r\n  !document.querySelector(\"#new-item-form\")\r\n    ? _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"].createNewItemForm()\r\n    : _util_util_js__WEBPACK_IMPORTED_MODULE_1__[\"removeItemFromDOM\"](\"#new-item-form\", \"#create-new-item-container\");\r\n\r\n  // only adds an event listener if the button exists\r\n  if (document.querySelector(\"#create\")) {\r\n    let createItemButton = document.querySelector(\"#create\");\r\n    createItemButton.addEventListener(\"click\", createToDoItem);\r\n  }\r\n};\r\n\r\nconst newProjectForm = () => {\r\n  console.info(\"Inside newProjectForm\");\r\n  _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"].createNewProjectForm();\r\n\r\n  //add event listener to the button created in the createNewProjectForm\r\n  if (document.querySelector(\"#submit-new-project\")) {\r\n    let submitNewProjectButton = document.querySelector(\"#submit-new-project\");\r\n    submitNewProjectButton.addEventListener(\"click\", createNewProject);\r\n  }\r\n};\r\n\r\nconst createNewProject = () => {\r\n  console.info(\"Inside createNewProject\");\r\n  let existingProjects = projectsArray;\r\n  //checks the name. If the name is empty, function returns after logging a message\r\n  let projectName = \"\";\r\n  if (document.querySelector(\"#project-name\").value != \"\") {\r\n    projectName = document.querySelector(\"#project-name\").value;\r\n  } else {\r\n    console.log(\"The project needs a name before it'll be created\");\r\n    return;\r\n  }\r\n  //this continues only if there is a project name\r\n  let newProject = projectFactory(projectName.toLowerCase());\r\n  //only add newProject to existingProjects if the array does not include this project already\r\n  existingProjects.every(project => project.id != newProject.id)\r\n    ? existingProjects.push(newProject)\r\n    : console.warn(\r\n        `Project of id ${newProject.id} already exists in the existingProjects`\r\n      );\r\n  console.table(existingProjects);\r\n  //adds the project to the DOM\r\n  _DOMstuff_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"].createProject(existingProjects);\r\n  _util_util_js__WEBPACK_IMPORTED_MODULE_1__[\"removeItemFromDOM\"](\"#new-project-form\", \"#new-project-container\");\r\n  _util_util_js__WEBPACK_IMPORTED_MODULE_1__[\"addButton\"](\"create-new-project\", \"New Project\", \"#new-project-container\");\r\n  _util_util_js__WEBPACK_IMPORTED_MODULE_1__[\"newListener\"](\"#create-new-project\", \"click\", newProjectForm);\r\n};\r\n\r\n//sample of an item creation attached to an eventlistener\r\nconst createToDoItem = () => {\r\n  console.group(\"createToDoItem\");\r\n  console.info(\"inside the createToDoItem function\");\r\n  let project = document.querySelector(\".active\");\r\n  let itemName = document.querySelector(\"#item-name\").value;\r\n  let itemDescription = document.querySelector(\"#item-description\").value;\r\n  let itemParentID = document.querySelector(\".active\").id;\r\n  let itemDueDate = document.querySelector(\"#item-due-date\").valueAsDate;\r\n  let itemPriority = [...document.getElementsByName(\"priority\")].filter(\r\n    priority => priority.checked\r\n  )[0].id;\r\n\r\n  let newItem = toDoItemFactory(\r\n    itemName,\r\n    itemDescription,\r\n    itemDueDate,\r\n    itemParentID,\r\n    itemPriority\r\n  );\r\n\r\n  itemsArray.push(newItem);\r\n  console.table(itemsArray);\r\n  console.log(\"the DOM stuff will follow now\");\r\n  console.groupEnd();\r\n  console.time(\"Time to do DOM stuff for a new item's creation\");\r\n  _util_util_js__WEBPACK_IMPORTED_MODULE_1__[\"displayProjectItems\"](project);\r\n  console.timeEnd(\"Time to do DOM stuff for a new item's creation\");\r\n};\r\n\r\nconst deleteItemFromArray = (itemToRemove, array) => {\r\n  console.info(\"Inside deleteItemFromArray\");\r\n  console.warn(\r\n    `Item with name \"${itemToRemove.name}\" and id (${itemToRemove.id}) will be removed`\r\n  );\r\n  //mutates the original array to exclude the itemToRemove\r\n  itemsArray = array.filter(item => item.id != itemToRemove.id);\r\n  console.group(\"The array before and after the item has been removed\");\r\n  console.table(array);\r\n  console.table(itemsArray);\r\n  console.groupEnd();\r\n};\r\n//add event listeners to each project div that exists\r\n{\r\n  let projects = [...document.querySelectorAll(\".projects\")];\r\n  projects.map(project =>\r\n    project.addEventListener(\"click\", () => {\r\n      _util_util_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleActiveClass\"](project);\r\n      _util_util_js__WEBPACK_IMPORTED_MODULE_1__[\"displayProjectItems\"](project);\r\n    })\r\n  );\r\n}\r\n\r\n//New Item button\r\n_util_util_js__WEBPACK_IMPORTED_MODULE_1__[\"newListener\"](\"#new-item\", \"click\", newItemForm);\r\n\r\n//New Project button\r\n_util_util_js__WEBPACK_IMPORTED_MODULE_1__[\"newListener\"](\"#create-new-project\", \"click\", newProjectForm);\r\n\n\n//# sourceURL=webpack:///./src/functionality.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var functionality = __webpack_require__(/*! ./functionality */ \"./src/functionality.js\");\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util/util.js":
/*!**************************!*\
  !*** ./src/util/util.js ***!
  \**************************/
/*! exports provided: toggleActiveClass, newListener, displayProjectItems, createItemInDiv, removeItemFromDOM, addButton, uniqueNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleActiveClass\", function() { return toggleActiveClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newListener\", function() { return newListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayProjectItems\", function() { return displayProjectItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createItemInDiv\", function() { return createItemInDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeItemFromDOM\", function() { return removeItemFromDOM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addButton\", function() { return addButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uniqueNumber\", function() { return uniqueNumber; });\n/* harmony import */ var _DOMstuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMstuff */ \"./src/DOMstuff.js\");\n/* harmony import */ var _functionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functionality */ \"./src/functionality.js\");\n\r\n//this is the array containing all the To-Do items\r\n\r\n//imported due to it's access to the itemsArray in functionality.js\r\n\r\n\r\nfunction toggleActiveClass(\r\n  selectedProject,\r\n  projects = [...document.querySelectorAll(\".projects\")]\r\n) {\r\n  console.info(\"Inside the toggleActiveClass\");\r\n  console.log(`${selectedProject.id} project was selected`);\r\n  //console.table(projects, [\"id\"]);\r\n  projects.map(project => project.classList.remove(\"active\"));\r\n  selectedProject.classList.add(\"active\");\r\n}\r\n\r\nfunction newListener(classOrID, typeOfListener, funct) {\r\n  console.info(\"Inside newListener\");\r\n  let node = document.querySelector(`${classOrID}`);\r\n  console.log(node);\r\n  node.addEventListener(typeOfListener, funct);\r\n  console.log(`Event listener added to ${node.id}`);\r\n}\r\n\r\nfunction displayProjectItems(project) {\r\n  console.info(`Inside displayProjectItems for ${project.id} project`);\r\n  console.log(_functionality__WEBPACK_IMPORTED_MODULE_1__[\"itemsArray\"]);\r\n  _DOMstuff__WEBPACK_IMPORTED_MODULE_0__[\"DOMstuff\"].createItemsContainer();\r\n  let filteredArray = _functionality__WEBPACK_IMPORTED_MODULE_1__[\"itemsArray\"].filter(item => item.parentID == project.id);\r\n  console.table(filteredArray);\r\n  //clear DOM then create the right items\r\n  let itemsContainer = document.querySelector(\"#item-container\");\r\n  itemsContainer.innerHTML = \"\";\r\n  filteredArray.forEach(item => createItemInDiv(item));\r\n}\r\n\r\nfunction createItemInDiv(\r\n  item,\r\n  itemsContainer = document.querySelector(\"#item-container\")\r\n) {\r\n  //create the div that will hold an item\r\n  console.info(\"Inside the createItemInDiv\");\r\n  console.table(_functionality__WEBPACK_IMPORTED_MODULE_1__[\"itemsArray\"]);\r\n  let itemDiv = document.createElement(\"div\");\r\n  itemDiv.classList.add(\"item\");\r\n  itemDiv.id = `itemDiv${uniqueNumber()}`;\r\n  itemDiv.insertAdjacentHTML(\r\n    \"afterbegin\",\r\n    `<h4>Title: ${item.name}</h4>\r\n        <h4>Due Date:${item.dueDate}</h4>\r\n        <h4>Description:${item.description}</h4>\r\n        <h4>Project:${item.parentID}</h4>\r\n        <h4>Priority:${item.priority}</h4>`\r\n  );\r\n  let button = document.createElement(\"button\");\r\n  button.id = `item${uniqueNumber()}`;\r\n  button.classList.add(\"delete\");\r\n  button.textContent = \"Delete Item\";\r\n  itemDiv.appendChild(button);\r\n  itemsContainer.appendChild(itemDiv);\r\n  newListener(`#${button.id}`, \"click\", () => {\r\n    removeItemFromDOM(`#${itemDiv.id}`, `#${itemsContainer.id}`);\r\n    Object(_functionality__WEBPACK_IMPORTED_MODULE_1__[\"deleteItemFromArray\"])(item, _functionality__WEBPACK_IMPORTED_MODULE_1__[\"itemsArray\"]);\r\n  });\r\n  console.log(`Item div with name, ${item.name}, created`);\r\n}\r\n\r\nfunction removeItemFromDOM(childID, parentID) {\r\n  console.info(\"Inside the removeItemFromDOM\");\r\n  document.querySelector(parentID).removeChild(document.querySelector(childID));\r\n  console.log(`Child: ${childID} removed from Parent: ${parentID}`);\r\n}\r\n\r\nfunction addButton(buttonID, text, parentNode) {\r\n  console.info(\"Inside addButton\");\r\n  let parent = document.querySelector(`${parentNode}`);\r\n  let newButton = document.createElement(\"button\");\r\n  newButton.id = `${buttonID}`;\r\n  newButton.textContent = text;\r\n  parent.appendChild(newButton);\r\n}\r\n\r\nfunction uniqueNumber() {\r\n  return Date.now() + Math.floor(Math.random() * 100);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/util/util.js?");

/***/ })

/******/ });