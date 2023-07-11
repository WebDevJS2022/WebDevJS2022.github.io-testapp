<template>
    <AppHeader />
    <UserPage :user="user" :active="active.user_drawer" v-on:close-user-drawer="closeUserDrawer()" />
    <h1 class="users-title">СПИСОК СОТРУДНИКОВ</h1>
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
            <AppUsers v-for="user in usersData" :key="user.id" :user="user" v-on:view-user="viewUser($event)" />
        </tbody>
    </v-table>
    <v-pagination
      v-model="page"
      :length="4"
    ></v-pagination>
    


    <DocumentPage :document="document" :active2="active2.document_drawer" v-on:close-document-drawer="closeDocumentDrawer()" />
    <h1 class="users-title">СПИСОК ДОКУМЕНТОВ</h1>
    <p class="search">Найти документ по сотруднику</p>
    <input v-model="searchUser" type="text" placeholder="Фильтр по сотруднику" class="search">
    <v-table class="users">
        <thead>
            <tr>
                <th class="text-left">
                    Документ
                </th>
                <th class="text-left">
                    Сотрудник
                </th>
            </tr>
        </thead>
        <tbody>
            <AppDocuments v-for="document in documentsData" :key="document.id" :document="document" v-on:view-document="viewDocument($event)" />
        </tbody>
    </v-table>
    <div class="text-xs-center">
    <v-pagination
      v-model="pageDocuments"
      :length="4"
    ></v-pagination>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppUsers from '@/components/AppUsers.vue';
import UserPage from '@/pages/UserPage.vue';
import DocumentPage from '@/pages/DocumentPage.vue';
import AppDocuments from '@/components/AppDocuments.vue';
import { mapActions } from 'vuex';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  components: { AppHeader, AppUsers, UserPage, AppDocuments, DocumentPage },
  data() {
    return {
        searchUser: '',
        page: 1,
        pageDocuments: 1,
        usersPerPage: 3,
        documentsPerPage: 3,
        user: null,
        document: null,
        active: {
            user_drawer: false
        },
        active2: {
            document_drawer: false
        },
        usersData: null, // Вывод списка юзеров из API
        documentsData: null, // Вывод списка документов из API
    }
  },
  methods: {
    ...mapActions([
        'GET_USERS_FROM_API'
    ]),
    ...mapActions([
        'GET_DOCUMENTS_FROM_API'
    ]),
    loadUsers(){
        axios.get(`http://localhost:3000/users?_page=${this.page}&_limit=${this.usersPerPage}`)
          .then(response => this.usersData = response.data)
          .catch((error) => {
          console.log(error)
          return error;
        })
    },
    loadDocuments(){
        axios.get(`http://localhost:3000/documents?_page=${this.page}&_limit=${this.documentsPerPage}`)
          .then(response => this.documentsData = response.data)
          .catch((error) => {
          console.log(error)
          return error;
        })
    },

    viewUser(user) {
        this.user = user
        this.active.user_drawer = true
    },
    closeUserDrawer() {
        this.active.user_drawer = false
    },
    viewDocument(document) {
        this.document = document
        this.active2.document_drawer = true
    },
    closeDocumentDrawer() {
        this.active2.document_drawer = false
    }
  },
  watch: {
    page() {
        this.loadUsers();
    },
    pageDocuments() {
        this.loadDocuments();
    }
  },
  mounted() {
    this.GET_USERS_FROM_API()
  },
  mounted() {
    this.GET_DOCUMENTS_FROM_API()
  },
  computed: {
    ...mapGetters([
        'USERS'
    ]),
    ...mapGetters([
        'DOCUMENTS'
    ]),

    users(){
      return this.usersData
        ? this.usersData.users.map(user => {
            return {
                ...user,
            }
        })
        : [];
    },
    documents(){
        return this.documentsData
        ? this.documentsData.documents.map(document => {
            return {
                ...document,
            }
        })
        : [];
    },
    filteredUsers() {
        var self = this
        const filtered = this.documents.filter(function(document) {
            return document.name.indexOf(self.searchUser) > -1
        })

        return filtered
    }
  }
};
</script>

<style scoped>
.users {
 margin-top: 20px;
 margin-left: 50px;
 margin-right: 50px;
 border: solid 2px blue;
}
.users-title {
    margin-top: 100px;
    text-align: center;
}
.search {
    display: inline-block;
    margin-left: 130px;
}
</style>
