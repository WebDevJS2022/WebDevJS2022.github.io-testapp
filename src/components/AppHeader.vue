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
                    <div>
                        <router-link :class="{active: $forceUpdate.name ==='home'}" to="/" class="header-link">
                            <v-btn variant="text" icon="mdi-home"></v-btn>
                            <h4 class="header-link-title">Главная</h4>
                        </router-link>
                    </div>
                    <div>
                        <router-link :class="{active: $forceUpdate.name ==='home'}" to="/" class="header-link">
                            <v-btn variant="text" icon="mdi-account-box"></v-btn>
                            <h4 class="header-link-title">Сотрудники</h4>
                        </router-link>
                    </div>
                    <div>
                        <router-link :class="{active: $forceUpdate.name ==='home'}" to="/" class="header-link">
                            <v-btn variant="text" icon="mdi-folder"></v-btn>
                            <h4 class="header-link-title">Документы</h4>
                        </router-link>
                    </div>
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
.header-link {
    display: flex;
    text-decoration: none;
    color: blue;
}
.header-link-title {
    margin-top: 12px;
}
</style>