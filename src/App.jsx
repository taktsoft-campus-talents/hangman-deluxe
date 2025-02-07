import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <header>
        <h1>Hangman</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
