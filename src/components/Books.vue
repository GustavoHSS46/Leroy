<template>
  <div class="rowBooks">
    <div class="title">
      <h1>Books</h1>
    </div>
    <div class="catalogue">
      <div v-for="book in books" :key="book.id" class="cardBooks">
        <div class="imgs">
          <img :src="book.poster" alt="" />
        </div>
        <h1>
          {{ book.title }}
        </h1>
        <h2>
          R${{ book.price }}
        </h2>

        <div class="starContainer">

          <div class="star" v-for="star in book.stars">
            <div>
              <font-awesome-icon icon="fa-solid fa-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init.js";
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      books: [],
    };
  },
  methods: {
    async gettinBooks() {
      const colRef = collection(db, "books");
      getDocs(colRef)
        .then((snapshot) => {
          let books = [];
          snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id, stars: doc.data().stars });
          });
          this.books = books;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.gettinBooks();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chivo:wght@100&display=swap");
.rowBooks {
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.starContainer {
  margin-top: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-height: 5%;
}
h2 {
  margin-top: 5px;
}

h1 {
  width: 90%;
}

.star {
  height: 60px;
  width: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

svg {
  font-size: 45px;
  color: gold;
}

.catalogue {
  width: 100%;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  overflow-y: hidden;

}

.cardBooks {
  height: 450px;
  width: 300px;
  margin: 15px;
  box-shadow: 0px 2px 10px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: 450ms;
}

.cardBooks:hover {
  transform: scale(.95);
}

.imgs {
  height: 250px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
}
.imgs img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: contain;
}

h1 {
  font-size: 24px;
  text-transform: uppercase;
  font-family: "Chivo", sans-serif;
}
h2 {
  font-size: 24px;
  color: brown;
  text-transform: uppercase;
  font-family: "Chivo", sans-serif;
}
</style>
