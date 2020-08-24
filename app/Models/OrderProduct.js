'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderProduct extends Model {
    Product()
    {
        return this.hasOne('App/Models/Product')
    }
    Order()
    {
        return this.belongsTo('App/Models/Order')
    }
}

module.exports = OrderProduct
