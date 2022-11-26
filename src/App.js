import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute"
import React, {useState} from "react";
import words from "./palavras";




function App() {
  // choose random word from words
  const [word, setWord] = useState('');
  
  
  
  let [letter, setLetter] = useState("");
  let [dashArray, setdashArray] = useState(Array(word.length).fill("_"));
  




  return (
    <div className="app">
      <Jogo
        letter={letter}
        word={word}
        dashArray={dashArray}
        setdashArray={setdashArray}
        words = {words}
        setWord = {setWord}
      />
      <div className="lower">
        <Letras
          letter={letter}
          word={word}
          dashArray={dashArray}
          setdashArray={setdashArray}
          setLetter={setLetter}
        />
        <Chute />
      </div>
    </div>
  );

  
}

export default App;
