import type { NumberAtLeast3, ValidPlayers } from './ValidPlayers'
import { createPlayers, randomizeValidPlayers } from './ValidPlayers'
import type { SecretWord } from './Words'
import { generateRandomSecretWord, generateNewSecretWord } from './Words'

export type Game = {
  players: ValidPlayers;
  secretWord: SecretWord;
}

export const startGame = (x: NumberAtLeast3): Game => ({
  players: createPlayers(x),
  secretWord: generateRandomSecretWord(),
})

export const playAgain = (g: Game): Game => ({
  players: randomizeValidPlayers(g.players),
  secretWord: generateNewSecretWord(g.secretWord),
})
