import React from 'react'
import * as R from 'fp-ts/Refinement'
import './App.css'
import type { Game } from './Game'
import { startGame, playAgain } from './Game'
import type { Round } from './Rounds'
import { isRound } from './Rounds'
import type { NumberOfPlayers } from './ValidPlayers'
import { isNumberOfPlayers } from './ValidPlayers'
import { MIN_PLAYERS } from './ValidPlayers'
import type { View } from './Views'
import { isView } from './Views'
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

const setItem = <T,>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getItem = <A, B extends A>(
  key: string,
  r: R.Refinement<A, B>,
): B | null => {
  const item = localStorage.getItem(key)
  if (item !== null) {
    try {
      const x: A = JSON.parse(item)
      if (r(x)) {
        return x
      }
    } catch (_) {}
  }
  return null
}

const App = () => {
  const [view, setView] = React.useState<View>(
    getItem<string, View>('view', isView) || 'initial',
  )
  const [playerTurn, setPlayerTurn] = React.useState<number>(1)
  const [game, setGame] = React.useState<Game | null>(null)
  const [numPlayers, setNumPlayers] = React.useState<NumberOfPlayers>(
    getItem<number, NumberOfPlayers>('numPlayers', isNumberOfPlayers) ||
      (MIN_PLAYERS as NumberOfPlayers),
  )
  const [round, setRound] = React.useState<Round>(1 as Round)

  const howToPlayRef = React.useRef<HTMLDialogElement>(null)
  const confirmRestartRef = React.useRef<HTMLDialogElement>(null)

  const openHowToPlay = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    howToPlayRef.current?.showModal()
  }

  const openConfirmRestart = (
    _e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    confirmRestartRef.current?.showModal()
  }

  const restart = (): void => {
    setView('initial')
  }

  const play = (): void => {
    setView('show-role')
    setPlayerTurn(1)
    setGame(startGame(numPlayers))
  }

  const startShowingRole = (): void => {
    setView('showing-role')
  }

  const doneShowingRole = (): void => {
    setView('done-showing-role')
  }

  const passToNextPlayer = (): void => {
    setView('pass-to-next-player')
    setPlayerTurn((x) => x + 1)
  }

  const lastPlayerSawRole = (): void => {
    setView('say-a-word')
  }

  const passToNextPlayerDone = (): void => {
    setView('show-role')
  }

  const doneSayingWords = (): void => {
    setView('voting')
  }

  const impostorSaidSecretWord = (): void => {
    setView('impostor-wins')
  }

  const noMajorityVote = (): void => {
    setRound((x) => {
      const nextRound: number = x + 1
      if (isRound(nextRound)) {
        setView('say-a-word')
        return nextRound
      } else {
        throw 'Error: bad round in noMajorityVote'
      }
    })
  }

  const yesMajorityVote = (): void => {
    setView('ask-was-majority-vote-impostor')
  }

  const majorityVoteWasNotImposter = (): void => {
    setView('impostor-wins')
  }

  const majorityVoteWasImposter = (): void => {
    setView('impostor-guessing')
  }

  const impostorGuessedRight = (): void => {
    setView('impostor-wins')
  }

  const impostorGuessedWrong = (): void => {
    setView('keepers-win')
  }

  const playAgainTrigger = (): void => {
    setGame((g) => {
      if (g !== null) {
        setView('show-role')
        setPlayerTurn(1)
        return playAgain(g)
      } else {
        throw 'Error: bad game in playAgainTrigger'
      }
    })
  }

  // Disable refresh
  // On load, fetch state from storage
  React.useEffect(() => {
    const x: View | null = getItem<string, View>('view', isView)
    if (x !== null) {
      setView(x)
    }
  }, [])

  // TODO: make a function to reduce repetition
  React.useEffect(() => {
    const x: NumberOfPlayers | null = getItem<number, NumberOfPlayers>(
      'numPlayers',
      isNumberOfPlayers,
    )
    if (x !== null) {
      setNumPlayers(x)
    }
  }, [])

  // Store state on change
  // TODO: repeat for each state
  React.useEffect(() => {
    setItem<View>('view', view)
  }, [view])

  React.useEffect(() => {
    setItem<NumberOfPlayers>('numPlayers', numPlayers)
  }, [numPlayers])

  const viewComponent: React.ReactElement =
    view === 'initial' ? (
      <Initial
        play={play}
        openHowToPlay={openHowToPlay}
        numPlayers={numPlayers}
        setNumPlayers={setNumPlayers}
      />
    ) : view === 'show-role' && game !== null ? (
      <ShowRole
        game={game}
        playerTurn={playerTurn}
        openHowToPlay={openHowToPlay}
        openConfirmRestart={openConfirmRestart}
        startShowingRole={startShowingRole}
      />
    ) : view === 'showing-role' && game !== null ? (
      <ShowingRole
        game={game}
        playerTurn={playerTurn}
        doneShowingRole={doneShowingRole}
      />
    ) : view === 'done-showing-role' && game !== null ? (
      <DoneShowingRole
        game={game}
        playerTurn={playerTurn}
        openHowToPlay={openHowToPlay}
        openConfirmRestart={openConfirmRestart}
        startShowingRole={startShowingRole}
        passToNextPlayer={passToNextPlayer}
        lastPlayerSawRole={lastPlayerSawRole}
      />
    ) : view === 'pass-to-next-player' && game !== null ? (
      <PassToNextPlayer passToNextPlayerDone={passToNextPlayerDone} />
    ) : view === 'say-a-word' && game !== null ? (
      <SayAWord
        openHowToPlay={openHowToPlay}
        openConfirmRestart={openConfirmRestart}
        doneSayingWords={doneSayingWords}
        impostorSaidSecretWord={impostorSaidSecretWord}
      />
    ) : view === 'voting' && game !== null ? (
      <Voting
        round={round}
        openHowToPlay={openHowToPlay}
        openConfirmRestart={openConfirmRestart}
        noMajorityVote={noMajorityVote}
        yesMajorityVote={yesMajorityVote}
      />
    ) : view === 'ask-was-majority-vote-impostor' && game !== null ? (
      <AskWasMajorityVoteImpostor
        openHowToPlay={openHowToPlay}
        openConfirmRestart={openConfirmRestart}
        majorityVoteWasNotImposter={majorityVoteWasNotImposter}
        majorityVoteWasImposter={majorityVoteWasImposter}
      />
    ) : view === 'impostor-guessing' && game !== null ? (
      <ImpostorGuessing
        openHowToPlay={openHowToPlay}
        openConfirmRestart={openConfirmRestart}
        impostorGuessedRight={impostorGuessedRight}
        impostorGuessedWrong={impostorGuessedWrong}
      />
    ) : view === 'impostor-wins' && game !== null ? (
      <ImpostorWins
        game={game}
        openHowToPlay={openHowToPlay}
        playAgain={playAgainTrigger}
      />
    ) : view === 'keepers-win' && game !== null ? (
      <KeepersWin
        game={game}
        openHowToPlay={openHowToPlay}
        playAgain={playAgainTrigger}
      />
    ) : (
      <></>
    )

  return (
    <>
      {viewComponent}
      {[
        'initial',
        'show-role',
        'done-showing-role',
        'say-a-word',
        'voting',
        'ask-was-majority-vote-impostor',
        'impostor-guessing',
        'impostor-wins',
        'keepers-win',
      ].includes(view) && <HowToPlay ref={howToPlayRef} />}
      {[
        'show-role',
        'done-showing-role',
        'say-a-word',
        'voting',
        'ask-was-majority-vote-impostor',
        'impostor-guessing',
      ].includes(view) && (
        <ConfirmRestart ref={confirmRestartRef} restart={restart} />
      )}
    </>
  )
}

export default App
