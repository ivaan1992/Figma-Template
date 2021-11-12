// Hamburger menu
const menu = document.querySelector('.mobile-menu');
const ham = document.querySelector('.hamburger-menu');
const xIcon = document.querySelector('.xIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    xIcon.style.display = 'none';
  } else {
    menu.classList.add('showMenu');
    xIcon.style.display = 'block';
  }
}

ham.addEventListener('click', toggleMenu);

// Pop up window

const buttons = document.querySelectorAll('.see-project');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const projects = {
      name: 'Project name goes here',
      description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
        'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
      technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
      image: ['./Images/Rectangle34.png', './Images/Rectangle39.png', './Images/Rectangle40.png', './Images/Rectangle41.png', './Images/Rectangle42.png'],
      liveURL: 'https://ivaan1992.github.io/Figma-Template/',
      link: 'https://github.com/ivaan1992',
    };

    function createElement(htmlString) {
      const div = document.createElement('div');
      div.innerHTML = htmlString;

      return div.firstElementChild;
    }

    const popUpElement = createElement(`
      <div class="allpopup">
        <span class="xIcon">
          <img src="Images/x.png">
        </span>
        <h2 class="popup-name">${projects.name}</h2>
        <ul class="tech">
            ${projects.technologies.map((tech) => `<li class="border-lang">${tech}</li>`).join('')}
        </ul>
        <div class="images">
            <img src="${projects.image[0]}" alt="" class="">
          <div class="small-images">
            <img src="${projects.image[1]}" alt="" class="">
            <img src="${projects.image[2]}" alt="" class="">
            <img src="${projects.image[3]}" alt="" class="">
            <img src="${projects.image[4]}" alt="" class="">
          </div>
        </div>  
        <p class="description">${projects.description[0]}</p>
        <p class="description1">${projects.description[1]}</p>
        <div class="modal-mobile-buttons">
          <form action="${projects.link}" "method="get" target="_blank">
            <button type="button" class="modal-button1">See live</button>
          </form>
          <form action="${projects.liveURL}" "method="get" target="_blank">
            <button type="button" class="modal-button2">See source</button>
          </form>
        </div>
      </div>
    `);
    popUpElement.querySelector('.xIcon').addEventListener('click', () => {
      popUpElement.remove();
    });

    document.body.prepend(popUpElement);
  });
});

// Validate contact Form

const contactForm = document.querySelector('#Form');

function validateEmail() {
  const emailInput = document.querySelector('#email');
  const emailError = document.querySelector('#email-error');
  const emailLowerCase = emailInput.value.toLowerCase();

  if (emailInput.value !== emailLowerCase) {
    emailError.innerHTML = `Your email should be in lower case please use "<span style="color:black">${emailLowerCase}</span>" instead.`;
    return false;
  }
  return true;
}
contactForm.addEventListener('submit', (sub) => {
  if (!validateEmail()) {
    sub.preventDefault();
  }
});

// Data browser 

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const textInput = document.getElementById('message');

function storeForm(){ 
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    text: textInput.value,
  };
  localStorage.setItem('data', JSON.stringify(data));
}

nameInput.addEventListener('input', () => {
  storeForm();
});
emailInput.addEventListener('input', () => {
  storeForm();
});
textInput.addEventListener('input', () => {
  storeForm();
});

window.addEventListener('load', () => {
  const windowData = localStorage.getItem('data');
  const parseWindow = JSON.parse(windowData);
  nameInput.value = parseWindow.name;
  emailInput.value = parseWindow.email;
  textInput.value = parseWindow.text;
});

