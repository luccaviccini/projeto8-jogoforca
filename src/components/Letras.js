export default function Letras(){
  //array with all letters of alphabet
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="letras">
        {alphabet.map((letter) => (
            <button key= {letter}className="letterButtonDisabled">{letter}</button>
        ))}            
    </div>
  );
}