<template>
  <div class="bg">
    <div class="footer-bg">
      <img class="img" src="../assets/footer-bg.png" alt="" />
      <div class="left">
        <h1>การไฟฟ้าส่วนภูมิภาค สำนักงานใหญ่</h1>
        <div>
          <font-awesome-icon icon="fa-brands fa-x-twitter" style="font-size: 20px;" />
        </div>
      </div>
      <div class="centered">
        <h1>ติดต่อเรา</h1>
        <div>02-589-0100 ถึง 1</div>
        <div>1129 PEA Contact Center</div>
        <div>200 ถนนงามวงศ์วาน ลาดยาว จตุจักร กรุงเทพ 10900</div>
      </div>
      <div class="right">
        <h1>ติดต่อเรา</h1>
        <div>02-589-0100 ถึง 1</div>
        <div>1129 PEA Contact Center</div>
        <div>200 ถนนงามวงศ์วาน ลาดยาว จตุจักร กรุงเทพ 10900</div>
      </div>
    </div>
    <div class="footer-text">
      © 2023 Provincial Electricity Authority, All rights reserved.
    </div>
  </div>
</template>

<style scoped>
.bg {
  width: 1920px;
  background-color: #b28100;
  overflow-x: hidden;
  /* height: 50px; */
}
.footer-text {
  margin-top: -0.5rem;
  background-color: #b28100;
  padding: 1rem 0;
  color: white;
  font-size: 16px;
  font-family: "Noto Sans";
  text-align: center;
}
.footer-bg {
  position: relative;
  text-align: center;
  margin-top: 3rem;
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.img {
  width: 100%;
}
.left {
  text-align: left;
  font-family: 'Kanit';
  color: white;
  position: absolute;
  top: 80px;
  left: 25%;
  transform: translate(-50%, -50%);
}
.centered {
  text-align: left;
  font-family: 'Kanit';
  color: white;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.right {
  text-align: left;
  font-family: 'Kanit';
  color: white;
  position: absolute;
  top: 100px;
  left: 75%;
  transform: translate(-50%, -50%);
}
</style>
<script setup lang="ts"></script>