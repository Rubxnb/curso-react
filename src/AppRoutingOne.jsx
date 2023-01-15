import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  let logged = false;

  const taskList = [
    {
      id: 1,
      name: 'Task 1',
      description : ' My first Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description : ' My second Task'
    }
  ];

  // * Hacemos uso del useEffect para recoger las credenciales
  // * ya que usamos el submit en loginFormik de manera
  // * asíncrona
  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged);
  },[]);

  return (
    <Router>
      <div>
          <aside>
            <Link to='/'>| HOME |</Link>
            <Link to='/tasks/1'>| TASK 1 |</Link>
            <Link to='/tasks/2'>| TASK 2 |</Link>
            <Link to='/about'>| ABOUT |</Link>
            <Link to='/faqs'>| FAQ's |</Link>
            <Link to='/profile'>| {logged ? 'PROFILE' : 'LOGIN'} |</Link>
            <Link to='/404'>| Ruta inexistente |</Link>
          </aside>
      </div>
      <main>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/state' element={<StatePage />} />
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/faqs' element={<AboutPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          {/* 
            No podemos navegar por profile si no estamos logeados
            Redirigimos a Login
          */}    
          <Route path='/profile' element={ logged ? <ProfilePage/> : <Navigate to='/login'/> }/>
            
          <Route path='/tasks' element={<TaskPage/>}/>
          <Route path='/tasks/:id' element={<TaskDetailPage taskList={taskList}/>}/>
          {/* 404 - Page Not Found */}
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </main>

    </Router>
      
  );
}

export default AppRoutingOne;