import { DOMstuff } from "../DOMstuff";
//this is the array containing all the To-Do items
import { itemsArray } from "../functionality";
//imported due to it's access to the itemsArray in functionality.js
import { deleteItemFromArray } from "../functionality";
//imported due to it being added to a new eventlistener in newProjectForm
import { createNewProject } from "../functionality";
//import a date manipulation function from date-fns
import distanceInWordsToNow from "date-fns/formatDistanceToNow/index.js";

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
  //this will contain only the items with an ID matching that of the selected project
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
  itemDiv.id = `itemDiv${item.id}`;
  itemDiv.insertAdjacentHTML(
    "afterbegin",
    `<div class='checkbox-container'>
    <label class='coolCheckbox bounce'>
    <input class='checkbox' type="checkbox" id="check${item.id}"/>
    <svg viewBox="0 0 21 21">
            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
        </label>
        </div>
    <div class='item-info' id="item-${item.id}-info">
        <h4 class='item-name'>${item.name}</h4>
        <h4 class='project-id'>${item.parentID}</h4>
        <h4 class='due-date'>Due ${distanceInWordsToNow(
          new Date(item.dueDate),
          {
            addSuffix: true
          }
        )}</h4>
      </div>`
  );

  //builds the expand button and adds it to the item Div
  let expand = document.createElement("button");
  expand.innerHTML = `<i class="fas fa-angle-down expand-icon"></i>`;
  expand.classList.add("expand");
  expand.id = `expand${item.id}`;
  itemDiv.appendChild(expand);
  //builds delete button and adds the item Div to the items container
  let button = document.createElement("button");
  button.classList.add("delete");
  button.id = `item${item.id}`;
  button.classList.add("delete");
  button.innerHTML = `<img class='close-icon' src="../static/close_small.png" alt="Close Icon">`;
  itemDiv.appendChild(button);
  itemsContainer.appendChild(itemDiv);
  // add event listener for checkbox
  let checkbox = document.querySelector(`#check${item.id}`);
  checkbox.addEventListener("click", () => toggleItemCompletion(itemDiv, item));
  //add event listener for the expand button and the delete button
  newListener(`#${expand.id}`, "click", () => toggleExpandItem(item, expand));
  newListener(`#${button.id}`, "click", () => {
    removeItemFromDOM(`#${itemDiv.id}`, `#${itemsContainer.id}`);
    deleteItemFromArray(item);
  });
  console.log(`Item div with name, ${item.name}, created`);
}

export function toggleItemCompletion(div, item) {
  console.log(div, item);
  if (item.completed) {
    item.completed = false;
    div.classList.remove("completed");
  } else {
    item.completed = true;
    div.classList.add("completed");
  }
}

export function toggleExpandItem(item, expandToggleButton) {
  console.log("Inside the expandItem");
  console.log("Current item follows in a table:");
  console.table(item);
  let parent = document.querySelector(`#itemDiv${item.id}`);
  let expandDiv = document.querySelector(`#expand${item.id}`);
  let expandedInfo;
  //toggle button text
  expandToggleButton.classList.contains("fa-rotate-180")
    ? expandToggleButton.classList.remove("fa-rotate-180")
    : expandToggleButton.classList.add("fa-rotate-180");
  //remove or append extra info depending on it's existence
  if (document.querySelector(`#expanded-info-${item.id}`)) {
    expandedInfo = document.querySelector(`#expanded-info-${item.id}`);
    parent.removeChild(expandedInfo);
  } else {
    expandedInfo = document.createElement("div");
    expandedInfo.id = `expanded-info-${item.id}`;
    expandedInfo.classList.add("expanded-info");
    expandedInfo.innerHTML = `<h4 class='expanded-info-header'>Description</h4><p class='expanded-info-body'>${item.description}</p>`;
    parent.insertBefore(expandedInfo, expandDiv);
    console.table(expandDiv);
  }
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

export function activateDefaultProject() {
  let defaultProject = document.querySelector("#default");
  defaultProject.classList.add("active");
  displayProjectItems(defaultProject);
}

export function cancelNewProject(aNewProjectForm, aNewProjectContainer) {
  console.info("Inside removeProjectButton");
  let projectID = aNewProjectForm.id;
  let containerID = aNewProjectContainer.id;
  removeItemFromDOM(`#${projectID}`, `#${containerID}`);
  addButton("create-new-project", "New Project", "#new-project-container");
  newListener("#create-new-project", "click", newProjectForm);
}

export function newProjectForm() {
  console.info("Inside newProjectForm");
  DOMstuff.createNewProjectForm();

  //add event listener to the button created in the createNewProjectForm
  if (document.querySelector("#submit-new-project")) {
    let submitNewProjectButton = document.querySelector("#submit-new-project");
    submitNewProjectButton.addEventListener("click", createNewProject);
  }
}
