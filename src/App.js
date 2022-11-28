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

  const [start, setStart] = useState(defaultState.start);
  
  const [word, setWord] = useState(defaultState.word);
  console.log("Word: ", word)
  let   [letter, setLetter] = useState(defaultState.letter);
  console.log("Letter: ", letter)
  let   [dashArray, setdashArray] = useState(defaultState.dashArray);
  console.log("dashArray", dashArray)
  const [errors, setErrors] = useState(defaultState.errors); 
  console.log("Errors: ",errors)
  const [guess, setGuess] = useState(defaultState.guess);
  
  console.log("Start: ",start);
  const [win, setWin] = useState(defaultState.win);
  console.log("Win: ",win)
  const [lose, setLose] = useState(defaultState.lose);
  console.log("Lose: ",lose)

  const [lettersClicked , setlettersClicked] = useState([]);
  console.log("lettersClicked: ",lettersClicked)
  // console log if letters clicked includes letter
  console.log("Includes Letter:  ",lettersClicked.includes(letter))

  

  

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
        setErrors={setErrors}
        start={start}
        setStart={setStart}
        win={win}
        setWin={setWin}
        lose={lose}
        setLose={setLose}
        setlettersClicked = {setlettersClicked}
        setGuess = {setGuess}
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
          setStart={setStart}
          win={win}
          setWin={setWin}
          lose={lose} setLose={setLose}          
          lettersClicked={lettersClicked} setlettersClicked={setlettersClicked}
          
        />
        <Chute
          word={word}
          guess={guess}
          setGuess={setGuess}
          setErrors={setErrors}
          start={start}
          setStart={setStart}
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
