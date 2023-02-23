<template>
    <div class="productContainer">
      <div class="containerImags">
        <h1>aslkjdhlajskl {{ book.title }}</h1>
      </div>
      <div class="containerDetails"></div>
    </div>
  </template>
  
  <script>
  import db from "../firebase/init.js";
  import { collection, getDocs, getDoc, doc} from "firebase/firestore";
  
  export default {
      props: {
        bookId: String
      },
    data() {
      return {
        book: [],
      };
    },
    created() {
        const docRef = doc(db, "books", this.bookId);
          getDoc(docRef)
              .then((doc) => {
                  console.log(doc.data(), doc.id)
                  this.book = doc.data();
              });
      },
  };
  </script>
  
  <style scoped>
  .productContainer {
      border: 2px solid red;
      height: 50vw;
      width: 100%;
      display: flex;;
      
  }
  </style>
  