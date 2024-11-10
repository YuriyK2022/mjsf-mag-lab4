import ServiceProvider from 'C:/Users/yuriy/myVueProj/Lab3/modern-frameworks/lab3-ex/src/services/ServiceProvider';

import { createApp } from 'vue';
import App from './App.vue';
import serviceProviderPlugin from './plugins/serviceProviderPlugin';

const app = createApp(App);
app.use(serviceProviderPlugin);
app.mount('#app');



export default {
  install(app) {
    const serviceProvider = new ServiceProvider();
    app.config.globalProperties.$serviceProvider = serviceProvider;
  }
};
