import { filter } from 'fp-ts/Array'
import type { PlayerRole } from './PlayerRoles'
import { isImposter, isKeeper } from './PlayerRoles'

export type ValidPlayers = Array<PlayerRole> & { readonly __type: unique symbol }

export const isValidPlayers = (p: Array<PlayerRole>): p is ValidPlayers => (
  p.length >= 3 &&
    filter(isImposter)(p).length === 1 &&
    filter(isKeeper)(p).length === p.length - 1
)
