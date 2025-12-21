import React from 'react'
import type { Game } from '../Game'
import type { Round } from '../Rounds'

type Props = {
  game: Game;
  round: Round;
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SayAWord = ({ game, round, openHowToPlay }: Props): React.ReactElement => {
  console.log(game) // dummy usage
  console.log(round) // dummy usage
  return (
    <>
      <h1>Say a word</h1>
      <div>
        <button onClick={openHowToPlay}>How to play</button>
      </div>
    </>
  )
}

export default SayAWord
