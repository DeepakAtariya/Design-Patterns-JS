class Calculator {
    constructor(name, description, sum, subtract, divide, multiply, power, factorial) {
        if (name && description && sum && subtract && divide && multiply && power && factorial) {
            this.name = name;
            this.description = description;
            this.sum = sum;
            this.subtract = subtract;
            this.divide = divide;
            this.multiply = multiply;
            this.power = power;
            this.factorial = factorial;
        } else {
            throw new Error('Invalid arguments to constructor')
        }
    }
}

module.exports = Calculator;