<template>
  <div class="productContainer">
    <div class="mainContainer">
      <div class="containerImags">
        <div class="imgs">
          <img :src="book.poster" alt="" />
        </div>
        <div class="btn">
          <button class="buy">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
            <h2>buy</h2>
          </button>
          <button class="cart">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            <h2>cart</h2>
          </button>
        </div>
      </div>
      <div class="containerDetails">
        <div class="title">
          <h1>{{ book.title }}</h1>
        </div>
        <div class="author language">
          <h2>Edição {{ book.language }} | {{ book.author }}</h2>
        </div>
        <div class="starContainer">
          <div class="star" v-for="star in book.stars">
            <div>
              <font-awesome-icon icon="fa-solid fa-star" />
            </div>
          </div>
        </div>
        <div class="price">
          <h2>Capa Comum</h2>
          <h3>R${{ book.price }}</h3>
        </div>
        <div class="overview">
          <h3>{{ book.overview }}</h3>
        </div>
      </div>
    </div>
    <div class="moreInformation">
      <div class="pags">
        <h3>Número de páginas</h3>
        <font-awesome-icon icon="fa-solid fa-scroll" />
        <h2>{{ book.pags }} páginas</h2>
      </div>
      <div class="language">
        <h3>Idioma</h3>
        <font-awesome-icon icon="fa-solid fa-earth-americas" />
        <h2>{{ book.language }}</h2>
      </div>
      <div class="editor">
        <h3>Editora</h3>
        <font-awesome-icon icon="fa-solid fa-print" />
        <h2>{{ book.editor }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init.js";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

export default {
  props: {
    bookId: String,
  },
  data() {
    return {
      book: [],
    };
  },
  created() {
    const docRef = doc(db, "books", this.bookId);
    getDoc(docRef).then((doc) => {
      console.log(doc.data(), doc.id);
      this.book = doc.data();
    });
  },
};
</script>

<style scoped>
h1 {
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
}
.productContainer {
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.mainContainer {
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
}

.containerImags {
  width: 35%;
  height: 100%;
}

.containerDetails {
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.imgs {
  height: 75%;
  width: 100%;
  overflow: hidden;
}
.btn {
  margin-top: 15px;
  height: 25%;
  width: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  border: 0;
  outline: none;
}
.btn svg {
  font-size: 48px;
  color: black;
}

.buy {
  background-color: #17bebb;
}
.cart {
  background-color: #FE654F;
}

.btn > * {
  height: 40%;
  border: 0;
  outline: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 15px;
  font-size: 24px;
  border-radius: 16px;
  cursor: pointer;
}

.imgs img {
  height: 100%;
  width: 100%;
  object-fit: contain;
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

.star {
  height: 60px;
  width: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

svg {
  font-size: 35px;
  color: gold;
}

.price {
  border: 3px solid blue;
  border-radius: 26px;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 10%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.price h3 {
  font-size: 24px;
  color: red;
}
.price h2 {
  font-size: 28px;
  color: black;
}

.moreInformation svg {
  color: black;
  font-size: 64px;
}

.moreInformation {
  width: 100%;
  height: 20%;
  margin-top: 10px;
  height: fit-content;
  padding: 15px;
  gap: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid black;
}

.moreInformation > * {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.overview {
  height: 60%;
  width: 80%;
  overflow-y: scroll !important;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 25px 2px;
  margin: 25px;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #FFC53A;
  border-radius: 20px;
  border: 3;
}

.overview h3 {
  font-size: 32px;
}
</style>
