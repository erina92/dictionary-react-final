import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo img-fluid"
          alt="logo"
          title="dictionary logo"
        />
        <h1 className="text-center">Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded with SheCodes React Add-On 👩‍💻</small>
      </footer>
    </div>
  );
}

export default App;
