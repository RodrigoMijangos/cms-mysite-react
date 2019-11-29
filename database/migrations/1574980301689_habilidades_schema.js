'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HabilidadesSchema extends Schema {
  up () {
    this.create('habilidades', (table) => {
      table.increments()
      table.string('habilidad',100);
      table.timestamps()
    })
  }

  down () {
    this.drop('habilidades')
  }
}

module.exports = HabilidadesSchema
