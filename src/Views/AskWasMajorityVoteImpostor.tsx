import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const AskWasMajorityVoteImpostor = ({
  game,
  openHowToPlay,
  openConfirmRestart,
}: Props): React.ReactElement => {
  console.log(game) // dummy usage
  return (
    <>
      <h1>Was the majority vote on the impostor?</h1>
      <p>Impostor, you can now reveal yourself!</p>
      <div>
        <button onClick={openHowToPlay}>How to play</button>
      </div>
      <div>
        <button onClick={openConfirmRestart}>Restart</button>
      </div>
    </>
  )
}

export default AskWasMajorityVoteImpostor
