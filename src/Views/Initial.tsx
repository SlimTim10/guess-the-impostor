import React from 'react'
import type { NumberOfPlayers } from '../ValidPlayers'
import { MIN_PLAYERS, isNumberOfPlayers } from '../ValidPlayers'

type Props = {
  play: () => void
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  numPlayers: NumberOfPlayers
  setNumPlayers: React.Dispatch<React.SetStateAction<NumberOfPlayers>>
}

const Initial = ({ play, openHowToPlay, numPlayers, setNumPlayers }: Props) => {
  const playersInputId = React.useId()

  const handlePlayersChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const n: number = Number(e.currentTarget.value)
    if (isNumberOfPlayers(n)) {
      setNumPlayers(n)
    }
  }

  const handlePlayButton = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    play()
  }

  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
        Guess The Impostor
      </h1>
      <label htmlFor="players" className="text-lg">
        How many players?
      </label>
      <input
        id={playersInputId}
        name="players"
        type="number"
        value={numPlayers}
        onChange={handlePlayersChange}
        min={MIN_PLAYERS}
        max="99"
      />
      <button onClick={handlePlayButton} className="btn btn-primary">
        Play
      </button>
      <button onClick={openHowToPlay} className="btn btn-secondary">
        How to play
      </button>
    </>
  )
}

export default Initial
