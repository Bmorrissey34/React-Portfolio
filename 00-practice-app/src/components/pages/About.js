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
        <li> First off my name is ... Brendan Morrissey</li>
        <li>🔭 I’m currently working on ...  <a href='https://tech-java-api.herokuapp.com/'>Tech News Java API</a></li>
        <li>🌱 I’m currently learning ... Java & AWS</li>
        <li>💹 Proficient in ... HTML, CSS, Javascript</li>
        <li>💹 Additional Tools - GraphQL, React, Bootstrap, Materialize, Node.js, express.js, express-sessions, SQL, Thymeleaf, Spring boot, Handlebars</li>
        <li>💬 Ask me about ... My Cat 🐈</li>
        <li>📫 How to reach me: brendanmorrissey34@gmail.com</li>
        <li>⚡ Fun fact: ... I love to hike and backpack!</li>
        <li>💻 Github URL ... <a href='https://github.com/Bmorrissey34'>[[💻]]</a></li>
      </ul>
    </div>
  </div> 
      
        <img class='jumbotron' src={mountain}/>
      
  </div>
  );
}
