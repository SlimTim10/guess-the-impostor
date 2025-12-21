import React from 'react'

type Props = {
  ref: React.RefObject<HTMLDialogElement | null>;
}

const HowToPlay = ({ ref }: Props) => {
  const handleClose = (_e: React.MouseEvent<HTMLButtonElement>): void => {
     ref.current?.close()
   }

  return (
    <dialog closedby="any" ref={ref}>
      <h1>How to play</h1>
      <p>
        This is an <b>in-person</b>, <b>one phone</b> game for 3 or more players. Be ready to pass the phone around! When the game starts, a secret word is created. Each player will be privately shown the word except for the impostor. Keepers know the secret word, the impostor doesn't. At the start of each round, the players take turns saying a word that is similar to the secret word. The impostor tries to do the same thing, even though they don't know the secret word. After all the players have said a word, everyone votes on who they think the impostor is. If the majority vote is on the impostor, the impostor gets one chance to guess the secret word and win, otherwise the keepers win! If the majority vote is on a keeper, the impostor wins! If there is no majority vote, the next round starts. There is a limit of 3 rounds. Another way for the impostor to win is to say the secret word when it's their turn to say a word.
      </p>
      <button onClick={handleClose}>Close</button>
    </dialog>
  )
}

export default HowToPlay
