import React from 'react'

type Props = {
  ref: React.RefObject<HTMLDialogElement | null>
}

const ConfirmRestart = ({ ref }: Props) => {
  const handleNo = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    ref.current?.close()
  }

  const handleYes = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('handleYes')
  }

  return (
    <dialog closedby="any" ref={ref}>
      <h1>Are you sure you want to restart?</h1>
      <button onClick={handleNo}>No</button>
      <button onClick={handleYes}>Yes</button>
    </dialog>
  )
}

export default ConfirmRestart
