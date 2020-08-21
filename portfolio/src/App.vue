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
        <b-card-text></b-card-text>
        <a href="#" class="card-link"></a>
        <b-link href="#" class="card-link"></b-link>
          </b-card>
        </b-col>
          <b-col cols="11">
          <b-card title="" sub-title="">
          <b-card-text>
          <p class="text-left">   
          APPLICATIONS BUILT
          Project 1. Party Dash| https://partydash.com/
          Front-End Design
          •	We built Party Dash with a simple goal in mind: to help party hosts plan parties more easily
          •	Responsibilities: Follow design specs handed down from site owner. Used CSS and HTML to create inviting website
          Technologies used: HTML, CSS, Bootstrap
          </p> 
          </b-card-text>
        <b-card-text></b-card-text>
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
