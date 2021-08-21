package kata

func IsDivisible(n, x, y int) bool {
    return (n%x==0 && n%y==0)
}

func IsDivisible2(n, x, y int) bool {
    if (n%x==0&&n%y==0) {return true}
    return false
}
