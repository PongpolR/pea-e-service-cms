<template>
  <header>
    <nav>
      <div class="container">
        <div class="header" id="selected">
          <div class="icon" id="icon-selected">
            <font-awesome-icon
              icon="fa-solid fa-list"
              style="font-size: 24px"
            />
          </div>
          <div class="text" id="text-selected">กลุ่มงานบริการ</div>
        </div>
        <div class="sub-text">กำหนดกลุ่มงานบริการ</div>
        <div class="search-field">
          <div>
            <div style="font-weight: 400">คำค้นหา</div>
            <input type="text" class="input" />
          </div>
          <div>
            <div style="font-weight: 400">สถานะการใช้งาน</div>
            <!-- <input type="text" class="input"> -->
            <select v-model="selected" class="dropdown-input">
              <option value="เปิดใช้งาน">เปิดใช้งาน</option>
              <option value="ปิดใช้งาน">ปิดใช้งาน</option>
            </select>
          </div>
        </div>
        <div>
          <button class="clear-btn">เคลียร์ค่า</button>
          <button class="search-btn">ค้นหา</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
* {
  font-family: "Kanit";
  font-weight: 300;
}
.container {
  width: 1300px;
  padding: 1rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.header {
  display: flex;
  justify-content: flex-start;
  padding: 5px 30px 5px 0;
  border-radius: 5px;
  margin-bottom: 10px;
}
.icon {
  align-self: center;
  margin-right: 10px;
  margin-left: -1rem;
}
.text {
  color: #8e0369;
  font-size: 18px;
  /* margin-left: 10px; */
  font-weight: 700;
  font-size: 24px;
}
.sub-text {
  color: #253553;
  font-weight: 500;
  margin-bottom: 1rem;
}
.input {
  font-size: 16px;
  margin: 0.6rem 0;
  padding: 5px 15px 5px 20px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgb(236, 236, 236);
  width: 600px;
}
.search-field {
  display: flex;
  /* justify-content: space-around; */
}
.search-field div {
  margin-right: 1rem;
}
.dropdown-input {
  font-size: 16px;
  margin: 0.6rem 0;
  color: #5a5a5a;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgb(236, 236, 236);
  width: 600px;
}
.clear-btn {
  font-size: 16px;
  cursor: pointer;
  padding: 0.6rem 3rem;
  border-radius: 5px;
  border: 1px solid #8E8E8E;
  background: white;
}
.search-btn {
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 0.6rem 3rem;
  border-radius: 5px;
}
</style>

<script lang="ts">
export default {
  name: "imageUpload",
  data() {
    return {
      // display: false,
      number: 0,
      previewImage: null,
      selected: "เปิดใช้งาน",
    };
  },
  methods: {
    toggleAddSocial() {
      // this.display = !this.display;
      this.number++;
    },
    removeSocialMedia() {
      this.number--;
    },
    // uploadImage(e:void) {
    //   const image = e.target.files[0];
    //   const reader = new FileReader();
    //   reader.readAsDataURL(image);
    //   reader.onload = (e) => {
    //     this.previewImage = e.target.result;
    //     console.log(this.previewImage);
    //   };
    // },
  },
};
</script>
