import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
