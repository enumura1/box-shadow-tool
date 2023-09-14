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
          <input v-model="sliderBottom" class="slider" type="range">
          <input v-model="sliderLeft" class="slider" type="range">
          <input type="color">
        </div>
        <div id="codeContainer">
          <h5>CSSコード</h5>
          <p class="generatedCssCode">{{ sliderTop }}</p>
          <p class="generatedCssCode">{{ sliderRight }}</p>
          <p class="generatedCssCode">{{ sliderBottom }}</p>
          <p class="generatedCssCode">{{ sliderLeft }}</p>
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
      sliderBottom: "",
      sliderLeft: "",
    };
  },
  computed: {
    boxShadowStyle() {
      // box-shadowのbottomを生成
      return `box-shadow: ${this.sliderRight}px ${this.sliderTop}px 0 rgba(0, 0, 0, 0.5);`;
    },
  },
  methods: {},
};
</script>