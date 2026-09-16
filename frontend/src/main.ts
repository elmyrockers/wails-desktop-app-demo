import { createApp } from 'vue'
import App from './App.vue'
// Import individual generated functions from the service module
import { Greet, GreetMany } from "../bindings/github.com/elmyrockers/wails-desktop-app-demo/greetservice";



createApp(App).mount('#app');