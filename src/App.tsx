import { useEffect, useState } from 'react'
import './App.css'
import type { Game } from './Game'
import { startGame } from './Game'
import type { Round } from './Rounds'
import type { NumberOfPlayers } from './ValidPlayers'
import type { View } from './Views'
import AskWasMajorityVoteImpostor from './Views/AskWasMajorityVoteImpostor'
import ConfirmRestart from './Views/ConfirmRestart'
import DoneShowingRole from './Views/DoneShowingRole'
import HowToPlay from './Views/HowToPlay'
import ImpostorGuessing from './Views/ImpostorGuessing'
import ImpostorWins from './Views/ImpostorWins'
import Initial from './Views/Initial'
import KeepersWin from './Views/KeepersWin'
import PassToNextPlayer from './Views/PassToNextPlayer'
import SayAWord from './Views/SayAWord'
import ShowRole from './Views/ShowRole'
import ShowingRole from './Views/ShowingRole'
import Voting from './Views/Voting'

const App = () => {
  const [view, setView] = useState<View>('initial')

  const game: Game = startGame(3 as NumberOfPlayers)
  const round: Round = 1 as Round

  // Testing views
  useEffect(() => {
    setView('keepers-win')
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
      return <ShowRole game={game} playerTurn={1} />
      break;
    case 'showing-role':
      return <ShowingRole game={game} playerTurn={1} />
      break;
    case 'done-showing-role':
      return <DoneShowingRole game={game} playerTurn={1} />
      break;
    case 'pass-to-next-player':
      return <PassToNextPlayer game={game} playerTurn={1} />
      break;
    case 'say-a-word':
      return <SayAWord game={game} round={round} />
      break;
    case 'voting':
      return <Voting game={game} round={round} />
      break;
    case 'ask-was-majority-vote-impostor':
      return <AskWasMajorityVoteImpostor game={game} />
      break;
    case 'impostor-guessing':
      return <ImpostorGuessing game={game} />
      break;
    case 'impostor-wins':
      return <ImpostorWins game={game} />
      break;
    case 'keepers-win':
      return <KeepersWin game={game} />
      break;
    default:
      throw 'Error: invalid view'
  }
}

export default App
