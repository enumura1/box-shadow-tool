import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 外部ファイルのインポート
import './assets/home.css'
import './assets/App.css'

// ページコンポーネントのインポート
import poricy from './components/poricy.vue'
import Info from './components/info.vue'
import Home from './components/Home.vue'
import App from './App.vue'

// 遷移先
const routes = [
    { path: '/box-shadow-tool', component: Home },
    { path: '/box-shadow-tool/poricy', component: poricy },
    { path: '/box-shadow-tool/info', component: Info },
]

// ルーター
const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Vuetifyの設定を作成します
const vuetify = createVuetify({
    components,
    directives,
})

// アプリケーションを作成し、ルーターとVuetifyを使用するように設定
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')