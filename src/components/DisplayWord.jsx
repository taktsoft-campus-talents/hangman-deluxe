import "./DisplayWord.css";

function DisplayWord({ word = "Di??icul??" }) {
  let result = [];

  if (typeof word === "string") {
    for (let letter of word) {
      result.push(letter);
    }
  } else {
    result = word;
  }

  return (
    <div className="word_container">
      <h3>Guess the word!</h3>

      <div className="word_item">
        {result.map((item) => {
          return item === "?" ? <span>_</span> : <span>{item}</span>;
        })}
      </div>
    </div>
  );
}

export default DisplayWord;
