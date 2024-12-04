function getMilk(money) {
    console.log("Buy " + calcBottles(money, 1.5) + " bottles of milk.");
    return calcChange(money, 1.5);
}
