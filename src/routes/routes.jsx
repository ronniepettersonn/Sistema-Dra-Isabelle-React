import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from '.'
import { CadastroCliente } from '../pages/CadastroCliente'
import CadastroUsuario from '../pages/CadastroUsuario'
import DetailsPatient from '../pages/DetailsPatient/insdex'
import { Fichas } from '../pages/Fichas'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Perfil } from '../pages/Perfil'

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />

                <Route path='/signup' element={<CadastroUsuario />} />

                <Route path='/perfil' element={<PrivateRoutes />}>
                    <Route path='/perfil' element={<Perfil />} />
                </Route>
                <Route path='/home' element={<PrivateRoutes />}>
                    <Route path='/home' element={<Home />} />
                </Route>
                <Route path='/pacientes' element={<PrivateRoutes />}>
                    <Route path='/pacientes' element={<CadastroCliente />} />
                    <Route path='/pacientes/:id' element={<DetailsPatient />} />
                </Route>
                <Route path='/fichas' element={<PrivateRoutes />}>
                    <Route path='/fichas' element={<Fichas />} />
                </Route>
                <Route path='*' element={<p>Não tem nada aqui: 404</p>} />
            </Routes>
        </BrowserRouter>
    )
} 