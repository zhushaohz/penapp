import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';
import App from './App.vue'
import router from "./router"
import naive from 'naive-ui'
import 'vfonts/Lato.css'

import 'tdesign-vue-next/es/style/index.css';


const app = createApp(App)
app.use(router)
app.use(TDesign)
app.use(naive)
app.mount('#app')
