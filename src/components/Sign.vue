<template>
  <div class="sign">
    <PerInf ref="per"></PerInf>
    <h3>专业与班级</h3>
    <Magor ref="mgr"></Magor>
    <Volue ref="vou"></Volue>
    <h3>是否调剂</h3>
    <el-switch v-model="isChange"></el-switch><br />
    <button id="btn" @click="sign">报名</button><br />
    <button id="btn" @click="Show">后台登录</button><br />
  </div>
</template>

<script>
import PerInf from "../components/PerInf.vue";
import Magor from "../components/Magor.vue";
import Volue from "../components/Volue.vue";
export default {
  name: "Sign",
  data() {
    return {
      isChange: true,
    };
  },
  components: {
    PerInf,
    Magor,
    Volue,
  },
  methods: {
    Show() {
      this.$router.push("/login");
    },
    sign() {
      let send = {
        stdId: this.$refs.per.studentNumber,
        stdName: this.$refs.per.name,
        major: this.$refs.mgr.mag[0],
        classNum: this.$refs.mgr.mag[1],
        stdQQ: this.$refs.per.qq,
        stdPhone: this.$refs.per.phone,
        firstWill: {
          organization: this.$refs.vou.Volue1[0],
          branch: this.$refs.vou.Volue1[1],
          reason: this.$refs.vou.textarea1,
        },
        secondWill: {
          organization: this.$refs.vou.Volue2[0],
          branch: this.$refs.vou.Volue2[1],
          reason: this.$refs.vou.textarea2,
        },
        isDispensing: this.isChange,
      };
      this.$axios.post("http://47.94.90.140:8000/post", send).then((val) => {
        console.log(val);
        if(val.data.code === '0000') {
            alert('报名成功')
        } else {
            alert('报名失败')
        }
      });
    },
  },
};
</script>

<style>
.sign {
  margin: 0 auto;
  width: 25%;
}
h3 {
  margin: 6px 0;
  font-size: 12px;
}
#inp {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10px;
}
#btn {
  width: 50%;
  height: 25px;
  margin-top: 10px;
  border: 0;
  border-radius: 5px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
}
</style>
