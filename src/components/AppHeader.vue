<template>
    <v-card>
        <v-layout>
            <v-app-bar color="primary" prominent>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>TEST APP</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn variant="text" icon="mdi-magnify"></v-btn>
                <v-btn variant="text" icon="mdi-filter"></v-btn>
                <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" location="left" temporary>
                <router-link :class="{active: $forceUpdate.name ==='home'}" to="/">
                    <v-list>Главная</v-list>
                </router-link>
                <v-list>Сотрудники</v-list>
                <v-list>Документы</v-list>
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
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
};
</script>
