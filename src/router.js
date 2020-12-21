import vueRouter from 'vue-router'
import User from './components/User'
import Autentica from './components/Autentica'
import App from './App'
import Fondo from './components/Fondo'
import Crear from './components/Crear'


const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path:'/',
            name: "root",
            component: App
        },
        {
            path: '/user/auth/',
            name: "auten",
            component: Autentica
        },
        {
            path: '/user/get_name/:user',
            name: "user",
            component: User
        },
        {
            path: '/inicio/',
            name: "fondo",
            component: Fondo
        },
        {
            path: '/user/register/',
            name: "crear",
            component: Crear
        },

    ]

})

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
      // Start the route progress bar.
      NProgress.start()
    }
    next()
  })
  
  router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
  })

export default router
