'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
    Orders()
    {
        return this.hasMany('App/Models/Order')
    }
}

module.exports = Client
