import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game;
}

const ImpostorGuessing = ({ game }: Props): React.ReactElement => {
  console.log(game) // dummy usage
  return (
    <>
      <h1>The impostor has one chance to guess the secret word</h1>
    </>
  )
}

export default ImpostorGuessing
