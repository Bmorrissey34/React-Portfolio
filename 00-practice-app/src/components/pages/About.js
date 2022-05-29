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
        <li>🔭 I’m currently working on ... Tech News Java API</li>
        <li>🌱 I’m currently learning ... Java & AWS</li>
        <li>💹 Proficient in ... HTML, CSS, Javascript</li>
        <li>💹 Additional Tools - GraphQL, React, Bootstrap, Materialize, Node.js, express.js, express-sessions, SQL, Thymeleaf, Spring boot, Handlebars</li>
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
