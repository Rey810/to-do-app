import { DOMstuff } from "./DOMstuff.js";
import * as util from "./util/util.js";

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
  priority = "low",
  id = util.uniqueNumber()
) => {
  return {
    name,
    description,
    dueDate,
    parentID,
    priority,
    id
  };
};

const projectFactory = (id, itemsOfProject = []) => {
  return { id, itemsOfProject };
};

//this stuff runs immediately
//the initial items array is empty
// the initial projects array contains the default project
export let itemsArray = [];
let defaultProject = projectFactory("default");
let projectsArray = [defaultProject];

const newItemForm = () => {
  //when a button is clicked then the new form should be generated in
  console.info("Inside the newItemForm");

  //toggles DOM existence of new item form
  !document.querySelector("#new-item-form")
    ? DOMstuff.createNewItemForm()
    : util.removeItemFromDOM("#new-item-form", "#create-new-item-container");

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
  console.info("Inside createNewProject");
  let existingProjects = projectsArray;
  //checks the name. If the name is empty, function returns after logging a message
  let projectName = "";
  if (document.querySelector("#project-name").value != "") {
    projectName = document.querySelector("#project-name").value;
  } else {
    console.log("The project needs a name before it'll be created");
    return;
  }
  //this continues only if there is a project name
  let newProject = projectFactory(projectName.toLowerCase());
  //only add newProject to existingProjects if the array does not include this project already
  existingProjects.every(project => project.id != newProject.id)
    ? existingProjects.push(newProject)
    : console.warn(
        `Project of id ${newProject.id} already exists in the existingProjects`
      );
  console.table(existingProjects);
  //adds the project to the DOM
  DOMstuff.createProject(existingProjects);
  util.removeItemFromDOM("#new-project-form", "#new-project-container");
  util.addButton("create-new-project", "New Project", "#new-project-container");
  util.newListener("#create-new-project", "click", newProjectForm);
};

//sample of an item creation attached to an eventlistener
const createToDoItem = () => {
  console.group("createToDoItem");
  console.info("inside the createToDoItem function");
  let project = document.querySelector(".active");
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
  console.log("the DOM stuff will follow now");
  console.groupEnd();
  console.time("Time to do DOM stuff for a new item's creation");
  util.displayProjectItems(project);
  console.timeEnd("Time to do DOM stuff for a new item's creation");
};

export const deleteItemFromArray = (itemToRemove, array) => {
  console.info("Inside deleteItemFromArray");
  console.warn(
    `Item with name "${itemToRemove.name}" and id (${itemToRemove.id}) will be removed`
  );
  //mutates the original array to exclude the itemToRemove
  itemsArray = array.filter(item => item.id != itemToRemove.id);
  console.group("The array before and after the item has been removed");
  console.table(array);
  console.table(itemsArray);
  console.groupEnd();
};
//add event listeners to each project div that exists
{
  let projects = [...document.querySelectorAll(".projects")];
  projects.map(project =>
    project.addEventListener("click", () => {
      util.toggleActiveClass(project);
      util.displayProjectItems(project);
    })
  );
}

//New Item button
util.newListener("#new-item", "click", newItemForm);

//New Project button
util.newListener("#create-new-project", "click", newProjectForm);
