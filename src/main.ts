import { createApp } from "vue";
import App from "./App.vue";
import "@/style/global.scss";

const bootstrap = function () {
  const app = createApp(App);
  app.mount("#app");
};

bootstrap();
