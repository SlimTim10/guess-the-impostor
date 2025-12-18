import { randomElem } from 'fp-ts/Random'
import type { ReadonlyNonEmptyArray } from 'fp-ts/ReadonlyNonEmptyArray'

export const wordlist: ReadonlyNonEmptyArray<string> = [
  'apple',
  'banana',
]

export const generateRandomSecretWord = (): string => randomElem(wordlist)()

export const generateNewSecretWord = (w: string): string => {
  const newWord = generateRandomSecretWord()
  if (newWord === w) {
    return generateNewSecretWord(w)
  } else {
    return newWord
  }
}
