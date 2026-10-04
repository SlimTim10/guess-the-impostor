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
    const widthTimeoutId: number = setTimeout(() => {
      setWidth('0px')
    }, 10)

    const timeUpTimeoutId: number = setTimeout(() => {
      onTimeUp()
    }, totalTime)

    return () => {
      clearTimeout(widthTimeoutId)
      clearTimeout(timeUpTimeoutId)
    }
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
