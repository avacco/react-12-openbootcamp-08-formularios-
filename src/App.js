import './App.css';
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LoginFormik/> */}
        <RegisterFormik/>
      </header>

    </div>
  );
}

export default App;
