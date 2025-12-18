export type PlayerRole = 'imposter' | 'keeper'

export const isImposter = (p: PlayerRole): p is 'imposter' => p === 'imposter'
export const isKeeper = (p: PlayerRole): p is 'keeper' => p === 'keeper'
