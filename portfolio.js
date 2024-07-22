document.addEventListener("DOMContentLoaded", function() {
  fetch('portfolio.json')
    .then(response => response.json())
    .then(data => {
      const projectsContainer = document.getElementById('projects');

      const shuffledProjects = data.sort(() => 0.5 - Math.random());

      const selectedProjects = shuffledProjects.slice(0, 5);

      selectedProjects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        projectDiv.innerHTML = `
         <div class="img"><img src="${project.image}" alt=""></div>
            <h1>${project.title}</h1>
            <p id="project_discription" >${project.discription}</p>
            <div class="project_links">
              <a href="${project.github}" target="_blank">Github</a>
              <a href="${project.liveDemo}" target="_blank">Live Demo</a>
            </div>
        `;

        projectsContainer.appendChild(projectDiv);
      });
    })
    .catch(error => console.error('Error fetching the project data:', error));
});
document.addEventListener("DOMContentLoaded", function() {
  const words = [
      "Custom Projects",
      "landing page",
      "e-commerce",
      "Web Apps"
  ];
  const typingSpeed = 100; // Adjust typing speed (milliseconds)
  const eraseDelay = 1000; // Delay before erasing (milliseconds)
  let index = 0;
  let wordIndex = 0;
  let isDeleting = false;

  const h3Element = document.getElementById('typing_effect');
  

  function typeText() {
      const currentWord = words[wordIndex];
      if (index < currentWord.length && !isDeleting) {
          h3Element.textContent = currentWord.substring(0, index + 1);
          index++;
          setTimeout(typeText, typingSpeed);
      } else {
          isDeleting = true;
          setTimeout(eraseText, eraseDelay);
      }
  }

  function eraseText() {
      if (index > 0) {
          const currentText = words[wordIndex].substring(0, index - 1);
          h3Element.textContent = currentText;
          index--;
          setTimeout(eraseText, typingSpeed / 2);
      } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeText, typingSpeed);
      }
  }

  typeText();

  const style = document.createElement('style');
  style.textContent = `
      .Home {
          text-align: center;
          margin-top: 50px;
      }
      h3 {
          display: inline-block;
          border-right: 2px solid;
          animation: blink-cursor 0.75s step-end infinite;
          white-space: nowrap; 
          overflow: hidden; 
      }
      @keyframes blink-cursor {
          from, to { border-color: transparent; }
          50% { border-color: black; }
      }
  `;
  document.head.appendChild(style);
});


    // Get the button
    let mybutton = document.getElementById("scrollToTopBtn");

    window.onscroll = function() {scrollFunction()};
  
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  
    mybutton.addEventListener("click", function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
    document.addEventListener('DOMContentLoaded', () => {
      const menuIcon = document.querySelector('.menu');
      const navMenu = document.querySelector('header ul');
  
      menuIcon.addEventListener('click', () => {
          navMenu.classList.toggle('show');
      });
  });
  
