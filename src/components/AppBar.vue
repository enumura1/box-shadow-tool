<template>
    <v-app-bar elevation="9" style="background-color: #1a1e2e; color: aliceblue;">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>BOX SHADOW 生成ツール</v-app-bar-title>
        <template v-slot:append>
        </template>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false);

const toggleDrawer = () => {
    drawer.value = !drawer.value;
};

</script>