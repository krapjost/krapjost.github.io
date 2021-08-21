package kata

func Maps(x []int) (res []int) {
  for _, v := range x {
    res = append(res, v*2)
  }
  return
}

