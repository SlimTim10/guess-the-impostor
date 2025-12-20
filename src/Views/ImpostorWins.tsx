import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game;
}

const ImpostorWins = ({ game }: Props): React.ReactElement => {
  return (
    <>
      <h1>Impostor wins!</h1>
      <p>The secret word was: {game.secretWord}</p>
    </>
  )
}

export default ImpostorWins
