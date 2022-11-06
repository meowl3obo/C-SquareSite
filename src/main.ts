import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './styles/app.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const app = createApp(App).use(store).use(router)
app.component('icon', FontAwesomeIcon)

app.mount('#app')