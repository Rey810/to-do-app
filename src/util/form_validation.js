export function projectValidation() {
  // validates new project
  const projName = document.querySelector('#project-name');
  const projNameError = document.querySelector('#project-name-error');
  const submit = document.querySelector('#submit-new-project');

  projName.addEventListener('input', () => {
    // check the validation
    if (!projName.validity.valid) {
      projNameError.classList.remove('active-success');
      if (projName.validity.patternMismatch) {
        projNameError.innerHTML = 'Letters only. No weird stuff, yo.';
        projNameError.classList.add('active-error');
      }
      if (projName.validity.tooShort) {
        projNameError.innerHTML = 'Dude, be a little more descriptive';
        projNameError.classList.add('active-error');
      }
      submit.disabled = true;
    } else {
      projNameError.classList.remove('active-error');
      projNameError.innerHTML = 'Nice one! You can submit now :)';
      projNameError.classList.add('active-success');
      submit.disabled = false;
    }
    // show correct error message
    // remove disabled state of 'Add Project'
  });
}

export function itemValidation() {
  const form = document.getElementsByTagName('form')[0];
  const itemName = document.querySelector('#item-name');
  const itemDescr = document.querySelector('#item-description');
  const itemDate = document.querySelector('#item-due-date');
  const inputs = [itemName, itemDescr, itemDate];
  const createItemButton = document.querySelector('#create');
  const successMsgContainer = document.querySelector('#success-message');

  // adds event listeners to the form inputs
  inputs.map((input) => {
    input.addEventListener('input', () => validate(input));
  });

  function validate(anInput) {
    console.log(anInput);
    if (!anInput.validity.valid) {
      successMsgContainer.innerHTML = '';
      if (anInput.validity.patternMismatch) {
        anInput.nextElementSibling.innerHTML =
          'Letters only. No weird stuff, yo.';
      }
      if (anInput.validity.tooShort) {
        anInput.nextElementSibling.innerHTML =
          'Dude, be a little more descriptive';
      }
      if (anInput.validity.rangeUnderFlow) {
        anInput.nextElementSibling.innerHTML = 'Can you timetravel?';
      }
      anInput.nextElementSibling.classList.add('active-error');
      createItemButton.disabled = true;
    } else {
      anInput.nextElementSibling.classList.remove('active-error');
      // the next element sibling is the <span> which contains the error msg
      anInput.nextElementSibling.innerHTML = '';
      if (form.checkValidity()) {
        createItemButton.disabled = false;
        successMsgContainer.classList.add('active-success');
        successMsgContainer.innerHTML =
          'Nice one! You can create your item now :)';
      }
    }
  }
}
