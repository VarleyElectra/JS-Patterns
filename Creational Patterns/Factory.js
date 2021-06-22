class Aventador {
    constructor(ownerName) {
        this.ownerName = ownerName
        this.carModel = 'Aventador'
        this.cost = 95000
    }
}

class Huracan {
    constructor(ownerName) {
        this.ownerName = ownerName
        this.carModel = 'Huracan'
        this.cost = 75500
    }
}

class Urus {
    constructor(ownerName) {
        this.ownerName = ownerName
        this.carModel = 'Urus'
        this.cost = 77600
    }
}
// const models = []

class LamborghiniFactory {
    static models = {
        aventador: Aventador,
        huracan: Huracan,
        urus: Urus,
    }

    create(ownerName, model = 'aventador') {
        const modelCreator = LamborghiniFactory.models[model] || LamborghiniFactory.models["aventador"]
        const autoModel = new modelCreator(ownerName)
        
        autoModel.define = function() {
            console.log(`Lamborghini ${this.carModel}, owner: ${this.ownerName}, cost: ${this.cost}$`)
        }
        return autoModel
    }
}

let lamboFactory = new LamborghiniFactory()
let cars = [
    lamboFactory.create('Alex', 'aventador'),
    lamboFactory.create('Pavel', 'huracan'),
    lamboFactory.create('Kirill', 'urus'),
    lamboFactory.create('Artem'),
] 
cars.forEach(car => car.define())