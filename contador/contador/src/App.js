import { useState } from 'react';
import './App.css';

function App() {
  //let Count = 1;
  const [count, setCount] = useState(0)
  const handleClick = () => {
    console.log(count)
    //count += 1
    setCount(pState => pState + 1)
  }
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={handleClick}>Clique Aqui</button>
    </div>
  );
}

export default App;
