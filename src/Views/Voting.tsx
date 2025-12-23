import React from 'react'
import type { Game } from '../Game'
import type { Round } from '../Rounds'
import { ROUND_LIMIT } from '../Rounds'

type Props = {
  game: Game
  round: Round
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
  noMajorityVote: () => void
}

const Voting = ({
  game,
  round,
  openHowToPlay,
  openConfirmRestart,
  noMajorityVote,
}: Props): React.ReactElement => {
  console.log(game) // dummy usage
  return (
    <>
      {round < ROUND_LIMIT && (
        <>
          <h1>Cast your votes on who you think is the impostor</h1>
          <h1>Is there a majority vote?</h1>
          <div>
            <button onClick={noMajorityVote}>No</button>
          </div>
          <div>
            <button onClick={() => console.log('yes majority vote')}>
              Yes
            </button>
          </div>
        </>
      )}
      {round === ROUND_LIMIT && (
        <>
          <h1>Cast your votes on who you think is the impostor</h1>
          <h1>This is your last chance!</h1>
        </>
      )}
      <div>
        <button onClick={openHowToPlay}>How to play</button>
      </div>
      <div>
        <button onClick={openConfirmRestart}>Restart</button>
      </div>
    </>
  )
}

export default Voting
