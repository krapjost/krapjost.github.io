/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

package kata
import "strings"

// My Solution
func Accum(s string) string {
  uS := strings.ToUpper(s);
  var res string;
  for i := 0; i < len(uS); i++ {
    res += string(uS[i])
    for k := 1; k <= i; k++ {
      res += string(strings.ToLower(string(uS[i])))
    }
    if i == len(uS)-1 {
      break
    }
    res += "-"
  }
  return res
}

// Best Practice
func Accum2(s string) string {
    parts := make([]string, len(s))

    for i := 0; i < len(s); i++ {
      parts[i] = strings.ToUpper(string(s[i])) + strings.Repeat(strings.ToLower(string(s[i])), i)
    }

    return strings.Join(parts, "-")
}

/*
	배운 것

	1. 만들어야 할 배열의 길이를 알고 있을 경우 make([]type, length)
	2. 자바스크립트와 다르게 string 타입의 배열 인덱스에 직접 접근하면
	  uint8 타입 바이트 숫자가 나온다. string으로 감싸서 타입 캐스팅 해줘야 함.
	3. 타입을 확인하려면 "reflect" 패키지, reflect.TypeOf(s)

	s := "string"
	fmt.Println(reflect.TypeOf(s), reflect.TypeOf(s[0]), s[0], string(s[0]))

	string uint8 115 s	
	
*/
