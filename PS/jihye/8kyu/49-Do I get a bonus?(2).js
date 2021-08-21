function bonusTime(salary, bonus) {
    return "£" + salary * (bonus ? 10 : 1);
}

console.log(bonusTime(2, true));
console.log(bonusTime(78, false));
