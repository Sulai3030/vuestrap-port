<template>
  <div>
      <b-jumbotron>
        <template v-slot:header>Sulai Sivadel</template>
        <template v-slot:lead>
          Web Developer
        </template>
       <hr class="my-4">  
      </b-jumbotron>
       <b-row class="text-center">
         <b-list-group>
           <b-col>
            <b-card-text>
              <p class="justify">
                <b-list-group-item><b-link href="#foo">About</b-link></b-list-group-item>
                <b-list-group-item><b-link href="#foo">Experience</b-link></b-list-group-item>  
                <b-list-group-item><b-link href="#foo">Education</b-link></b-list-group-item>  
                <b-list-group-item><b-link href="#foo">Skils</b-link></b-list-group-item>  
                <b-list-group-item><b-link href="#foo">Interests</b-link></b-list-group-item> 
                <b-list-group-item><b-link href="#foo">Blog</b-link></b-list-group-item>  
                <b-list-group-item><b-link href="#foo">Contact</b-link></b-list-group-item>
              </p>  
            </b-card-text>
           </b-col>
         </b-list-group>
        <b-col cols="10">
          <b-card title="" sub-title="">
          <b-card-text>
          <p class="text-left">   
          Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding       Boot Camp with experience working     in teams. Possesses project management experience and experience      delegating responsibilities to a team from time at Maximus where he     spearheaded a project to create     the audio/ADA compliant portion of a new healthcare plan for the disabled distributed in the state          of New York. Sulai is flexible and a quick learner. Sulai is adaptable, communicative, knowledgeable     and steadfast with excellent     computer engineering skills learned in the Columbia University Coding     Bootcamp where he created projects in HTML5, CSS, JavaScript, and     React.</p> 
          </b-card-text>
          <a href="#" class="card-link"></a>
          <b-link href="#" class="card-link"></b-link>
          </b-card>
        </b-col>
        
        <b-col cols="8">
          <b-card title="" sub-title="">
          <b-card-text>
          <p class="text-left">   
          <p>APPLICATIONS BUILT</p>
          <hr>
              <p class="text-left">Project 1. 
              <p class="text-left">Front-End Design</p> 
              <b-link href="https://partydash.com/">Party Dash|https://partydash.com/</b-link> 
               
              <p class="text-left">	We built Party Dash with a simple goal in mind: to help party hosts plan parties more easily
              •	Responsibilities: Follow design specs handed down from site owner. Used CSS and HTML to create inviting website
              Technologies used: HTML, CSS, Bootstrap</p>
           
          </b-card-text>
          <a href="#" class="card-link"></a>
          <b-link href="#" class="card-link"></b-link>
          </b-card>
        </b-col>
        <b-col cols="8">
          <b-card title="" sub-title="">
          <b-card-text>
          <p class="text-left">   
            <p class="text-left">Project 2.
            <p class="text-left">Front-End design, Linting, Middleware, cleaning up frontend and backend code and making sure both sides work together.</p> 
            <b-link href="https://runeskype.herokuapp.com/play">RuneSkype|https://runeskype.herokuapp.com/play</b-link> 
            <p class="text-left">	RuneSkype is the newest way for friends to interact while playing your favorite Role Playing Game (RPG) RuneSkype. Playing RuneSkype is easy, just download a copy from our homepage or our repo.
            <p class="text-left">Responsibilities:  Wrote clean, presentable code. Kept group on time and on track to present at Project Demo Day.
            Technologies used: ReactJS, ChanceJS, Node, Express, Firebase, Twilio-Video, Twilio, WebRTC, Axios. Express, Faker, jQuery, React-dnd,  React-dnd-html5-backend,React-dom, React-draggable, React-router-dom, Webpack-dev-middleware, Webpack hot-middleware
           </p>
          </b-card-text>
          <a href="#" class="card-link"></a>
          <b-link href="#" class="card-link"></b-link>
          </b-card>
        </b-col>
        <b-col cols="8">
          <b-card title="" sub-title="">
          <b-card-text>
          <p class="text-left">   
            <p class="text-left">Project 3.
            <p class="text-left">Front-End Design, CSS, and front-end components.</p> 
            <b-link href="http://www.goatvoter.org">RuneSkype|http://www.goatvoter.org/</b-link> 
            <p class="text-left">	The GOAT Voter App is a one-stop platform where voters can access information about candidates running for political offices anywhere in the United States. The GOAT Voter App streamlines information and increases voter participation.
            By entering their zip code in a search field, users will be able to search and access detailed information about all candidates running for election in their district. In addition, users can enter their address to find out where their nearest polling site is located and request            transportation on election day.
            <p class="text-left">Responsibilities:  Wrote clean, presentable code. Kept group on time and on track to present at Project Demo Day.
            Technologies used: ReactJS, ChanceJS, Node, Express, Firebase, Twilio-Video, Twilio, WebRTC, Axios. Express, Faker, jQuery, React-dnd,  React-dnd-html5-backend,React-dom, React-draggable, React-router-dom, Webpack-dev-middleware, Webpack hot-middleware
           </p>
           <p class="text-left">
            Technologies used: JavaScript, Handlebars, Bootstrap, CSS Parallax, Node.js, Express, Sequelize, Google Civic Information API, Heroku
           </p>
          </b-card-text>
          <a href="#" class="card-link"></a>
          <b-link href="#" class="card-link"></b-link>
          </b-card>
        </b-col>
       </b-row>  
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
