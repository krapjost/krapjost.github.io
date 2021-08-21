package kata

func SquareSum(numbers []int) (result int) {
  for _, num := range numbers {
    result += num*num
  }
  return
}
