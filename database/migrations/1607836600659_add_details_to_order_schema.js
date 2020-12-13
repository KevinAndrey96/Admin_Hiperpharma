'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddDetailsToOrderSchema extends Schema {
  up () {
    this.table('orders', (table) => {
      table.string('details')
    })
  }

  down () {
    this.table('orders', (table) => {
      table.dropColumn('details')
    })
  }
}

module.exports = AddDetailsToOrderSchema
