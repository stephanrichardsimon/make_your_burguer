<template>
  <BannerComponent />
  <div class="main-container">
    <h1>Monte seu burger:</h1>
    <BurgerForm />
  </div>
</template>

<script>
import BannerComponent from "../components/BannerComponent.vue";
import BurgerForm from "../components/BurgerForm.vue";

export default {
  name: "HomeView",
  components: {
    BannerComponent,
    BurgerForm,
  },
};
</script>
