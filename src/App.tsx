import React,{ useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [sb, setSb] = useState('');
  const [idade, setIdade] = useState('');

  const input = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const input2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSb(event.target.value);
  }

  const input3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdade(event.target.value);
  }

  return (
    <div className="App">
  <div className="input-group">
    <label htmlFor="name">Nome:</label>
    <input type="text" id="name" value={name} onChange={input}/>
  </div>
  <div className="input-group">
    <label htmlFor="sb">Sobrenome:</label>
    <input type="text" id="sb" value={sb} onChange={input2}/>
  </div>
  <div className="input-group">
    <label htmlFor="idade">Idade:</label>
    <input type="text" id="idade" value={idade} onChange={input3}/>
  </div>
  <hr />
  <p>Olá, {name} {sb} tudo bem?</p>
  <p>Você tem {idade} anos.</p>
</div>
  );
}

export default App;

// FormEvent<HTMLInputElement>