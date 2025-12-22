import React from 'react'
import type { Game } from '../Game'
import type { PlayerRole } from '../PlayerRoles'

type Props = {
  game: Game
  playerTurn: number
  doneShowingRole: () => void
}

const SECONDS_TO_SHOW_ROLE: number = 5

const ShowingRole = ({
  game,
  playerTurn,
  doneShowingRole,
}: Props): React.ReactElement => {
  const role: PlayerRole = game.players[playerTurn - 1]
  const [timeLeft, setTimeLeft] = React.useState<number>(SECONDS_TO_SHOW_ROLE)

  React.useEffect(() => {
    const countdownId: number = setInterval(() => {
      setTimeLeft((x) => {
        if (x - 1 >= 0) {
          return x - 1
        } else {
          clearInterval(countdownId)
          return x
        }
      })
    }, 1000)

    const cleanup = (): void => {
      clearInterval(countdownId)
    }

    return cleanup
  }, [])

  React.useEffect(() => {
    if (timeLeft === 0) {
      doneShowingRole()
    }
  }, [timeLeft])

  return (
    <>
      <h1>
        Player {playerTurn} of {game.players.length}
      </h1>
      <h1>Don&#39;t let anyone else see the screen!</h1>
      {role === 'impostor' && <h2>You are the impostor!</h2>}
      {role === 'keeper' && (
        <h2>You are not the impostor. The secret word is: {game.secretWord}</h2>
      )}
      <p>Time left: {timeLeft}</p>
      {/* <TimeLeftBar totalTime={totalTime} timeLeft={timeLeft} interval={interval} /> */}
    </>
  )
}

export default ShowingRole
