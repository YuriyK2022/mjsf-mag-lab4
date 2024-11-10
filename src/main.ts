import '@/assets/main.scss'

import {createApp} from 'vue'
import App from './App.vue';
import {createPinia} from 'pinia'
import directivesPlugin from '@/plugins/directives';
import tooltipDirective from './directives/tooltipDirective';
import i18n from '@/plugins/i18n'
// import App from './App.vue'
// import DemoI18n from "@/DemoI18n.vue";
import router from './router'

// const app = createApp(DemoI18n)

const app = createApp(App);
app.directive('tooltip', tooltipDirective);
app.mount('#app');

app.use(createPinia())
app.use(router)
app.use(directivesPlugin);
app.use(i18n, {
    greetings: {
        hi: 'Привіт!'
    }
});

app.mount('#app')
