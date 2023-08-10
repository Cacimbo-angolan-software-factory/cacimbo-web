import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminHome from './pages/admin/home/AdminHome';
import Login from './pages/login/Login';
import styled from 'styled-components';
import PrivateRoutes from './PrivateRoutes';
import ResetPassword from './pages/login/ResetPassword';
import Acesso from './pages/admin/acesso/Acesso';
import Lojas from './pages/admin/lojas/Lojas';
import Spinner from './components/spinner/Spinner';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const Licenças = lazy(() => import('./pages/admin/licenças/Licenças'));
const Solicitaçoes = lazy(
  () => import('./pages/admin/solicitaçoes/Solicitacoes')
);
const Empresas = lazy(() => import('./pages/admin/empresas/Empresas'));
const Usuarios = lazy(() => import('./pages/admin/usuarios/Usuarios'));

function App() {
  return (
    <>
      <AppContainer>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </AppContainer>
    </>
  );
}

export default App;
