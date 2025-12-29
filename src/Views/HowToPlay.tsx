import React from 'react'

type Props = {
  ref: React.RefObject<HTMLDialogElement | null>
}

const HowToPlay = ({ ref }: Props) => {
  const handleClose = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    ref.current?.close()
  }

  return (
    <dialog closedby="any" ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">How to play</h3>
        <p className="py-4">
          This is an <strong>in-person</strong>, <strong>one phone</strong> game
          for 3 or more players. Be ready to pass the phone around!
          <br />
          <br />
          When the game starts, a secret word is created. Each player will be
          privately shown the word except for the impostor. Keepers know the
          secret word, the impostor doesn't. At the start of each round, the
          players take turns saying a word that is similar to the secret word.
          The impostor tries to do the same thing, even though they don't know
          the secret word. After all the players have said a word, everyone
          votes on who they think the impostor is. If the majority vote is on
          the impostor, the impostor gets one chance to guess the secret word
          and win, otherwise the keepers win! If the majority vote is on a
          keeper, the impostor wins! If there is no majority vote, the next
          round starts. There is a limit of 3 rounds. Another way for the
          impostor to win is to say the secret word when it's their turn to say
          a word.
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button onClick={handleClose} className="btn">
              Close
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={handleClose}>close</button>
      </form>
    </dialog>
  )
}

export default HowToPlay
