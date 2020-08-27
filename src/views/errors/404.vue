<template>
  <div>
    <h2 id="error">目标没找到，返回 404 页面</h2>
    <h4>路由配置错误</h4>
    <h3>{{$route.path}}</h3>
  </div>
</template>
<script>
/*eslint-disable */
export default {
  mounted() {
    console.log(11, this.$route, this.$router);
  },
};
</script>
<style lang="scss" scoped>
// 定义变量
$border-color: green;
$num: 2;
#error {
  color: red;
  font-size: 20px;
  transform: rotate(-15deg) scale(1.5);
  animation: rotation 5s cubic-bezier(0.1, 0.25, 0.25, 0.1) alternate infinite;
  // animation: rotation 5s linear 1s infinite alternate;
  border: $num * 1px solid $border-color;
  width: $num * 150px;
  margin: 0 auto;
}
@keyframes rotation {
  from {
    -webkit-transform: rotate(-30deg);
  }
  to {
    -webkit-transform: rotate(30deg);
  }
}
</style>
