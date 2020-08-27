<template>
  <button @click="sendMsg()">send</button>
</template>

<script>
/* eslint-disable */
import { EventBus } from "../event_bus.js";
export default {
  data() {
    return {
      child: "获得子组件属性",
    };
  },
  methods: {
    sendMsg() {
      // 触发事件,发送值
      EventBus.$emit("sendInfo", "我是通过eventBus来自兄弟组件1的信息");
    },
  },
};
</script>