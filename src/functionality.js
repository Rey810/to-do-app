/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-mutable-exports */
import { format } from 'date-fns';
import { DOMstuff } from './DOMstuff';
import * as util from './util/util';

console.log(
  "Beneath this is the imported DOMstuff object and it's encapsulated functions"
);

console.log(DOMstuff);

// this stuff runs immediately
// the initial items array is empty
// the initial projects array contains the default project
const toDoItemFactory = (
  name,
  description,
  dueDate,
  parentID,
  priority = 'low',
  completed = false,
  id = util.uniqueNumber()
) => ({
  name,
  description,
  dueDate,
  parentID,
  priority,
  completed,
  id,
});

const projectFactory = (id, itemsOfProject = []) => ({ id, itemsOfProject });
export let itemsArray = [];
const defaultProject = projectFactory('default');
// these are declared before the loadData()
// because let variables have a Temporal Dead Zone (remember it's based on time!)!!!!!!!!!!!!!!!!!!!
export let projectsArray = [defaultProject];
window.onload = loadData();

// this function (and others declared in this way) can be accessed earlier in execution
// due to them being 'hoisted' which means they are created at the beginning of the scope
function loadData() {
  // get local storage projects and items
  console.log('hi');
  if (localStorage.getItem('projects')) {
    projectsArray = JSON.parse(localStorage.getItem('projects'));
    DOMstuff.createProject(projectsArray);
  }

  if (localStorage.getItem('items')) {
    itemsArray = JSON.parse(localStorage.getItem('items'));
  } else {
    console.log('No saved items');
  }
}

export const newItemForm = () => {
  // when a button is clicked then the new form should be generated in
  console.info('Inside the newItemForm');

  // toggles DOM existence of new item form
  !document.querySelector('#new-item-form')
    ? DOMstuff.createNewItemForm()
    : util.removeItemFromDOM('#new-item-form', '#create-new-item-container');

  // only adds an event listener if the button exists
  if (document.querySelector('#create')) {
    const createItemButton = document.querySelector('#create');
    createItemButton.addEventListener('click', createToDoItem);
  }
};

export function createNewProject() {
  console.info('Inside createNewProject');
  const existingProjects = projectsArray;
  // checks the name. If the name is empty, function returns after logging a message
  let projectName = '';
  // eslint-disable-next-line no-unused-vars
  let displayName = '';
  if (document.querySelector('#project-name').value !== '') {
    projectName = document.querySelector('#project-name').value;
    // save a new variable that still contains spaces
    const rawName = projectName.replace(/[!@#$%^&*]/g, '');
    displayName = rawName.replace(/[ ]{2,}/g, ' ');
    // removes special characters and spaces in the name
    projectName = projectName.replace(/[ !@#$%^&*]/g, '');
  } else {
    console.log("The project needs a name before it'll be created");
    return;
  }
  // this continues only if there is a project name
  const newProject = projectFactory(projectName.toLowerCase());
  // only add newProject to existingProjects if the array does not include this project already
  existingProjects.every((project) => project.id !== newProject.id)
    ? existingProjects.push(newProject)
    : console.warn(
        `Project of id ${newProject.id} already exists in the existingProjects`
      );

  // save projects array for use in next session
  localStorage.setItem('projects', JSON.stringify(projectsArray));
  console.table(existingProjects);
  // adds the project to the DOM
  DOMstuff.createProject(existingProjects);
  // removes the new project form
  util.removeItemFromDOM('#new-project-form', '#new-project-container');
  util.addButton('create-new-project', 'New Project', '#new-project-container');
  util.newListener('#create-new-project', 'click', util.newProjectForm);
}

// sample of an item creation attached to an eventlistener
const createToDoItem = () => {
  console.group('createToDoItem');
  console.info('inside the createToDoItem function');
  // this captures the selected project ID
  const project = document.querySelector('.active');
  const itemName = document.querySelector('#item-name').value;
  const itemDescription = document.querySelector('#item-description').value;
  const itemParentID = document.querySelector('.active').id;

  let itemDueDate = document.querySelector('#item-due-date').valueAsDate;
  // corrects the format for later use when displaying item due dates
  itemDueDate = format(itemDueDate, 'yyyy, MM, dd');

  const itemPriority = [...document.getElementsByName('priority')].filter(
    (priority) => priority.checked
  )[0].id;

  const newItem = toDoItemFactory(
    itemName,
    itemDescription,
    itemDueDate,
    itemParentID,
    itemPriority
  );

  itemsArray.push(newItem);
  // save the items array for use in the next session
  localStorage.setItem('items', JSON.stringify(itemsArray));
  console.table(itemsArray);
  console.log('the DOM stuff will follow now');
  console.groupEnd();
  console.time("Time to do DOM stuff for a new item's creation");
  util.displayProjectItems(project);
  util.removeNewItemForm();
  console.timeEnd("Time to do DOM stuff for a new item's creation");
};

export const deleteItemFromArray = (itemToRemove) => {
  console.info('Inside deleteItemFromArray');
  console.warn(
    `Item with name "${itemToRemove.name}" and id (${itemToRemove.id}) will be removed`
  );
  console.group('The array before and after the item has been removed');
  console.table(itemsArray);
  // mutates the original array to exclude the itemToRemove
  itemsArray = itemsArray.filter((item) => item.id !== itemToRemove.id);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  console.table(itemsArray);
  console.groupEnd();
};

export const deleteProjectFromArray = (projectToRemove) => {
  console.info('Inside deleteProjectFromArray');
  console.warn(
    `Project with id "${projectToRemove.id}" and with ${projectToRemove.itemsOfProject.length} items will be removed`
  );
  console.group('The array before and after the project has been removed');
  console.table(projectsArray);
  // mutates the original array to exclude the projectToRemove
  projectsArray = projectsArray.filter(
    (project) => project.id !== projectToRemove.id
  );
  localStorage.setItem('projects', JSON.stringify(projectsArray));
  console.table(projectsArray);
  console.groupEnd();
};
// add event listeners to each project div that exists
{
  const projects = [...document.querySelectorAll('.projects')];
  projects.map((project) =>
    project.addEventListener('click', () => {
      util.toggleActiveClass(project);
      util.createProjectHeader(project);
      util.displayProjectItems(project);
    })
  );
}

// New Project button
util.newListener('#create-new-project', 'click', util.newProjectForm);
