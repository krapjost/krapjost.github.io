const areYouPlayingBanjo = name => {
    const n = name.substring(0, 1).toUpperCase();
    return n === 'R' ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("bravo"));
