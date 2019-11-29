'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NavbarSchema extends Schema {
  up () {
    this.create('navbars', (table) => {
      table.increments()
      table.string('elemento',50);
      table.timestamps()
    })
  }

  down () {
    this.drop('navbars')
  }
}

module.exports = NavbarSchema
