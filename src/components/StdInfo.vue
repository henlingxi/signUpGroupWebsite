<template>
  <div class="all">
    <el-container style="height: 100%">
      <el-aside width="100px" style="background: #292e49">
        <h4>学生信息</h4>
        <button @click="reapp" class="re">前往报名</button>
        <button @click="relog" class="re">返回登录</button>
      </el-aside>
      <el-main class="bg">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '*' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>管理</el-breadcrumb-item>
          <el-breadcrumb-item>学生信息</el-breadcrumb-item>
        </el-breadcrumb>
        <el-input
          v-model="key"
          placeholder="请输入搜索关键字"
          style="width: 500px"
          id="el"
          @blur="fund"
        ></el-input>
        <el-button type="primary" icon="el-icon-search" class="el" @click="fund"
          >搜索</el-button
        >
        <el-table :data="studentInfo" border style="width: 100%" class="tab">
          <el-table-column
            prop="stdId"
            label="学号"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="stdName"
            label="姓名"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="major"
            label="专业"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="classNum"
            label="班级"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="stdQQ"
            label="QQ号"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="stdPhone"
            label="手机号"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="firstWill.organization"
            label="第一志愿"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="firstWill.branch"
            label="部门"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="firstWill.reason"
            label="理由"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="secondWill.organization"
            label="第二志愿"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="secondWill.branch"
            label="部门"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="secondWill.reason"
            label="理由"
            width="150"
          ></el-table-column>
        </el-table>
        <el-pagination
          layout="total, prev, pager, next, jumper"
          :total="pageInfo.total"
          :page-size="5"
          @next-click="add"
          @prev-click="jian"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      studentInfo: [],
      Is: false,
      key: "",
      knum: 1,
      pageInfo: {
        number: 1,
        total: 0,
      },
    };
  },
  mounted() {
    this.students();
  },
  methods: {
    relog() {
      sessionStorage.removeItem("token");
      this.$router.push("/login");
    },
    reapp() {
      sessionStorage.removeItem("token");
      this.$router.push("*");
    },
    students() {
      let token = sessionStorage.getItem("token");
      // sessionStorage.removeItem("token");
      let url =
        "http://47.94.90.140:8000/getAllStuInfo?page=" +
        this.pageInfo.number +
        "&pageSize=5";
      this.$axios
        .post(url, {
          token: token,
          page: this.pageInfo.number,
          pageSize: 5,
        })
        .then((val) => {
          console.log(val);
          this.pageInfo.total = val.data.data.total;
          this.studentInfo = val.data.data.students;
        });
    },
    add() {
      this.pageInfo.number++;
      this.students();
    },
    jian() {
      this.pageInfo.number--;
      this.students();
    },
    handleCurrentChange(val) {
      this.pageInfo.number = val;
      this.students();
    },
    fund() {
      if (this.key) {
        let token = sessionStorage.getItem("token");
        let keyWord = this.key;
        let url =
          "http://47.94.90.140:8000/getStuInfo?page=" +
          this.knum +
          "&pageSize=5";
        this.$axios
          .post(url, {
            token: token,
            keyWord: keyWord,
          })
          .then((val) => {
            this.pageInfo.total = val.data.data.total;
            this.studentInfo = [];
            this.studentInfo = val.data.data.students;
            // console.log(val);
          });
      } else {
        this.students();
      }
    },
  },
};
</script>

<style>
.all {
  height: 100%;
}
.bg {
  background: #fff;
  color: black;
}
.header {
  padding: 10px;
  color: black;
}
h4 {
  color: black;
  font-size: 20px;
}
.re {
  border: 0;
  background: rgba(0, 0, 0, 0);
  margin: 20px 0;
  font-size: 16px;
}
.el {
  margin: 10px 0;
}
</style>
