import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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
        Coded with SheCodes React Add-On by Erika Miglietta 👩‍💻
        <br />
        <div className="links mt-2">
          <a
            className="btn text-white"
            style={{ backgroundColor: `#ac2bac` }}
            href="https://www.instagram.com/eri.codes"
            target="_blank"
            rel="noreferrer"
            role="button"
            title="Instagram"
          >
            <i className="bi bi-instagram me-2"></i>
            Instagram
          </a>
          <a
            className="btn text-white ms-2"
            style={{ backgroundColor: `#0082ca` }}
            href="https://www.linkedin.com/in/erika-miglietta/"
            target="_blank"
            rel="noreferrer"
            role="button"
            title="LinkedIN"
          >
            <i className="bi bi-linkedin me-2"></i>
            LinkedIn
          </a>
          <a
            className="btn text-white ms-2"
            style={{ backgroundColor: `#333333` }}
            href="https://github.com/erina92"
            target="_blank"
            rel="noreferrer"
            role="button"
            title="Github"
          >
            <i className="bi bi-github me-2"></i>
            Github
          </a>
          <a
            className="btn text-white ms-2"
            style={{ backgroundColor: `#481449` }}
            href="https://shecodesio.slack.com/team/U042KAU08KW"
            target="_blank"
            rel="noreferrer"
            role="button"
            title="Slack"
          >
            <i className="bi bi-slack me-2"></i>
            Slack
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
