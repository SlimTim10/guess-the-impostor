import React from 'react'

type Props = {
  barWidth: string
  barHeight?: string
  barColor?: string
  borderRadius?: string
  totalTime: number
  onTimeUp: () => void
  className?: string
}

function TimeLeftBar({
  barWidth,
  barHeight,
  barColor,
  borderRadius,
  totalTime,
  onTimeUp,
  className = '',
}: Props) {
  const [width, setWidth] = React.useState<string>(barWidth)

  React.useEffect(() => {
    // Trigger the transition
    setTimeout(() => {
      setWidth('0px')
    }, 10)

    setTimeout(() => {
      onTimeUp()
    }, totalTime)
  }, [])

  const progressBarStyle = {
    width,
    backgroundColor: barColor,
    height: barHeight,
    borderRadius,
    transition: `width ${totalTime}ms linear`,
  }

  return <div className={className} style={progressBarStyle}></div>
}

export default TimeLeftBar
