'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderProductSchema extends Schema {
  up () {
    this.create('order_products', (table) => {
      table.increments()
      table.integer('order_id').unsigned()
      table.foreign('order_id').references('Order.id')
      
      table.integer('product_id').unsigned()
      table.foreign('product_id').references('Product.id')
      
      table.integer('quantity')
      table.timestamps()
    })
  }

  down () {
    this.drop('order_products')
  }
}

module.exports = OrderProductSchema
