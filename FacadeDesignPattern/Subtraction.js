const CalculatorAbstract = require("./CalculatorAbstract")

class Subtraction extends CalculatorAbstract {
    
    subtraction(num1, num2) {
        return num1 - num2
    }
}

module.exports = Subtraction