export default function Chute(props) {
  function handleClick() {
    let word = props.word;
    let guess = props.guess;
    if (word === guess) {
      props.setWin(true);
      console.log("Você acertou!");
      props.setStart(false);
    } else {
      props.setErrors(6); 
      props.setLose(true);
      props.setStart(false);   
      
      console.log("Você perdeu!");      
    }
  }

  return (
    <div className="chute">
      <span className="jaSei"> Já sei a palavra</span>
      <input
        disabled={!props.start || props.win || props.lose}
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
