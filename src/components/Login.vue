<template>
    <div id="lg">
      <h2>LOGIN</h2>
      <el-input
        v-model="userName"
        placeholder="请输入用户名"
        class="elput"
      ></el-input>
      <el-input
        v-model="passWord"
        placeholder="请输入密码"
        show-password
        class="elput"
      ></el-input>
      <el-button :plain="true" @click="log" id="myBtn">登录</el-button> <br />
      <button id="myBtn" @click="clearAll">重置</button>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      passWord: "",
    };
  },
  methods: {
    clearAll() {
      this.userName = "";
      this.passWord = "";
    },
    log() {
      if (this.userName !== "20210000") {
        this.$message({
          message: "用户名错误",
          type: "warning",
          center: true,
          duration: 1000,
        });
      } else if (this.passWord !== "12345") {
        this.$message({
          message: "密码错误",
          type: "warning",
          center: true,
          duration: 1000,
        });
      } else {
        this.$message({
          message: "登录成功",
          type: "success",
          center: true,
          duration: 1000,
        });
        setTimeout(() => {
          let send = {
            username: this.userName,
            password: this.passWord,
          };
          this.$axios
            .post("http://47.94.90.140:8000/login", send)
            .then((val) => {
              sessionStorage.setItem("token", val.data.data.token);
              if (val.data.data.token) {
                this.$axios
                  .post("http://47.94.90.140:8000/getRole", {
                    token: val.data.data.token,
                  })
                  .then((val) => {
                    if (val.data.code === "0000") {
                      this.$router.push("/StdInfo");
                    }
                  });
              }
            });
        }, 1000);
      }
    },
  },
};
</script>

<style>
#lg {
  width: 350px;
  height: 400px;
  background: #00000060;
  border-radius: 10px;
  margin: 0 auto;
  /* margin-top: 10%; */
  text-align: center;
}
.elput {
  width: 80%;
  margin-bottom: 10px;
}
#myBtn {
  width: 50%;
  height: 25px;
  margin-top: 10px;
  border: 0;
  border-radius: 5px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
  color: #000;
}
</style>
