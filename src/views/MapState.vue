<template>
  <div id="example">
    <h1>count：{{ count }}</h1>
    <h2>dataCount：{{ dataCount }}</h2>
    <button @click="decreaseCount">add-</button>
    <button @click="increaseCount">add+</button>

    <h3>sex：{{sex}}</h3>
    <h3>from：{{from}}</h3>
    <h3>myCmpted：{{myCmpted}}</h3>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState } from "vuex";
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
    // 注意下面的写法看起来和上面相同,事实上箭头函数的this指针并没有指向vue实例,因此不要滥用箭头函数,必须使用常规函数
    // from: (state) => this.str + ":" + state.from,

    myCmpted: function () {
      // 这里不需要state,测试一下computed的原有用法
      return "测试" + this.str;
    },
  }),
  methods: {
    increaseCount() {
      this.$store.commit("SET_COUNT_increase", { num: 10 });
    },
    decreaseCount() {
      this.$store.commit("SET_COUNT_decrease", { num: 5 });
    },
  },
  created() {
    // 写个定时器，发现computed依旧保持了只要内部有相关属性发生改变不管是当前实例data中的改变，还是vuex中的值改变都会触发dom和值更新
    setTimeout(() => {
      this.str = "国家";
    }, 1000);
  },
};
</script>
 