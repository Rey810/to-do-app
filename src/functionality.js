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
let projectsArray = [];

function newItemForm() {
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
}

//sample of an item creation attached to an eventlistener
function createToDoItem() {
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
  //use this somehow to add a newItem to the right project
  // Object.entries(projectsHash).forEach(project => {
  //   console.table(project);
  //   console.log(project[1].itemsOfProject);
  // });

  console.log("the DOM stuff will follow now");
  console.groupEnd();
  console.time("Time to do DOM stuff for a new item's creation");
  DOMstuff.createItemsContainer();
  DOMstuff.createItem(itemsArray);
  console.timeEnd("Time to do DOM stuff for a new item's creation");
}

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
