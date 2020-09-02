<template>
  <div>
    <div class="mt-3">
      <b-card-group deck>
        <b-card border-variant="info" header="Info" align="center">
          <b-card-text>PartyDash</b-card-text>
        </b-card>

        <b-card
          border-variant="warning"
          header="Warning"
          header-bg-variant="transparent"
          align="center"
        >
          <b-card-text>
            We built Party Dash with a simple goal in mind: to help party plan
            parties more easily • Responsibilities: Follow design specs down
            from site owner. Used CSS and HTML to create create inviting website
            Technologies used: HTML, CSS, Bootstrap</b-card-text
          >
        </b-card>

        <b-card
          border-variant="danger"
          header="Danger"
          header-border-variant="danger"
          header-text-variant="danger"
          align="center"
        >
          <b-card-text>PartyDash</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck>
        <b-card
          bg-variant="info"
          text-variant="white"
          header="Info"
          class="text-center"
        >
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>

        <b-card
          bg-variant="warning"
          text-variant="white"
          header="Warning"
          class="text-center"
        >
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>

        <b-card
          bg-variant="danger"
          text-variant="white"
          header="Danger"
          class="text-center"
        >
          <b-card-text
            >Project 2. RuneSkype| https://runeskype.herokuapp.com/play>
            Front-end design, Linting, cleaning up frontend and backend code and
            making sure both sides work together. ● RuneSkype is the newest way
            for friends to interact while playing your favorite Role Playing
            Game (RPG) RuneSkype. Playing RuneSkype is easy, just download a
            copy from our homepage or our repo: ● Responsibilities: Wrote clean,
            presentable code. Kept group on time and on track to present at
            Project Demo Day. Technologies used: ReactJS, ChanceJS, Node,
            Express, Firebase, Twilio-Video, Twilio, WebRTC, Axios. Express,
            Faker, jQuery, React-dnd, React-dnd-html5-backend,React-dom,
            React-draggable, React-router-dom, Webpack-dev-middleware, Webpack
            hot-middleware.</b-card-text
          >
        </b-card>
      </b-card-group>
    </div>
    <div>
      <b-card-group deck>
        <b-card
          header="featured"
          header-tag="header"
          footer="Card Footer"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Header Slot</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
          <template v-slot:footer>
            <em>Footer Slot</em>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {};
</script>
Project 1. Party Dash| https://partydash.com/ Front-End Design • We built Party
Dash with a simple goal in mind: to help party hosts plan parties more easily •
Responsibilities: Follow design specs handed down from site owner. Used CSS and
HTML to create inviting website Technologies used: HTML, CSS, Bootstrap
