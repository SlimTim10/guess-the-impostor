import React from 'react'
import type { Round } from '../Rounds'
import { ROUND_LIMIT } from '../Rounds'
import HowToPlayButton from './Pieces/HowToPlayButton'
import RestartButton from './Pieces/RestartButton'

type Props = {
  round: Round
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
  doneSayingWords: () => void
  impostorSaidSecretWord: () => void
}

const SayAWord = ({
  round,
  openHowToPlay,
  openConfirmRestart,
  doneSayingWords,
  impostorSaidSecretWord,
}: Props): React.ReactElement => {
  return (
    <>
      <h2 className="text-lg text-primary">
        Round {round} of {ROUND_LIMIT}
      </h2>
      <p className="text-lg">
        Starting with the first player, everyone take a turn to say a word that
        has something to do with the secret word.
      </p>
      <p className="text-sm">(But don&#8217;t make it too obvious!)</p>
      <button onClick={doneSayingWords} className="btn btn-primary">
        Everyone said a word
      </button>
      <button
        onClick={impostorSaidSecretWord}
        className="btn btn-primary btn-soft btn-sm"
      >
        The impostor said the secret word!
      </button>
      <HowToPlayButton openHowToPlay={openHowToPlay} />
      <RestartButton openConfirmRestart={openConfirmRestart} />
    </>
  )
}

export default SayAWord
