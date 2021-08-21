package kata

import (
  "math"
)

func MakeNegative(x int) int {
  num := math.Signbit(float64(x))
  if num {
    return x
  }
  return -x
}
