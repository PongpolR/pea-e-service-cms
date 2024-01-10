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
          <div class="text" id="text-selected">ข้อมูลทั่วไป</div>
        </div>
        <h1>ชื่อและโลโก้</h1>
        <div class="logo">
          <div>โลโก้เว็บไซต์</div>
          <!-- logo img  -->
          <!-- upload img  -->
          <div>Upload</div>
        </div>
        <div class="contact">
          <h1>การติดต่อ</h1>
          <div class="address-name">
            <div>ชื่อที่อยู่</div>
            <input
              type="text"
              value="การไฟฟ้าส่วนภูมิภาค สำนักงานใหญ่"
              class="input"
            />
          </div>
          <div class="address-des">
            <div>รายละเอียดที่อยู่</div>
            <textarea
              type="textarea"
              class="input-area"
              value="200 ถนนงามวงศ์วาน ลาดยาว จตุจักร กรุงเทพ 10900"
            ></textarea>
          </div>
          <div class="email">
            <div>อีเมลล์</div>
            <input type="text" class="input" value="1129@pea.co.th" />
          </div>
          <div class="tel">
            <div>หมายเลขโทรศัพท์</div>
            <input type="text" class="input" value="02-589-0100 ถึง 1" />
          </div>
          <div class="emer">
            <div>สายด่วน</div>
            <input type="text" class="input" value="1129" />
          </div>
        </div>
        <div class="social">
          <h1>โซเซียลมีเดีย</h1>
          <div class="facebook">
            <div>facebook</div>
            <input
              type="text"
              class="input"
              value="https://www.facebook.com/Provincial.Electricity.Authority"
            />
          </div>
          <div class="instagram">
            <div>Instagram</div>
            <input type="text" class="input" placeholder="URL" />
          </div>
          <div class="twitter">
            <div>X(Twitter)</div>
            <input type="text" class="input" placeholder="URL" />
          </div>
          <div class="add-social">
            <button class="toggle-btn" v-on:click="toggleAddSocial()">
              <div class="add-social-icon">
                <font-awesome-icon
                  icon="fa-square-plus"
                  style="color: #b58e38"
                />
              </div>
              <div class="add-social-text">เพิ่มบัญชีโซเซียล</div>
            </button>
          </div>
          <div class="other-social" v-for="index in number" :key="index">
            <div class="other-social-header">โซเซียลมีเดียอื่นๆ</div>
            <div>
              <div class="row1">
                <input
                  type="text"
                  class="input-hide"
                  placeholder="โซเซียลมีเดีย"
                />
                <button class="minus-btn" v-on:click="removeSocialMedia()">
                  <font-awesome-icon icon="fa-square-minus" />
                </button>
              </div>
              <div class="row2">
                <input type="text" class="input-hide" placeholder="URL" />
              </div>
              <!-- <div>
                <img :src="previewImage" class="uploading-image" />
                <input type="file" accept="image/jpeg" @change="uploadImage" />
              </div> -->
            </div>
          </div>
        </div>
        <div class="footer">
          <h1>Footer</h1>
          <div class="copyright">
            <div>copyRight</div>
            <input
              class="input"
              type="text"
              value="&#169;2023 Provincial Electricity Authority, All rights reserved."
            />
          </div>
          <div class="save-btn">
            <div class="cancel">
              <button class="button">ยกเลิก</button>
            </div>
            <div class="save">
              <button class="button">บันทึก</button>
            </div>
          </div>
        </div>
        <div></div>
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
.text {
  color: #8e0369;
  font-weight: 700;
  font-size: 24px;
  /* margin-left: 5px; */
}
.icon {
  align-self: center;
  margin-right: 10px;
  margin-left: -1rem;
}
h1 {
  font-weight: 500;
  font-size: 20px;
}
.logo {
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
}
.input,
.input-hide {
  font-size: 16px;
  margin: 0.6rem 0;
  padding: 5px 15px 5px 20px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgb(236, 236, 236);
}

.input {
  width: 1100px;
}
.input-hide {
  width: 1000px;
}
.input-area {
  font-size: 16px;
  margin: 0.6rem 0;
  padding: 5px 15px 5px 20px;
  width: 1100px;
  height: 130px;
  border-radius: 5px;
  border: 1px solid rgb(236, 236, 236);
  overflow-y: scroll;
  overflow-x: hidden;
}
.add-social {
  cursor: pointer;
  color: #b58e38;
  display: flex;
  justify-content: flex-end;
}
.add-social div {
  margin-right: 10px;
}
.address-name,
.address-des,
.email,
.tel,
.emer,
.facebook,
.instagram,
.twitter,
.other-social,
.copyright {
  display: flex;
}
.address-name div,
.email div {
  align-self: center;
  margin-right: 100px;
}
.tel div {
  align-self: center;
  margin-right: 30px;
}
.facebook div {
  align-self: center;
  margin-right: 80px;
}
.instagram div,
.twitter div,
.copyright div {
  align-self: center;
  margin-right: 75px;
}
.emer div {
  align-self: center;
  margin-right: 90px;
}
.other-social div {
  align-self: center;
  margin-right: 35px;
}
.address-des div {
  /* align-self: center; */
  margin-top: 1rem;
  margin-right: 45px;
}
.save-btn {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
}
.save-btn div {
  margin-left: 10px;
}
.cancel button {
  border: 1px solid #8e8e8e;
  color: #8e8e8e;
}
.save button {
  background-color: #b58e38;
  color: white;
  margin-right: 1rem;
  border: none;
}
.button {
  font-size: 16px;
  cursor: pointer;
  padding: 0.6rem 3rem;
  border-radius: 5px;
}
.toggle-btn {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  border: none;
  padding: 0;
  background-color: white;
  margin-right: 10px;
}
.add-social-text,
.add-social-icon {
  font-size: 16px;
  color: #b58e38;
}
.minus-btn {
  font-size: 16px;
  border: none;
  cursor: pointer;
  color: #b58e38;
  background-color: white;
  /* margin-left: 50px; */
  margin-left: 1rem;
  padding: 0;
}
.other-social-header {
  margin-bottom: 4rem;
}
.uploading-image{
     display:flex;
     width: 100px;
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
    // uploadImage(e) {
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
