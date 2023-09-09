<template>
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
        <input class="slider" type="range">
        <input class="slider" type="range">
        <input class="slider" type="range">
        <input class="slider" type="range">
        <input type="color">
        <input class="slider" type="range">
      </div>
      <div id="codeContainer">
        <h5>コード</h5>
        <p>hogehoge:#hogehoge, hgoehoge:#hogehoge, hgoehoge:#hogehoge,</p>
      </div>
    </div>
  </div>
  <div id="bottomContainer">
    <h5>@enumura</h5>
  </div>
</template>

<script>
export default {

}
</script>