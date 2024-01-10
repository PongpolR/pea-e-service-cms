<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="container">
      <!-- Logo -->
      <img src="../assets/logo.png" alt="logo" srcset="" />
      <div class="title">Sign in to your account</div>
      <div class="input-field">
        <div><input class="input" type="text" /></div>
        <div><input class="input" type="password" /></div>
      </div>
      <div>
        <input class="input-c" type="checkbox" name="" id="" />
        <span>Remember me</span>
      </div>
      <div>
        <p class="problem-text">
          พบปัญหาการลงชื่อเข้าใช้งานโปรดติดต่อ 9960 PEA ITIL
        </p>
      </div>
      <RouterLink to="/page1">
        <button type="submit" class="sign-in-btn">Sign In</button>
      </RouterLink>
      <div class="register">
        <span>New user? </span><span class="register-text">Register</span>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

* {
  font-family: "Noto Sans", sans-serif;
}
main {
  /* background-color: rgb(235, 235, 235); */
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: white;
  border: none;
  border-radius: 10px;
}
img {
  margin: 1.5rem 1rem;
  border-radius: 10px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}
.input-field {
  /* background-color: red; */
  text-align: center;
}
.problem-text {
  text-align: center;
  font-weight: bold;
  font-family: "Kanit", sans-serif;
  margin-bottom: 1rem;
}
.input {
  font-size: 16px;
  margin: 0.6rem 0;
  padding: 5px 15px;
  width: 400px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid rgb(236, 236, 236);
}
.input-c {
  margin: 1rem 5px;
  margin-left: 2rem;
  margin-bottom: 0.1rem;
}
.sign-in-btn {
  font-size: 18px;
  height: 50px;
  width: 440px;
  text-align: center;
  margin: 0 30px;
  margin-top: 10px;
  color: white;
  background-color: #69306d;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  margin-bottom: 2rem;
}
.sign-in-btn * {
  color: white;
  text-decoration: none;
}
.register {
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
}
.register-text {
  color: #69306d;
}
</style>
<script setup lang="ts"></script>