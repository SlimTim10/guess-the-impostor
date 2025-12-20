import React from 'react'
import type { Game } from '../Game'
import type { Round } from '../Rounds'

type Props = {
  game: Game;
  round: Round;
}

const SayAWord = ({ game, round }: Props): React.ReactElement => {
  console.log(game) // dummy usage
  console.log(round) // dummy usage
  return (
    <>
      <h1>Say a word</h1>
    </>
  )
}

export default SayAWord
