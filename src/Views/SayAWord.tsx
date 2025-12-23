import React from 'react'

type Props = {
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
  doneSayingWords: () => void
  impostorSaidSecretWord: () => void
}

const SayAWord = ({
  openHowToPlay,
  openConfirmRestart,
  doneSayingWords,
  impostorSaidSecretWord,
}: Props): React.ReactElement => {
  return (
    <>
      <h1>Say a word</h1>
      <div>
        <button onClick={doneSayingWords}>Everyone said a word</button>
      </div>
      <div>
        <button onClick={impostorSaidSecretWord}>
          Impostor said the secret word!
        </button>
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

export default SayAWord
