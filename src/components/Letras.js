export default function Letras(props){
  //array with all letters of alphabet
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];


  return (
    <div className="letras">
        {alphabet.map((l) => (
            <button onClick= {() => handleClick(l)}key= {l}className="letterButtonEnabled">{l.toUpperCase()}</button>
        ))}            
    </div>
  );

  function handleClick(l) {
    
    let word = props.word;
    console.log(word)
    let letter = l;
    props.setLetter(l);
    let dashArray = props.dashArray;
    let setdashArray = props.setdashArray;

    if (word.includes(letter)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          dashArray[i] = letter;
          setdashArray(dashArray);
        }
      }
    }
    
  }

  
}