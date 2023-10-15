<template>
    <div id="app">
        <div id="mainContainer">
            <div :class="leftContainer">
                <!-- 動的にbox-shadowプロパティを更新する四角形 -->
                <div id="cssAttachedSquare" :style="boxShadowStyle"></div>
            </div>
            <div :class="rightContainer">
                <div :class="settingValueContainer">
                    <h1 id="sttingValueTitle">BoxShadow 設定値</h1>
                    <div id="sliderContainer">
                        <v-slider v-model="sliderTop" thumb-label track-color="black" color="#2F9CEB" min="-50" max="50"
                            step="0.01" label="影 (縦):" class="custom-slider" :class="sliderLabelColor"></v-slider>
                        <v-slider v-model="sliderRight" thumb-label track-color="black" color="#2F9CEB" min="-50" max="50"
                            step="0.01" label="影 (横):" class="custom-slider" :class="sliderLabelColor"></v-slider>
                        <v-slider v-model="sliderBlurRadius" thumb-label track-color="black" color="#2F9CEB" min="0"
                            max="100" step="0.01" label="ぼかし度:" class="custom-slider" :class="sliderLabelColor"></v-slider>
                        <v-slider v-model="sliderSpreadRadius" thumb-label track-color="black" color="#2F9CEB" min="-50"
                            max="100" step="0.01" label="影の範囲:" class="custom-slider" :class="sliderLabelColor"></v-slider>
                        <v-slider v-model="sliderTransparency" thumb-label track-color="black" color="#2F9CEB" min="0"
                            max="1" step="0.01" label="透明度:" class="custom-slider" :class="sliderLabelColor"></v-slider>
                    </div>
                    <!-- カラーパレット -->
                    <div id="colorPickerContainer">
                        <p :class="shadowTextcolor">影の色:</p>
                        <input type="color" v-model="backgroundColor" :class="backgroundColorClass">
                    </div>
                </div>
                <div :class="generatedCssContainer">
                    <h1>生成CSSコード</h1>
                    <div id="codeContainer">
                        <p :class="generatedCssCode" id="bspp">box-shadow: {{ sliderTop }}px {{ sliderRight }}px {{
                            sliderBlurRadius
                        }}px
                            {{ sliderSpreadRadius }}px rgba({{ rgbValue }}, {{ sliderTransparency }});</p>
                    </div>
                    <button id="copyButton">コピー</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import { darkTheme } from '../App.vue';


const sliderTop = ref(0);
const sliderRight = ref(0);
const sliderBlurRadius = ref(30);
const sliderSpreadRadius = ref(18);
const sliderTransparency = ref(0.5);
const backgroundColor = ref("#000000");

// darkThemeフラグが変更された時
watchEffect(() => {
    if (darkTheme.value) {
        backgroundColor.value = "#FFFFFF";
    } else {
        backgroundColor.value = "#000000";
    }
});

//　box-shadowの値を算出
const boxShadowStyle = computed(() => {
    return `box-shadow: ${sliderRight.value}px ${sliderTop.value}px 
    ${sliderBlurRadius.value}px ${sliderSpreadRadius.value}px 
    rgba(${rgbValue.value}, ${sliderTransparency.value});`;
});

// カラーコードからRGB値を取得する関数
const rgbValue = computed(() => {
    const hexValue = backgroundColor.value;
    let r, g, b;

    if (hexValue.length === 4) {
        r = parseInt(hexValue[1] + hexValue[1], 16);
        g = parseInt(hexValue[2] + hexValue[2], 16);
        b = parseInt(hexValue[3] + hexValue[3], 16);
    } else if (hexValue.length === 7) {
        r = parseInt(hexValue.slice(1, 3), 16);
        g = parseInt(hexValue.slice(3, 5), 16);
        b = parseInt(hexValue.slice(5, 7), 16);
    }

    return r + ', ' + g + ', ' + b;
})

const leftContainer = computed(() => {
    return darkTheme.value ? 'darkmode-leftContainer' : 'light-modeleftContainer';
})

const rightContainer = computed(() => {
    return darkTheme.value ? 'darkmode-rightContainer' : 'lightmode-rightContainer';
})

const settingValueContainer = computed(() => {
    return darkTheme.value ? 'darkmode-settingValueContainer' : 'lightmode-settingValueContainer ';
})

const sliderLabelColor = computed(() => {
    return darkTheme.value ? 'darkmode-label' : 'lightmode-label';
})

const backgroundColorClass = computed(() => {
    return darkTheme.value ? 'darkmode-colorPicker' : 'lightmode-colorPicker';
});

const shadowTextcolor = computed(() => {
    return darkTheme.value ? 'darkmode-shadowTextcolor' : 'lightmode-shadowTextcolor';
})

const generatedCssContainer = computed(() => {
    return darkTheme.value ? 'darkmode-generatedCssContainer' : 'lightmode-generatedCssContainer';
})

const generatedCssCode = computed(() => {
    return darkTheme.value ? 'darkmode-generatedCssCode' : 'lightmode-generatedCssCode';
})
</script>

<script>
export default {
    // マウント後にDOMにアクセス
    mounted() {
        const copyBtn = document.getElementById("copyButton");
        const boxshadowpp = document.getElementById("bspp");

        copyBtn.addEventListener('click', () => {
            // クリップボードに書き込んでコピー
            navigator.clipboard.writeText(boxshadowpp.textContent);
            alert("box-shadowプロパティのCSSをコピー完了。")
        });
    }
}
</script>
