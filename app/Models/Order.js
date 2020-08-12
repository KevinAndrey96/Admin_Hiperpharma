'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    Products()
    {
        return this.hasMany('App/Models/Product')
    }
    Client()
    {
        return this.hasOne('App/Models/Client')
    }
}

module.exports = Order
