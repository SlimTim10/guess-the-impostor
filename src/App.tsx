import React from 'react'
import * as Refinement from 'fp-ts/Refinement'
import { useStorageState } from './useStorageState'
import type { Game } from './Game'
import { isGameOrNull, playAgain, startGame } from './Game'
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

const App = () => {
  const [view, setView] = useStorageState<string, View>(
    'view',
    'initial',
    isView,
  )
  const [playerTurn, setPlayerTurn] = useStorageState<number, number>(
    'playerTurn',
    1,
    Refinement.id<number>(),
  )
  const [game, setGame] = useStorageState<object | null, Game | null>(
    'game',
    null,
    isGameOrNull,
  )
  const [numPlayers, setNumPlayers] = useStorageState<number, NumberOfPlayers>(
    'numPlayers',
    MIN_PLAYERS as NumberOfPlayers,
    isNumberOfPlayers,
  )
  const [round, setRound] = useStorageState<number, Round>(
    'round',
    1 as Round,
    isRound,
  )

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
    const r: number = 1
    if (isRound(r)) {
      setView('say-a-word')
      setRound(r)
    }
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

  const viewComponent: React.ReactElement | null =
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
        round={round}
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
    ) : null

  // Something went wrong. Restart.
  if (viewComponent === null) {
    restart()
  }

  return (
    <main className="h-screen w-screen m-0 flex flex-col place-items-center place-content-center gap-y-4 p-2">
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
    </main>
  )
}

export default App
