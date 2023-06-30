/* eslint-disable tailwindcss/no-custom-classname */
import { PLAYER_HEIGHT, PLAYER_WIDTH } from '@/constants/measures'

export const Player = () => {
  return (
    <div
      className={`h-[${PLAYER_HEIGHT}] w-[${PLAYER_WIDTH}] bg-gray-500`}
    ></div>
  )
}
