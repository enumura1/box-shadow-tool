<template>
  <div id="app">
    <div id="topContainer">
      <h1>BOX SHADOW 生成ツール</h1>
    </div>
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
</template>

<script>
export default {
  data() {
    return {
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
};
</script>