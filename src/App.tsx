import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminHome from './pages/admin/home/AdminHome';
import Licenças from './pages/admin/licenças/Licenças';
import Solicitaçoes from './pages/admin/solicitaçoes/Solicitacoes';
import Empresas from './pages/admin/empresas/Empresas';
import Login from './pages/login/Login';
import styled from 'styled-components';
import PrivateRoutes from './PrivateRoutes';
import Usuarios from './pages/admin/usuarios/Usuarios';
import ResetPassword from './pages/login/ResetPassword';
import Acesso from './pages/admin/acesso/Acesso';
import Lojas from './pages/admin/lojas/Lojas';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

function App() {
  return (
    <>
      <AppContainer>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<AdminHome />} />
            <Route path='/licenças' element={<Licenças />} />
            <Route path='/solicitaçoes' element={<Solicitaçoes />} />
            <Route path='/empresas' element={<Empresas />} />
            <Route path='/Usuarios' element={<Usuarios />} />
            <Route path='/NovaPalavraPasse' element={<ResetPassword />} />
            <Route path='/acesso' element={<Acesso />} />
            <Route path='/lojas' element={<Lojas />} />
          </Route>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
