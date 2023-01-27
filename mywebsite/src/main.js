import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// tailwind 
import './assets/tailwind.css'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// font awesome icons import
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

library.add(faGear, faCircleHalfStroke)


createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
