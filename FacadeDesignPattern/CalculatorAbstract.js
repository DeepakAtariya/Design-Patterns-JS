class CalculatorAbstract {
    constructor() {
        if (this.constructor == CalculatorAbstract) {
            throw new Error('Object cannot be instantiated of abstract class')
        }
    }

    addition(){}
    subtraction(){}
    multiplication(){}
    division(){}
}

module.exports = CalculatorAbstract