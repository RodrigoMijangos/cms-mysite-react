'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AboutSchema extends Schema {
  up () {
    this.create('abouts', (table) => {
      table.increments()
      table.string('titulo',100);
      table.string('descripcion',1000);
      table.timestamps()
    })
  }

  down () {
    this.drop('abouts')
  }
}

module.exports = AboutSchema
