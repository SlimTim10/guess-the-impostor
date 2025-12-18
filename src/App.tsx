import { useEffect, useState } from 'react'
import './App.css'
import type { PlayerRole } from './PlayerRoles'
import type { Round } from './Rounds'
import { isRound } from './Rounds'
import type { ValidPlayers } from './ValidPlayers'
import { isValidPlayers } from './ValidPlayers'

const App = () => {
  const [count, setCount] = useState<number>(0)
  const [somePlayerRole, _setSomePlayerRole] = useState<PlayerRole>('keeper')
  const [players, setPlayers] = useState<null | ValidPlayers>(null)
  const [round, setRound] = useState<null | Round>(null)

  useEffect(() => {
    const xs: Array<PlayerRole> = ['keeper', 'keeper', 'imposter']
    if (isValidPlayers(xs)) {
      setPlayers(xs)
    }

    const x: number = 1
    if (isRound(x)) {
      setRound(x)
    }
  }, [])

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Player role: {somePlayerRole}
        </p>
        <p>
          Players: {players}
        </p>
        <p>
          Round: {round}
        </p>
      </div>
    </>
  )
}

export default App
