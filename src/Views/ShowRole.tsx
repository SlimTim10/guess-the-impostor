import React from 'react'
import type { Game } from '../Game'
import HowToPlayButton from './Pieces/HowToPlayButton'
import RestartButton from './Pieces/RestartButton'

type Props = {
  game: Game
  playerTurn: number
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
  startShowingRole: () => void
  goBackToPrevRole: () => void
}

const ShowRole = ({
  game,
  playerTurn,
  openHowToPlay,
  openConfirmRestart,
  startShowingRole,
  goBackToPrevRole,
}: Props): React.ReactElement => {
  const handleShowRole = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    startShowingRole()
  }

  return (
    <>
      <h2 className="text-3xl text-primary">
        Player {playerTurn} of {game.players.length}
      </h2>
      <p className="text-xl text-warning">
        Don&#8217;t let anyone else see the screen!
      </p>
      <button
        onClick={handleShowRole}
        className="btn btn-primary btn-xl btn-block"
      >
        Show my role
      </button>
      {playerTurn > 1 && (
        <button
          onClick={goBackToPrevRole}
          className="btn btn-soft btn-primary btn-xl btn-block"
        >
          Go back to previous player
        </button>
      )}

      <HowToPlayButton openHowToPlay={openHowToPlay} />
      <RestartButton openConfirmRestart={openConfirmRestart} />
    </>
  )
}

export default ShowRole
