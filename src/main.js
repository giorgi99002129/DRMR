// import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
// import './assets/main.css';
// import './assets/medias.css'
// app.provide('bootstrap', bootstrap);

import './assets/style.css'
import './assets/style1.css'
import './assets/Sein.css'
import './assets/SideBlock.css'
import './assets/contacts.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from "./router"

const app = createApp(App);

app.use(router);

app.mount('#app');

