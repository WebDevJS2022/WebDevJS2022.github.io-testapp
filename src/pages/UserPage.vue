<template>
    <div class="drawer-background" :class="{ show: active }" @click="$emit('close-user-drawer')"></div>

    <div class="drawer" :class="{ show: active }">
        <div class="drawer-close" @click="$emit('close-user-drawer')">
            X
        </div>

        <div v-if="user" class="user-details">
            <h1 class="user-title">КАРТОЧКА СОТРУДНИКА</h1>
            <table class="users">
                <tbody>
                    <tr>
                        <td>Имя*</td>
                        <td>{{ user.name }}</td>
                    </tr>
                    <tr>
                        <td>Фамилия*</td>
                        <td>{{ user.surname }}</td>
                    </tr>
                    <tr>
                        <td>Дата рождения</td>
                        <td>{{ user.data }}</td>
                    </tr>
                    <tr>
                        <td>Серия и номер паспорта*</td>
                        <td>{{ user.passport }}</td>
                    </tr>
                    <tr>
                        <td>Пол</td>
                        <td>{{ user.sex }}</td>
                    </tr>
                    <tr>
                        <td>Активность</td>
                        <td>
                            <input type="checkbox">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'UserPage',
  props: ['user', 'active'],
  emits: ['close-user-drawer']
};
</script>

<style scoped>

.drawer-background {
    width: 100%;
    height: 1000vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(124, 124, 124, 0.55);
    z-index: 100;
    display: none;
    transition: display .5s;
}
.drawer-background.show {
    display: block;
}
.drawer {
    width: 85vw;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: -105vw;
    padding: 15px;
    transition: left .5s;
    z-index: 101;
}
.drawer.show {
    left: 0;
}
.drawer-close {
    cursor: pointer;
    font-size: 1.5rem;
    padding: 5px;
    border-radius: 5px;
    right: 10px;
    border: 2px solid gray;
    color: 15px;
    float: right;
    cursor: pointer;
}
.drawer-close:hover {
    background-color: lightgray;
}
.user-details {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.user-title {
    z-index: 102;
    margin-left: 50px;
    margin-bottom: 30px;
}
.users {
    height: 300px;
    z-index: 102;
    margin-left: 50px;
    margin-right: 100px;
}
</style>