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

const popup = document.getElementById('popup-project');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');

button1.addEventListener('click', () => {
  popup.classList.add('popup-open');
});
button2.addEventListener('click', () => {
  popup.classList.add('popup-open');
});
button3.addEventListener('click', () => {
  popup.classList.add('popup-open');
});
button4.addEventListener('click', () => {
  popup.classList.add('popup-open');
});
button5.addEventListener('click', () => {
  popup.classList.add('popup-open');
});
button6.addEventListener('click', () => {
  popup.classList.add('popup-open');
});

  const projects = [
    {
      name: 'Project name goes here',
      description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
      technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
      image: ['/Images/Rectangle34.png', '/Images/Rectangle39.png', '/Images/Rectangle40.png', '/Images/Rectangle41.png', '/Images/Rectangle42.png' ],
      liveURL: 'https://ivaan1992.github.io/Figma-Template/',
      link: 'https://github.com/ivaan1992'
    }
  ];
  projects.forEach(({ name, description, technologies, image, liveURL, link }) =>{ 
    popup.innerHTML +=`
    <div class="allpopup">
      <span class="xIcon">
        <a href=""><img src="Images/x.png"></a>
      </span>
      <h2 class="popup-name">${name}</h2>
      <ul class="tech">
          <li class="border-lang">${technologies[0]}</li>
          <li class="border-lang">${technologies[1]}</li>
          <li class="border-lang">${technologies[2]}</li>
      </ul>
      <div class="images">
          <img src="${image[0]}" alt="" class="">
        <div class="small-images">
          <img src="${image[1]}" alt="" class="">
          <img src="${image[2]}" alt="" class="">
          <img src="${image[3]}" alt="" class="">
          <img src="${image[4]}" alt="" class="">
        </div>
      </div>  
      <p class="description">${description[0]}</p>
      <p class="description1">${description[1]}</p>
      <div class="modal-mobile-buttons">
        <form action="${link}" "method="get" target="_blank">
          <button type="button" class="modal-button1">See live</button>
        </form>
        <form action="${liveURL}" "method="get" target="_blank">
          <button type="button" class="modal-button2">See source</button>
        </form>
      </div>
    </div>`  
  });
  