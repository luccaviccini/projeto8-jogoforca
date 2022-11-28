import { useState } from "react";

export default function Letras(props) {
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
        <LetterButton key = {l} l={l} {...props} />
      ))}
    </div>
  );

  
}

function LetterButton(props){

    const [clicked, setClicked] = useState({state: false, class: "letterButtonDisabled"});

  


  return (
    <button
      disabled={!props.start ||props.win || props.lose? true : props.start? false: clicked.state}
      onClick={() => handleClick(props.l)}
      key={props.l}
      className={!props.start ||clicked.state || props.win|| props.lose ? "letterButtonDisabled" : "letterButtonEnabled"}>
        
      {props.l.toUpperCase()}
    </button>
  );

  function handleClick(l) {
    let arrClickedLetters  = [...props.lettersClicked, l]
    props.setlettersClicked(arrClickedLetters);
    setClicked({ state: true, class: "letterButtonEnabled" });
    let word = props.word;
    props.setLetter(l);
    let dashArray = props.dashArray;
    let setdashArray = props.setdashArray;

    if (word.includes(l)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === l) {
          dashArray[i] = l;
          setdashArray(dashArray);
          // check if string corresponding to dash array === word
          if (dashArray.join("") === word) {
            props.setWin(true);
            console.log("Você acertou!");
            props.setStart(false);
          }
        }
      }
    } else {
      let errors = props.errors + 1;
      props.setErrors(errors);
      if (errors === 6 || props.lose) {
        props.setLose(true);
        console.log("Você perdeu!");
      }
    }
  }
  
}
