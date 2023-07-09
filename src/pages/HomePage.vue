<template>
  <AppHeader />
  <AppUsers />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppUsers from '@/components/AppUsers.vue';

export default {
  name: 'HomePage',
  components: { AppHeader, AppUsers }
};
</script>