<template>
    <tr>
        <td>
            <a
              class="user-name"
              @click="$emit('view-document', document)"
            >
                {{ document.type }}
            </a>
        </td>
        <td>{{ document.name }}</td>
    </tr>
</template>

<script>
export default {
  name: 'AppDocuments',
  props: ['document'],
}
</script>

<style scoped>
.user-name {
    cursor: pointer;
    color: blue;
}
</style>