<template>
  <div id="app">
    <div id="nav">
      <home to="/Home">Home |</home>
      <about to="/About">Home |</about>
      <applications to="/Applications"> Applications</applications> |
      <experience to="/Experience"> Experience</experience> |
      <skills to="/Skills"> Skills</skills> |
      <blog to="/Blog"> Blog</blog>
    </div>
    <router-view />
  </div>
</template>

<script>
import applications from "./components/applications.vue";
import about from "./components/about.vue";
import blog from "./views/Blog.vue";

export default {
  components: {
    about: about,
    applications: applications
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 400px;
  margin-left: 50px;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#skills {
  text-align: auto;
}
</style>
