<template>
  <div>
    <button @click="printHello">
      <custom-icon width="50" height="50"></custom-icon>
    </button>
    <v-icon>$vuetify.icons.customIconGlobal</v-icon>
    <v-icon>$customIconGlobal</v-icon>
    <globe-icon></globe-icon>
  </div>
</template>

<script>
import CustomIcon from "@/icons/CustomIconGlobe.vue";
import GlobeIcon from "@/icons/globe.svg";

export default {
  name: "UseOfIcons",
  components: {
    CustomIcon,
    GlobeIcon
  },
  methods: {
    printHello() {
      console.log("Hello!");
    }
  }
};
</script>
