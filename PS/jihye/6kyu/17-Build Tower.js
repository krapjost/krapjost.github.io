function towerBuilder(nFloors) {

    let space, star, tower = [];

    for (let i = 0; i < nFloors; i++) {
        space = " ".repeat(nFloors-1-i);
        star = "*".repeat((2 * i + 1));
        tower.push(`${space}${star}${space}`);
    }

    return tower;
}

console.log(towerBuilder(3));
