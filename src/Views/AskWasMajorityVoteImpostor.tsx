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
      <h1>Was the majority vote on the impostor?</h1>
      <p>Impostor, you can now reveal yourself!</p>
      <div>
        <button onClick={majorityVoteWasNotImposter}>No</button>
      </div>
      <div>
        <button onClick={majorityVoteWasImposter}>Yes</button>
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

export default AskWasMajorityVoteImpostor
