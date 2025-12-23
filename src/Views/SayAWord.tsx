import React from 'react'
import type { Game } from '../Game'
import type { Round } from '../Rounds'

type Props = {
  game: Game
  round: Round
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
  doneSayingWords: () => void
}

const SayAWord = ({
  game,
  round,
  openHowToPlay,
  openConfirmRestart,
  doneSayingWords,
}: Props): React.ReactElement => {
  console.log(game) // dummy usage
  console.log(round) // dummy usage
  return (
    <>
      <h1>Say a word</h1>
      <div>
        <button onClick={doneSayingWords}>Everyone said a word</button>
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
