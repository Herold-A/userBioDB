import './bootstrap';

import {createApp} from 'vue/dist/vue.esm-bundler.js'
import appComponent from './components/app.vue'  
import router from './router/index'

const app = createApp({
    components: {
        appComponent,
    }
})
// createApp(app).mount('#app')
app.use(router)
app.mount('#app')






