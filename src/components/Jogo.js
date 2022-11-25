import React from "react";

export default function Jogo() {
  let palavra = 'FUTEBOL';
  

  

  const hangedManSrc = [
    { state0: "assets/forca0.png" },
    { state1: "assets/forca1.png" },
    { state2: "assets/forca2.png" },
    { state3: "assets/forca3.png" },
    { state4: "assets/forca4.png" },
    { state5: "assets/forca5.png" },
    { state6: "assets/forca6.png" },
  ];

  return (
    <>
      <Imagem src={hangedManSrc[0].state0} />
      <ChooseWordButton />
      
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

function ChooseWordButton() {
  return <button className="chooseWordButton">Escolher palavra</button>;
}


  