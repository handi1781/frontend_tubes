import master from '../pages/layout/master'
import dashboard from '../pages/dashboard'
import kasus from '../pages/kasus'
import polisi from '../pages/polisi'
import profil from '../pages/profil'
export default[
    {
     name: "Master",
     path: "/",
     component:master,
     redirect: '/data_narapidana',
     children:[
        {
            name:'dashboard',
            path:'/data_narapidana',
            component:dashboard
        },
        {
            name:'kasus',
            path:'/kasus',
            component:kasus
        },
        {
            name:'data_polisi',
            path:'/data_polisi',
            component:polisi
        },
        {
            name:'profil',
            path:'/profil',
            component:profil
        }
     ]   
    },
]