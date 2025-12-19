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
import ConfirmRestart from './Views/ConfirmRestart'
import Initial from './Views/Initial'

const App = () => {
  const [view, setView] = useState<View>('initial')

  // Testing views
  useEffect(() => {
    setView('confirm-restart')
  }, [])

  switch (view) {
    case 'initial':
      return <Initial />
      break;
    case 'confirm-restart':
      return <ConfirmRestart />
      break;
    case 'how-to-play':
      throw 'Not yet implemented'
      break;
    case 'show-role':
      throw 'Not yet implemented'
      break;
    case 'showing-role':
      throw 'Not yet implemented'
      break;
    case 'done-showing-role':
      throw 'Not yet implemented'
      break;
    case 'pass-to-next-player':
      throw 'Not yet implemented'
      break;
    case 'say-a-word':
      throw 'Not yet implemented'
      break;
    case 'voting':
      throw 'Not yet implemented'
      break;
    case 'ask-was-majority-vote-impostor':
      throw 'Not yet implemented'
      break;
    case 'impostor-guessing':
      throw 'Not yet implemented'
      break;
    case 'impostor-wins':
      throw 'Not yet implemented'
      break;
    case 'keepers-win':
      throw 'Not yet implemented'
      break;
    default:
      throw 'Error: invalid view'
  }
}

export default App
