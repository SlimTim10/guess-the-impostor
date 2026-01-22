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
      <h2 className="text-xl text-primary">
        Round {round} of {ROUND_LIMIT}
      </h2>
      {round < ROUND_LIMIT && (
        <>
          <div>
            <p className="text-xl text-center">
              Talk among yourselves and cast your votes on who you think is the
              impostor!
            </p>
            <p className="text-md text-center">
              (Any player may abstain from voting)
            </p>
          </div>
          <p className="text-xl">Is there a majority vote?</p>
          <div className="flex flex-col gap-y-2 w-100">
            <button
              onClick={noMajorityVote}
              className="btn btn-error btn-xl btn-block"
            >
              No
            </button>
            <button
              onClick={yesMajorityVote}
              className="btn btn-success btn-xl btn-block"
            >
              Yes
            </button>
          </div>
        </>
      )}
      {round === ROUND_LIMIT && (
        <>
          <div>
            <p className="text-xl text-center">
              Talk among yourselves and cast your votes on who you think is the
              impostor!
            </p>
            <p className="text-md text-center">(This is your last chance!)</p>
          </div>
          <p className="text-xl">Is there a majority vote?</p>
          <div className="flex flex-col gap-y-2 w-100">
            <button disabled={true} className="btn btn-xl btn-block">
              No
            </button>
            <button
              onClick={yesMajorityVote}
              className="btn btn-success btn-xl btn-block"
            >
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
