import { playerProperties } from '@/components/Player'

export type YPosition =
  (typeof playerProperties.yPosition)[keyof typeof playerProperties.yPosition]
