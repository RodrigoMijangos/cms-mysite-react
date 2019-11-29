'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LenguajesSchema extends Schema {
  up () {
    this.create('lenguajes', (table) => {
      table.increments()
      table.string('lenguaje',50);
      table.integer('porcentaje',3);
      table.timestamps()
    })
  }

  down () {
    this.drop('lenguajes')
  }
}

module.exports = LenguajesSchema
