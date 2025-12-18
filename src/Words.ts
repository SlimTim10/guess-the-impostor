import { randomElem } from 'fp-ts/Random'
import type { ReadonlyNonEmptyArray } from 'fp-ts/ReadonlyNonEmptyArray'

export type SecretWord = string & { readonly __type: unique symbol }

export const wordlist: ReadonlyNonEmptyArray<SecretWord> = [
  'apple',
  'banana',
] as unknown as ReadonlyNonEmptyArray<SecretWord>

export const generateRandomSecretWord = (): SecretWord => randomElem(wordlist)()

export const generateNewSecretWord = (w: SecretWord): SecretWord => {
  const newWord = generateRandomSecretWord()
  if (newWord === w) {
    return generateNewSecretWord(w)
  } else {
    return newWord
  }
}
