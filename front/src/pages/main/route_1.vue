<template>
  <div>
    {{ `${$t("route")}_1` }}
    <h1>CRUD</h1>
    <button @click="onAdd">Add</button>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
      <tr v-for="item in userList" :key="item.id">
        <td>
          {{ item.id }}
        </td>
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.age }}
        </td>
        <td>
          {{ item.gender }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { apiGetUserList } from "../../api/index";
export default {
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    apiGetUserList({}).then((res) => {
      this.userList = res.data;
    });
  },
  methods: {
    onAdd() {
      
    },
  },
};
</script>

<style lang="scss" scoped></style>
