'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewsletterSchema extends Schema {
  up () {
    this.create('newsletters', (table) => {
      table.increments()
      table.string('first_name')
      table.string('last_name')
      table.string('email').unique()
      table.string('phone').unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('newsletters')
  }
}

module.exports = NewsletterSchema