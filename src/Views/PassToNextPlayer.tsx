import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game;
  playerTurn: number;
}

const SECONDS_TO_PASS_TO_NEXT_PLAYER: number = 5

const PassToNextPlayer = ({ game, playerTurn }: Props): React.ReactElement => {
  console.log(game) // dummy usage
  console.log(playerTurn) // dummy usage
  const [timeLeft, _setTimeLeft] = React.useState<number>(SECONDS_TO_PASS_TO_NEXT_PLAYER)

  return (
    <>
      <h1>Pass to the next player</h1>
      <p>Time left: {timeLeft}</p>
    </>
  )
}

export default PassToNextPlayer
