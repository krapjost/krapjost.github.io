const rentalCarCost = d => {
    let price = d*40;
    if (d >= 7) {
        return price- 50;
    } else if (d >= 3) {
        return price-20;
    } else {
        return price;
    }
}
