import './App.css';
import Hello from './hello.jsx';
// import logo from './logo.svg';
import logo2 from './logo2.jpg';

function App() {
  return (
    <div className="App">
      <Hello />
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
          Bocchi(?) Say: <code>Bubrabarabubararba</code>...
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
