import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import store, { key } from './store'
// 导入mock
require('./mock')

const app = createApp(App)
app.use(ElementPlus)
app.use(store, key)
app.use(router)
app.mount('#app')
