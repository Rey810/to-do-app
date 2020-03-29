export const DOMstuff = {
  //the form for to-do item info
  createNewItemForm: () => {
    console.info("Inside the createNewItemForm");
    let newItemForm = document.createElement("div");
    newItemForm.id = "new-item-form";
    newItemForm.insertAdjacentHTML(
      "afterbegin",
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
      .querySelector("#create-new-item-container")
      .appendChild(newItemForm);
    console.log("Form created");
  },

  removeItemFromDOM: (childID, parentID) => {
    console.info("Inside the removeItemFromDOM");
    document
      .querySelector(parentID)
      .removeChild(document.querySelector(childID));
    console.log(`Child: ${childID} removed from Parent: ${parentID}`);
  },

  //this will hold all the items
  createItemsContainer: () => {
    console.info("Inside the DOMstuff.displayToDoItems");
    let itemsContainer;
    console.group("Checks for item container and creates if necessary");
    //creates a container for the item if it doesn't already exist
    if (!document.querySelector("#item-container")) {
      itemsContainer = document.createElement("section");
      itemsContainer.id = "item-container";
      document.body.appendChild(itemsContainer);
      console.log("itemContainer didn't exist but now does");
    } else {
      itemsContainer = document.querySelector("#item-container");
      console.log("itemContainer already existed so wasn't created again");
    }
    console.groupEnd();
  },
  //creates items to populate the item
  createItem: arrayOfItems => {
    console.info("Inside the DOMstuff.createItem");
    //add items to container
    console.group("Creates items and appends them");
    console.time("Time to build all items and append them");
    let itemsContainer = document.querySelector("#item-container");

    let itemsArray = arrayOfItems;
    //if (project != "") {
    //  console.log("About to perform the filter function");
    //  itemsArray = arrayOfItems.filter(item => item.parentID == project);
    //}

    arrayOfItems.map(item => {
      //only gets called once an item is found in the array that doesn't already exist in the DOM
      const createItemInDiv = () => {
        //create the div that will hold an item
        console.info("Inside the createItemInDiv");
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.id = itemsArray.indexOf(item);
        itemDiv.insertAdjacentHTML(
          "afterbegin",
          `<h4>Title: ${item.name}</h4>
        <h4>Due Date:${item.dueDate}</h4>
        <h4>Description:${item.description}</h4>
        <h4>Project:${item.parentID}</h4>
        <h4>Priority:${item.priority}`
        );
        itemsContainer.appendChild(itemDiv);
        console.log(`Item div with name, ${item.name}, created`);
      };

      {
        //contains the ids of all the created items
        let createdItemIds = [...itemsContainer.childNodes].map(item =>
          parseInt(item.id)
        );

        //checks whether an item in the array has been created or not
        if (createdItemIds.includes(itemsArray.indexOf(item))) {
          console.group("FOUND");
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
          console.group("NOT FOUND");
          console.log(
            `Item ${itemsArray.indexOf(
              item
            )} in the itemsArray was not found among the createdItemIds`
          );
          console.log(`So item ${itemsArray.indexOf(item)} will be created`);
          createItemInDiv();
          console.groupEnd();
        }
      }
    });

    console.timeEnd("Time to build all items and append them");
    console.groupEnd();
  },

  toggleActiveClass: (selectedProject, projects) => {
    console.info("Inside the toggleActiveClass");
    console.log(`${selectedProject.id} project was clicked`);
    console.table(projects, ["id"]);
    projects.map(project => project.classList.remove("active"));
    selectedProject.classList.add("active");
  },

  createNewProjectForm: () => {
    console.info("Inside createNewProjectForm");
    let newProjectContainer = document.querySelector("#new-project-container");
    newProjectContainer.removeChild(
      document.querySelector("#create-new-project")
    );
    let newProjectForm = document.createElement("div");
    newProjectForm.id = "new-project-form";
    newProjectForm.insertAdjacentHTML(
      "afterbegin",
      `<input type="text" id="project-name" placeholder="New Project" />
       <button id="submit-new-project">Add Project</button>`
    );
    newProjectContainer.appendChild(newProjectForm);
  },

  createProject: arrayOfProjects => {
    console.log("Inside the createProject");
    //check if project exists in the DOM already. If it doesn't, add it to the DOM
    let projectsArray = arrayOfProjects;
    let projects = document.querySelectorAll(".projects");

    const addProject = project => {
      console.log("Inside the addProject");
      console.log(`Here is the id of the project to be added: ${project.id}`);
      //add project to DOM here
    };

    console.group(
      `Loops through nodeList (length: ${projects.length}) and adds projects to DOM (if not already added)`
    );
    let DOMprojectIDs = [];
    //loops through the node list and only adds the IDS of projects
    console.log("Inserting DOMprojectIDS into an array");
    for (let i = 0; i < projects.length; i++) {
      DOMprojectIDs.push(projects[i].id);
    }
    //only includes projects that are not in the DOM
    let filteredProjectsArray = projectsArray.filter(
      project => !DOMprojectIDs.includes(project.id),
      console.log(
        "Comparing each project in projectsArray to the DOMprojectIDS"
      )
    );
    // each project here gets passed to the addProject function to add it to the DOM
    filteredProjectsArray.map(project => addProject(project));
    console.groupEnd();
  }
};
