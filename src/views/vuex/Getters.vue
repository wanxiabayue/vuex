<template>
  <div>
    <h1>mapGetters</h1>
    <h2>from：{{from}}</h2>
    <h2>from2：{{from2}}</h2>
  </div>
</template>
<script>
/*eslint-disable */
import { mapGetters } from "vuex";
export default {
  // computed: {
  //   from: function () {
  //     return this.$store.getters.address;
  //   },
  //   from2: function () {
  //     return this.$store.getters.addressMore;
  //   },
  // },
  // mapGetters 辅助函数
  // computed: mapGetters({
  //   from: "address",
  //   from2: "addressMore",
  // }),
  // ....mapGetters 辅助函数
  computed: {
    ...mapGetters({
      from: "address",
      from2: "addressMore",
    }),
  },

  created() {
    console.log(11111111, this.$store.getters);
  },
};
</script>