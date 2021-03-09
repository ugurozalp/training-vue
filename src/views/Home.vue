<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <use-of-icons msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import UseOfIcons from "@/components/UseOfIcons.vue";

export default {
  name: "Home",
  components: {
    UseOfIcons
  }
};
</script>
