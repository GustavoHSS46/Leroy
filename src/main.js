import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faCartShopping, faSearch, faBars, faStar, faEarthAmericas, faScroll, faPrint,faBagShopping } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faSearch, faCartShopping, faBars, faStar, faEarthAmericas, faScroll, faPrint, faBagShopping )

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
