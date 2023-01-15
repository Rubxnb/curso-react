import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';

function AppRoutingFinal() {

  // TODFO: Change to value from session storage
  const logged = true;

  return (
      <Router>
        <Routes>
        <Route exact path='' element={ logged ? <Navigate to='/dashboard'/> : <Navigate to='/login'/> }/>

        <Route exact path='/dashboard' element = { logged ? <DashBoard/> : <Navigate to='/login'/> }/>
        <Route exact path='/login' element={ <LoginPage/>}/>
        <Route path='*' element={<NotFoundPage />}/>
        </Routes>
        
      </Router>
  );
}

export default AppRoutingFinal;