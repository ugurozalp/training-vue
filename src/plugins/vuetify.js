import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

import CustomIcon from "@/icons/CustomIconGlobe.vue";

export default new Vuetify({
  icons: {
    values: {
      customIconGlobal: {
        component: CustomIcon // our custom component
      }
    }
  }
});
