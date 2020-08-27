<template>
  <div class="hello">
    <h1>count：{{ count }}</h1>
    <h2>dataCount：{{ dataCount }}</h2>
    <button @click="decreaseCount">add-</button>
    <button @click="increaseCount">add+</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "HelloWorld",
  data() {
    return {
      // 在data接收的state数据不能动态响应
      dataCount: this.$store.state.count,
    };
  },
  computed: {
    count: function () {
      // 必须return
      return this.$store.state.count;
    },
  },
  mounted() {
    console.log(this.$store.state.count);
  },
  methods: {
    increaseCount() {
      this.$store.commit("SET_COUNT_increase", { num: 10 });
    },
    decreaseCount() {
      this.$store.commit("SET_COUNT_decrease", { num: 5 });
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
