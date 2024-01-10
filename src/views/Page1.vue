<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
import SettingMenu from "@/components/SettingMenu.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="bg">
    <Navbar></Navbar>
    <div class="title">การตั้งค่า</div>
    <div class="container">
      <div class="menu">
        <SettingMenu />
      </div>
      <div class="component">
        <!-- <SettingPanel /> -->
      </div>
    </div>
    <div class="footer">
      <!-- Footer -->
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
.bg {
  width: 100vw;
  max-width: 100vw;
  background-color: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
}
.container {
  display: flex;
  margin-top: 1rem;
  margin-left: 7rem;
}
.title {
  color: #8e0369;
  font-family: "kanit";
  font-weight: 600;
  font-size: 32px;
  margin-top: 2rem;
  margin-left: 7rem;
}
.component {
  margin-top: 7px;
  margin-left: 10px;
}
h1 {
  font-weight: 500;
}
</style>
