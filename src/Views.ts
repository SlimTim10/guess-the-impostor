export type View =
  | 'initial'
  | 'confirm-restart'
  | 'show-role'
  | 'showing-role'
  | 'done-showing-role'
  | 'pass-to-next-player'
  | 'say-a-word'
  | 'voting'
  | 'ask-was-majority-vote-impostor'
  | 'impostor-guessing'
  | 'impostor-wins'
  | 'keepers-win'

const assertUnreachable = (_x: never): void => {
  console.log('assertUnreachable')
}

export const isView = (str: string): str is View => {
  const maybeView: View = str as View
  switch (maybeView) {
    case 'initial':
    case 'confirm-restart':
    case 'show-role':
    case 'showing-role':
    case 'done-showing-role':
    case 'pass-to-next-player':
    case 'say-a-word':
    case 'voting':
    case 'ask-was-majority-vote-impostor':
    case 'impostor-guessing':
    case 'impostor-wins':
    case 'keepers-win':
      return true
  }

  // assure exhaustiveness of the switch/case
  assertUnreachable(maybeView)

  return false
}
