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

const toDoItemFactory = (name, description, dueDate, priority = "low") => {
  return {
    name,
    dueDate,
    description,
    priority
  };
};

//sample items
const item1 = toDoItemFactory(
  "First Item",
  "01-20-2020",
  "This is an item",
  "high"
);

const item2 = toDoItemFactory(
  "Second Item",
  "02-20-2020",
  "This is the second item",
  "low"
);

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
  let itemDueDate = document.querySelector("#item-due-date").valueAsDate;

  let itemPriority = [...document.getElementsByName("priority")].filter(
    priority => priority.checked
  )[0].id;
  let newItem = toDoItemFactory(
    itemName,
    itemDescription,
    itemDueDate,
    itemPriority
  );

  itemsArray.push(newItem);
  console.table(itemsArray);
  console.log("the DOM stuff will follow now");
  console.groupEnd();
  console.time("Time to do DOM stuff for a new item's creation");
  DOMstuff.createItemsContainer();
  DOMstuff.createItem(itemsArray);
  console.timeEnd("Time to do DOM stuff for a new item's creation");
}

let itemsArray = [];

let newItemButton = document.querySelector("#new-item");
newItemButton.addEventListener("click", newItemForm);

//Projects or Lists
//start off with a default list
//create dynamically
