import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game;
}

const AskWasMajorityVoteImpostor = ({ game }: Props): React.ReactElement => {
  console.log(game) // dummy usage
  return (
    <>
      <h1>Was the majority vote on the impostor?</h1>
      <p>Impostor, you can now reveal yourself!</p>
    </>
  )
}

export default AskWasMajorityVoteImpostor
