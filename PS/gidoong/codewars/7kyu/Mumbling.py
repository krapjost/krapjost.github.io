'''
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
'''

# my solution
def accum(s):
    S = s.upper()
    r = ""
    for c in enumerate(S):
        r += c[1]
        for i in range(c[0]):
            r += c[1].lower()
        if c[0]==len(s)-1:
            break
        r += "-"
    return r

# best practice
def accum(s):
    return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))

'''
	배운 것

	1. enumerate 쓰면 순회하는 아이템에 (index, value) 튜플로 담긴다.
	2. range(시작숫자, 종료숫자, step)
	3. string을 곱셈연산자로 i만큼 반복하여 추가할 수 있다.
'''
