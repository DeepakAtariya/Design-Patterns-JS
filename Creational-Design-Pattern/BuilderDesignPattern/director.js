class Director {
    buildBasicCalculator(builder){
        builder.setSumCapability()
        builder.setSubtractCapability()
        builder.setMultiplyCapability()
        builder.setDivideCapability()
    }

    buildAdvanceCalculator(builder){
        builder.setSumCapability()
        builder.setSubtractCapability()
        builder.setMultiplyCapability()
        builder.setDivideCapability()
        builder.setPowerCapability()
        builder.setFactorialCapability()
    }
}

module.exports = Director;