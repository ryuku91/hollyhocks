import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-wed">
        <img src="https://4.bp.blogspot.com/-cC8ybC_4nUg/VGX8pO9cLhI/AAAAAAAApKQ/ZToS-DsItD4/s800/smartphone.png" className="App-logo" alt="logo" />
        <p className="text-wed-dark">
          ようこそ<code>WED</code> に！
        </p>
        <a
          className="text-wed-dark underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WED
        </a>
      </header>
    </div>
  );
}

export default App;
