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
const buttons = document.querySelectorAll(".see-project")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const projects = {
        name: 'Project name goes here',
        description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 
        'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
        technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
        image: ['./Images/Rectangle34.png', './Images/Rectangle39.png', './Images/Rectangle40.png', './Images/Rectangle41.png', './Images/Rectangle42.png' ],
        liveURL: 'https://ivaan1992.github.io/Figma-Template/',
        link: 'https://github.com/ivaan1992'
      };

    const popUpElement = createElement(`
      <div class="allpopup">
        <span class="xIcon">
          <img src="Images/x.png">
        </span>
        <h2 class="popup-name">${projects.name}</h2>
        <ul class="tech">
            ${projects.technologies.map(tech => `<li class="border-lang">${tech}</li>`).join("")}
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
    `)
    popUpElement.querySelector(".xIcon").addEventListener("click", () => {
      popUpElement.remove()
    })

    document.body.prepend(popUpElement)

  })
})


function createElement(htmlString) {
  const div = document.createElement("div")
  div.innerHTML = htmlString

  return div.firstElementChild
}
