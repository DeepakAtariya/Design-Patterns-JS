const CalculatorBuilder = require("./builders/calculatorBuilder");
const Director = require("./director");

const director = new Director()
const builder = new CalculatorBuilder()

director.buildBasicCalculator(builder)
const calculator = builder.getCalculator()

console.log(calculator)
