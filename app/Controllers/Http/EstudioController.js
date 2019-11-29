'use strict'

const Estudio = use('App/Models/Estudio');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with estudios
 */
class EstudioController {
  /**
   * Show a list of all Estudios.
   * GET Estudios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Estudio.all());
  }
  /**
   * Render a form to be used for creating a new Estudio.
   * GET Estudios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

  }

  /**
   * Create/save a new Estudio.
   * POST Estudios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const add = new Estudio();
    add.nombre = request.input('nombre');
    add.carrera = request.input('carrera');
    add.cedulaProfeional = request.input('cedulaProfesional');
    add.fechaEntrada = request.input('fechaEntrada');
    add.fechaGraduado = request.input('fechaGraduado'); 
    await add.save();
  }

  /**
   * Display a single Estudio.
   * GET Estudios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const escuela = await Estudio.find(params.id);
    return response.json(escuela);
  }

  /**
   * Render a form to update an existing Estudio.
   * GET Estudios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {

  }

  /**
   * Update Estudio details.
   * PUT or PATCH Estudios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const escuela = await Estudio.find(params.id);
    escuela.titulo = request.input('titulo');
    escuela.descripcion = request.input('descripcion');
    escuela.fecha = request.input('fecha');
    escuela.cedulaProfeional = request.input('cedulaProfesional');
    escuela.fechaEntrada = request.input('fechaEntrada');
    escuela.fechaGraduado = request.input('fechaGraduado');
    await escuela.save();
  }

  /**
   * Delete a Estudio with id.
   * DELETE Estudios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const escuela = await Estudio.find(params.id);
    await escuela.delete();
  }
}

module.exports = EstudioController
