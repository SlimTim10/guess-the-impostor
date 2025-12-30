import React from 'react'

type Props = {
  ref: React.RefObject<HTMLDialogElement | null>
  restart: () => void
}

const ConfirmRestart = ({ ref, restart }: Props) => {
  const handleNo = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    ref.current?.close()
  }

  const handleYes = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    restart()
  }

  return (
    <dialog closedby="any" ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Are you sure you want to restart?</h3>
        <div className="modal-action flex gap-x-2">
          <button onClick={handleNo} className="btn">
            No
          </button>
          <button onClick={handleYes} className="btn">
            Yes
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default ConfirmRestart
