const { describe, it, before, beforeEach, afterEach } = require('mocha')
const sinon = require('sinon')
const { join } = require('path')
const { expect, calledWithExactly } = require('chai')
const CarService = require('../../src/service/carService')
const mocks = {
    validCarCategory: require('./../mocks/valid-car-Category.json'),
    validCars: require('./../mocks/valid-cars.json'),
    validCustomer: require('./../mocks/valid-customer.json')

}

const carsDatabase = join(__dirname, './../../database', 'cars.json')
describe('CarService Suite Test', () => {
    let carService = {}
    let sandbox = {}
    before(() => {
        carService = new CarService({
            cars: carsDatabase
        })
    })

    beforeEach(() => {
        sandbox = sinon.createSandbox()
    })
    afterEach(() => {
        sandbox.restore()
    })

    it('should retrieve a random position from an array', () => {
        const data = [0 ,1 , 2 ,3 ,4]
        const result = carService.getRandomPositionFromArray(data)
        expect(result).to.be.lte(data.length).and.be.gte(0)
    })

    it('should choose the first id from carIds in carCategory' , () =>{
        const carCategory = mocks.validCarCategory;
        const carsIdIndex = 0;

        sandbox.stub(
            carService,
            carService.getRandomPositionFromArray.name
        ).returns(carsIdIndex)

        const result = carService.chooseRandomCar(carCategory)
        const expected = carCategory.carIds[carsIdIndex]

        expect(carService.getRandomPositionFromArray.calledOnce).to.be.ok 
        expect(result).to.be.equal(expected)
    })

    it('given a carCategory it should return an available car', async () => {
        const car = mocks.validCars 
        const carCategory = Object.create(mocks.validCarCategory)
        carCategory.carIds = [car.id]

        sandbox.stub(
            carService,
            carService.getRandomPositionFromArray.name
        ).returns(car)

        sandbox.spy(
            carService,
            carService.chooseRandomCar.name,
        )


        const result = await carService.getAvaibleCar(carCategory)
        const expected = car 
        
        expect(carService.chooseRandomCar.calledOnce).to.be.ok
        // expect(carService.carRepository.find.calledWithExactly(car.id)).to.be.ok
        expect(result).to.be.deep.equal(expected)
    })
})