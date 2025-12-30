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
      <p className="text-lg">Was the majority vote on the impostor?</p>
      <p className="text-sm">(Impostor, you can now reveal yourself!)</p>
      <div className="flex gap-x-2">
        <button onClick={majorityVoteWasNotImposter} className="btn btn-error">
          No
        </button>
        <button onClick={majorityVoteWasImposter} className="btn btn-success">
          Yes
        </button>
      </div>
      <HowToPlayButton openHowToPlay={openHowToPlay} />
      <RestartButton openConfirmRestart={openConfirmRestart} />
    </>
  )
}

export default AskWasMajorityVoteImpostor
