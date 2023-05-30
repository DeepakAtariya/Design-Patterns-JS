const Toy = require("./Toy");

class Ironman extends Toy {
    assembled = false
    exported = false
    assembling () {
        console.log('Constructing Ironman toy')
        this.assembled = true
    }
    export () {
        console.log('Exporting Ironman toy')
        this.exported = true
    }
}

module.exports = Ironman;