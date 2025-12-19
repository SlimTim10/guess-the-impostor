import React from 'react'

const ConfirmRestart = () => {
  const handleNo = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('handleNo')
  }

  const handleYes = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('handleYes')
  }

  return (
    <>
      <h1>Are you sure you want to restart?</h1>
      <button onClick={handleNo}>
        No
      </button>
      <button onClick={handleYes}>
        Yes
      </button>
    </>
  )
}

export default ConfirmRestart
