import React from "react";


export default function Jogo(props) {
  const hangedManSrc = [
    { state0: "assets/forca0.png" },
    { state1: "assets/forca1.png" },
    { state2: "assets/forca2.png" },
    { state3: "assets/forca3.png" },
    { state4: "assets/forca4.png" },
    { state5: "assets/forca5.png" },
    { state6: "assets/forca6.png" },
  ];

  function chooseWord() {
    let word = props.words[Math.floor(Math.random() * props.words.length)];
    props.setWord(word);
    console.log(props.word)
    props.setdashArray(Array(word.length).fill("_"));
  }

  return (
    <>
      <Imagem src={hangedManSrc[0].state0} />
      <button onClick={chooseWord} className="chooseWordButton">    
        Escolher palavra
      </button>
      <Word palavra={props.dashArray.join(" ")} />
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
  return <div className="word">{props.palavra}</div>;
}
