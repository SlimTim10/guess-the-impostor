import React from 'react'
import type { Game } from '../Game'

type Props = {
  game: Game;
  playerTurn: number;
}

const DoneShowingRole = ({ game, playerTurn }: Props): React.ReactElement => {
  return (
    <>
      <h1>Player {playerTurn} of {game.players.length}</h1>
      <h1>Don't let anyone else see the screen!</h1>
    </>
  )
}

export default DoneShowingRole
