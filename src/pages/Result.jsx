import { Link } from "react-router";

export default function Result() {
  return (
    <>
      <h1>Result</h1>
      <Link to="/game">Start new game</Link>
      <Link to="/">Back home</Link>
    </>
  );
}
