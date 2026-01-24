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
        <h3 className="font-bold text-xl">Are you sure you want to restart?</h3>
        <div className="modal-action flex gap-x-2">
          <button onClick={handleNo} className="btn btn-neutral btn-lg">
            No
          </button>
          <button onClick={handleYes} className="btn btn-neutral btn-lg">
            Yes
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={handleNo}>close</button>
      </form>
    </dialog>
  )
}

export default ConfirmRestart
