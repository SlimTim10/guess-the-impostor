import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game
  playerTurn: number
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ShowRole = ({
  game,
  playerTurn,
  openHowToPlay,
  openConfirmRestart,
}: Props): React.ReactElement => {
  return (
    <>
      <h1>
        Player {playerTurn} of {game.players.length}
      </h1>
      <h1>Don't let anyone else see the screen!</h1>
      <div>
        <button onClick={openHowToPlay}>How to play</button>
      </div>
      <div>
        <button onClick={openConfirmRestart}>Restart</button>
      </div>
    </>
  )
}

export default ShowRole
