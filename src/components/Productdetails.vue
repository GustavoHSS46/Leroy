<template>
  <div class="productContainer">
    <div class="mainContainer">
      <div class="containerImags">
        <div class="imgs">
          <img :src="product.poster" alt="" />
        </div>
        <div class="btn">
          <button class="buy">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
            <h2>buy</h2>
          </button>
          <button @click="addCart()" class="cart">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            <h2>cart</h2>
          </button>
        </div>
      </div>
      <div class="containerDetails">
        <div class="title">
          <h1>{{ product.title }}</h1>
        </div>
        <div class="author language">
          <h2>Edição {{ product.language }} | {{ product.author }}</h2>
        </div>
        <div class="starContainer">
          <div class="star" v-for="star in product.stars">
            <div>
              <font-awesome-icon icon="fa-solid fa-star" />
            </div>
          </div>
        </div>
        <div class="price">
          <h2>Capa Comum</h2>
          <h3>R${{ product.price }}</h3>
        </div>
        <div class="overview">
          <h3>{{ product.overview }}</h3>
        </div>
      </div>
    </div>
    <div class="moreInformation">
      <div class="pags">
        <h3>Número de páginas</h3>
        <font-awesome-icon icon="fa-solid fa-scroll" />
        <h2>{{ product.pags }} páginas</h2>
      </div>
      <div class="language">
        <h3>Idioma</h3>
        <font-awesome-icon icon="fa-solid fa-earth-americas" />
        <h2>{{ product.language }}</h2>
      </div>
      <div class="editor">
        <h3>Editora</h3>
        <font-awesome-icon icon="fa-solid fa-print" />
        <h2>{{ product.editor }}</h2>
      </div>
      <div class="calendar">
        <h3>Data De Lançamento</h3>
        <font-awesome-icon icon="fa-solid fa-calendar" />
        <h2>{{ product.cameOut }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
window.Swal = swal;
import db from "../firebase/init.js";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

export default {
  props: {
    Id: String,
    type: String,
  },
  data() {
    return {
      product: [],
    };
  },
  created() {
    const docRef = doc(db, this.type, this.Id);
    getDoc(docRef).then((doc) => {
      console.log(doc.data(), doc.id);
      this.product = doc.data();
    });
  },
  methods: {
    addCart() {
      Swal.fire({
        title:`${this.product.title}`,
        text:"Was Successfully Added To Your Cart",
        icon: "success",
        confirmButtonColor: '#17bebb',
        width: 800,
        backdrop: `
    rgba(0,0,0,0.7)
    left top
  `
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chivo:wght@100&display=swap");

h1{
  font-family: "chivo", sans-serif !important;
}
h2{
  font-family: "chivo", sans-serif !important;
}
h3{
  font-family: "chivo", sans-serif !important;
}
h4{
  font-family: "chivo", sans-serif !important;
}


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
  background-color: #fe654f;
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
  background-color: #ffc53a;
  border-radius: 20px;
  border: 3;
}

.overview h3 {
  font-size: 32px;
}
</style>
