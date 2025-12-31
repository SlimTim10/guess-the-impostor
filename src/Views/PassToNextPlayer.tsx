import React from 'react'
import TimeLeftBar from '../TimeLeftBar'

type Props = {
  passToNextPlayerDone: () => void
}

const SECONDS_TO_PASS_TO_NEXT_PLAYER: number = 3

const PassToNextPlayer = ({
  passToNextPlayerDone,
}: Props): React.ReactElement => {
  return (
    <>
      <p className="text-lg text-primary">Pass to the next player</p>
      <TimeLeftBar
        barWidth="100vw"
        className="absolute bottom-0 left-0 h-8 bg-primary"
        totalTime={SECONDS_TO_PASS_TO_NEXT_PLAYER * 1000}
        onTimeUp={passToNextPlayerDone}
      />
    </>
  )
}

export default PassToNextPlayer
