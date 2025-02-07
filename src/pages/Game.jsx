import { Link } from "react-router";
import DisplayWord from "../components/DisplayWord";
import AlphabetDisplay from "../components/AlphabetDisplay";
import { alphabet } from "../util/alphabet";
import "./Game.css";
import { words } from "../data/wordList";
import { useState } from "react";

export default function Game() {
  const [fullWord, setFullWord] = useState();

  function handleRandomWordSelect(wordList) {
    const wordIndex = Math.floor(Math.random() * wordList.length);

    const result = wordList[wordIndex].toUpperCase();

    setFullWord(result);
  }

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

      <div>
        <button
          className="start_btn"
          onClick={() => {
            handleRandomWordSelect(words);
          }}
        >
          Start the game!
        </button>

        <Link to="/result" className="result_btn">
          See results
        </Link>
      </div>
    </section>
  );
}
