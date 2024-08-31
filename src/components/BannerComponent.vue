<template>
  <main>
    <h1>Make Your Burger</h1>
  </main>
</template>

<script>
export default {
  name: "BannerComponent",
};
</script>

<style scoped>
h1 {
  color: #fff;
  text-align: center;
  font-size: 60px;
  background-color: #222;
  padding: 20px 40px;
}
main {
  background-image: url("../../public/img/burger.jpg");
  background-position: 0 -20rem;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
