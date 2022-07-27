import "bootstrap/dist/css/bootstrap.min.css"
import BootstrapVue3 from 'bootstrap-vue-3'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import "bootstrap/dist/js/bootstrap.js"

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')

