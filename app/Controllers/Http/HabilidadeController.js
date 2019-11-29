'use strict'

const Habilidad = use('App/Models/Habilidade');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with habilidades
 */
class HabilidadeController {
   /**
   * Show a list of all Habilidads.
   * GET Habilidads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Habilidad.all());
  }
  /**
   * Render a form to be used for creating a new Habilidad.
   * GET Habilidads/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

  }

  /**
   * Create/save a new Habilidad.
   * POST Habilidads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const add = new Habilidad();
    add.habilidad = request.input('habilidad');
    await add.save();
  }

  /**
   * Display a single Habilidad.
   * GET Habilidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const hability = await Habilidad.find(params.id);
    return response.json(hability);
  }

  /**
   * Render a form to update an existing Habilidad.
   * GET Habilidads/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {

  }

  /**
   * Update Habilidad details.
   * PUT or PATCH Habilidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const hability = await Habilidad.find(params.id);
    hability.habilidad = request.input('habilidad');
    await hability.save();
  }

  /**
   * Delete a Habilidad with id.
   * DELETE Habilidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const hability = await Habilidad.find(params.id);
    await hability.delete();
  }
}

module.exports = HabilidadeController
