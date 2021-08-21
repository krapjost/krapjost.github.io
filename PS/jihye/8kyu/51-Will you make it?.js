const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump > mpg*fuelLeft ? false : true;
};

module.exports = { zeroFuel }
