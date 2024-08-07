import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import './assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App).use(router).mount('#app-portfolio')
