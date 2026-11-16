import { Route, Routes, Navigate } from 'react-router-dom'
import Configuracoes from './paginas/Configuracoes'
import Feed from './paginas/Feed'
import Login from './paginas/Login'
import Perfil from './paginas/Perfil'
import RotaPrivada from './componentes/RotaPrivada'


function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route element={<RotaPrivada />}>
        <Route path='/' element={<Feed />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/configuracoes' element={<Configuracoes />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>

    </Routes>
  )
}

export default App