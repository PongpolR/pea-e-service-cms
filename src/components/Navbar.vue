<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <div class="container">
        <div class="logo">
          <img src="../assets/e-service logo.png" alt="e-service logo" />
        </div>
        <div class="nav-item">
          <div class="user">
            <div>นางสาว พิมพ์ลักษ์ บุญชูกุศล</div>
            <div class="userid">
              <span><font-awesome-icon icon="fa-solid fa-user" /> </span
              ><span>505388</span>
            </div>
          </div>
          <div class="logout">
            <div>
              <a href="/">
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right-from-bracket"
                  style="color: #8e0369; font-size: 20px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logo {
  margin-left: 150px;
  align-self: center;
}
img {
  width: 180px;
}
.container {
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e9eaec;
}
.nav-item {
  display: flex;
}
.user {
  color: #8e0369;
  font-size: 16px;
  font-weight: 600;
  font-family: "Kanit", sans-serif;
}
.logout {
  cursor: pointer;
  margin-left: 1rem;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-right: 100px;
}
.userid {
  display: flex;
  justify-content: flex-end;
}
.userid span {
  margin-left: 10px;
}
</style>
