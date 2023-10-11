<template>
    <div :class="infoContainer">
        <h1 id="infoTitle">利用規約ページ</h1>
        <div id="textContainer">
            <p>
                当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
            </p><br>
            <p>
                当サイトは、掲載しているコンテンツ・情報に関し、できる限り正確な情報を提供するように努めておりますが、その正確性、完全・安全性については保証しておりません。情報が古くなっていることもございます。
            </p><br>
            <p>
                情報を利用される場合は、利用者の判断の元に行なって下さい。万が一情報の利用の結果、損害が生じても責任を負いかねますので、あらかじめご了承ください。
            </p><br>
            <p>
                また掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p><br>
            <p>
                当サイトを装ったウェブサイトによって生じた損害にも責任を負いかねます。
            </p><br>
            <p>
                本サイトのURLや情報は予告なく変更される場合があります。
            </p>
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
