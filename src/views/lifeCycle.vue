<template>
  <div>
    <button @click="handle">父组件调用子组件1的方法</button>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      name: "初始化数据",
      age: "100",
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("update");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    handle() {
      this.name = "触发updated";
      ++this.age;
    },
  },
};
</script>