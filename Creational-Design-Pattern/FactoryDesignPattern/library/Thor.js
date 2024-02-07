const Toy = require("./Toy");

class Thor extends Toy {
    assembled = false
    exported = false
    static testVar = false
    assembling () {
        console.log('Constructing Thor toy')
        this.assembled = true
    }
    export () {
        console.log('Exporting Thor toy')
        this.exported = true
    }
}

module.exports = Thor;