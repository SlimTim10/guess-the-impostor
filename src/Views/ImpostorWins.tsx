import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  playAgain: () => void
}

const ImpostorWins = ({
  game,
  openHowToPlay,
  playAgain,
}: Props): React.ReactElement => {
  return (
    <>
      <h1>Impostor wins!</h1>
      <p>The secret word was: {game.secretWord}</p>
      <div>
        <button onClick={playAgain}>Play again</button>
      </div>
      <div>
        <button onClick={openHowToPlay}>How to play</button>
      </div>
    </>
  )
}

export default ImpostorWins
