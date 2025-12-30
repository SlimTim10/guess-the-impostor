import React from 'react'
import type { Round } from '../Rounds'
import { ROUND_LIMIT } from '../Rounds'
import HowToPlayButton from './Pieces/HowToPlayButton'
import RestartButton from './Pieces/RestartButton'

type Props = {
  round: Round
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
  noMajorityVote: () => void
  yesMajorityVote: () => void
}

const Voting = ({
  round,
  openHowToPlay,
  openConfirmRestart,
  noMajorityVote,
  yesMajorityVote,
}: Props): React.ReactElement => {
  return (
    <>
      <h2 className="text-lg text-primary">
        Round {round} of {ROUND_LIMIT}
      </h2>
      {round < ROUND_LIMIT && (
        <>
          <p className="text-lg">
            Talk amongst yourselves and cast your votes on who you think is the
            impostor!
          </p>
          <p className="text-sm">(Any player may abstain from voting)</p>
          <p className="text-lg">Is there a majority vote?</p>
          <div className="flex gap-x-2">
            <button onClick={noMajorityVote} className="btn btn-error">
              No
            </button>
            <button onClick={yesMajorityVote} className="btn btn-success">
              Yes
            </button>
          </div>
        </>
      )}
      {round === ROUND_LIMIT && (
        <>
          <p className="text-lg">
            Talk amongst yourselves and cast your votes on who you think is the
            impostor!
          </p>
          <p className="text-sm">(This is your last chance!)</p>
          <p className="text-lg">Is there a majority vote?</p>
          <div className="flex gap-x-2">
            <button className="btn" disabled={true}>
              No
            </button>
            <button onClick={yesMajorityVote} className="btn btn-success">
              Yes
            </button>
          </div>
        </>
      )}
      <HowToPlayButton openHowToPlay={openHowToPlay} />
      <RestartButton openConfirmRestart={openConfirmRestart} />
    </>
  )
}

export default Voting
