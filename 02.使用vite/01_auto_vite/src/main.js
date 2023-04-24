import { createApp } from 'vue'
import App from './App.vue'

/**
 * App.vue是根组件
 *      -createApp(App)将根组件关联到应用上
 *          返回的是一个应用实例
 *      -.mount('#app')将应用挂载到页面中
 *          返回的是一个根组件的实例，组件的实例通常命名为vm
 *          组件实例是一个Proxy对象(代理对象)
 */
const app=createApp(App)

const vm=app.mount('#app')
// createApp(App).mount('#app')
