<template>
  <div class="home">
    
      <Carrousel />
      <Books />
  </div>
</template>

<script>
import Books from "../components/Books.vue";
import Carrousel from "../components/Carrousel.vue";
export default {
  name: "home",
  components: {
    Books,
    Carrousel,
  },
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 45px;
}
</style>