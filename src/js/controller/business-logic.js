const THIRD = 1 / 3

// Generate random (equiprobable) values {0, 1, 2}
// 0 -> Rock
// 1 -> Paper
// 2 -> Scissors
const play = () => {
  const v = Math.random()
  if (v < THIRD) return 0
  if (v < 2 * THIRD) return 1
  return 2
}

// Compare two choices return:
// - 2 if score draw
// - 0 if player 0 wins
// - 1 if player 1 wins
const compare = (p0, p1) => {
  if (p0 === p1) return [{ result: 2, choice: p0 }, { result: 2, choice: p1 }]
  if (
    (p1 === 1 && p0 === 0) ||
    (p1 === 2 && p0 === 1) ||
    (p1 === 0 && p0 === 2)
  )
    return [{ result: 0, choice: p0 }, { result: 1, choice: p1 }]
  return [{ result: 1, choice: p0 }, { result: 0, choice: p1 }]
}

const playAutoMode = () => compare(play(), play())

const playUserMode = p1 => compare(play(), p1)

export { playAutoMode, playUserMode, compare }
