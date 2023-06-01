import { createApp } from 'vue'
import App from './App.vue'
import axios from '../src/axios.js'



const app=createApp(App)
app.mount('#app')
app.config.globalProperties.$axios=axios  //配置axios的全局引用