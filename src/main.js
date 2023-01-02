import { createApp } from "vue";
import router from "./router/index";

import App from "./App.vue";
import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";

const app = createApp(App);
app.use(TDesign);
app.use(router);
app.mount("#app");
