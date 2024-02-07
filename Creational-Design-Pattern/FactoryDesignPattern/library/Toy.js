class Toy {
    constructor() {
        if(this.constructor.name === 'Toy'){
            throw new Error('Cannot instantiate')
        }
        // console.log("------------------------------------------------")
        // console.log(this.constructor)
        // console.log(this.constructor.testVar)
        // console.log(this.constructor)
        // console.log("------------------------------------------------")
    }
    assembling () {}
    export () {}

    static test(){
        console.log(this.testVar)
    }
}

module.exports = Toy