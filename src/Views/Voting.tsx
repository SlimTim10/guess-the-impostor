import React from 'react'
import type { Game } from '../Game'
import type { Round } from '../Rounds'
import { ROUND_LIMIT } from '../Rounds'

type Props = {
  game: Game;
  round: Round;
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Voting = ({ game, round, openHowToPlay }: Props): React.ReactElement => {
  console.log(game) // dummy usage
  return (
    <>
    {round < ROUND_LIMIT && (
      <>
        <h1>Cast your votes on who you think is the impostor</h1>
        <h1>Is there a majority vote?</h1>
      </>
    )}
    {round === ROUND_LIMIT && (
      <>
        <h1>Cast your votes on who you think is the impostor</h1>
        <h1>This is your last chance!</h1>
      </>
    )}
    <div>
      <button onClick={openHowToPlay}>How to play</button>
    </div>
    </>
  )
}

export default Voting
