import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src="/ava.jpg" className="App-logo" alt="logo" />
          <h1>Hello, I'm Xiao JieYi</h1>
          <div className="profile-info">
            <p><strong>Surname:</strong> Xiao</p>
            <p><strong>Name:</strong> JieYi</p>
            <p><strong>Student ID:</strong> 20232049</p>
          </div>
          <p className="welcome-message">
            Welcome to my personal introduction page!
          </p>
        </header>
      </div>
  );
}

export default App;