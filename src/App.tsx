import React from 'react'
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
  const [view, setView] = React.useState<View>('initial')
  const [playerTurn, setPlayerTurn] = React.useState<number>(1)
  const [game, setGame] = React.useState<Game | null>(null)

  const round: Round = 1 as Round

  const handlePlay = (numPlayers: NumberOfPlayers): void => {
    setView('show-role')
    setPlayerTurn(1)
    setGame(startGame(numPlayers))
  }

  switch (view) {
    case 'initial':
      return <Initial handlePlay={handlePlay} />
      break;
    case 'confirm-restart':
      return <ConfirmRestart />
      break;
    case 'how-to-play':
      return <HowToPlay />
      break;
    case 'show-role':
      return (game !== null) && <ShowRole game={game} playerTurn={playerTurn} />
      break;
    case 'showing-role':
      return (game !== null) && <ShowingRole game={game} playerTurn={playerTurn} />
      break;
    case 'done-showing-role':
      return (game !== null) && <DoneShowingRole game={game} playerTurn={playerTurn} />
      break;
    case 'pass-to-next-player':
      return (game !== null) && <PassToNextPlayer game={game} playerTurn={playerTurn} />
      break;
    case 'say-a-word':
      return (game !== null) && <SayAWord game={game} round={round} />
      break;
    case 'voting':
      return (game !== null) && <Voting game={game} round={round} />
      break;
    case 'ask-was-majority-vote-impostor':
      return (game !== null) && <AskWasMajorityVoteImpostor game={game} />
      break;
    case 'impostor-guessing':
      return (game !== null) && <ImpostorGuessing game={game} />
      break;
    case 'impostor-wins':
      return (game !== null) && <ImpostorWins game={game} />
      break;
    case 'keepers-win':
      return (game !== null) && <KeepersWin game={game} />
      break;
    default:
      throw view satisfies never;
  }
}

export default App
