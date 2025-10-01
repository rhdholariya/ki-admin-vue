import './assets/main.css'
import { createApp, nextTick  } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.vue";
import Prism from "prismjs";
console.log(Prism);
import "prismjs/themes/prism.css";
import 'animate.css';
import FlagIcon from "vue-flag-icon";
import { createBootstrap } from 'bootstrap-vue-next'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'simplebar/dist/simplebar.min.css';
// Vue ApexCharts
import VueApexCharts from "vue3-apexcharts";
const app = createApp(App)
import '@/assets/scss/style.scss';
app.component("Breadcrumbs", Breadcrumbs);
app.use(router)
app.use(FlagIcon)
router.afterEach(() => {
    nextTick(() => {
        Prism.highlightAll();
    });
});
app.use(createBootstrap())
app.component("apexchart", VueApexCharts);
app.mount('#app')
