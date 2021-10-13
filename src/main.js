import Vue from "vue";
import App from "./App.vue";
import Chakra, {
  CThemeProvider,
  CColorModeProvider,
  CBox,
  CReset,
} from "@chakra-ui/vue";
import "./styles/font.css";
import extendTheme from "./styles/theme.js";
import router from "./router";
import VueAxios from "vue-axios";
import VueSwal from "vue-swal";

// VueTable
import VueEasytable from "vue-easytable"; // import library
Vue.use(VueEasytable);
import "vue-easytable/libs/theme-default/index.css"; // import style

// import icons
import { faHome } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

// Import Chakra UI Plugin and register it.
Vue.use(Chakra, {
  extendTheme,
  icons: {
    iconPack: 'fa',
    iconSet: {
      faHome
    }
  }
});

Vue.use(VueAxios, axios);
Vue.use(VueSwal);

Vue.config.productionTip = false;

new Vue({
  router,

  render(h) {
    // Mount our application inside the
    // ThemeProvider and ColorModeProvider components :)

    // You can also do this inside the App.vue file if you wish :)
    // See example at https://github.com/chakra-ui/chakra-ui-vue#usage
    return h(CThemeProvider, [
      h(CColorModeProvider, [h(CBox, [h(CReset), h(App)])]),
    ]);
  },
}).$mount("#app");
