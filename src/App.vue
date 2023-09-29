<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" style="background-color: #1a1e2e; color: aliceblue;">
      <div id="drawerContents">
        <v-list>
          <v-list-item>
            <router-link to="/box-shadow-tool">ホーム</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/box-shadow-tool/information">info</router-link>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>情報</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-app-bar elevation="9" style="background-color: #1a1e2e; color: aliceblue;">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>BOX SHADOW 生成ツール</v-app-bar-title>
      <template v-slot:append>
      </template>
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
import { ref, computed } from 'vue';

const drawer = ref(false);
const sliderTop = ref(0);
const sliderRight = ref(0);
const sliderBlurRadius = ref(30);
const sliderSpreadRadius = ref(0);
const sliderTransparency = ref(0.5);
const c1 = ref('#ff00ff');

//　box-shadowの値を算出
const boxShadowStyle = computed(() => {
  return `box-shadow: ${sliderRight.value}px ${sliderTop.value}px 
    ${sliderBlurRadius.value}px ${sliderSpreadRadius.value}px 
    rgba(0, 0, 0, ${sliderTransparency.value});`;
});
</script>
