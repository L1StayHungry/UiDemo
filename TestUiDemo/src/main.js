import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import UiDemo from '@4399/tdata-ui-demo';
import '@4399/tdata-ui-demo/lib/style.css';

const app = createApp(App);
app.use(UiDemo);
app.mount('#app')
