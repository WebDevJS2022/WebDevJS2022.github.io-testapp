import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

loadFonts();

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app');
