<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" style="background-color: #1a1e2e; color: white;">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar elevation="9" style="background-color: #1a1e2e; color: white;">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>BOX SHADOW 生成ツール</v-app-bar-title>
      <template v-slot:append>
        <v-btn>
          hoge
        </v-btn>

        <v-btn>
          <v-icon>
            mdi-home
          </v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <div id="app">
        <div id="mainContainer">
          <div id="leftContainer">
            <!-- 動的にbox-shadowプロパティを更新する四角形 -->
            <div id="cssAttachedSquare" :style="boxShadowStyle"></div>
          </div>
          <div id="rightContainer">
            <div id="settingValueContainer">
              <h1>設定値</h1>
              <input v-model="sliderTop" class="slider" type="range" min="-50" max="50">
              <input v-model="sliderRight" class="slider" type="range" min="-50" max="50">
              <input v-model="sliderBlurRadius" class="slider" type="range" min="0" max="100">
              <input v-model="sliderSpreadRadius" class="slider" type="range" min="-50" max="100">
              <input v-model="sliderTransparency" class="slider" type="range" min="0" max="1" step="0.01">
              <input type="color">
            </div>
            <div id="codeContainer">
              <h5>CSSコード</h5>
              <p class="generatedCssCode">box-shadow: {{ sliderTop }}px {{ sliderRight }}px {{ sliderBlurRadius }}px
                {{ sliderSpreadRadius }}px {{ sliderTransparency }}</p>
            </div>
          </div>
        </div>
        <div id="bottomContainer">
          <h5>@enumura</h5>
        </div>
      </div>
    </v-main>

  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>

<script>
export default {
  data() {
    return {
      drawer: false,
      sliderTop: 0,
      sliderRight: 0,
      sliderBlurRadius: 30,
      sliderSpreadRadius: 0,
      sliderTransparency: 0.5,
    };
  },
  computed: {
    boxShadowStyle() {
      // box-shadowのbottomを生成
      return `box-shadow: ${this.sliderRight}px ${this.sliderTop}px 
      ${this.sliderBlurRadius}px ${this.sliderSpreadRadius}px rgba(0, 0, 0, ${this.sliderTransparency});`;
    },
  },
  methods: {},
}
</script>