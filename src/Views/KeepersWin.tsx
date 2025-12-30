import React from 'react'
import type { Game } from '../Game'

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
      <p className="text-lg">Keepers win!</p>
      <p className="text-neutral-content bg-neutral p-2 text-center rounded-field">
        The secret word was:{' '}
        <span className="font-bold">{game.secretWord}</span>
      </p>
      <button onClick={playAgain} className="btn btn-primary">
        Play again
      </button>
      <button
        onClick={openHowToPlay}
        className="btn btn-info btn-xs absolute top-0 right-0 m-2"
      >
        How to play
      </button>
    </>
  )
}

export default KeepersWin
