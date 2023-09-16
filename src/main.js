import { createApp } from 'vue'
import App from './App.vue'

// 外部ファイルのインポート
import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// Vuetifyの設定を作成します
const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).mount('#app')
