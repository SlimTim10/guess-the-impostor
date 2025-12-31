import * as R from 'fp-ts/Random'
import type RNEA from 'fp-ts/ReadonlyNonEmptyArray'
import rawWordlist from './wordlist.json'

// SecretWord is an inductive type (defined by its terms)

export const wordlist: RNEA.ReadonlyNonEmptyArray<SecretWord> =
  rawWordlist as unknown as RNEA.ReadonlyNonEmptyArray<SecretWord>

export type SecretWord = string & { readonly __type: unique symbol }
export const isSecretWord = (w: string): w is SecretWord =>
  wordlist.includes(w as SecretWord)

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
