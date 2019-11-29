'use strict'

const Project = use('App/Models/Project');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  /**
   * Show a list of all Projects.
   * GET Projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Project.all());
  }
  /**
   * Render a form to be used for creating a new Project.
   * GET Projects/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

  }

  /**
   * Create/save a new Project.
   * POST Projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const add = new Project();
    add.titulo = request.input('titulo');
    add.descripcion = request.input('descripcion');
    add.fecha = request.input('fecha');
    await add.save();
  }

  /**
   * Display a single Project.
   * GET Projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const proyecto = await Project.find(params.id);
    return response.json(proyecto);
  }

  /**
   * Render a form to update an existing Project.
   * GET Projects/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {

  }

  /**
   * Update Project details.
   * PUT or PATCH Projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const proyecto = await Project.find(params.id);
    proyecto.titulo = request.input('titulo');
    proyecto.descripcion = request.input('descripcion');
    proyecto.fecha = request.input('fecha');
    await proyecto.save();
  }

  /**
   * Delete a Project with id.
   * DELETE Projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const proyecto = await Project.find(params.id);
    await proyecto.delete();
  }
}

module.exports = ProjectController
