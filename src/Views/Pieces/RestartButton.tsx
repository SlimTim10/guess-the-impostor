import React from 'react'

type Props = {
  openConfirmRestart: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const RestartButton = ({ openConfirmRestart }: Props): React.ReactElement => {
  return (
    <button
      onClick={openConfirmRestart}
      className="btn btn-secondary btn-xs absolute top-0 left-0 m-2"
    >
      Restart
    </button>
  )
}

export default RestartButton
