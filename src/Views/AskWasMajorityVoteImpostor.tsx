import React from 'react'

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
      <button
        onClick={openHowToPlay}
        className="btn btn-info btn-xs absolute top-0 right-0 m-2"
      >
        How to play
      </button>
      <button
        onClick={openConfirmRestart}
        className="btn btn-secondary btn-xs absolute top-0 left-0 m-2"
      >
        Restart
      </button>
    </>
  )
}

export default AskWasMajorityVoteImpostor
