import { useState, useEffect } from 'react'
import './App.css'
import Playcard from './Components/Playcard'

function App() {

    const [gameCards, setGameCards] = useState([])
    const [gamesize, setGamesize] = useState(8)
    const [gameStarted, setGameStarted] = useState(false)

    useEffect(() => {
        var rndm = 0;
        var randomCardArray = []
        for (var i = 0; i < gamesize / 2; i++) { 
            rndm = Math.floor(Math.random() * 152)

            fetch("https://pokeapi.co/api/v2/pokemon/" + rndm)
                .then(res => res.json())
                .then(data => randomCardArray.push(data))
        }       

        setGameCards(randomCardArray)

    }, [])


    return (
      <>
            <h1>Hi lol</h1>
            <button onClick={() => setGameStarted(true)}>ShuffleCards</button>

            {gameStarted && 
                <div>
                    <Playcard
                        imageUrl={gameCards[0].sprites.front_default}
                        name={gameCards[0].name}
                    />
                    <Playcard
                        imageUrl={gameCards[1].sprites.front_default}
                        name={gameCards[1].name}
                    />
                    <Playcard
                        imageUrl={gameCards[2].sprites.front_default}
                        name={gameCards[2].name}
                    />
                    <Playcard
                        imageUrl={gameCards[3].sprites.front_default}
                        name={gameCards[3].name}
                    />
                </div>}
      </>
  )
}

export default App
