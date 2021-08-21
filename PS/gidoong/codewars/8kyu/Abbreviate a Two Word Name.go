package kata
import "strings"
import "fmt"

func AbbrevName(name string) string{
  words := strings.Split(name, " ")
  return strings.ToUpper(string(words[0][0])) + "." + strings.ToUpper(string(words[1][0]))
}

func AbbrevName2(name string) string{
  arr := strings.Split(name, " ")
  return fmt.Sprintf("%s.%s", strings.ToUpper(string([]rune(arr[0])[0])), strings.ToUpper(string([]rune(arr[1])[0])))
}
