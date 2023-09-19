<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" style="background-color: #1a1e2e; color: white;">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar elevation="9" style="background-color: #1a1e2e; color: white;">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>BOX SHADOW 生成ツール</v-app-bar-title>
      <template v-slot:append>
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
              <div id="sliderContainer">
                <v-slider v-model="sliderTop" thumb-label track-color="black" color="#2F9CEB" min="-50" max="50"
                  step="0.01" label="影 (縦)" class="custom-slider"></v-slider>
                <v-slider v-model="sliderRight" thumb-label track-color="black" color="#2F9CEB" min="-50" max="50"
                  step="0.01" label="影 (横)" class="custom-slider"></v-slider>
                <v-slider v-model="sliderBlurRadius" thumb-label track-color="black" color="#2F9CEB" min="0" max="100"
                  step="0.01" label="ぼかし度" class="custom-slider"></v-slider>
                <v-slider v-model="sliderSpreadRadius" thumb-label track-color="black" color="#2F9CEB" min="-50" max="100"
                  step="0.01" label="影の範囲" class="custom-slider"></v-slider>
                <v-slider v-model="sliderTransparency" thumb-label track-color="black" color="#2F9CEB" min="0" max="1"
                  step="0.01" label="透明度" class="custom-slider"></v-slider>
              </div>
              <!-- カラーパレット -->
              <div id="colorPickerContainer">
                <v-color-picker v-model="c1" hide-canvas hide-inputs elevation="10"></v-color-picker>
              </div>
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

const drawer = ref(false);
const c1 = ref('#ff00ff')
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
      c1: '#ff00ff',
    };
  },
  computed: {
    boxShadowStyle() {
      // box-shadowのbottomを生成 ${this.selectedColor};`;
      return `box-shadow: ${this.sliderRight}px ${this.sliderTop}px 
      ${this.sliderBlurRadius}px ${this.sliderSpreadRadius}px 
      rgba(0, 0, 0, ${this.sliderTransparency});`;
    },
  },
  methods: {},
}
</script>