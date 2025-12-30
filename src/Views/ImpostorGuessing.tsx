import React from 'react'
import HowToPlayButton from './Pieces/HowToPlayButton'
import RestartButton from './Pieces/RestartButton'

type Props = {
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
  impostorGuessedRight: () => void
  impostorGuessedWrong: () => void
}

const ImpostorGuessing = ({
  openHowToPlay,
  openConfirmRestart,
  impostorGuessedRight,
  impostorGuessedWrong,
}: Props): React.ReactElement => {
  return (
    <>
      <p className="text-lg">
        The impostor has one chance to guess the secret word
      </p>
      <button onClick={impostorGuessedWrong} className="btn btn-error">
        Guessed wrong
      </button>
      <button onClick={impostorGuessedRight} className="btn btn-success">
        Guessed right
      </button>
      <HowToPlayButton openHowToPlay={openHowToPlay} />
      <RestartButton openConfirmRestart={openConfirmRestart} />
    </>
  )
}

export default ImpostorGuessing
