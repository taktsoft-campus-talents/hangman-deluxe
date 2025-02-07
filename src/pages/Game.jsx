import { Link } from "react-router";
import DisplayWord from "../components/DisplayWord";
import "./Game.css";

export default function Game() {
  return (
    <section className="game_section">
      <DisplayWord></DisplayWord>

      <Link to="/result" className="result_btn">
        See results
      </Link>
    </section>
  );
}
