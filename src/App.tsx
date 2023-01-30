import { Routes, Route, Navigate } from 'react-router-dom';
import AdminHome from './pages/admin/home/AdminHome';
import Licenças from './pages/admin/licenças/Licenças';
import Solicitaçoes from './pages/admin/solicitaçoes/Solicitacoes';
import Empresas from './pages/admin/empresas/Empresas';
import Login from './pages/login/Login';
import styled from 'styled-components';
import Home from './pages/home/Home';
import PrivateRoutes from './PrivateRoutes';

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
          </Route>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
