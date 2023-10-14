<template>
    <div :class="mainContainer">
        <h1>◆プライバシーポリシーページ</h1>
        <div id="poricyTextContainer">
            <p>利用規約に同意の上ご使用頂きますようお願い致します。</p><br>
            <p>サイト左のメニューボタンをタップし、表示される項目から「利用規約」をタップしご覧ください。</p><br>
            <p>本サイトはローカル環境でbox-shadowプロパティのCSSを生成しており、生成したCSSの情報はサーバーに送信されません。</p><br>
            <p>当サイトでは、お問い合わせの際、メールアドレス等の個人情報を入力いただく場合がございます。</p><br>
            <p>取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどで
                ご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。</p><br>
            <p>お問い合わせは、infoag9s3th7j@gmail.com にご連絡お願いいたします。</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { darkTheme } from '../App.vue';
import '../assets/poricy.css'

const mainContainer = computed(() => {
    return darkTheme.value ? 'darkmode-mainContainer' : 'lightmode-mainContainer';
})
</script>