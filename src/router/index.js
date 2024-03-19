import { createRouter, createWebHistory } from 'vue-router'
import Mainview from '../views/FirstViewpage.vue'
import { useStore } from 'vuex'
const store = useStore()
const routes = [
  {
    path: '/',
    name: 'home',
    component: Mainview,
    beforeEnter: (to, from, next) => {
      if( from.fullPath.length > 1  ){
        store
      }
      next()
    }
    
    
  },
  {
    path : '/login',
    name : 'login',
    component : ()=> import('../views/LoginPage.vue')
  },
  {
    path : '/sign',
    name : 'sign',
    component : ()=> import('../views/SignPage.vue')
  },
  {
    path : '/mainGame',
    name : 'maingame',
    component : ()=> import('../views/MainGame.vue')
  },
  {
    path : '/point',
    name : 'point',
    component : ()=> import('../views/Mypoint.vue')
  },
  {
    path : '/perchase',
    name : 'perchase',
    component : ()=> import('../views/dicepage.vue')
  },
  {
    path: '/loginsuc',
    name:'loginsuc',
    component:()=> import('../views/Mainview.vue')

  },
  {
    path: '/gemini',
    name:'gemini',
    component:()=> import('../views/gemini_dic.vue')

  },
  {
    path: '/level',
    name:'level',
    component:()=> import('../views/levelpage.vue')

  },
  {
    path:'/naver',
    name : 'naverlogin',
    component:()=> import('../views/naverlogin.vue')
  },
  {
    path:'/*',
    name : 'error',
    component:Mainview
  },
  {
    path:'/dice',
    name : 'dice',
    component:()=> import('../views/dicepage.vue')
  },
  {
    path:'/kakao',
    name : 'kakao',
    component:()=> import('../views/kakaologin.vue')
  },
  {
    path:'/baby',
    name : 'baby',
    component:()=> import('../views/Baby_note.vue')
  },
  {
    path:'/weather',
    name : 'weather',
    component:()=> import('../views/Today_weather.vue')
  }, 
  {
    path:'/babydetail/:pagenum',
    name : 'babydetail',
    component:()=> import('../views/Baby_note_page.vue')
  },
  {
    path:'/perchasebaby',
    name : 'perchasebaby',
    component:()=> import('../views/perchasebaby.vue')
  },
  {
    path : '/perchSub/:item',
    name : 'perchSub',
    component:()=> import('../views/perchSubpage.vue')
  },
  {
    path : '/baguni',
    name : 'baguni',
    component:()=> import('../views/baguni.vue')
  },
  {
    path : '/youtube',
    name : 'youtube',
    component:()=> import('../views/youtube.vue')
  },
  {
    path : '/wherego',
    name : 'wherego',
    component:()=> import('../views/wherego.vue')
  },
  {
    path : '/chika',
    name : 'chika',
    component:()=> import('../views/chikachika.vue')
  },
  {
    path : '/gameselect',
    name : 'gameselect',
    component:()=> import('../views/gameselect.vue')
  }

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
