import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from './router/routes.js'
import 'vuetify/styles' 
import '@mdi/font/css/materialdesignicons.css' 
import { createVuetify } from 'vuetify' 
import * as components from 'vuetify/components' 
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({ components, directives, icons: { defaultSet: 'mdi' }, })
const app = createApp(App)
.use(vuetify)
.use(routes)
.mount('#app')
