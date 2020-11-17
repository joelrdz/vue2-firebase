import Home from './components/Home'
import Equipo from './components/Equipo'
import EquipoJon from './components/EquipoJon'

export const routes = [
	{ path: '/', component: Home },
	{ path: '/equipo',
		component: Equipo,
		children: [
			{ path: 'jon', component: EquipoJon }
		]
	}
]