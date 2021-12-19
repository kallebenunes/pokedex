import React, {useEffect, useState} from 'react';
import './App.css';
import { httpGetClient } from './services/api/httpGetClient';
interface Pokemon {
  avg_spawns: number
  candy: string
  egg: string
  height: string
  id: number
  img: string
  multipliers: number | null
  name: string
  num: string
  prev_evolution: any[]
  spawn_chance: number
  spawn_time: string
  type: string[]
  weaknesses: string[]
  weight: string
}

function App() {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

  async function getPokemonList (){
    const { data } = await httpGetClient("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    setPokemonList(data.pokemon)
  }

  useEffect(() => {
    getPokemonList()
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
