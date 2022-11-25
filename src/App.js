import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute"




function App() {




  return (
    <div className="app">
      <Jogo />

      <div className="lower">
        <Letras />
        <Chute />
      </div>
    </div>
  );

  
}

export default App;
