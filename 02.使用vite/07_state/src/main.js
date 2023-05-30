import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/**
 * 使用pinia的步骤
 *  1.安装pinia依赖
 *  2.在main.js中引入createPinia
 *  3.通过createPinia()创建pinia实例
 *  4.将pinia配置为vue的插件
 * 
 * 
 */

const pinia = createPinia()
const app=createApp(App)
// 将pinia配置为vue的插件
app.use(pinia)
app.mount('#app')
