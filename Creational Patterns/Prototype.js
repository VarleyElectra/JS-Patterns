const car = {
    wheels: 4,
    recommendedSpeed() {
        return `Car recommended speed: ${Math.floor(this.maxSpeed * 0.6)}` 
    },
    
    carInfo() {
        return `Car Model name: ${this.carModelName}, \nCar max speed: ${this.maxSpeed}, \nCar wheels: ${this.wheels}`
    }
}

const Opel =  Object.create(car, {
    maxSpeed: {
        value: 210
    },
    carModelName: {
        value: 'Opel'
    }
})

// const Opel =  Object.create(car, {
//     maxSpeed: {
//         value: 210
//     },
//     carModelName: {
//         value: 'Opel'
//     }
// })
console.log(`${Opel.recommendedSpeed()} \n${Opel.carInfo()}`)