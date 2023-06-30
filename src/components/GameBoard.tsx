/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { GAME_BOARD_HEIGHT, GAME_BOARD_WIDTH } from '@/constants/measures'

import { Player, playerProperties } from './Player'

export const GameBoard = () => {
  return (
    <div
      className={`relative  w-${GAME_BOARD_WIDTH} h-${GAME_BOARD_HEIGHT} flex bg-black`}
    >
      <Player yPosition={playerProperties.yPosition.top} />
      <Player yPosition={playerProperties.yPosition.bottom} />
    </div>
  )
}
