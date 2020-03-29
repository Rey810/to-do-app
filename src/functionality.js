import { DOMstuff } from "./DOMstuff.js";
console.log(
  "Beneath this is the imported DOMstuff object and it's encapsulated functions"
);
console.log(DOMstuff);

//To Do objects
//create dynamically using a factory function
//properties:
//title
//description
//dueDate (date-fns package for formatting)
//priority

const toDoItemFactory = (
  name,
  description,
  dueDate,
  parentID,
  priority = "low"
) => {
  return {
    name,
    description,
    dueDate,
    parentID,
    priority
  };
};

const projectFactory = (id, itemsOfProject = []) => {
  return { id, itemsOfProject };
};

//this stuff runs immediately
let itemsArray = [];
//check if an array or a hash is better

let defaultProject = projectFactory("default");
let anotherProject = projectFactory("another");
let notInDOM = projectFactory("third");
let projectsArray = [defaultProject, anotherProject, notInDOM];

const newItemForm = () => {
  //when a button is clicked then the new form should be generated in
  console.info("Inside the newItemForm");

  //toggles DOM existence of new item form
  !document.querySelector("#new-item-form")
    ? DOMstuff.createNewItemForm()
    : DOMstuff.removeItemFromDOM(
        "#new-item-form",
        "#create-new-item-container"
      );

  // only adds an event listener if the button exists
  if (document.querySelector("#create")) {
    let createItemButton = document.querySelector("#create");
    createItemButton.addEventListener("click", createToDoItem);
  }
};

const newProjectForm = () => {
  console.info("Inside newProjectForm");
  DOMstuff.createNewProjectForm();

  //add event listener to the button created in the createNewProjectForm
  if (document.querySelector("#submit-new-project")) {
    let submitNewProjectButton = document.querySelector("#submit-new-project");
    submitNewProjectButton.addEventListener("click", createNewProject);
  }
};

const createNewProject = () => {
  console.log("Inside createNewProject");
  let projectName = document.querySelector("#project-name").value;
  let newProject = projectFactory(projectName);
  projectsArray.push(newProject);
  console.table(projectsArray);
  DOMstuff.createProject(projectsArray);
};

//sample of an item creation attached to an eventlistener
const createToDoItem = () => {
  console.group("createToDoItem");
  console.info("inside the createToDoItem function");
  let itemName = document.querySelector("#item-name").value;
  let itemDescription = document.querySelector("#item-description").value;
  let itemParentID = document.querySelector(".active").id;
  let itemDueDate = document.querySelector("#item-due-date").valueAsDate;
  let itemPriority = [...document.getElementsByName("priority")].filter(
    priority => priority.checked
  )[0].id;

  let newItem = toDoItemFactory(
    itemName,
    itemDescription,
    itemDueDate,
    itemParentID,
    itemPriority
  );

  itemsArray.push(newItem);
  console.table(itemsArray);

  //Object.entries(projectsHash)
  //  .filter(project => project[1].id == `${itemParentID}`)[0][1]
  //  .itemsOfProject.push(newItem);
  //console.log(Object.entries(projectsHash));

  console.log("the DOM stuff will follow now");
  console.groupEnd();
  console.time("Time to do DOM stuff for a new item's creation");
  DOMstuff.createItemsContainer();
  DOMstuff.createItem(itemsArray);
  console.timeEnd("Time to do DOM stuff for a new item's creation");
};

//add event listeners to each project div that exists
let projects = [...document.querySelectorAll(".projects")];
projects.map(projectDiv =>
  projectDiv.addEventListener("click", () => {
    DOMstuff.toggleActiveClass(projectDiv, projects);
    //DOMstuff.toggleDisplay(itemsArray, projectDiv);
  })
);

//New Item button
let newItemButton = document.querySelector("#new-item");
newItemButton.addEventListener("click", newItemForm);

//New Project button
let newProjectButton = document.querySelector("#create-new-project");
newProjectButton.addEventListener("click", newProjectForm);
