import { Route, Routes, Navigate } from 'react-router-dom'
import Configuracoes from './paginas/Configuracoes'
import Feed from './paginas/Feed'
import Login from './paginas/Login'
import Perfil from './paginas/Perfil'


function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Feed/>} />
      <Route path='/perfil' element={<Perfil/>} />
      <Route path='/configuracoes' element={<Configuracoes/>} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App