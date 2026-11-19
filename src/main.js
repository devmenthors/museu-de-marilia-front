// Estilos globais do sistema (cores do museu, títulos, inputs do Bootstrap)
import './Assets/Styles/Main.css'
// CSS e JS do Bootstrap (grid, botões, utilitários)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Estilos dos formulários: vem DEPOIS do Bootstrap para ter prioridade sobre ele
import './Assets/Styles/Formularios.css'
// Ícones Remix Icon (ex.: ri-notification-line)
import 'remixicon/fonts/remixicon.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

const app = createApp(App) // cria a aplicação Vue a partir do componente raiz

app.use(router) // registra as rotas (RouterView / RouterLink passam a funcionar)

app.mount('#app') // "pendura" a aplicação na <div id="app"> do index.html
