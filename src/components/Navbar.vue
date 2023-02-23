<template>
  <div class="navContainer">
    <div class="wrapperSettings">
      <router-link to="/search">
        <div class="search">
          <font-awesome-icon icon="fa-solid fa-search" />
        </div>
      </router-link>
      <router-link class="logo" to="/">
        <div>
          <h1>LEROY</h1>
        </div>
      </router-link>
    </div>
    <div class="wrapperSettings spaceLeft">
      <router-link to="/settings">
        <div class="settings">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="cart">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Chivo:wght@100&display=swap");

.navContainer {
  position: relative;
  z-index: 1;
  height: 80px;
  width: 100%;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.wrapperSettings {
  width: 60%;
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.spaceLeft {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 50px;
}

svg {
  font-size: 45px;
  cursor: pointer;
  text-decoration: none;
  color: black;
}

.logo {
  width: fit-content;
  height: 100%;
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-family: "Chivo", sans-serif;
  font-weight: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  width: 10%;
  height: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
</style>
