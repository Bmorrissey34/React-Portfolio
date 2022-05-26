import React from 'react';
import mountain from "../assets/images/MountainTop.jpg"
import me from '../assets/images/me.jpg'

export default function About() {
  return (
  <div>

  <img class= 'myPic' src={me}/>
  
  <div class="aboutMeContainer">

    <h1>
      A little about myself...
    </h1>

    <div>
      <ul>
        <li>🔭 I’m currently working on ... finishing my coding bootcamp at Georgia Tech!</li>
        <li>🌱 I’m currently learning ... React!</li>
        <li>💹 Proficient in ... HTML, CSS, Javascript</li>
        <li>💹 Addtional Tools - GraphQL, React, Bootstrap, Materialize, Node.js, express.js, express-sessions, SQL, MySQL2, Sequelize, jquery, Handlebars</li>
        <li>💬 Ask me about ... My Cat 🐈</li>
        <li>📫 How to reach me: brendanmorrissey34@gmail.com</li>
        <li>⚡ Fun fact: ... I love to hike and backpack!</li>
      </ul>
    </div>
  </div> 
      
        <img class='jumbotron' src={mountain}/>
      
  </div>
  );
}
