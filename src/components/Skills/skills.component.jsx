/* eslint-disable */
import React from 'react'
import ExpressJS from "../../assets/images/ExpressJS-logo.png"
import AnsibleLogo from "../../assets/images/ansible_logo.svg"
import JenkinsLogo from "../../assets/images/jenkins-logo.svg"
import OCaml_Icon from '../../assets/images/ocaml_icon.svg'
const Skills = () => {
    return(
        <section id="cta" class="main special">
            <header class="major">
                <h1>Skills</h1>
                <h2>Programming Languages</h2>
            </header>
                <ul class="features">
                <li>
                    <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/>
                    <h3>Java</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/48/000000/python.png"/>
                    <h3>Python</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/48/000000/typescript.png"/>
                    <h3>TypeScript</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                    <h3>JavaScript</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/?size=50&id=79750&format=png&color=000000"/>
                    <h3>Shell Scripting</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/48/000000/sql.png"/>
                    <h3>SQL</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/48/000000/html-5.png"/>
                    <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                    <h3>HTML & CSS</h3>
                </li>
                <li>
                    <img src={OCaml_Icon} width="50" height="50"/>
                    <h3>OCaml</h3>
                </li>
                </ul>

                <h2>Technologies & Frameworks</h2>
                <ul class="features">
                <li>
                    <img src="https://www.mslinn.com/articles/images/j2eeLogo.png" width="60" height="50"/>
                    <h3>J2EE</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/50/000000/spring-logo.png"/>
                    <h3>Spring</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/plasticine/50/000000/react.png"/>
                    <img src="https://img.icons8.com/color/50/000000/angularjs.png"/>
                    <h3>React & Angular</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/50/000000/docker.png"/>
                    <h3>Docker</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/50/000000/kubernetes.png"/>
                    <h3>Kubernetes</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/50/000000/amazon-web-services.png"/>
                    <h3>AWS</h3>
                </li>
                <li>
                    <img src={JenkinsLogo} width="50" height="50"/>
                    <h3>Jenkins CI/CD</h3>
                </li>
                <li>
                    <img src={AnsibleLogo} width="50" height="50"/>
                    <h3>Ansible</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/?size=50&id=21888&format=png&color=000000"/>
                    <h3>REST API</h3>
                </li>
                </ul>

                <h2>Databases</h2>
                <ul class="features">
                <li>
                    <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
                    <h3>MongoDB</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/48/000000/oracle-logo.png"/>
                    <h3>Oracle DB</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/48/000000/mysql-logo.png"/>
                    <h3>MySQL</h3>
                </li>
                </ul>
            
            
        </section>
    )
};

export default Skills;