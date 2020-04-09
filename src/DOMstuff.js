import * as util from './util/util.js';
import { deleteProjectFromArray } from './functionality';
import formValidation from './util/form_validation';

export const DOMstuff = {
  //the form for to-do item info
  createNewItemForm: () => {
    console.info('Inside the createNewItemForm');
    let newItemForm = document.createElement('div');
    newItemForm.id = 'new-item-form';
    newItemForm.insertAdjacentHTML(
      'afterbegin',
      `
    <input id="item-name" type="text" placeholder="Enter a title" />
    <input
      id="item-description"
      type="text"
      placeholder="What do you need to do?"
    />
    <input type="date" id="item-due-date" value="2020-03-27" min="2020-03-25" />
    <input type="radio" name="priority" id="low" checked />
    <input type="radio" name="priority" id="medium" />
    <input type="radio" name="priority" id="high" />
    <button id="create">Create an Item</button>`
    );
    document
      .querySelector('#create-new-item-container')
      .appendChild(newItemForm);
    document.querySelector('#item-due-date').valueAsDate = new Date();
    console.log('Form created');
  },

  //this will hold all the items
  createItemsContainer: () => {
    console.info('Inside the DOMstuff.displayToDoItems');
    let itemsContainer;
    console.group('Checks for item container and creates if necessary');
    //creates a container for the item if it doesn't already exist
    if (!document.querySelector('#item-container')) {
      itemsContainer = document.createElement('section');
      itemsContainer.id = 'item-container';
      document.body.appendChild(itemsContainer);
      console.log("itemContainer didn't exist but now does");
    } else {
      itemsContainer = document.querySelector('#item-container');
      console.log("itemContainer already existed so wasn't created again");
    }
    console.groupEnd();
  },
  //creates items to populate the item
  createItem: (arrayOfItems) => {
    console.info('Inside the DOMstuff.createItem');
    //add items to container
    console.group('Creates items and appends them');
    console.time('Time to build all items and append them');
    let itemsContainer = document.querySelector('#item-container');

    let itemsArray = arrayOfItems;

    arrayOfItems.map((item) => {
      {
        //contains the ids of all the created items
        let createdItemIds = [...itemsContainer.childNodes].map((item) =>
          parseInt(item.id)
        );

        //checks whether an item in the array has been created or not
        if (createdItemIds.includes(itemsArray.indexOf(item))) {
          console.group('FOUND');
          console.log(
            `Item ${itemsArray.indexOf(
              item
            )} in the itemsArray was found among the createdItemIds.`
          );
          console.log(
            `Item ${itemsArray.indexOf(item)} will not be created AGAIN`
          );
          console.groupEnd();
        } else {
          console.group('NOT FOUND');
          console.log(
            `Item ${itemsArray.indexOf(
              item
            )} in the itemsArray was not found among the createdItemIds`
          );
          console.log(`So item ${itemsArray.indexOf(item)} will be created`);
          util.createItemInDiv(item);
          console.groupEnd();
        }
      }
    });

    console.timeEnd('Time to build all items and append them');
    console.groupEnd();
  },

  createNewProjectForm: () => {
    console.info('Inside createNewProjectForm');
    let newProjectContainer = document.querySelector('#new-project-container');
    newProjectContainer.removeChild(
      document.querySelector('#create-new-project')
    );
    let newProjectForm = document.createElement('div');
    newProjectForm.id = 'new-project-form';
    newProjectForm.insertAdjacentHTML(
      'afterbegin',
      `<form novalidate>
      <input type="text" id="project-name" placeholder="New Project" required minlength='5' maxlength='15' pattern="[a-zA-Z]*">
      <span id='project-name-error'></span>
      <div class='new-project-buttons-container'>
        <button id="submit-new-project" disabled>Add Project</button>
        <button id="cancel-new-project">Cancel</button>
      </div>
      </form>`
    );
    newProjectContainer.appendChild(newProjectForm);
    util.newListener('#cancel-new-project', 'click', () => {
      util.cancelNewProject(newProjectForm, newProjectContainer);
    });
    formValidation();
  },

  addProject: (project) => {
    console.log('Inside the addProject');
    console.log(
      `Here is the id of the project to be added to DOM: ${project.id}`
    );
    // clear items DOM
    let itemsContainer;
    if (document.querySelector('#item-container')) {
      itemsContainer = document.querySelector('#item-container');
      itemsContainer.innerHTML = '';
    }
    //add project to DOM here
    let projectsContainer = document.querySelector('#all-projects');
    let projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    let projectToAddToDOM = document.createElement('button');
    projectContainer.id = `project-${project.id.toLowerCase()}`;
    projectToAddToDOM.className = 'projects';
    projectToAddToDOM.id = `${project.id}`;
    projectToAddToDOM.textContent = `${project.id}`;
    projectContainer.appendChild(projectToAddToDOM);
    projectsContainer.appendChild(projectContainer);
    //add a delete button
    let button = document.createElement('button');
    button.id = `project${util.uniqueNumber()}`;
    button.classList.add('delete');
    button.textContent = 'Delete Project';
    projectContainer.appendChild(button);
    util.newListener(`#${button.id}`, 'click', () => {
      util.removeItemFromDOM(
        `#${projectContainer.id}`,
        `#${projectsContainer.id}`
      );
      deleteProjectFromArray(project);
      util.activateDefaultProject();
    });
    //remove the active class from the other projects
    //and make the new project the active one
    util.toggleActiveClass(projectToAddToDOM);
    //add an eventlistener to newly created project
    //an anonymous function is used so that parameters can be passed
    projectToAddToDOM.addEventListener('click', () => {
      util.toggleActiveClass(projectToAddToDOM);
      util.createProjectHeader(projectToAddToDOM);
    });
    util.newListener(`#${projectToAddToDOM.id}`, 'click', () => {
      util.displayProjectItems(project);
    });
  },

  createProject: (arrayOfProjects, displayName) => {
    console.log('Inside the createProject');
    //check if project exists in the DOM already. If it doesn't, add it to the DOM
    let projectsArray = arrayOfProjects;
    let projects = document.querySelectorAll('.projects');

    console.group(
      `Loops through nodeList (length: ${projects.length}) and adds projects to DOM (if not already added)`
    );
    let DOMprojectIDs = [];
    //loops through the node list and only adds the IDS of projects
    console.log('Inserting DOMprojectIDS into an array');
    for (let i = 0; i < projects.length; i++) {
      DOMprojectIDs.push(projects[i].id);
    }
    console.log(DOMprojectIDs);
    //only includes projects that are not in the DOM
    let filteredProjectsArray = projectsArray.filter(
      (project) => !DOMprojectIDs.includes(project.id)
    );
    console.table(filteredProjectsArray);
    // each project here gets passed to the addProject function to add it to the DOM
    console.log(
      `Number of projects to be added to DOM: ${filteredProjectsArray.length}`
    );
    //This will always be 1 or 0 in length
    filteredProjectsArray.map((project) =>
      DOMstuff.addProject(project, displayName)
    );
    console.groupEnd();
  },

  displayProjects: (arrayOfProjects) => {
    let projectsContainer = document.querySelector('#all-projects');
    //prevents the default project from being displayed again
    arrayOfProjects.splice(0, 1);
    arrayOfProjects.forEach((project) => {
      let storedProjectButton = document.createElement('button');
      storedProjectButton.id = `${project.id}`;
      storedProjectButton.classList.add('projects');
      storedProjectButton.textContent = `${project.id}`;

      projectsContainer.appendChild(storedProjectButton);

      storedProjectButton.addEventListener('click', () =>
        util.toggleActiveClass(storedProjectButton)
      );
      util.newListener(`#${storedProjectButton.id}`, 'click', () => {
        util.displayProjectItems(storedProjectButton);
      });
    });
  },
};
