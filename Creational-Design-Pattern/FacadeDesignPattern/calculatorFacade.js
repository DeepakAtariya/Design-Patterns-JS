const Addition = require("./Addition")
const Subtraction = require("./Subtraction")

class CalculatorFacade {

    addition(num1, num2) {
        const add = new Addition()
        return add.addition(num1, num2)
    }

    subtraction(num1, num2) {
        const subs = new Subtraction
        return subs.subtraction(num1, num2)
    }

}

module.exports = CalculatorFacade