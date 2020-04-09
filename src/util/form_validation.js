export default function validation() {
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
