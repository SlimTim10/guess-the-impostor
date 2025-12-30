import React from 'react'
import type { Game } from '../Game'
import type { PlayerRole } from '../PlayerRoles'

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
  const [timeLeft, setTimeLeft] = React.useState<number>(SECONDS_TO_SHOW_ROLE)

  React.useEffect(() => {
    const countdownId: number = setInterval(() => {
      setTimeLeft((x) => {
        if (x - 1 >= 0) {
          return x - 1
        } else {
          clearInterval(countdownId)
          return x
        }
      })
    }, 1000)

    const cleanup = (): void => {
      clearInterval(countdownId)
    }

    return cleanup
  }, [])

  React.useEffect(() => {
    if (timeLeft === 0) {
      doneShowingRole()
    }
  }, [timeLeft])

  return (
    <>
      <h2 className="text-lg text-primary">
        Player {playerTurn} of {game.players.length}
      </h2>
      <h2 className="text-lg text-warning">
        Don&#8217;t let anyone else see the screen!
      </h2>
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
      <p className="absolute bottom-0">Time left: {timeLeft}</p>
      {/* <TimeLeftBar totalTime={totalTime} timeLeft={timeLeft} interval={interval} /> */}
    </>
  )
}

export default ShowingRole
