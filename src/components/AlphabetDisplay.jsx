import "./AlphabetDisplay.css";

// alphabet: [{letter:"A", isSelected: true}, {letter:"B", isSelected: false}, ...]
// onLetterSelect: (letter: string)=>{}

export default function AlphabetDisplay({ alphabet, onLetterSelect }) {
  return (
    <>
      <section className="alphabet-container">
        {alphabet.map((item) => {
          return (
            <div
              onClick={() => {
                if (!item.isSelected) onLetterSelect(item.letter);
              }}
              key={item.letter}
            >
              {item.letter}
              {item.isSelected && <div className="letter-selected">X</div>}
            </div>
          );
        })}
      </section>
    </>
  );
}
