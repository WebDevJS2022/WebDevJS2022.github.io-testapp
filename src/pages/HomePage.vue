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
            <AppUsers v-for="user in users" :key="user.id" :user="user" v-on:view-user="viewUser($event)" />
        </tbody>
    </v-table>
    <v-pagination
      v-model="page"
      :length="4"
    ></v-pagination>
    


    <DocumentPage :document="document" :active2="active2.document_drawer" v-on:close-document-drawer="closeDocumentDrawer()" />
    <h1 class="users-title">СПИСОК ДОКУМЕНТОВ</h1>
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
            <AppDocuments v-for="document in documents" :key="document.id" :document="document" v-on:view-document="viewDocument($event)" />
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
import users from '@/data/users.js';
import documents from '@/data/documents.js';
import AppHeader from '@/components/AppHeader.vue';
import AppUsers from '@/components/AppUsers.vue';
import UserPage from '@/pages/UserPage.vue';
import DocumentPage from '@/pages/DocumentPage.vue';
import AppDocuments from '@/components/AppDocuments.vue';

export default {
  name: 'HomePage',
  components: { AppHeader, AppUsers, UserPage, AppDocuments, DocumentPage },
  data() {
    return {
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
    }
  },
  methods: {
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
  computed: {
    users(){
      const offset = (this.page - 1) * this.usersPerPage;
      return users.slice(offset, offset + this.usersPerPage);
    },
    documents(){
      const offset = (this.pageDocuments - 1) * this.documentsPerPage;
      return documents.slice(offset, offset + this.documentsPerPage);
    },
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
</style>
