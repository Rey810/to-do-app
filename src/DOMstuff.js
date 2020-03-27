export const DOMstuff = {
  createItemsContainer: () => {
    console.info("Inside the DOMstuff.displayToDoItems");
    let itemContainerSection;
    console.group("Checks for item container and creates if necessary");
    //creates a container for the item if it doesn't already exist
    if (!document.querySelector("#item-container")) {
      itemContainerSection = document.createElement("section");
      itemContainerSection.id = "item-container";
      document.body.appendChild(itemContainerSection);
      console.log("itemContainer didn't exist but now does");
    } else {
      itemContainerSection = document.querySelector("#item-container");
      console.log("itemContainer already existed so wasn't created again");
    }
    console.groupEnd();
  },
  //creates items to populate the item
  createItem: itemsArray => {
    console.info("Inside the DOMstuff.createItem");
    //add items to container
    console.group("Creates items and appends them");
    console.time("Time to build all items and append them");
    let itemContainerSection = document.querySelector("#item-container");
    itemsArray.map(item => {
      const createItemDiv = () => {
        //create the div that will hold an item
        console.info("Inside the createItemDiv");
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.id = itemsArray.indexOf(item);
        itemDiv.insertAdjacentHTML(
          "afterbegin",
          `<h4>${item.name}</h4>
        <h4>${item.dueDate}</h4>
        <h4>${item.description}</h4>
        <h4>${item.priority}`
        );
        itemContainerSection.appendChild(itemDiv);
        console.log(`Item div with name, ${item.name}, created`);
      };

      {
        let createdItemIds = [...itemContainerSection.childNodes].map(item =>
          parseInt(item.id)
        );
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
          createItemDiv();
          console.groupEnd();
        }
      }
    });

    console.timeEnd("Time to build all items and append them");
    console.groupEnd();
  }
};
