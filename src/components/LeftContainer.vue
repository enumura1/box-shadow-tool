<template>
    <div id="leftContainer">
        <!-- 動的にbox-shadowプロパティを更新する四角形 -->
        <div id="cssAttachedSquare" :style="boxShadowStyle"></div>
    </div>
</template>

<script setup props="props">
const { boxShadowStyle } = props;
</script>
