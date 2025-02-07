import { Link } from "react-router";

export default function Result() {
  return (
    <>
      <Link to="/game">Start new game</Link>
      <Link to="/">Back home</Link>
    </>
  );
}
