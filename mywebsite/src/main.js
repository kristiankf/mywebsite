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
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

library.add(faGear, faCircleHalfStroke, faChevronDown, faBars, faHeart, faExternalLink)


createApp(App).use(store).use(router).component('use-icon', FontAwesomeIcon).mount('#app')
