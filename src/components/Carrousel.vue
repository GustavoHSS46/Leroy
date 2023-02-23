<template>
  <div class="containerCarrousel">
    <div class="poster">
      <router-link v-if="Load" :to="{ name: 'section', params: { id: this.ids } }">
        <img :src="this.urls" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init.js";
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      ids: '',
        urls: [],
      Load: false,
    };
  },
  methods: {
    async createUser() {
      const colRef = collection(db, "poster");

      getDocs(colRef)
        .then((snapshot) => {
          let poster = [];
          snapshot.docs.forEach((doc) => {
            poster.push({
              ...doc.data(),
              id: doc.id,
            });
            this.ids = doc.id;
            this.urls = doc.data().poster;
            this.Load = true
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.createUser();
  },
};
</script>

<style scoped>
.containerCarrousel {
  height: 450px;
  width: 100%;
  overflow: hidden;
}
a {
  height: 100%;
  width: 100%;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
