import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 完整引入组件库
import UiDemo from '@p/index'

const app = createApp(App);

app.use(UiDemo);

app.mount('#app');
