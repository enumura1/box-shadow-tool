<template>
    <div :class="infoContainer">
        <h1 id="infoTitle">利用規約ページ</h1>
        <div id="textContainer">
            <p>この利用規約（以下 、「本規約」といいます。）は 、開発者（以下 、「私」といいます。）がこのアプリ@ケーション上で提供するサービス（以下 、「本サービス」といいます。）の利用条件を定めるものです。利用者の皆さま（以下
                、「ユーザー」といいます。）には 、本規約に従って 、本サービスをご利用いただきます。
            </p><br>
            <div v-for="(item, index) in rules" :key="index">
                <h2>{{ item.title }}</h2>
                <p>{{ item.sentence }}</p>
                <br>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { darkTheme } from '../App.vue';
import rules from '../assets/servicerle.json';
import '../assets/info.css'

const infoContainer = computed(() => {
    return darkTheme.value ? 'darkmode-infoContainer' : 'lightmode-infoContainer';
})
</script>
