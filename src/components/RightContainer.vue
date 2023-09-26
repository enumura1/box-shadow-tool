<template>
    <div id="rightContainer">
        <div id="settingValueContainer">
            <h1>設定値</h1>
            <div id="sliderContainer">
                <v-slider v-model="sliderTop" thumb-label track-color="black" color="#2F9CEB" min="-50" max="50" step="0.01"
                    label="影 (縦)" class="custom-slider"></v-slider>
                <!-- 他のスライダーも同様に記述 -->
            </div>
            <!-- カラーパレット -->
            <div id="colorPickerContainer">
                <v-color-picker v-model="c1" hide-canvas hide-inputs elevation="10"></v-color-picker>
            </div>
        </div>
        <div id="codeContainer">
            <h1>CSSコード</h1>
            <p class="generatedCssCode">box-shadow: {{ sliderTop }}px {{ sliderRight }}px {{ sliderBlurRadius }}px
                {{ sliderSpreadRadius }}px {{ sliderTransparency }}</p>
        </div>
    </div>
</template>

<script setup props="props">
const { sliderTop, sliderRight, sliderBlurRadius, sliderSpreadRadius, sliderTransparency, c1 } = props;
</script>
