<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" style="background-color: #1a1e2e; color: aliceblue;">
      <div id="drawerContents">
        <v-list>
          <v-list-item>
            <v-list-item-title class="text-h6">
              ー Content list ー
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <router-link to="/box-shadow-tool" style="color: aliceblue;">
              <v-icon class="mr-2">mdi-home</v-icon> ホーム</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/box-shadow-tool/poricy" style="color: aliceblue;">
              <v-icon class="mr-2">mdi-information-variant-box-outline</v-icon>ポリシー</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/box-shadow-tool/info" style="color: aliceblue;">
              <v-icon class="mr-2">mdi-shield</v-icon>利用規約</router-link>
          </v-list-item>
        </v-list>

      </div>
    </v-navigation-drawer>

    <v-app-bar elevation="9" style="background-color: #1a1e2e; color: aliceblue;">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>BOX SHADOW 生成ツール</v-app-bar-title>
      <template v-slot:append>
        <v-switch v-model="darkTheme" @update:model-value="changeTheme"
          :prepend-icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'" hide-details inset class="mr-auto" />
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <div id="bottomContainer">
        <h5>@enumura</h5>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

// トグルスイッチの更新
const changeTheme = () => {
  console.log(darkTheme.value);
}

</script>

<script>
// theme
export const darkTheme = ref(false)
</script>
