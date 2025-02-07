import { Link } from "react-router";
import DisplayWord from "../components/DisplayWord";
import AlphabetDisplay from "../components/AlphabetDisplay";
import { alphabet } from "../util/alphabet";
import "./Game.css";

export default function Game() {
  function handleLetterSelect(letter) {
    console.log("handleLetterSelect called with letter:", letter);
  }
  return (
    <section className="game_section">
      <DisplayWord></DisplayWord>
      <AlphabetDisplay
        alphabet={alphabet}
        onLetterSelect={handleLetterSelect}
      />
      <Link to="/result" className="result_btn">
        See results
      </Link>
    </section>
  );
}
