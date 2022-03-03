const { describe, it } = require('mocha')
const { join } = require('path')
const CarService = require('../../src/service/carService')


const carsDatabase = join(__dirname, './../../database', 'cars.json')

describe('CarService Suite Test', () => {
    let carService = {}
    before(() => {
        carService = new CarService({})
    })
    it('given a carCategory it should return an available car', () => {

    })
})