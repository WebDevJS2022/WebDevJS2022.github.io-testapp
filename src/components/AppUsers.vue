<template>
    <tr>
        <td>
            <a
              class="user-name"
              @click="$emit('view-user', user)"
            >
                {{ user.surname }} {{ user.name }}
            </a>
        </td>
        <td>{{ user.position }}</td> 
    </tr>
</template>

<script>
export default {
  name: 'AppUsers',
  props: ['user'],
}
</script>

<style scoped>
.user-name {
    cursor: pointer;
    color: blue;
}
</style>