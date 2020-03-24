export const DOMstuff = {
  displayToDoItems: itemContainer => {
    console.info("Inside the displayToDoItems");
    let itemCreationSection = document.querySelector(".item-creation");
    let itemContainerSection;
    console.group("Checks for item container and creates if necessary");
    if (!document.querySelector("#item-container")) {
      itemContainerSection = document.createElement("section");
      itemContainerSection.id = "item-container";
      console.log("itemContainer didn't exist but now does");
    } else {
      itemContainerSection = document.querySelector("#item-container");
      console.log("itemContainer already existed so wasn't created again");
    }
    console.groupEnd();

    //add items to container
    console.group("Creates items and appends them");
    console.time("Time to build all items and append them");
    itemContainer.map(item => {
      //create the div that will hold an item
      let itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.id = itemContainer.indexOf(item);
      itemDiv.insertAdjacentHTML(
        "afterbegin",
        `<h4>${item.name}</h4>
         <h4>${item.dueDate}</h4>
         <h4>${item.description}</h4>
         <h4>${item.priority}`
      );
      itemContainerSection.appendChild(itemDiv);
      itemCreationSection.appendChild(itemContainerSection);
    });
    console.timeEnd("Time to build all items and append them");
    console.groupEnd();
  }
};
