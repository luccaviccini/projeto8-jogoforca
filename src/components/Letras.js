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
  
  function handleClick(l) {
    let arrClickedLetters = [...props.lettersClicked, l];
    props.setlettersClicked(arrClickedLetters);
    
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
        props.setStart(false);
      }
    }
  }
  
  return (
    <button
      data-test="letter"
      disabled={!props.start ? true : props.lettersClicked.includes(props.l)}
      onClick={() => handleClick(props.l)}
      key={props.l}
      className={
        props.start && !props.lettersClicked.includes(props.l)
          ? "letterButtonEnabled"
          : "letterButtonDisabled"
      }>
      {props.l.toUpperCase()}
    </button>
  );

  
  
}
