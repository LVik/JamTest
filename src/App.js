import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          With nodemon, any edit followed by a save will reload the running server.
        </p>
        <p>With Amplify, committing the main branch will redeploy in <a href="https://main.d1kanevtwybs06.amplifyapp.com/">aws</a>.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
      </footer>
    </div>
  );
}

export default App;
