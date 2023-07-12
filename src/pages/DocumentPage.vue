<template>
    <div class="drawer-background" :class="{ show: active2 }" @click="$emit('close-document-drawer')"></div>

    <div class="drawer" :class="{ show: active2 }">
        <div class="drawer-close" @click="$emit('close-document-drawer')">
            X
        </div>

        <div v-if="document" class="user-details">
            <h1 class="user-title">СТРАНИЦА ДОКУМЕНТА</h1>
            <table class="users">
                <tbody>
                    <tr>
                        <td class="td">Тип документа*</td>
                        <td>{{ document.type }}</td>
                    </tr>
                    <tr>
                        <td class="td">Номер документа*</td>
                        <td>{{ document.number }}</td>
                    </tr>
                    <tr>
                        <td class="td">Дата документа*</td>
                        <td>{{ document.data }}</td>
                    </tr>
                    <tr>
                        <td class="td">Описание*</td>
                        <td>{{ document.description }}</td>
                    </tr>
                    <tr>
                        <td class="td">{{ (document.id === 2) | (document.id === 4) | (document.id === 6) | (document.id === 8) | (document.id === 10) | (document.id === 12) ? (document.nameFactura) : null }}</td>
                        <td >{{ (document.id === 2) | (document.id === 4) | (document.id === 6) | (document.id === 8) | (document.id === 10) | (document.id === 12) ? (document.type2) : null }}</td>
                    </tr>
                    <tr>
                        <td class="td">{{ (document.id === 1) | (document.id === 3) | (document.id === 5) | (document.id === 7) | (document.id === 9) | (document.id === 11) ? (document.nameDoverennost) : null }}</td>
                        <td>{{ (document.id === 1) | (document.id === 3) | (document.id === 5) | (document.id === 7) | (document.id === 9) | (document.id === 11) ? (document.name) : null }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'DocumentPage',
  props: ['document', 'active2'],
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
.td {
    display: inline-block;
    width: 190px;
    margin-right: 100px;
}
</style>