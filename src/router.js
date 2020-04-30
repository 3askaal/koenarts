import Vue from 'vue'
import Router from 'vue-router'

import {
  HomePage,
  PhotographyPage,
  VideoPage,
  GraphicsPage,
  InteractivePage,
  AboutPage,
  PrizesPage,
  ContactPage
} from './views'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/photography', name: 'photography', component: PhotographyPage },
    { path: '/video', name: 'video', component: VideoPage },
    { path: '/graphics', name: 'graphics', component: GraphicsPage },
    { path: '/interactive', name: 'interactive', component: InteractivePage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/prizes', name: 'prizes', component: PrizesPage },
    { path: '/contact', name: 'contact', component: ContactPage }
  ]
})
