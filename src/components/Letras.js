export default function Letras(){
  //array with all letters of alphabet
  const alphabet = [
    { letter: "A" },
    { letter: "B" },
    { letter: "C" },
    { letter: "D" },
    { letter: "E" },
    { letter: "F" },
    { letter: "G" },
    { letter: "H" },
    { letter: "I" },
    { letter: "J" },
    { letter: "K" },
    { letter: "L" },
    { letter: "M" },
    { letter: "N" },
    { letter: "O" },
    { letter: "P" },
    { letter: "Q" },
    { letter: "R" },
    { letter: "S" },
    { letter: "T" },
    { letter: "U" },
    { letter: "V" },
    { letter: "W" },
    { letter: "X" },
    { letter: "Y" },
    { letter: "Z" },
  ];

  return (
    <div className="letras">
        {alphabet.map((letter) => (
            <button key= {letter.letter}className="letterButtonDisabled">{letter.letter}</button>
        ))}            
    </div>
  );
}