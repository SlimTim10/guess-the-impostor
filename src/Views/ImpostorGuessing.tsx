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
      <h1>The impostor has one chance to guess the secret word</h1>
      <div>
        <button onClick={impostorGuessedWrong}>Guessed wrong</button>
      </div>
      <div>
        <button onClick={impostorGuessedRight}>Guessed right</button>
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

export default ImpostorGuessing
