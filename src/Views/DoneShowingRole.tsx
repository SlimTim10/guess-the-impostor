import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game
  playerTurn: number
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
  startShowingRole: () => void
  passToNextPlayer: () => void
}

const DoneShowingRole = ({
  game,
  playerTurn,
  openHowToPlay,
  openConfirmRestart,
  startShowingRole,
  passToNextPlayer,
}: Props): React.ReactElement => {
  const handleISawIt = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    if (playerTurn === game.players.length) {
      console.log('last player saw role')
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
      <h1>
        Player {playerTurn} of {game.players.length}
      </h1>
      <h1>Don't let anyone else see the screen!</h1>
      <div>
        <button onClick={handleShowRoleAgain}>Show role again</button>
      </div>
      <div>
        <button onClick={handleISawIt}>I saw it</button>
      </div>
      <div>
        <button onClick={openHowToPlay}>How to play</button>
      </div>
      <div>
        <button onClick={openConfirmRestart}>Restart</button>
      </div>
    </>
  )
}

export default DoneShowingRole
