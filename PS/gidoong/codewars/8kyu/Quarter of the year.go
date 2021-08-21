package kata

func QuarterOf1(month int) (res int) {
  switch month {
    case 1, 2, 3 : res=1
    case 4, 5, 6 : res=2
    case 7, 8, 9 : res=3
    case 10,11,12: res=4
  }
  return
}

func QuarterOf2(month int) int {
  if month <= 3 {
    return 1
  }
  if month <= 6 && month > 3 {
    return 2
  }
  if month <= 9 && month > 6 {
    return 3
  }
  if month <= 12 && month > 9 {
    return 4
  }
  return 0
}
