import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "tailwindcss/tailwind.css"
import "./css/main.scss"

createApp(App).use(router).mount('#app')
