def square_sum1(numbers):
    result = 0
    for n in numbers:
        result += n*n
    return result

def square_sum2(numbers):
    return sum(x ** 2 for x in numbers)
