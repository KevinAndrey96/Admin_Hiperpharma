'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    Order()
    {
        return this.belongsTo('App/Models/OrderProduct')
    }
}

module.exports = Product
