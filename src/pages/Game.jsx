import { Link } from "react-router";
import DisplayWord from "../components/DisplayWord";
import AlphabetDisplay from "../components/AlphabetDisplay";
import { alphabet as initialAlphabet } from "../util/alphabet";
import { useState } from "react";
import "./Game.css";

export default function Game() {
  const [fullWord, setFullWord] = useState("FRIDAY");
  const [guessedLetters, setGuessedLetters] = useState([]);

  function handleLetterSelect(letter) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    }
    console.log("handleLetterSelect called with letter:", letter);
  }

  const alphabet = initialAlphabet.map((item) => {
    if (guessedLetters.includes(item.letter)) {
      return {
        letter: item.letter,
        isSelected: true,
      };
    } else {
      return {
        letter: item.letter,
        isSelected: false,
      };
    }
  });

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
      <p>{JSON.stringify(guessedLetters)}</p>
      <p>{JSON.stringify(alphabet)}</p>
    </section>
  );
}
