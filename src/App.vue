<template>
  <div id="app">
    <div id="topContainer">
      <h1>BOX SHADOW 生成ツール</h1>
    </div>
    <div id="mainContainer">
      <div id="leftContainer">
        <div id="cssAttachedSquare"></div>
      </div>
      <div id="rightContainer">
        <div id="settingValueContainer">
          <h1>設定値</h1>
          <input v-model="sliderTop" class="slider" type="range">
          <input v-model="sliderRight" class="slider" type="range">
          <input v-model="sliderBottom" class="slider" type="range">
          <input v-model="sliderLeft" class="slider" type="range">
          <input v-model="sliderTop" type="color">
        </div>
        <div id="codeContainer">
          <h5>コード</h5>
          <p>{{ sliderTop }}</p>
          <p>{{ sliderRight }}</p>
          <p>{{ sliderBottom }}</p>
          <p>{{ sliderLeft }}</p>
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
      sliderTop: "",
      sliderRight: "",
      sliderBottom: "",
      sliderLeft: "",
    };
  },
  methods: {},
};
</script>

<style>
/* ここにスタイルを追加 */
</style>
