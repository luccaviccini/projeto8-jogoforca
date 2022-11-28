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
    props.setStart(true)
    let word = props.words[Math.floor(Math.random() * props.words.length)];
    props.setWord(word);    
    props.setdashArray(Array(word.length).fill("_"));
    
  }

  return (
    <>
      <Imagem src={hangedManSrc[props.errors]} />
      <button onClick={chooseWord} className="chooseWordButton">
        Escolher palavra
      </button>
      <Word lose = {props.lose} win = {props.win}palavra={props.win || props.lose ? props.word :props.dashArray.join(" ")} />
    </>
  );
}

function Imagem(props) {
  return (
    <div className="hangedMan">
      <img src={props.src} alt={props.src}></img>
    </div>
  );
}

function Word(props) {
  console.log(props)
  return (
    <div
      className={props.win? "word green" : props.lose? "word red" : "word black"}>
      {props.palavra}
    </div>
  );
}


