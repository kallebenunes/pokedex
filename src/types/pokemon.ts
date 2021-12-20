interface Pokemon {
  avg_spawns: number
  candy: string
  egg: string
  height: string
  id: number
  img: string
  multipliers: number | null
  name: string
  num: string
  prev_evolution: any[]
  spawn_chance: number
  spawn_time: string
  type: string[]
  weaknesses: string[]
  weight: string
}

export type { Pokemon }