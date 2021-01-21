import Home from './components/Home'
import Equipo from './components/Equipo'
import Usuario from './components/Usuario'
import UsuarioBio from './components/UsuarioBio'
import UsuarioFotos from './components/UsuarioFotos'

export const routes = [
  { path: '/', component: Home },
  { path: '/equipo/:id',
    component: Equipo,
    children: [
      { path: '',
        component: Usuario,
        children: [
          { path: 'bio', component: UsuarioBio },
          { path: 'fotos', component: UsuarioFotos }
        ]
      }
    ]
  }
]