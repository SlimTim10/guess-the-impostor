import React from 'react'

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

export default ImpostorGuessing
