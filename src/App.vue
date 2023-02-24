<template>
  <div class="mainContent">
    <Navbar class="Nav"/>
    <router-view />
  </div>
  <Footer class="Footer"/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
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
  width: 100%;
  height: fit-content;
  overflow-x: hidden !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
}

.mainContent {
  width: 85%;
}

::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #ffc53a;
  border-radius: 40px;
}
</style>
