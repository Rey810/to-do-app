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

//sample of an item creation attached to an eventlistener
function createToDoItem() {
  console.group("createToDoItem");
  console.info("inside the createToDoItem function");
  let itemName = document.querySelector("#item-name").value;
  let itemDescription = document.querySelector("#item-description").value;
  let itemDueDate = document.querySelector("#item-due-date").valueAsDate;
  let newItem = toDoItemFactory(itemName, itemDescription, itemDueDate);

  itemsArray.push(newItem);
  console.table(itemsArray);
  console.log("the DOM stuff will follow now");
  console.groupEnd();
  console.time("Time to do DOM stuff for a new item's creation");
  DOMstuff.createItemsContainer();
  DOMstuff.createItem(itemsArray);
  console.timeEnd("Time to do DOM stuff for a new item's creation");
}

let createItemButton = document.querySelector("#create");
createItemButton.addEventListener("click", createToDoItem);
let itemsArray = [];

//Projects or Lists
//start off with a default list
//create dynamically
