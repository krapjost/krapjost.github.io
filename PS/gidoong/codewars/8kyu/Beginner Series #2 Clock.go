
// invalid indirect of 2 (type untyped number)
// go에서는 ** 연산자가 제곱이 아니다. 포인터가 가리키는 메모리의 값을 가져오는 듯
`
func Past(h, m, s int) int {
  return (h*60**2+m*60+s)*1000
}
`
package kata

func Past(h, m, s int) int {
  return (h*60*60+m*60+s)*1000
}
