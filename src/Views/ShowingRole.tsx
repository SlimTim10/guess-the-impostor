import React from 'react'
import type { Game } from '../Game'
import type { PlayerRole } from '../PlayerRoles'
import TimeLeftBar from '../TimeLeftBar'

type Props = {
  game: Game
  playerTurn: number
  doneShowingRole: () => void
}

const SECONDS_TO_SHOW_ROLE: number = 5

const ShowingRole = ({
  game,
  playerTurn,
  doneShowingRole,
}: Props): React.ReactElement => {
  const role: PlayerRole = game.players[playerTurn - 1]

  return (
    <>
      <h2 className="text-lg text-primary">
        Player {playerTurn} of {game.players.length}
      </h2>
      <p className="text-lg text-warning">
        Don&#8217;t let anyone else see the screen!
      </p>
      <p className="text-neutral-content bg-neutral p-2 text-center rounded-field">
        {role === 'impostor' && <>You are the impostor!</>}
        {role === 'keeper' && (
          <>
            You are not the impostor.
            <br />
            The secret word is:{' '}
            <span className="font-bold">{game.secretWord}</span>
          </>
        )}
      </p>
      <TimeLeftBar
        barWidth="100vw"
        className="absolute bottom-0 left-0 h-8 bg-primary"
        totalTime={SECONDS_TO_SHOW_ROLE * 1000}
        onTimeUp={doneShowingRole}
      />
    </>
  )
}

export default ShowingRole
