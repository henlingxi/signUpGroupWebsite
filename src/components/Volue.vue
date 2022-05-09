<template>
  <div>
    <h3>第一志愿</h3>
    <el-cascader v-model="Volue1" :options="valu" id="inp"></el-cascader>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入加入此组织的理由"
      v-model="textarea1"
      id="inp"
    ></el-input>
    <h3>第二志愿</h3>
    <el-cascader v-model="Volue2" :options="valu" id="inp"></el-cascader>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入加入此组织的理由"
      v-model="textarea2"
      id="inp"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: "Volue",
  data() {
    return {
      Volue1: [],
      textarea1: "",
      Volue2: [],
      textarea2: "",
      valu: [
        {
          value: "科技协会",
          label: "科技协会",
          children: [
            {
              value: "科技协会",
              label: "科技协会",
            },
          ],
        },
        {
          value: "团委",
          label: "团委",
          children: [
            {
              value: "组织部",
              label: "组织部",
            },
            {
              value: "宣传部",
              label: "宣传部",
            },
            {
              value: "心协",
              label: "心协",
            },
            {
              value: "青协",
              label: "青协",
            },
          ],
        },
        {
          value: "学生会",
          label: "学生会",
          children: [
            {
              value: "办公室",
              label: "办公室",
            },
            {
              value: "学习部",
              label: "学习部",
            },
            {
              value: "宣传部",
              label: "宣传部",
            },
            {
              value: "文艺部",
              label: "文艺部",
            },
            {
              value: "体育部",
              label: "体育部",
            },
            {
              value: "外联部",
              label: "外联部",
            },
            {
              value: "自管会",
              label: "自管会",
            },
          ],
        },
        {
          value: "勤工助学中心",
          label: "勤工助学中心",
          children: [
            {
              value: "管理部",
              label: "管理部",
            },
            {
              value: "活动部",
              label: "活动部",
            },
            {
              value: "助贷部",
              label: "助贷部",
            },
            {
              value: "外联部",
              label: "外联部",
            },
          ],
        },
        {
          value: "新闻中心",
          label: "新闻中心",
          children: [
            {
              value: "摄影协会",
              label: "摄影协会",
            },
            {
              value: "新媒体部",
              label: "新媒体部",
            },
            {
              value: "记者团",
              label: "记者团",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
