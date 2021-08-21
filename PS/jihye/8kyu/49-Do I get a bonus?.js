function bonusTime(salary, bonus) {
    return bonus ? "£".concat(String(salary*10)) : "£".concat(String(salary))
}

console.log(bonusTime(2, true));
console.log(bonusTime(78, false));
