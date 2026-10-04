import React from 'react'
import type { Game } from '../Game'
import type { PlayerRole } from '../PlayerRoles'
import TimeLeftBar from '../TimeLeftBar'

type Props = {
  game: Game
  playerTurn: number
  passToNextPlayer: () => void
  lastPlayerSawRole: () => void
}

const SECONDS_TO_SHOW_ROLE: number = 5

const ShowingRole = ({
  game,
  playerTurn,
  passToNextPlayer,
  lastPlayerSawRole,
}: Props): React.ReactElement => {
  const role: PlayerRole = game.players[playerTurn - 1]

  const handleTimeUp = (): void => {
    if (playerTurn === game.players.length) {
      lastPlayerSawRole()
    } else {
      passToNextPlayer()
    }
  }

  return (
    <>
      <h2 className="text-3xl text-primary">
        Player {playerTurn} of {game.players.length}
      </h2>
      <p className="text-xl text-warning">
        Don&#8217;t let anyone else see the screen!
      </p>
      <p className="text-2xl text-neutral-content bg-neutral p-2 text-center rounded-field">
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
        onTimeUp={handleTimeUp}
      />
    </>
  )
}

export default ShowingRole
