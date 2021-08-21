Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  return s*1000 + m*1000*60 + h*1000*60*60
}

