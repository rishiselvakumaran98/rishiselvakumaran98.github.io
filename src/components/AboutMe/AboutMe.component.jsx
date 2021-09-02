/* eslint-disable */
import React from 'react'
import Image from "../../assets/images/IMG_6028.jpg"
const Aboutme = () =>{
    return(
        <div class="spotlight">
            <div class="content">
              <header class="major">
                <h2>About Me</h2>
              </header>
              {/* Thanks for visiting my site! */}
              <p>Hi, there! My name's Rishi Selvakumaran, and I am a rising Senior
                at the University of Minnesota pursuing my major in Computer Science focusing on Software Engineering and Database Systems.   
                My main areas of interests include Software Development, Data Engineering, AI, and Machine learning. Ever since a young age, 
				        I have been passionate about programming and my curiosity led me to learn and develop a lot of Software and web applications. 
				        I am actively expanding my knowledge in programming and have built fun and exciting web applications for you to view below. 
				        Do check them out and enjoy!
                  
              </p>
            </div>
            <span class="image"><img src={Image} /></span>
          </div>
    )
};

export default Aboutme;