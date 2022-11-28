export default function Chute(props) {
  function handleClick() {
    let word = props.word;
    let guess = props.guess;
    if (word === guess) {
      props.setWin(true);
      console.log("Você acertou!");
    } else {
      props.setErrors(6); 
      props.setLose(true);
      console.log("Você perdeu!");      
    }
  }

  return (
    <div className="chute">
      <span className="jaSei"> Já sei a palavra</span>
      <input
        disabled={!props.start}
        onChange={(e) => props.setGuess(e.target.value)}
        type="text"
        className="chuteInput"
        placeholder=""></input>
      <button
        disabled={!props.start}
        onClick={handleClick}
        className="chuteButton">
        Chutar
      </button>
    </div>
  );
}
