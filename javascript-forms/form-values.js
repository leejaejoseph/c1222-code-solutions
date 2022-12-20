var contactForm = document.querySelector('#contact-form');

function submitFunction(event) {
  event.preventDefault();
  var formObject = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value
  };
  console.log('contents of object: ', formObject);
}

contactForm.addEventListener('submit', submitFunction);
