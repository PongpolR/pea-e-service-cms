<template>
  <header>
    <div class="setting">
      <div class="container">
        <div class="menu" v-on:click="menu1()">
          <div class="icon">
            <font-awesome-icon
              icon="fa-solid fa-list"
              style="font-size: 18px"
            />
          </div>
          <div class="text">ข้อมูลทั่วไป</div>
        </div>
        <div class="menu" v-on:click="menu2()">
          <div class="icon">
            <font-awesome-icon
              icon="fa-solid fa-list"
              style="font-size: 18px"
            />
          </div>
          <div class="text">กลุ่มงานบริการ</div>
        </div>
        <div class="menu" v-on:click="menu3()">
          <div class="icon">
            <font-awesome-icon
              icon="fa-solid fa-screwdriver-wrench"
              style="font-size: 18px"
            />
          </div>
          <div class="text">งานบริการ</div>
        </div>
        <div class="menu" v-on:click="menu4()">
          <div class="icon">
            <font-awesome-icon icon="fa-newspaper" style="font-size: 18px" />
          </div>
          <div class="text">จัดการประกาศ</div>
        </div>
        <div class="menu" v-on:click="menu5()">
          <div class="icon">
            <font-awesome-icon
              icon="fa-solid fa-users"
              style="font-size: 18px"
            />
          </div>
          <div class="text">จัดการสิทธิ</div>
        </div>
      </div>
      <div class="panel">
        <SettingPanel :menu="menu" />
      </div>
    </div>
  </header>
</template>

<style scoped>
* {
  font-family: "Kanit";
  font-weight: 500;
}
.setting {
  display: flex;
}
.container {
  padding: 8px 0;
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;
}
.menu {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 5px 30px 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.text {
  color: #8e0369;
  font-size: 18px;
  margin-left: 10px;
}
.icon {
  align-self: center;
  margin-right: 10px;
}

#selected {
  background-color: #b58e38;
}
#icon-selected {
  color: white !important;
}
#text-selected {
  color: white !important;
}
.panel {
  margin-top: 0.5rem;
  margin-left: 1rem;
}
</style>

<script lang="ts">
import SettingPanel from "./SettingPanel.vue"
export default {
  name: "SettingMenu",
  data() {
    return {
      menu: "menu1", // test props
    };
  },
  methods: {
    menu1() {
      console.log("this is menu1");
      this.menu = "menu1";
    },
    menu2() {
      console.log("this is menu2");
      this.menu = "menu2";
    },
    menu3() {
      console.log("this is menu3");
      this.menu = "menu3";

    },
    menu4() {
      console.log("this is menu4");
      this.menu = "menu4";

    },
    menu5() {
      console.log("this is menu5");
      this.menu = "menu5";

    },
  },
  components: { SettingPanel },
};
</script>
