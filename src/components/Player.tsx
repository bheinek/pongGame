/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { YPosition } from '@/constants/types'

type Props = {
  yPosition: YPosition
}

export const Player = ({ yPosition }: Props) => {
  const playerYPosition =
    yPosition === playerProperties.yPosition.top
      ? playerProperties.yPosition.top
      : playerProperties.yPosition.bottom

  return (
    <div
      className={`absolute ${playerYPosition} h-[${playerProperties.height}] w-[${playerProperties.width}] bg-gray-500`}
    ></div>
  )
}

export const playerProperties = {
  height: '3%',
  width: '20%',
  yPosition: { top: 'top-0', bottom: 'bottom-0' },
  xPosition: 10,
}
