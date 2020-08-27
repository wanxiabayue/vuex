<template>
  <span>
    <span>{{msg}}</span>
    <button @click="resetMsg()">复原</button>
  </span>

  <!-- <div>
  </div>-->
</template>

<script>
/* eslint-disable */
import { EventBus } from "../event_bus.js";
export default {
  data() {
    return {
      msg: "准备接收兄弟组件1信息",
    };
  },

  created() {
    // 销毁事件
    // this.$off("sendInfo");
  },
  mounted() {
    // 监听事件,获取值
    EventBus.$on("sendInfo", (info) => {
      this.msg = info;
    });
  },
  methods: {
    resetMsg() {
      this.msg = "准备接收兄弟组件1信息";
    },
  },
};
</script>