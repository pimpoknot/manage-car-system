const BaseRepository = require('../repository/base/baseRepository')

class CarService {
    constructor({cars}) {
        this.carRepository = new BaseRepository({ file: cars })

        this.currencyFormat = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
        }).format(244.40)
    }


    getRandomPositionFromArray(list) {
        const listLength = list.length
        return Math.floor(
            Math.random() * (listLength)
        )
    }
    chooseRandomCar(carCategory) {
        const randomCarIndex = this.getRandomPositionFromArray(carCategory.carIds)
        const carId = carCategory.carIds[randomCarIndex]

        return carId
    }

    async getAvaibleCar(carCategory) {
        const carId = this.chooseRandomCar(carCategory)
        const car = await this.carRepository.find(carId)
        return car 
    }
    
    test(id) {
        return this.carRepository.find(id)
    }
}

module.exports = CarService