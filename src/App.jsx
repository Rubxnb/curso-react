
import './App.css';
import TaskListComponent from './components/container/task_list';
import Father from './components/container/father';
import ContactList from './components/container/contact_list';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskFormik from './components/pure/forms/taskFormik';
//import ContactList from './components/container/contact_list';
//import Ejemplo1 from './hooks/Ejemplo1';
//import Ejemplo2 from './hooks/Ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3';
//import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
     {/* <TaskListComponent/> */}
     {/* <ContactList/> */}
    {/*  <Father/> */}
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name="Rubén"/> */}
        {/* <Fgreeting name="Rubén"/> */}
        
        {/*<ContactList/>*/}
        {/*<Ejemplo1/>*/}
        {/*<Ejemplo2/>*/}
        {/*<MiComponenteConContexto/>*/}
        {/* <Ejemplo4 nombre="Rubén">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}

        {/* <GreetingStyled name="Rubén"/> */}
        {/* <a  
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <LoginFormik/> */}
      {/* <RegisterFormik/> */}
      <TaskFormik/>
      {/* <OptionalRender/> */}

    </div>
  );
}

export default App;