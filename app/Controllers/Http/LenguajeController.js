'use strict'

const Lenguaje = use('App/Models/Lenguaje');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with lenguajes
 */
class LenguajeController {
  /**
   * Show a list of all Lenguajes.
   * GET Lenguajes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Lenguaje.all());
  }
  /**
   * Render a form to be used for creating a new Lenguaje.
   * GET Lenguajes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

  }

  /**
   * Create/save a new Lenguaje.
   * POST Lenguajes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const add = new Lenguaje();
    add.lenguaje = request.input('lenguaje');
    add.porcentaje = request.input('procentaje')
    await add.save();
  }

  /**
   * Display a single Lenguaje.
   * GET Lenguajes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const languaje = await Lenguaje.find(params.id);
    return response.json(languaje);
  }

  /**
   * Render a form to update an existing Lenguaje.
   * GET Lenguajes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {

  }

  /**
   * Update Lenguaje details.
   * PUT or PATCH Lenguajes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const languaje = await Lenguaje.find(params.id);
    languaje.lenguaje = request.input('lenguaje');
    languaje.porcentaje = request.input('porcentaje');
    await languaje.save();
  }

  /**
   * Delete a Lenguaje with id.
   * DELETE Lenguajes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const languaje = await Lenguaje.find(params.id);
    await languaje.delete();
  }
}

module.exports = LenguajeController
