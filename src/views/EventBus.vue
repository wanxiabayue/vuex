<template>
  <div>
    <h2>
      <button @click="handleBrother1">父组件调用子组件1的方法</button>
      <span>{{name}}</span>
    </h2>
    <h4>
      兄弟组件1：
      <Brother1 ref="bro1" />
    </h4>
    <h4>
      兄弟组件2：
      <Brother2 />
    </h4>
    <h6 v-for="item in lists" :key="item.number">{{item.number}}</h6>
  </div>
</template>

<script>
/* eslint-disable */
import { EventBus } from "../event_bus.js";
import Brother1 from "./Brother1.vue";
import Brother2 from "./Brother2.vue";
export default {
  components: {
    Brother1,
    Brother2,
  },
  data() {
    return {
      name: "",
      lists: Array(100)
        .fill("0")
        .map((v, i) => {
          return { number: i };
        }),
    };
  },
  created() {
    // this.lists = Array(100)
    //   .fill("0")
    //   .map((v, i) => {
    //     return { number: i };
    //   });
  },
  methods: {
    handleBrother1() {
      this.$refs.bro1.sendMsg();
      console.log(111, this.$refs.bro1.child);
      this.name = this.$refs.bro1.child;
    },
  },
};
</script>