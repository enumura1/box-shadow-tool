<template>
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
                        <v-slider v-model="sliderBlurRadius" thumb-label track-color="black" color="#2F9CEB" min="0"
                            max="100" step="0.01" label="ぼかし度" class="custom-slider"></v-slider>
                        <v-slider v-model="sliderSpreadRadius" thumb-label track-color="black" color="#2F9CEB" min="-50"
                            max="100" step="0.01" label="影の範囲" class="custom-slider"></v-slider>
                        <v-slider v-model="sliderTransparency" thumb-label track-color="black" color="#2F9CEB" min="0"
                            max="1" step="0.01" label="透明度" class="custom-slider"></v-slider>
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
        </div>
        <div id="bottomContainer">
            <h5>@enumura</h5>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

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
