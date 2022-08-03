<template>
  <div>{{ `${$t("route")}_1` }}{{ nestData }}</div>
</template>
<script>
import { apiTest } from "../../api/index";
export default {
  data() {
    return {
      nestData: "",
    };
  },
  mounted() {
    console.log("???");
    apiTest({}).then((res) => {
      this.nestData = res.data;
      console.log(this.nestData)
    });
  },
}; 
</script>

<style lang="scss" scoped></style>
