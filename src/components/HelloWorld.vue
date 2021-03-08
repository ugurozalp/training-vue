<template>
  <div>
    <button @click="printHello">
      <custom-icon width="50" height="50"></custom-icon>
    </button>
    <v-icon>$vuetify.icons.customIconGlobal</v-icon>
    <v-icon>$customIconGlobal</v-icon>
  </div>
</template>

<script>
import CustomIcon from "@/icons/CustomIconGlobe.vue";

export default {
  name: "HelloWorld",
  components: {
    CustomIcon
  },
  methods: {
    printHello() {
      console.log("Hello!");
    }
  }
};
</script>
