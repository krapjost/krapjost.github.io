package kata
import "math"

func TwiceAsOld(dadYearsOld, sonYearsOld int) int {
  return int(math.Abs(float64(sonYearsOld*2-dadYearsOld)))
}

func TwiceAsOld2(dadYearsOld, sonYearsOld int) int {
  var res int
  if (sonYearsOld * 2 < dadYearsOld) {
    for {
      if (sonYearsOld * 2 == dadYearsOld) {
        break
      }
      sonYearsOld++; dadYearsOld ++; res++;
    }
  } else if (sonYearsOld * 2 > dadYearsOld) {
    for {
      if (sonYearsOld * 2 == dadYearsOld) {
        break
      }
      sonYearsOld--; dadYearsOld--; res--;
    }
  }
  return int(math.Abs(float64(res)))
}
