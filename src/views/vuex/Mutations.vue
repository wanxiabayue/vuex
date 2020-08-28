<template>
  <div id="example">
    <h1>mapMutations 不用commit</h1>
    <h1>count：{{ count }}</h1>
    <h2>dataCount：{{ dataCount }}</h2>
    <button @click="decreaseCount({num:5})">add-</button>
    <button @click="increaseCount({num:10})">add+</button>

    <h3>sex：{{sex}}</h3>
    <h3>from：{{from}}</h3>

    <button style="margin-top:20px" @click="changeName({first:'my ',second:'name is '})">{{name}}</button>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      str: "国籍",
      dataCount: this.$store.state.count,
    };
  },
  // mapState辅助函数，参数为state
  computed: mapState({
    // 第一种写法(字符串)
    count: "count",
    // 第二种写法(箭头函数)
    sex: (state) => state.sex,
    // 用普通函数this指向vue实例,要注意
    from: function (state) {
      return this.str + " -> " + state.from;
    },
    name: "name",
  }),
  methods: {
    // increaseCount(obj) {
    //   this.$store.commit("SET_COUNT_increase", obj);
    // },
    // decreaseCount(obj) {
    //   this.$store.commit("SET_COUNT_decrease", obj);
    // },
    // ...mapMutations辅助函数
    ...mapMutations({
      increaseCount: "SET_COUNT_increase",
      decreaseCount: "SET_COUNT_decrease",
      changeName: "fn",
    }),
  },
  created() {
    // 写个定时器，发现computed依旧保持了只要内部有相关属性发生改变不管是当前实例data中的改变，还是vuex中的值改变都会触发dom和值更新
    setTimeout(() => {
      this.str = "国家";
    }, 1000);
  },
};
</script>
 