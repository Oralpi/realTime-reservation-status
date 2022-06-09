import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router.js';
import '@/styles/one.css';
import '@/styles/two.css';

createApp(App)
  .use(router)
  .mount('#app')