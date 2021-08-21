const closeCompare = (a, b, margin = 0) => {
    if (Math.abs(a - b) <= margin) return 0
    if (a < b) return -1
    return 1
}

