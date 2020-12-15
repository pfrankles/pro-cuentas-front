import vueRouter from 'vue-router'
import User from './components/User'
import Autentica from './components/Autentica'
import App from './App'
import Fondo from './components/Fondo'


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

    ]

})

export default router