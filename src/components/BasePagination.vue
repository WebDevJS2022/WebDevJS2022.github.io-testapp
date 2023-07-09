<template>
    <v-pagination
      :length="pageSize"
      :total-visible="3"
    ></v-pagination>
</template>

<script>
export default {
    name: 'BasePagination',
    props: ['page', 'count', 'perPage'],
    computed: {
        pages() {
            return Math.ceil(this.count / this.perPage);
        }
    }
}
</script>
