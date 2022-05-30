import React from 'react';
import '../assets/styles/style.css'
import employeeTracker from '../assets/images/Employee Tracker.PNG'
import noteTaker from '../assets/images/NOTE TAKER.png'
import project from '../assets/images/Screenshot 2021-10-19 135921.png'
import techNews from '../assets/images/techNews.PNG'
import anitime from '../assets/images/Ani-time_Project.PNG'


export default function Portfolio() {
  return (
    <div class= 'container'>
    <div class="row">
    <div id="project1" class="container">
        <div class="col-md-12">
          <div class="Titles z-depth-5 project1">Tech News Java API</div><a name="project1"></a>
            <a href="https://tech-java-api.herokuapp.com/">
              <img class="img-responsive" src={techNews}/>
            </a>
          <div class='container'>Link to repo:<a href="https://github.com/Bmorrissey34/tech-news-java-api">Tech News</a></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div id="project1" class="container">
        <div class="col-md-12">
          <div class="Titles z-depth-5 project1">Ani-Time</div><a name="project1"></a>
            <a href="https://ani-time.herokuapp.com/">
            <img class="img-responsive" src={anitime}/>
            </a>
            <div class='container'>Link to repo:<a href="https://github.com/baylorhinshaw/Ani-Time">Ani-time</a></div>
        </div>
      </div>
    </div>
    <div class="row">
    <div id="project1" class="container">
      <div class="col-md-12">
        <div class="Titles z-depth-5 project1">Ratings App</div><a name="project1"></a>
        <a href="https://bmorrissey34.github.io/Movies-TV-Search/">
          <img class="img-responsive" src={project}/>
          </a>
        <div class='container'>Link to repo:<a href="https://github.com/Bmorrissey34/Movies-TV-Search"> Ratings App</a>
        </div>
      </div>
      </div>
      </div>

      <div class= 'row'>
      <div class="col-md-6">
        <div class="Titles z-depth-5 homework2">Employee Tracker</div><a name="employeeTracker"></a>
          <img class="img-responsive" src={employeeTracker}/>
        <div class='container'>Link to repo:<a href="https://github.com/Bmorrissey34/Employee-Tracker">Employee
            Tracker(node.js)</a>
        </div>
      </div>

      <div class="col-md-6">
        <div class="Titles z-depth-5">Note- Taker</div><a name="homework1"></a>
          <img class="img-responsive" src={noteTaker}/>
        
        <div class='container'>Link to repo:<a href="https://github.com/Bmorrissey34/Note-Taker">Note-Taker</a></div>
      </div>
    </div>
  </div>
  );
}
