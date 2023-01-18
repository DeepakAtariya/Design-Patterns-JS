const Calculator = require("../calculator");
const Builder = require("./builder");

class CalculatorBuilder extends Builder {

    sum = 'not supported'
    subtract = 'not supported'
    divide = 'not supported'
    multiply = 'not supported'
    power = 'not supported'
    factorial = 'not supported'

    constructor() {
        super()
        this.name = "CalculatorBuilder"
        this.description = "this calculator has been built for sum, subtract, multiply, divide, power and factorial."
    }

    setSumCapability() {
        this.sum = true
    }

    setSubtractCapability() {
        this.subtract = true
    }

    setMultiplyCapability() {
        this.multiply = true
    }

    setDivideCapability() {
        this.divide = true
    }

    setPowerCapability() {
        this.power = true
    }

    setFactorialCapability(){
        this.factorial = true
    }

    getCalculator() {
        return new Calculator(this.name, this.description, this.sum, this.subtract, this.divide, this.multiply, this.power, this.factorial)
    }
}

module.exports = CalculatorBuilder;