<template>
  <div id="example">
    <h1>mapActions 不用dispatch</h1>
    <h1>count：{{ count }}</h1>
    <h2>dataCount：{{ dataCount }}</h2>
    <button @click="decreaseCount({num:5})">add-</button>
    <button @click="increaseCount({num:10})">add+</button>
    <hr />
    <h2>Actions</h2>
    <button @click="actionsDecreaseCount({num:2})">add-</button>
    <button @click="actionsIncreaseCount({num:4})">add+</button>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      dataCount: this.$store.state.count,
    };
  },
  // mapState辅助函数，参数为state
  computed: mapState({
    // 第一种写法(字符串)
    count: "count",
  }),
  methods: {
    increaseCount(obj) {
      this.$store.commit("SET_COUNT_increase", obj);
    },
    // decreaseCount(obj) {
    //   this.$store.commit("SET_COUNT_decrease", obj);
    // },
    // mapMutations操作用dispatch
    ...mapMutations({
      decreaseCount: "SET_COUNT_decrease",
    }),

    // actions操作用dispatch
    actionsDecreaseCount(obj) {
      console.log(obj);
      this.$store.dispatch("decrementAsync", obj);
    },
    // ...mapMutations辅助函数
    ...mapActions({
      // actionsDecreaseCount: "decrementAsync",
      actionsIncreaseCount: "incrementAsync",
    }),
  },
};
</script>
 