import React from 'react'
import type { NumberOfPlayers } from '../ValidPlayers'
import { MIN_PLAYERS, isNumberOfPlayers } from '../ValidPlayers'
import HowToPlayButton from './Pieces/HowToPlayButton'

type Props = {
  play: () => void
  openHowToPlay: (e: React.MouseEvent<HTMLButtonElement>) => void
  numPlayers: NumberOfPlayers
  setNumPlayers: React.Dispatch<React.SetStateAction<NumberOfPlayers>>
}

const Initial = ({ play, openHowToPlay, numPlayers, setNumPlayers }: Props) => {
  const playersInputId = React.useId()
  const [playersInputValue, setPlayersInputValue] = React.useState<string>(
    String(numPlayers),
  )

  // To allow any numbers to be typed in the input, separate the input value
  // from the numPlayers state. Use string for better user experience.
  const handlePlayersChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setPlayersInputValue(e.currentTarget.value)
    const n: number = Number(e.currentTarget.value)
    if (isNumberOfPlayers(n)) {
      setNumPlayers(n)
    }
  }

  const handlePlayButton = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    // Only play if number is valid (player number values are in sync)
    numPlayers === Number(playersInputValue) && play()
  }

  return (
    <>
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-8">
        Guess The Impostor
      </h1>
      <label htmlFor="players" className="text-2xl">
        How many players?
      </label>
      <div>
        <input
          id={playersInputId}
          name="players"
          type="number"
          value={playersInputValue}
          onChange={handlePlayersChange}
          min={MIN_PLAYERS}
          max="99"
          className="input validator w-24 text-3xl"
          required
        />
        <p className="validator-hint">Must be at least 3</p>
      </div>
      <button onClick={handlePlayButton} className="btn btn-primary btn-xl">
        Play
      </button>
      <HowToPlayButton openHowToPlay={openHowToPlay} />
    </>
  )
}

export default Initial
