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
                .then(data => randomCardArray.push(data,data))
        }       

        setGameCards(randomCardArray)

    }, [])

    console.log("Gamestarted? " + gameStarted)

    function handleStartGame() {

        var newCards = gameCards

        for (let i = newCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = newCards[i];
            newCards[i] = newCards[j];
            newCards[j] = temp;
        }

        setGameCards(newCards)

        setGameStarted(true)
        
    }

    const gameCardElements = gameCards.map(card => {
        return (
            <Playcard
                imageUrl={ card.sprites.front_default }
                name={ card.name }
            />
        )
    })

    return (
      <>
            <h1>Hi lol</h1>
            {!gameStarted && < button onClick={handleStartGame}>Start Game</button >}
            <div className="gameField">

                {gameStarted && gameCardElements}

             </div>
            

      </>
  )
}

export default App
