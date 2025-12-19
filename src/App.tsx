import { useEffect, useState } from 'react'
import './App.css'
/* import type { Game } from './Game'
 * import type { PlayerRole } from './PlayerRoles'
 * import type { Round } from './Rounds'
 * import { isRound } from './Rounds'
 * import type { ValidPlayers } from './ValidPlayers'
 * import { isValidPlayers } from './ValidPlayers' */
import type { View } from './Views'
/* import type { SecretWord } from './Words'
 * import { generateRandomSecretWord } from './Words' */
import Initial from './Views/Initial'

const App = () => {
  const [view, setView] = useState<View>('initial')

  // Testing views
  useEffect(() => {
    setView('show-role')
  }, [])

  switch (view) {
    case 'initial':
      return <Initial />
      break;
    default:
      throw 'Error: invalid view'
  }
}

export default App
