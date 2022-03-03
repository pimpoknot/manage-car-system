const Base = require('./base/base')

class Customer extends Base {
    constructor({id, name, age, carIds}) {
        super({id, name})
        this.age = age
        this.carIds = carIds
    }
}  

module.exports = Customer