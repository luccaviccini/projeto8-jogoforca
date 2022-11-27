import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute"
import React, {useState} from "react";
import words from "./palavras";




function App() {
  // choose random word from words
  const [word, setWord] = useState('');
  let   [letter, setLetter] = useState("");
  let   [dashArray, setdashArray] = useState(Array(word.length).fill("_"));
  const [errors, setErrors] = useState(0)  
  const [guess, setGuess] = useState("");
  const [start, setStart] = useState(false);
  

  return (
    <div className="app">
      <Jogo
        letter={letter}
        word={word}
        dashArray={dashArray}
        setdashArray={setdashArray}
        words={words}
        setWord={setWord}
        errors={errors}
        start = {start}
        setStart = {setStart}
      />
      <div className="lower">
        <Letras
          letter={letter}
          word={word}
          dashArray={dashArray}
          setdashArray={setdashArray}
          setLetter={setLetter}
          errors={errors}
          setErrors={setErrors}
          start = {start}
        />
        <Chute
          word={word}
          guess={guess}
          setGuess={setGuess}
          setErrors={setErrors}
          start = {start}
        />
      </div>
    </div>
  );

  
}

export default App;
