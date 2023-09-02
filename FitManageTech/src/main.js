import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from './router/routes.js'
import 'vuetify/styles' 
import '@mdi/font/css/materialdesignicons.css' 
import { createVuetify } from 'vuetify' 
import * as components from 'vuetify/components' 
import * as directives from 'vuetify/directives'


import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const vuetify = createVuetify({ components, directives, icons: { defaultSet: 'mdi' }, })




const app = createApp(App)
.use(vuetify)
.use(routes)
app.component('VueDatePicker', VueDatePicker)
.mount('#app')
