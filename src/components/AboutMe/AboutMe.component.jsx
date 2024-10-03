/* eslint-disable */
import React from 'react'
import Image from "../../assets/images/IMG_6028.jpeg"
const Aboutme = () =>{
    return(
        <div class="spotlight">
            <div class="content">
              <header class="major">
                <h2>About Me</h2>
              </header>
              {/* Thanks for visiting my site! */}
              <p>Hey there! I'm Rishi Selvakumaran, a passionate Software Engineer at Hughes Network Systems. I thrive on building robust, distributed full-stack applications using Java, J2EE, Spring, and Angular. With hands-on experience across teams at Hughes, Miovision, and the University of Minnesota, I’m skilled in Agile and Scrum methodologies and have designed systems for a variety of applications. I’m always eager to dive into new technologies, currently pursuing certifications in CKA and AWS DevOps. I love collaborating on innovative projects and am always open to exciting opportunities—let's connect!
              </p>
            </div>
            <span class="image"><img src={Image} /></span>
          </div>
    )
};

export default Aboutme;