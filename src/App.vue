<template>
  <div class="mainContent">
    <Navbar class="Nav"/>
    <router-view v-slot="{ Component }">
      <Transition name="route" mode="out-in">
        <component :is="Component"/>
      </Transition>
    </router-view>
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
  height: 60vw;
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

.route-enter-active {
  transition: all .8s cubic-bezier(1, 0.5, 0.8, 1);
}

.route-leave-active {
  transition: all .8s cubic-bezier(1, 0.5, 0.8, 1);
}

.route-enter-from,
.route-leave-to {
  transform: translateX(2000px);
  opacity: 0;
}

</style>
