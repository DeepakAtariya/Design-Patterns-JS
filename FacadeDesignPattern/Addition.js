const CalculatorAbstract = require("./CalculatorAbstract")

class Addition extends CalculatorAbstract {
    
    addition(num1, num2) {
        return num1 + num2
    }
}

module.exports = Addition