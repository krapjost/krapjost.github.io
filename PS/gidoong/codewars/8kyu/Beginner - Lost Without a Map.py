def maps(a):
    return list(map(lambda x: x*2, a))

def maps2(a):
    res = []
    for v in a:
        res.append(v*2)
    return res
