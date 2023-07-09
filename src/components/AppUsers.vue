<template>
    <v-table class="users">
      <thead>
        <tr>
          <th class="text-left">
            Имя сотрудника
          </th>
          <th class="text-left">
            Должность
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in users"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.position }}</td>
        </tr>
      </tbody>
    </v-table>
    <v-pagination
      v-model="page"
      :length="pageSize"
      :total-visible="4"
    ></v-pagination>
  </template>

<script>
import users from '@/data/users'

export default {
  data () {
    return {
      page: 1,
      usersPerPage: 3,
    };
  },
  computed: {
    users(){
      const offset = (this.page - 1) * this.usersPerPage;
      return users.slice(offset, offset + this.usersPerPage);
    }
  }
}
</script>

<style>
.users {
 margin-top: 100px;
 margin-left: 50px;
 margin-right: 50px;
 border: solid 2px blue;
}
</style>