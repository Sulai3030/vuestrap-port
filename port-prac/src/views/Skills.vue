/* eslint-disable prettier/prettier */
<template>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text align="left" style="max-width: 20rem;">
        <b-list-group>
          <p align="left" style="max-width: 50rem;">
            <b-list-group-item
              >Languages: JavaScript, Python, CSS, HTML5</b-list-group-item
            >
          </p>
          <b-list-group-item
            >Libraries: VueJs, React.js, React Native, Express, Node JS, jQuery,
            AJAX, Bootstrap</b-list-group-item
          >
          <p>
            <b-list-group-item
              >Databases: MongoDB, MySQL, NoSQL, Firebase</b-list-group-item
            >
          </p>
          <p>
            <b-list-group-item>Templates: Handlebars</b-list-group-item>
          </p>
          <p align="text-align:center">
            <b-list-group-item>Version Control: Git/GitHub</b-list-group-item>
          </p>
          <p align="text-align:center">
            <b-list-group-item>Testing: Jest/Enzyme</b-list-group-item>
          </p>
          <p align="text-align:center">
            <b-list-group-item>Platforms: Drupal, WordPress</b-list-group-item>
          </p>
          <p align="text-align:center">
            <b-list-group-item>Testing: Jest/Enzyme</b-list-group-item>
          </p>
          <p align="text-align:center">
            <b-list-group-item
              >Collaboration Software: Slack, Salesforce</b-list-group-item
            >
          </p>
          <p align="text-align:center">
            <b-list-group-item
              >Image Editors: GIMP, Photoshop</b-list-group-item
            >
          </p>
          <p align="text-align:center">
            <b-list-group-item>Amazon Web Services (AWS)</b-list-group-item>
          </p>
          Creative Cloud: Photoshop, Illustrator, Lightroom
        </b-list-group>
      </b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
