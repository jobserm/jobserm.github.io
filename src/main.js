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

// import icons
import { faHome } from '@fortawesome/free-solid-svg-icons'
import VueApexCharts from 'vue-apexcharts'

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

// inject apexchart
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

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
