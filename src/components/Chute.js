export default function Chute(props) {
    
    function handleClick() {
        let word = props.word;
        let guess = props.guess;
        if (word === guess) {
            alert("Você acertou!");
        }
        else{
            props.setErrors(6);
            setTimeout(() => {
                alert("Você perdeu!");
                window.location.reload();
            }, 500)
        }
    }
    
    return(
        <div className="chute">
            <span className="jaSei"> Já sei a palavra</span>
            <input  onChange = {(e) => props.setGuess(e.target.value)}type="text" className="chuteInput" placeholder="Chute"></input>
            <button onClick={handleClick} className="chuteButton">Chutar</button>         
        </div>
    );
}