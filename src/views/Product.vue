<template>
  <Productdetails :bookId="this.id"/>
</template>

<script>
import Productdetails from "../components/Productdetails.vue";
export default {
    props: ["id"],
    components: {
        Productdetails,
    },
};
</script>

<style scoped>
</style>
