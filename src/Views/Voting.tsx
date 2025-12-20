import React from 'react'
import type { Game } from '../Game'
import type { Round } from '../Rounds'
import { ROUND_LIMIT } from '../Rounds'

type Props = {
  game: Game;
  round: Round;
}

const Voting = ({ game, round }: Props): React.ReactElement => {
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
    </>
  )
}

export default Voting
