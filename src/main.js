import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import FlagIcon from 'vue-flag-icon'
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.vue";
import Prism from "prismjs";
console.log(Prism);
import "prismjs/themes/prism.css";
import 'animate.css';

// Bootstrap Vue Next
import { createBootstrap } from 'bootstrap-vue-next'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
import '@/assets/scss/style.scss';
app.component("Breadcrumbs", Breadcrumbs);
app.use(router)
app.use(FlagIcon)
app.use(createBootstrap())
app.mount('#app')
