const Ironman = require("./library/Ironman");
const Thor = require("./library/Thor");

class ToyFactory {
    static getToy(toyType, test1) {
        let toy
        switch (toyType) {
            case 'ironman':
                toy = new Ironman()
                toy.assembling()
                // toy.export()
                break;
            case 'thor':
                toy = new Thor()
                toy.assembling()
                toy.export()

                break;

            default:
                throw new Error('Unknown toy type');
        }

        return toy

    }
}

module.exports = ToyFactory