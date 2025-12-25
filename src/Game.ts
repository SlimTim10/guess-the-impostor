import type { NumberOfPlayers, ValidPlayers } from './ValidPlayers'
import {
  createPlayers,
  isValidPlayers,
  randomizeValidPlayers,
} from './ValidPlayers'
import type { SecretWord } from './Words'
import {
  generateRandomSecretWord,
  generateNewSecretWord,
  isSecretWord,
} from './Words'

export type Game = {
  players: ValidPlayers
  secretWord: SecretWord
}

// For runtime decoding of the Game object (e.g., from JSON)
export const isGameOrNull = (g: object | null): g is Game | null => {
  return (
    g === null ||
    ('players' in g &&
      Array.isArray(g['players']) &&
      isValidPlayers(g['players']) &&
      'secretWord' in g &&
      typeof g.secretWord === 'string' &&
      isSecretWord(g.secretWord))
  )
}

export const startGame = (x: NumberOfPlayers): Game => ({
  players: createPlayers(x),
  secretWord: generateRandomSecretWord(),
})

export const playAgain = (g: Game): Game => ({
  players: randomizeValidPlayers(g.players),
  secretWord: generateNewSecretWord(g.secretWord),
})
