import React from 'react'

type Props = {
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const HowToPlayButton = ({ openHowToPlay }: Props): React.ReactElement => {
  return (
    <button
      onClick={openHowToPlay}
      className="btn btn-info btn-sm absolute top-0 right-0 m-2"
    >
      How to play
    </button>
  )
}

export default HowToPlayButton
