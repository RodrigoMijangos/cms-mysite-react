'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstudiosSchema extends Schema {
  up () {
    this.create('estudios', (table) => {
      table.increments()
      table.string('nombre');
      table.string('carrera');
      table.string('cedulaProfeional');
      table.string('fechaEntrada');
      table.string('fechaGraduado');
      table.timestamps()
    })
  }

  down () {
    this.drop('estudios')
  }
}

module.exports = EstudiosSchema
