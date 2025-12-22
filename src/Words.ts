import * as R from 'fp-ts/Random'
import type RNEA from 'fp-ts/ReadonlyNonEmptyArray'

export type SecretWord = string & { readonly __type: unique symbol }

export const wordlist: RNEA.ReadonlyNonEmptyArray<SecretWord> = [
  'apple',
  'banana',
] as unknown as RNEA.ReadonlyNonEmptyArray<SecretWord>

export const generateRandomSecretWord = (): SecretWord =>
  R.randomElem(wordlist)()

export const generateNewSecretWord = (w: SecretWord): SecretWord => {
  const newWord = generateRandomSecretWord()
  if (newWord === w) {
    return generateNewSecretWord(w)
  } else {
    return newWord
  }
}
