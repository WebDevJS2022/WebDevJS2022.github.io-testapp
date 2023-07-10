<template>
  <AppHeader />
  <UserPage
    :user="user"
    :active="active.user_drawer"
    v-on:close-user-drawer="closeUserDrawer()"
  />
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
        <AppUsers
          v-for="user in users"
          :key="user.id"
          :user="user"
          v-on:view-user="viewUser($event)"
        />
      </tbody>
    </v-table>
    <!-- <BasePagination v-model="page"/> -->
  
</template>

<script>
import users from '@/data/users.js'
import AppHeader from '@/components/AppHeader.vue';
import AppUsers from '@/components/AppUsers.vue';
import UserPage from '@/pages/UserPage.vue';
// import BasePagination from '@/components/BasePagination.vue'

export default {
  name: 'HomePage',
  components: { AppHeader, AppUsers, UserPage },
  data() {
    return {
        users: users,
        user: null,
        active: {
            user_drawer: false
        }
    }
  },
  methods: {
    viewUser(user) {
        this.user = user
        this.active.user_drawer = true
        console.log(this.user)
    },
    closeUserDrawer() {
        this.active.user_drawer = false
    }
  }
};
</script>

<style scoped>
.users {
 margin-top: 100px;
 margin-left: 50px;
 margin-right: 50px;
 border: solid 2px blue;
}
</style>
