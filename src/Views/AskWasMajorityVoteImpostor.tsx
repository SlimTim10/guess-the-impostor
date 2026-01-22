import React from 'react'
import HowToPlayButton from './Pieces/HowToPlayButton'
import RestartButton from './Pieces/RestartButton'

type Props = {
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
  majorityVoteWasNotImposter: () => void
  majorityVoteWasImposter: () => void
}

const AskWasMajorityVoteImpostor = ({
  openHowToPlay,
  openConfirmRestart,
  majorityVoteWasNotImposter,
  majorityVoteWasImposter,
}: Props): React.ReactElement => {
  return (
    <>
      <div>
        <p className="text-xl text-center">
          Was the majority vote on the impostor?
        </p>
        <p className="text-md text-center">
          (Impostor, you can now reveal yourself!)
        </p>
      </div>
      <div className="flex flex-col gap-y-2 w-100">
        <button
          onClick={majorityVoteWasNotImposter}
          className="btn btn-error btn-xl btn-block"
        >
          No
        </button>
        <button
          onClick={majorityVoteWasImposter}
          className="btn btn-success btn-xl btn-block"
        >
          Yes
        </button>
      </div>
      <HowToPlayButton openHowToPlay={openHowToPlay} />
      <RestartButton openConfirmRestart={openConfirmRestart} />
    </>
  )
}

export default AskWasMajorityVoteImpostor
