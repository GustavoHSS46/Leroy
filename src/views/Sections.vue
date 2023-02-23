<template>
  <div>
    <h1>{{ this.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "section",
  props: ["id"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chivo:wght@100&display=swap");

h1 {
  font-size: 24px;
  font-family: "Chivo", sans-serif;
}
</style>
