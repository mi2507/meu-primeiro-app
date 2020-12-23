import logo from './logo.svg';
import profile from './profile.jpeg';
import logoelo from './logoelo.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logoelo} className="App-logoelo" alt="logotipo da elo"></img>
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
          Este App foi feito por Michelle Regina
          </p>
          <img src={profile} className="App-profile" alt="minha foto de perfil" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
