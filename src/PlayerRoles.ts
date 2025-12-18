export type PlayerRole = 'impostor' | 'keeper'

export const isImpostor = (p: PlayerRole): p is 'impostor' => p === 'impostor'
export const isKeeper = (p: PlayerRole): p is 'keeper' => p === 'keeper'
