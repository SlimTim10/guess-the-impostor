export const ROUND_LIMIT: number = 3

export type Round = number & { readonly __type: unique symbol }
export const isRound = (x: number): x is Round => x > 0 && x <= ROUND_LIMIT
