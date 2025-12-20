import React from 'react'
import type { Game } from '../Game'
import type { PlayerRole } from '../PlayerRoles'

type Props = {
  game: Game;
  playerTurn: number;
}

const SECONDS_TO_SHOW_ROLE: number = 5

const ShowingRole = ({ game, playerTurn }: Props): React.ReactElement => {
  const role: PlayerRole = game.players[playerTurn - 1]
  const [timeLeft, _setTimeLeft] = React.useState<number>(SECONDS_TO_SHOW_ROLE)

  return (
    <>
      <h1>Player {playerTurn} of {game.players.length}</h1>
      <h1>Don't let anyone else see the screen!</h1>
      {role === 'impostor' && (
        <h2>You are the impostor!</h2>
      )}
      {role === 'keeper' && (
        <h2>You are not the impostor. The secret word is: {game.secretWord}</h2>
      )}
      <p>Time left: {timeLeft}</p>
    </>
  )
}

export default ShowingRole
