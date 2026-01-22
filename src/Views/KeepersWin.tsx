import React from 'react'
import type { Game } from '../Game'
import HowToPlayButton from './Pieces/HowToPlayButton'

type Props = {
  game: Game
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  playAgain: () => void
}

const KeepersWin = ({
  game,
  openHowToPlay,
  playAgain,
}: Props): React.ReactElement => {
  return (
    <>
      <p className="text-3xl text-success text-center">Keepers win!</p>
      <p className="text-2xl text-neutral-content bg-neutral p-2 text-center rounded-field">
        The secret word was:{' '}
        <span className="font-bold">{game.secretWord}</span>
      </p>
      <button onClick={playAgain} className="btn btn-primary btn-xl btn-block">
        Play again
      </button>
      <HowToPlayButton openHowToPlay={openHowToPlay} />
    </>
  )
}

export default KeepersWin
