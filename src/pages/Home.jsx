import { Link } from "react-router";
import AlphabetDisplay from "../components/AlphabetDisplay";

let alphabet = [];
for (let i = 65; i <= 90; i++) {
  alphabet.push({ letter: String.fromCharCode(i), isSelected: false });
}

alphabet[0].isSelected = true;
alphabet[5].isSelected = true;

export default function Home() {
  function handleLetterSelect(letter) {
    console.log("handleLetterSelect called with letter:", letter);
  }

  return (
    <>
      <h1>Home</h1>
      <AlphabetDisplay
        alphabet={alphabet}
        onLetterSelect={handleLetterSelect}
      />
      <Link to="/game">Start Game</Link>
    </>
  );
}
