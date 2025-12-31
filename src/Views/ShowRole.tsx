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
      <p className="text-lg text-warning">
        Don&#8217;t let anyone else see the screen!
      </p>
      <button onClick={handleShowRole} className="btn btn-primary">
        Show my role
      </button>
      <HowToPlayButton openHowToPlay={openHowToPlay} />
      <RestartButton openConfirmRestart={openConfirmRestart} />
    </>
  )
}

export default ShowRole
