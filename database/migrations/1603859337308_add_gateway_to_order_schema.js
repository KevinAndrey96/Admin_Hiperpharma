'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddGatewayToOrderSchema extends Schema {
  up () {
    this.table('orders', (table) => {
      table.string('gateway')
    })
  }

  down () {
    this.table('orders', (table) => {
      table.string('gateway')
    })
  }
}

module.exports = AddGatewayToOrderSchema
