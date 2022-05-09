<template>
  <div>
    <h2>天津理工大学计算机科学与工程学院学生组织报名系统</h2>
    <h3>个人信息</h3>
    <el-input
      v-model="studentNumber"
      placeholder="请输入学号"
      maxlength="8"
      id="ip"
      oninput="value=value.replace(/[^0-9]/,'')"
    ></el-input>
    <el-input v-model="name" placeholder="请输入姓名" id="ip"></el-input>
    <el-input
      v-model="qq"
      placeholder="请输入QQ号"
      maxlength="10"
      id="ip"
      oninput="value=value.replace(/[^0-9]/,'')"
    ></el-input>
    <el-input
      v-model="phone"
      placeholder="请输入手机号"
      maxlength="11"
      id="ip"
      oninput="value=value.replace(/[^0-9]/,'')"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: "PerInf",
  data() {
    return {
      studentNumber: "",
      name: "",
      qq: "",
      phone: "",
    };
  },
};
</script>

<style>
#ip {
  width: 80%;
  height: 25px;
  margin: 5px;
}
#wrod {
  display: inline-block;
  width: 80%;
  background: red;
}
</style>
