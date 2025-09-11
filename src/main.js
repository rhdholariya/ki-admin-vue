import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FlagIcon from 'vue-flag-icon'
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.vue";
import Prism from "prismjs";
console.log(Prism);
import "prismjs/themes/prism.css";


const app = createApp(App)
import '@/assets/scss/style.scss';
app.component("Breadcrumbs", Breadcrumbs);
app.use(router)
app.use(FlagIcon)
app.mount('#app')
