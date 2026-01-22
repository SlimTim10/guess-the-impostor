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
  passToNextPlayer: () => void
  lastPlayerSawRole: () => void
}

const DoneShowingRole = ({
  game,
  playerTurn,
  openHowToPlay,
  openConfirmRestart,
  startShowingRole,
  passToNextPlayer,
  lastPlayerSawRole,
}: Props): React.ReactElement => {
  const handleISawIt = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    if (playerTurn === game.players.length) {
      lastPlayerSawRole()
    } else {
      passToNextPlayer()
    }
  }

  const handleShowRoleAgain = (
    _e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    startShowingRole()
  }

  return (
    <>
      <h2 className="text-xl text-primary">
        Player {playerTurn} of {game.players.length}
      </h2>
      <p className="text-xl text-warning">
        Don&#8217;t let anyone else see the screen!
      </p>
      <button
        onClick={handleISawIt}
        className="btn btn-primary btn-xl btn-block"
      >
        I saw it
      </button>
      <button
        onClick={handleShowRoleAgain}
        className="btn btn-soft btn-primary btn-xl btn-block"
      >
        Show role again
      </button>
      <HowToPlayButton openHowToPlay={openHowToPlay} />
      <RestartButton openConfirmRestart={openConfirmRestart} />
    </>
  )
}

export default DoneShowingRole
