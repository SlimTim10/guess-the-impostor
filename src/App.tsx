import { useEffect, useState } from 'react'
import './App.css'
import type { Game } from './Game'
import type { PlayerRole } from './PlayerRoles'
import type { Round } from './Rounds'
import { isRound } from './Rounds'
import type { ValidPlayers } from './ValidPlayers'
import { isValidPlayers } from './ValidPlayers'
import type { SecretWord } from './Words'
import { generateRandomSecretWord } from './Words'

const App = () => {
  const [players, setPlayers] = useState<null | ValidPlayers>(null)
  const [round, setRound] = useState<null | Round>(null)
  const [secretWord, _setSecretWord] = useState<SecretWord>(generateRandomSecretWord())
  const [game, setGame] = useState<null | Game>(null)

  useEffect(() => {
    const xs: Array<PlayerRole> = ['keeper', 'keeper', 'impostor']
    if (isValidPlayers(xs)) {
      setPlayers(xs)
    }

    const x: number = 1
    if (isRound(x)) {
      setRound(x)
    }
  }, [])

  useEffect(() => {
    if (players !== null) {
      setGame({
        players,
        secretWord,
      })
    }
  }, [players])

  return (
    <>
      <div className="card">
        <p>
          Round: {round}
        </p>
        <p>
          Secret word: {secretWord}
        </p>
        <p>
          Game: <code>{JSON.stringify(game)}</code>
        </p>
      </div>
    </>
  )
}

export default App
