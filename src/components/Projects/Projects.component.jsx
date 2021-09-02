/* eslint-disable */
import React from 'react'

const ProjectListing = () => {
    return(
        <section id="first" class="main special">
          <header class="major">
            <h2>Software Projects</h2>
          </header>
          <ul class="features">
          <li>
              <span class="icon"><img src="https://img.icons8.com/color/96/000000/commercial-development-management.png"/></span>
              <h3>Employee management App</h3>
              <p>
                Wanted to keep an eye on your employees' informations? Well, here is an application to help you with that task! Welcome to EMS Portal
                developed using React Hooks, Springboot, Maven, and MySQL that helps to store, display and edit employee information. Do check it out here!
              </p>
              <a href="https://github.com/rishiselvakumaran98/employee_mgmt_app" class="button">Learn More</a>
            </li>
          <li>
              <span class="icon"><img src="https://img.icons8.com/color/96/000000/drone-with-camera.png"/></span>
              <h3>3D Drone Delivery Simulation</h3>
              <p>
                Wanted to fly a drone outside but stuck due to lockdown? Well here is a drone simulation project developed using C++, WebGL, Three.js and javascript to render multiple 3D graphical drones, packages, and customers that
                will for sure surprise your senses and let you play by choosing multiple drones to deliver multiple packages to multiple customers. Man thats a lot of multiples!
              </p>
              <a href="https://github.com/rishiselvakumaran98/3081_S21-iter2" class="button">Learn More</a>
            </li>
            <li>
              <span class="icon"><img src="https://img.icons8.com/nolan/96/google-scholar.png"/></span>
              <h3>CS Insiders</h3>
              <p>
                Meet my new Blog application created using HTML, CSS, JavaScript, ExpressJS and MongoDB that can be used to share information and articles on the 
                insights into the programming world given by real humans. This is an incredible application that is very user friendly especially in authenticating and protecting user privacy. Do check it out here!
              </p>
              <a href="https://rishiselvakumaran98.github.io/CS_Insiders/" class="button">Learn More</a>
            </li>
            <li>
              <span class="icon"><img src="https://img.icons8.com/color/96/000000/four-squares.png"/></span>
              <h3>RGB Color Game</h3>
              <p>Built a fun color game using HTML and Javascript with a help of CSS styling that will for sure excite you! Click the link below to check out my Github page for the game and the link to this app!</p>
              <a href="https://rishiselvakumaran98.github.io/color_game/" class="button">Learn More</a>
            </li>
            <li>
              <span class="icon"><img src="https://img.icons8.com/color/96/000000/todo-list.png"/></span>
              <h3>Todo-List</h3>
              <p>Built a simple todo list app using HTML, JQuery and some help of CSS styling that will aid you in jotting down your tasks/items. Click the link below to check out my list project at GitHub!</p>
              <a href="https://rishiselvakumaran98.github.io/Todo-List/" class="button">Learn More</a>
            </li>
            <li>
              <span class="icon"><img src="https://img.icons8.com/color/96/000000/hard-to-find.png"/></span>
              {/* <!-- fa-layer-group --> */}
              <h3>Magical Maze</h3>
              <p>An automated maze generator and solver created using the principles of stacks and queues in Java. It may not be an AI but it definitely serves as an ingredient to make one!</p>
              <a href="https://repl.it/talk/share/Magical-Maze/50054" class="button">Learn More</a>
              
            </li>
            <li>
              <span class="icon"><img src="https://img.icons8.com/color/96/000000/battleship.png"/></span>
              <h3>Battleboats Game</h3>
              <p>A Battleboats game in Java? Yep, you heard that right! A single/multi-player game, where player(s) take turn to enter coordinates to destroy ships
                in this fun and exciting game that will test your understanding of coordinate system.
              </p>
              <a href="https://rishiselvakumaran98.github.io/Battle-boats/" class="button">Learn More</a>
            </li>
            <li>
              <span class="icon"><img src="https://img.icons8.com/fluent/96/000000/resume-website.png"/></span>
              <h3>This website</h3>
              <p>
                Hey! If you are browsing through this website, this was built by me using React, GatsbyJS, and hosted in Heroku. If you like this website, or would like to know more about me send me a nice email under 'Contact me'. 😆 
              </p>
              <a href="https://rishiselvakumaran98.github.io/Personal_website/" class="button">Learn More</a>
            </li>
          </ul>
          <footer class="major">
          </footer>
        </section>
    )
};

export default ProjectListing;