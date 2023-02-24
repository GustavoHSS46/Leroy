<template>
  <Productdetails :type="this.type" :Id="this.id" />
</template>

<script>
import Productdetails from "../components/Productdetails.vue";
export default {
  props: ["id"],
    components: {
        Productdetails,
  },
  setup()  {
    const type = ""

    return {type}
  },
  created() {
    this.type = this.$route.query.type
    }
};
</script>

<style scoped></style>
