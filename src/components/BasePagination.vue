<template>
    <v-pagination
      :length="4"
      :total-visible="4"
    ></v-pagination>
</template>

<script>
export default {
    name: 'BasePagination',
    props: ['page'],
}
</script>
