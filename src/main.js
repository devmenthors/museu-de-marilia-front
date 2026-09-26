import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { createBootstrap } from 'bootstrap-vue-next'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'remixicon/fonts/remixicon.css'

const app = createApp(App)

app.use(router)
app.use(createBootstrap)

app.mount('#app')
