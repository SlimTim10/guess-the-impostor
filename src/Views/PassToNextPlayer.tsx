import React from 'react'

type Props = {
  passToNextPlayerDone: () => void
}

const SECONDS_TO_PASS_TO_NEXT_PLAYER: number = 5

const PassToNextPlayer = ({
  passToNextPlayerDone,
}: Props): React.ReactElement => {
  const [timeLeft, setTimeLeft] = React.useState<number>(
    SECONDS_TO_PASS_TO_NEXT_PLAYER,
  )

  React.useEffect(() => {
    const countdownId: number = setInterval(() => {
      setTimeLeft((x) => {
        if (x - 1 >= 0) {
          return x - 1
        } else {
          clearInterval(countdownId)
          return x
        }
      })
    }, 1000)

    const cleanup = (): void => {
      clearInterval(countdownId)
    }

    return cleanup
  }, [])

  React.useEffect(() => {
    if (timeLeft === 0) {
      passToNextPlayerDone()
    }
  }, [timeLeft])

  return (
    <>
      <h1>Pass to the next player</h1>
      <p>Time left: {timeLeft}</p>
    </>
  )
}

export default PassToNextPlayer
