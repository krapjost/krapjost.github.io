/*
	input  = [1,2,3,4,5,6,7,8,9,0]
	output = "(123) 456-7890"
*/
package kata
import (
  "strconv"
)

func CreatePhoneNumber1(numbers [10]uint) string {
  var phoneNumber = "("
  for i, v := range numbers {
    s := strconv.Itoa(int(v))
    if i<2 {
      phoneNumber += s
    }
    if i == 2 {
      phoneNumber += s+") "
    }
    if i>2 && i<5 {
      phoneNumber += s
    }
    if i == 5 {
      phoneNumber += s+"-"
    }
    if i>5 {
      phoneNumber += s
    }
  }
  return phoneNumber
}

func CreatePhoneNumber2(n [10]uint) string {
  return fmt.Sprintf("(%d%d%d) %d%d%d-%d%d%d%d", n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9])
}

/*
	what i learn

	1. strconv.Itoa
		convert int to string ( not unit )
	2. strconv.Atoi
		convert string to int
	3. need to handling string conversion that has a format ?
		make format string first
*/
