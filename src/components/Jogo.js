import React from "react";

export default function Jogo(props) {
  const hangedManSrc = [
    "assets/forca0.png",
    "assets/forca1.png",
    "assets/forca2.png",
    "assets/forca3.png",
    "assets/forca4.png",
    "assets/forca5.png",
    "assets/forca6.png",
  ];

  function chooseWord() {
    if(!props.start){
      // empty dash array
      props.setdashArray([]);
      // win false
      props.setWin(false);
      // lose false
      props.setLose(false);
      // setclickedLetters to empty array
      props.setlettersClicked([]);
      // set errors to 0
      props.setErrors(0);
      // set guess to ''
      props.setGuess('');
      // choose a random word
      let word = props.words[Math.floor(Math.random() * props.words.length)];
      // set word
      props.setWord(word);
      // set dash array
      props.setdashArray(Array(word.length).fill("_"));
      // set start to true
      props.setStart(true);
    }

    
    
  }

  return (
    <>
      <Imagem src={hangedManSrc[props.errors]} />
      <button
        data-test="choose-word"
        onClick={chooseWord}
        className="chooseWordButton">
        Escolher palavra
      </button>
      <Word
        lose={props.lose}
        win={props.win}
        palavra={
          props.win || props.lose ? props.word : props.dashArray.join(" ")
        }
        answer = {props.word}
        
      />
    </>
  );
}

function Imagem(props) {
  return (
    <div className="hangedMan">
      <img data-test="game-image" src={props.src} alt={props.src}></img>
    </div>
  );
}

function Word(props) {
  return (
    <div
      data-test="word"
      data-answer={props.answer}
      className={
        props.win ? "word green" : props.lose ? "word red" : "word black"
      }>
      {props.palavra}
    </div>
  );
}


