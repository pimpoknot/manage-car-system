const BaseRepository = require('./../repository/base/baseRepository')

class CarService {
    constructor({car}) {
        this.carRepository = new CarRepository({ file: car })
    }

    test() {
        return this.carRepository.find()
    }
}

module.exports = CarService