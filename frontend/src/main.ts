import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

// import Aura from '@primeuix/themes/aura'
import Nora from '@primeuix/themes/nora'
import { definePreset } from '@primeuix/themes'
import './style.css'
import 'primeicons/primeicons.css'


const MyPreset = definePreset(Nora, {
  semantic: {
    primary: {
      50: '#f8fafc',
      100: '#e2e8f0',
      200: '#cbd5e1',
      300: '#94a3b8',
      400: '#64748b',
      500: '#334155',
      600: '#1e293b',
      700: '#0f172a',
      800: '#0b1220',
      900: '#070c14',
      950: '#03050a'
    }
  }
})


createApp(App)
		.use(router)
		.use(PrimeVue,{
			theme: {
				preset: MyPreset,
				  options: {
				    cssLayer: {
				      name: 'primevue',
				      order: 'theme, base, primevue, utilities'
				    }
				  }
			},
		})
		.mount('#app');