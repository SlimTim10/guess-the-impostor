import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game;
}

const KeepersWin = ({ game }: Props): React.ReactElement => {
  return (
    <>
      <h1>Keepers win!</h1>
      <p>The secret word was: {game.secretWord}</p>
    </>
  )
}

export default KeepersWin
