/*
 * @Description:
 * @Version:
 * @Autor: Austral
 * @Date: 2022-10-21 21:26:09
 * @LastEditors: Austral
 * @LastEditTime: 2022-11-19 09:20:02
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./router/permission";
import "./assets/main.css";
import "../style/element/index.scss";
import "../style/index.scss"
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(store);
app.use(ElementPlus, { locale });
app.mount("#app");
