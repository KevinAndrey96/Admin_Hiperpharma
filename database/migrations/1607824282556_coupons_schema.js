'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponsSchema extends Schema {
  up () {
    this.create('coupons', (table) => {
      table.increments()
      table.string("code")
      table.integer("discount")
      table.string("status")
      table.timestamps()
    })
  }

  down () {
    this.drop('coupons')
  }
}

module.exports = CouponsSchema
