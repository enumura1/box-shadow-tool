<template>
  <v-app id="inspire">
    <v-navigation-drawer temporary v-model="drawer" style="background-image: linear-gradient(to bottom, #012c45, #000225); color: aliceblue;
      border-top-right-radius: 20px; border-bottom-right-radius: 20px; border: 1px solid rgb(141, 141, 141);
      box-shadow: 13.13px 5.96px 22.93px -0.11px rgba(0, 0, 0, 0.5);">
      <div id="drawerContents">
        <v-list>
          <v-list-item>
            <v-list-item-title class="text-h6">
              ー Content list ー
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <router-link to="/box-shadow-tool" style="color: aliceblue;">
              <v-icon class="mr-2">mdi-home</v-icon> ホーム</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/box-shadow-tool/poricy" style="color: aliceblue;">
              <v-icon class="mr-2">mdi-information-variant-box-outline</v-icon>ポリシー</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/box-shadow-tool/info" style="color: aliceblue;">
              <v-icon class="mr-2">mdi-shield</v-icon>利用規約</router-link>
          </v-list-item>
        </v-list>
        <div id="howtoContainer">
          <h1>- 使い方 -</h1>
          <div class="howtoSection">
            <h2>①BoxShadowの調整</h2>
            <p>BoxShadowコーナー内の中にある5つのスライダーで影の度合いや色を調整します。</p>
            <p>スライダーは左右に移動させボックスシャドウの度合いを変化させます。</p>
            <p>BoxShadowコーナーPC版だと画面右側、スマホ版だとスクロール画面中央に表示</p>
          </div>
          <div class="howtoSection">
            <h2>②生成CSSコード</h2>
            <p>生成CSSコードに表示されたbox-shadowプロパティをコピーして使用します。</p>
          </div>
          <div class="howtoSection bottom">
            <h2>③ダークモード対応</h2>
            <p>画面右上の☀・☽スイッチを切り替えてテーマの切り替えが可能です。</p>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <v-app-bar elevation="9" style="background-color: #1a1e2e; color: aliceblue;">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>BOX SHADOW 生成ツール（ダーク・ライトモード対応）</v-app-bar-title>
      <div id="switchThemeBtn">
        <v-switch v-model="darkTheme" @update:model-value="changeTheme" color="info"
          :prepend-icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'" hide-details inset class="mr-auto" />
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <div id="bottomContainer">
        <h5>@enumura</h5>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

// トグルスイッチの更新
const changeTheme = () => {
  console.log(darkTheme.value);
}

</script>

<script>
// theme
export const darkTheme = ref(false)
</script>
