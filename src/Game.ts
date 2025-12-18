import type { ValidPlayers } from './ValidPlayers'
import type { SecretWord } from './Words'

export type Game = {
  players: ValidPlayers;
  secretWord: SecretWord;
}
