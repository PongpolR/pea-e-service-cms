// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')

import "./assets/main.css";

import { createApp } from "vue";
// import Vue from 'vue';
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faArrowRightFromBracket,
  faUser,
  faList,
  faScrewdriverWrench,
  faNewspaper,
  faUsers,
  faSquarePlus,
  faSquareMinus,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faArrowRightFromBracket,
  faUser,
  faList,
  faScrewdriverWrench,
  faNewspaper,
  faUsers,
  faSquarePlus,
  faSquareMinus,
  faXTwitter,
  faMagnifyingGlass
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
