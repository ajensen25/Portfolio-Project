// Adding mobile menu functionality

const header = document.querySelector('header');
const menuButton = document.querySelector('.mobile-menu-button');
const closeMenuButton = document.querySelector('.close-menu-button');

menuButton.addEventListener('click', () => {
  header.classList.toggle('show-mobile-menu')
});

closeMenuButton.addEventListener('click', () => {
  menuButton.click();
});


// Adding dark mode toggle functionality

const darkModeButton = document.querySelector('.dark-mode-button');
const root = document.querySelector(':root');
const body = document.querySelector('body');

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleDarkTheme();
  }
  else {
    toggleLightTheme();
  }
})

function toggleLightTheme() {
  darkModeButton.querySelector('i').classList.replace('uil-moon', 'uil-sun');
  root.style.setProperty('--header-color', 'rgba(255, 255, 255, 0.7)');
  root.style.setProperty('--white-color', '#fff');
  root.style.setProperty('--black-color', '#000');
  root.style.setProperty('--white-color-thin', '#ffffff7f');
  root.style.setProperty('--black-color-thin', '#0000007b');
}

function toggleDarkTheme() {
  darkModeButton.querySelector('i').classList.replace('uil-sun', 'uil-moon');
  root.style.setProperty('--header-color', 'rgba(50, 50, 50, 0.7)');
  root.style.setProperty('--white-color', 'rgb(50, 50, 50)');
  root.style.setProperty('--black-color', '#fff');
  root.style.setProperty('--white-color-thin', 'rgba(50, 50, 50, 0.5)');
  root.style.setProperty('--black-color-thin', 'rgba(255, 255, 255, 0.5)');
}


// Contact form functionality

function sendEmail() {
  var params = {
    name: document.querySelector('.form-name').value,
    email: document.querySelector('.form-email').value,
    message: document.querySelector('.form-message').value,
  };

  const serviceID = "service_nv6kak8";
  const templateID = "template_ivq9v1f";

  emailjs.send(serviceID, templateID, params).then(res => {
    document.querySelector('.form-name').value = '';
    document.querySelector('.form-email').value = '';
    document.querySelector('.form-message').value = '';
    document.querySelector('.form-subject').value = '';
    console.log(res);
    alert('Message sent successfully.')
  }).catch(err => console.log(err));
};

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
  if (document.querySelector('.form-name').value === '') {
    return
  }
  if (document.querySelector('.form-email').value === '') {
    return
  }
  if (document.querySelector('.form-message').value === '') {
    return
  }
  if (document.querySelector('.form-subject').value === '') {
    return
  }
  sendEmail();
});