import { useEffect, useState } from 'react'
import './App.css'
import type { Game } from './Game'
import { startGame } from './Game'
import type { NumberOfPlayers } from './ValidPlayers'
import type { View } from './Views'
/* import type { SecretWord } from './Words'
 * import { generateRandomSecretWord } from './Words' */
import ConfirmRestart from './Views/ConfirmRestart'
import DoneShowingRole from './Views/DoneShowingRole'
import HowToPlay from './Views/HowToPlay'
import Initial from './Views/Initial'
import ShowRole from './Views/ShowRole'
import ShowingRole from './Views/ShowingRole'

const App = () => {
  const [view, setView] = useState<View>('initial')

  const game: Game = startGame(3 as NumberOfPlayers)

  // Testing views
  useEffect(() => {
    setView('done-showing-role')
  }, [])

  switch (view) {
    case 'initial':
      return <Initial />
      break;
    case 'confirm-restart':
      return <ConfirmRestart />
      break;
    case 'how-to-play':
      return <HowToPlay />
      break;
    case 'show-role':
      return <ShowRole playerTurn={1} game={game} />
      break;
    case 'showing-role':
      return <ShowingRole playerTurn={1} game={game} />
      break;
    case 'done-showing-role':
      return <DoneShowingRole playerTurn={1} game={game} />
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
