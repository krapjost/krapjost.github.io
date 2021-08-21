function isValidWalk(walk) {

    if(walk.length != 10) return false;

    let upDown = 0;
    let leftRight = 0;

    for (let i = 0; i < walk.length; i++) {
        if(walk[i] === 'n') upDown++;
        else if(walk[i] === 's') upDown--;
        else if(walk[i] === 'w') leftRight--;
        else if(walk[i] === 'e') leftRight++;
    }

    if (upDown === 0 && leftRight === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
