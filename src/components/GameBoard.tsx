/* eslint-disable tailwindcss/no-custom-classname */
import { GAME_BOARD_HEIGHT, GAME_BOARD_WIDTH } from '@/constants/measures'

import { Player } from './Player'

export const GameBoard = () => {
  return (
    <div className={` w-${GAME_BOARD_WIDTH} h-${GAME_BOARD_HEIGHT} bg-black`}>
      <Player />
    </div>
  )
}
