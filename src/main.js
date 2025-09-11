import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FlagIcon from 'vue-flag-icon'
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.vue";
import Prism from "prismjs";
console.log(Prism);


// Import Bootstrap CSS and JS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const app = createApp(App)
import '@/assets/scss/style.scss';
import {BootstrapVue3} from "bootstrap-vue-3";
app.component("Breadcrumbs", Breadcrumbs);
app.use(router)
app.use(FlagIcon)
app.use(BootstrapVue3)
app.mount('#app')
