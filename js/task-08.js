
const formRef = document.querySelector('.login-form');
const empty = '';


formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    
    const userData =
        {
          email,
          password,
        };
    
    formElements.email.value === empty || formElements.password.value === empty
        ? alert("Необходимо заполнить все поля!")
    : (console.log(userData),
      event.currentTarget.reset());
};
