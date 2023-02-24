<template>
    <div class="footerContainer">
        <h3>Lorey</h3>
        <h2>Copyright © 1912 - 2023 Lorey®. All rights reserved.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae felis scelerisque,</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chivo:wght@100&display=swap");
.footerContainer {
    margin-top: 25px;
    background-color: black !important;
    color: white;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

h3 {
    margin-top: 16px;
    font-size: 56px;
    font-family: "Chivo", sans-serif;
}

h2 {
    margin-top: 8px;
    font-family: "Chivo", sans-serif;
}

p {
    font-size: 24px;
    margin-top: 8px;
    font-family: "Chivo", sans-serif;
    width: 50%;
    margin-bottom: 16px;
}
</style>