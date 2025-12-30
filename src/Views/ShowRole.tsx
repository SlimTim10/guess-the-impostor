import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game
  playerTurn: number
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
  startShowingRole: () => void
}

const ShowRole = ({
  game,
  playerTurn,
  openHowToPlay,
  openConfirmRestart,
  startShowingRole,
}: Props): React.ReactElement => {
  const handleShowRole = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    startShowingRole()
  }

  return (
    <>
      <h2 className="text-lg text-primary">
        Player {playerTurn} of {game.players.length}
      </h2>
      <h2 className="text-lg text-warning">
        Don't let anyone else see the screen!
      </h2>
      <button onClick={handleShowRole} className="btn btn-primary">
        Show my role
      </button>
      <button
        onClick={openHowToPlay}
        className="btn btn-info btn-xs absolute top-0 right-0 m-2"
      >
        How to play
      </button>
      <button
        onClick={openConfirmRestart}
        className="btn btn-secondary btn-xs absolute top-0 left-0 m-2"
      >
        Restart
      </button>
    </>
  )
}

export default ShowRole
