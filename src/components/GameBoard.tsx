import { GAME_BOARD_HEIGHT } from '@/constants/measures'

export const GameBoard = () => {
  return <div className={`h-${GAME_BOARD_HEIGHT} w-screen bg-black`}></div>
}
