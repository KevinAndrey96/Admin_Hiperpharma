'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddFatherToProductSchema extends Schema {
  up () {
    this.table('products', (table) => {
      table.string('father', 30)
    })
  }

  down () {
    this.table('products', (table) => {
      table.dropColumn('father')
    })
  }
}

module.exports = AddFatherToProductSchema
