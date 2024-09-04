<template>
  <div id="main-container">
    <NavBarComponent :logo="logo_src" :alt="app_name" />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    NavBarComponent,
    FooterComponent,
  },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Make Your Burger",
    };
  },
};
</script>

<style>
#main-container {
  display: grid;
  align-content: space-between;
  min-height: 100vh;
}
* {
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main-container {
  margin: 50px;
  min-height: 250px;
}
h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
