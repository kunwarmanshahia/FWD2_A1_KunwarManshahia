import Books from "./Books";
import AddFn from "./AddFn";
import "./index.css";

function App() {
  return (
  <div className="page">
    <header className="header">
      <h1>Book Catalog</h1>
    </header>

    <main className="content">
      <AddFn />
      <Books isbn="9781484292464" />
      <Books isbn="9781484290354" />
    </main>

    <footer className="footer">
      <p>Kunwar S. Manshahia 2025</p>
    </footer>
  </div>
  );
}


export default App;