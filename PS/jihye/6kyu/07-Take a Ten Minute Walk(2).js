function isValidWalk(walk) {
    if(walk.length !== 10) return false;

    let direction = {
        'e': 0,
        'w': 0,
        's': 0,
        'n': 0
    }

    for (let e in walk) {
        direction[walk[e]]++;
    }

    return direction['e'] === direction['w'] && direction['s'] === direction['n'] ? true : false;
}

console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
