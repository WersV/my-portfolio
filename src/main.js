import {
  createApp
} from 'vue'
import {
  createPinia
} from 'pinia'

import App from './App.vue'
import router from './router'

import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faMoon,
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
  faLightbulb,
  faArrowRight,
  faInfinity,
  faFolder,
  faHammer,
  faGear,
  faArrowUpRightFromSquare,
  faDownload,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'

import {
  faCircleXmark
} from '@fortawesome/free-regular-svg-icons'

library.add(faMoon, faHouse, faUser, faBriefcase, faEnvelope, faLightbulb, faArrowRight, faInfinity, faCircleXmark, faFolder, faHammer, faGear, faArrowUpRightFromSquare, faPaperPlane, faDownload)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')