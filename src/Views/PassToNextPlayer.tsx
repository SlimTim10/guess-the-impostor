import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game
  playerTurn: number
  passToNextPlayerDone: () => void
}

const SECONDS_TO_PASS_TO_NEXT_PLAYER: number = 5

const PassToNextPlayer = ({
  game,
  playerTurn,
  passToNextPlayerDone,
}: Props): React.ReactElement => {
  console.log(game) // dummy usage
  console.log(playerTurn) // dummy usage
  const [timeLeft, setTimeLeft] = React.useState<number>(
    SECONDS_TO_PASS_TO_NEXT_PLAYER,
  )

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
      passToNextPlayerDone()
    }
  }, [timeLeft])

  return (
    <>
      <h1>Pass to the next player</h1>
      <p>Time left: {timeLeft}</p>
    </>
  )
}

export default PassToNextPlayer
