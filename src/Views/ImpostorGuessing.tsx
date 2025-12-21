import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game;
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ImpostorGuessing = ({ game, openHowToPlay }: Props): React.ReactElement => {
  console.log(game) // dummy usage
  return (
    <>
      <h1>The impostor has one chance to guess the secret word</h1>
      <div>
        <button onClick={openHowToPlay}>How to play</button>
      </div>
    </>
  )
}

export default ImpostorGuessing
