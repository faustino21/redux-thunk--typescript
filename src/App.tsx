import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { RootStore } from './store';
import { useDispatch } from 'react-redux';
import { GetPokemon } from './action/pokemonAction';

function App() {

  const dispatch = useDispatch()
  const [pokemonName, setPokemonName] = useState("")
  const PokemonState = useSelector( (state : RootStore) => state.pokemon)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value)
  } 

  const handleSubmit = () => dispatch(GetPokemon)

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={}>Submit</button>
    </div>
  );
}

export default App;
