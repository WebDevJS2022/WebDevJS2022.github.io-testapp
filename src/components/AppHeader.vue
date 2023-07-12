<template>
    <v-card>
        <v-layout>
            <v-app-bar color="primary" prominent>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>TEST APP</v-toolbar-title>

                <v-spacer></v-spacer>
            </v-app-bar>




            <!-- <router-link :class="{active: $forceUpdate.name ==='home'}" to="/"></router-link> -->


            <v-navigation-drawer v-model="drawer" location="left" temporary class="blue lighten-3">
                <v-list class="header">
                    <v-list-tile>
                        <router-link :class="{active: $forceUpdate.name ==='home'}" to="/">
                            <v-btn variant="text" icon="mdi-home"></v-btn>
                        </router-link>
                        <v-list-tile-title>Главная</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <router-link :class="{active: $forceUpdate.name ==='home'}" to="/">
                            <v-btn variant="text" icon="mdi-account-box"></v-btn>
                        </router-link>
                        <v-list-tile-title>Сотрудники</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <router-link :class="{active: $forceUpdate.name ==='home'}" to="/">
                            <v-btn variant="text" icon="mdi-folder"></v-btn>
                        </router-link>
                        <v-list-tile-title>Документы</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>


        </v-layout>
    </v-card>
</template>

<script>

export default {
    name: 'AppHeader',

    data: () => ({
        drawer: false,
        group: null,
        items: [],
        right: null
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
};
</script>

<style scoped>
.header {
    display: flex;
    flex-direction: column;
   
}
</style>