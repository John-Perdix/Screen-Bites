import logo from './logo.svg';
import './App.css';

function Navbar() {
  return (
    <div class="navbar">
      <img alt="screenbites_logo" src="recursos/logo1.png" width="2%" height="3%"></img>
        <h1>Receitas</h1>
        <h1>Notícias</h1>
        <span class="material-symbols-outlined">search</span>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
