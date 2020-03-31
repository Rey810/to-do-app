import { DOMstuff } from "../DOMstuff";
//this is the array containing all the To-Do items
import { itemsArray } from "../functionality";
//imported due to it's access to the itemsArray in functionality.js
import { deleteItemFromArray } from "../functionality";

export function toggleActiveClass(
  selectedProject,
  projects = [...document.querySelectorAll(".projects")]
) {
  console.info("Inside the toggleActiveClass");
  console.log(`${selectedProject.id} project was selected`);
  //console.table(projects, ["id"]);
  projects.map(project => project.classList.remove("active"));
  selectedProject.classList.add("active");
}

export function newListener(classOrID, typeOfListener, funct) {
  console.info("Inside newListener");
  let node = document.querySelector(`${classOrID}`);
  console.log(node);
  node.addEventListener(typeOfListener, funct);
  console.log(`Event listener added to ${node.id}`);
}

export function displayProjectItems(project) {
  console.info(`Inside displayProjectItems for ${project.id} project`);
  console.log(itemsArray);
  DOMstuff.createItemsContainer();
  let filteredArray = itemsArray.filter(item => item.parentID == project.id);
  console.table(filteredArray);
  //clear DOM then create the right items
  let itemsContainer = document.querySelector("#item-container");
  itemsContainer.innerHTML = "";
  filteredArray.forEach(item => createItemInDiv(item));
}

export function createItemInDiv(
  item,
  itemsContainer = document.querySelector("#item-container")
) {
  //create the div that will hold an item
  console.info("Inside the createItemInDiv");
  console.table(itemsArray);
  let itemDiv = document.createElement("div");
  itemDiv.classList.add("item");
  itemDiv.id = `itemDiv${uniqueNumber()}`;
  itemDiv.insertAdjacentHTML(
    "afterbegin",
    `<h4>Title: ${item.name}</h4>
        <h4>Due Date:${item.dueDate}</h4>
        <h4>Description:${item.description}</h4>
        <h4>Project:${item.parentID}</h4>
        <h4>Priority:${item.priority}</h4>`
  );
  let button = document.createElement("button");
  button.id = `item${uniqueNumber()}`;
  button.classList.add("delete");
  button.textContent = "Delete Item";
  itemDiv.appendChild(button);
  itemsContainer.appendChild(itemDiv);
  newListener(`#${button.id}`, "click", () => {
    removeItemFromDOM(`#${itemDiv.id}`, `#${itemsContainer.id}`);
    deleteItemFromArray(item, itemsArray);
  });
  console.log(`Item div with name, ${item.name}, created`);
}

export function removeItemFromDOM(childID, parentID) {
  console.info("Inside the removeItemFromDOM");
  document.querySelector(parentID).removeChild(document.querySelector(childID));
  console.log(`Child: ${childID} removed from Parent: ${parentID}`);
}

export function addButton(buttonID, text, parentNode) {
  console.info("Inside addButton");
  let parent = document.querySelector(`${parentNode}`);
  let newButton = document.createElement("button");
  newButton.id = `${buttonID}`;
  newButton.textContent = text;
  parent.appendChild(newButton);
}

export function uniqueNumber() {
  return Date.now() + Math.floor(Math.random() * 100);
}
