import { useEffect, useState } from 'react'
import './App.css'
import { GetPokemons } from './services/pokedex'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Items, PokemonDetail, Pokemons } from './components'
import { Pokemon } from './types.d'

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const getData = async () => {
    const data: Pokemon[] = await GetPokemons()
    // const sortedData = data.toSorted((a, b) => a.name.localeCompare(b.name))
    setPokemons(data)
  }

  useEffect(() => {
    getData()
  }, [])  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Pokemons pokemons={pokemons} />}/>
          <Route path="/pokemon/:name" element={<PokemonDetail />}/>
          <Route path="/items" element={<Items />}/>
        </Routes>
       
      </div>
    </Router>
  )
}

export default App
