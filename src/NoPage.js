import Navbar from "./nav";

function App() {
  return (
    <div>
      <section className="section error">
        <div className="container">
          <div className="container-data error">
            <h1 className="error-title title">404</h1>
            <p className="error-description description">
              The page you are looking for is now beyond my reach.. This page
              doesnt exist.
            </p>
            <a href="/" className="button">
              Go back
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
