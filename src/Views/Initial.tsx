import React from 'react'
import type { NumberOfPlayers } from '../ValidPlayers'
import { MIN_PLAYERS, isNumberOfPlayers } from '../ValidPlayers'

type Props = {
  play: (x: NumberOfPlayers) => void;
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Initial = ({ play, openHowToPlay }: Props) => {
  const playersInputId = React.useId()
  const [numPlayers, setNumPlayers] =
    React.useState<NumberOfPlayers>(MIN_PLAYERS as NumberOfPlayers)

  const handlePlayersChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const n: number = Number(e.currentTarget.value)
    if (isNumberOfPlayers(n)) {
      setNumPlayers(n)
    }
  }

  const handlePlayButton = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    play(numPlayers)
  }

  return (
    <>
      <h1>Guess the Impostor</h1>
      <p>
        <label htmlFor="players">How many players?</label>
      </p>
      <p>
        <input
          id={playersInputId}
          name="players"
          type="number"
          value={numPlayers}
          onChange={handlePlayersChange}
          min={MIN_PLAYERS}
          max="99" />
      </p>
      <div>
        <button onClick={handlePlayButton}>Play</button>
      </div>
      <div>
        <button onClick={openHowToPlay}>How to play</button>
      </div>
    </>
  )
}

export default Initial
