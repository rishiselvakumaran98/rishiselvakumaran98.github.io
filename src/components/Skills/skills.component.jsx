/* eslint-disable */
import React from 'react'
import ExpressJS from "../../assets/images/ExpressJS-logo.png"
import SparkImg from '../../assets/images/apache_spark_logo_icon_170561.png'
import SpringbootImg from '../../assets/images/spring_image.png'
import DynamoDBImg from '../../assets/images/dynamodb.png'
const Skills = () => {
    return(
        <section id="cta" class="main special">
            <header class="major">
                <h1>Skills</h1>
                <h2>Programming Languages</h2>
            </header>
            <ul class="features">
                <li>
                    <img src="https://img.icons8.com/color/48/000000/python.png"/>
                    <h3>Python</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/ios/48/000000/java-coffee-cup-logo.png"/>
                    <h3>Java</h3>
                </li>
                <li>
                    <img src={SparkImg}/>
                    <h3>Spark</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/48/000000/typescript.png"/>
                    <h3>TypeScript</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/48/000000/html-5.png"/>
                    <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                    <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                    <h3>HTML5 - CSS3 - JavaScript</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/48/000000/c-programming.png"/>
                    <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/>
                    <h3>C/C++ </h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/ios-filled/50/000000/sql.png"/>
                    <h3>SQL</h3>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="50" height="50"
                    viewBox="0 0 172 172"
                    class="fill-00000"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" class="mbm-normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M86,6.88c-43.69832,0 -79.12,35.42168 -79.12,79.12c0,43.69832 35.42168,79.12 79.12,79.12c43.69832,0 79.12,-35.42168 79.12,-79.12c0,-43.69832 -35.42168,-79.12 -79.12,-79.12zM63.36453,55.04h23.64328c11.92992,0 19.73969,7.29377 19.73969,18.44969c0,8.62408 -4.67905,15.31854 -12.44313,17.76438l14.3311,25.70594h-9.05687l-13.2561,-24.50328h-15.2314v24.50328h-7.72656zM71.0911,61.90656v23.69031h15.2314c7.93608,-0.00344 12.44313,-4.24963 12.44313,-11.84515c0,-7.42352 -4.80498,-11.84515 -12.78578,-11.84515z"></path></g></g></svg>
                    <h3>R-Studio </h3>
                </li>	
            </ul>
            <header class="major">
                <h2>Web Technologies and frameworks</h2>
            </header>
            <ul class="features">
                <li>
                    <img src="https://img.icons8.com/color/96/000000/amazon-web-services.png"/>
                </li>
                <li>
                    <img src="https://img.icons8.com/plasticine/100/000000/react.png"/>
                    <img src="https://img.icons8.com/color/96/000000/redux.png"/>
                    <img src="https://img.icons8.com/ios-glyphs/90/000000/fishing-hook.png"/>
                    <h3>React, Redux, Hooks</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/96/000000/nodejs.png"/>
                </li>
                <li>
                    <img height="96" width="192" id="expressimg"src={SpringbootImg}/>
                </li>
                <li>
                    <img style={{"margin-top": '10px'}} height="50" width="150" id="expressimg"src={ExpressJS}/>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/96/000000/git.png"/>
                    <h3>Git</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/96/000000/graphql.png"/>
                    <h3>GraphQl</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/96/000000/docker.png"/>
                    <h3>Docker</h3>
                </li>
            </ul>
            <header class="major">
                <h2>Databases</h2>
            </header>
            <ul class="features">
                <li>
                    <img src="https://img.icons8.com/color/96/000000/mongodb.png"/>
                    <h3>MongoDB</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/fluency/96/000000/mysql-logo.png"/>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/96/000000/hadoop-distributed-file-system.png"/>
                    <h3>HDFS</h3>
                </li>
                <li>
                    <img height="100" width="100" src={DynamoDBImg}/>
                    <h3>AWS DynamoDB</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/96/000000/amazon-s3.png"/>
                    <h3>AWS S3</h3>
                </li>
                <li>
                    <img src="https://img.icons8.com/color/96/000000/google-firebase-console.png"/>
                    <h3>Google Firebase</h3>
                </li>
            </ul>
            
        </section>
    )
};

export default Skills;