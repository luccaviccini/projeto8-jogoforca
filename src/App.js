import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute"
import React, {useState} from "react";
import words from "./palavras";




function App() {
  // choose random word from words

  // object with default states
  const defaultState = {
    word: "", 
    guess: "",
    dashArray: [],
    errors: 0,
    start: false,
    letter: "",
    win: false,
    lose: false
  }


  const [word, setWord] = useState(defaultState.word);
  console.log(word)
  let   [letter, setLetter] = useState(defaultState.letter);
  let   [dashArray, setdashArray] = useState(defaultState.dashArray);
  const [errors, setErrors] = useState(defaultState.errors); 
  console.log(errors)
  const [guess, setGuess] = useState(defaultState.guess);
  const [start, setStart] = useState(defaultState.start);
  const [win, setWin] = useState(defaultState.win);
  console.log(win)
  const [lose, setLose] = useState(defaultState.lose);

  

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
        start={start}
        setStart={setStart}
        win={win}
        setWin={setWin}
        lose={lose}
        setLose={setLose}
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
          start={start}
          win={win}
          setWin={setWin}
          lose={lose}
          setLose={setLose}
        />
        <Chute
          word={word}
          guess={guess}
          setGuess={setGuess}
          setErrors={setErrors}
          start={start}
          win={win}
          setWin={setWin}
          lose={lose}
          setLose={setLose}
        />
      </div>
    </div>
  );

  
}

export default App;
