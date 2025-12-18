import type { NumberAtLeast3, ValidPlayers } from './ValidPlayers'
import { createPlayers } from './ValidPlayers'
import type { SecretWord } from './Words'
import { generateRandomSecretWord } from './Words'

export type Game = {
  players: ValidPlayers;
  secretWord: SecretWord;
}

export const startGame = (x: NumberAtLeast3): Game => {
  return {
    players: createPlayers(x),
    secretWord: generateRandomSecretWord(),
  }
}
