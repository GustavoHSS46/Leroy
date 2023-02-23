<template>
  <Navbar class="Nav"/>
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  display: flex;
  justify-content: center;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 85%;
  height: fit-content;
  overflow-x: hidden !important;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
}
</style>
