import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
   routes: [
  //   {
  //     path: '/login',
  //     name: 'login',
  //     component: () => import("./components/modalForms/mainLayoutModalForms/authModalForm.vue")
  //   },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import("./views/About.vue")
    // },
    // {
    //   path: "/my_page/:popa",
    //   name: "myPage",
    //   component: () => import("./views/MyPage.vue")
    // }
  ]
})
