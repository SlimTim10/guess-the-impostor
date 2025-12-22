import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as A from 'fp-ts/Array'
import * as R from 'fp-ts/Random'
import type { PlayerRole } from './PlayerRoles'
import { isImpostor, isKeeper } from './PlayerRoles'

export const MIN_PLAYERS: number = 3

export type NumberOfPlayers = number & { readonly __type: unique symbol }
export const isNumberOfPlayers = (n: number): n is NumberOfPlayers =>
  n >= MIN_PLAYERS

export type ValidPlayers = Array<PlayerRole> & {
  readonly __type: unique symbol
}
export const isValidPlayers = (p: Array<PlayerRole>): p is ValidPlayers =>
  isNumberOfPlayers(p.length) &&
  A.filter(isImpostor)(p).length === 1 &&
  A.filter(isKeeper)(p).length === p.length - 1

export const createPlayers = (n: NumberOfPlayers): ValidPlayers => {
  const keepers: Array<PlayerRole> = A.replicate(n, 'keeper')
  const i: number = R.randomInt(0, keepers.length - 1)()
  return pipe(
    A.updateAt(i, 'impostor' as PlayerRole)(keepers),
    O.match(
      () => {
        throw 'Error: createPlayers updateAt'
      },
      (xs) => {
        if (isValidPlayers(xs)) {
          return xs
        } else {
          throw 'Error: createPlayers invalid'
        }
      },
    ),
  )
}

export const randomizeValidPlayers = (xs: ValidPlayers): ValidPlayers => {
  return createPlayers(xs.length as NumberOfPlayers)
}
