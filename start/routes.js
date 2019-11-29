'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('about','AboutController.index');
Route.get('about/:id','AboutController.show');
Route.post('about','AboutController.store');
Route.put('about/:id','AboutController.update');
Route.delete('about/:id','AboutController.destroy');

Route.get('habilidades','HabilidadeController.index');
Route.get('habilidades/:id','HabilidadeController.show');
Route.post('habilidades','HabilidadeController.store');
Route.put('habilidades/:id','HabilidadeController.update');
Route.delete('habilidades/:id','HabilidadeController.destroy');

Route.get('projects','ProjectController.index');
Route.get('projects/:id','ProjectController.show');
Route.post('projects','ProjectController.store');
Route.put('projects/:id','ProjectController.update');
Route.delete('projects/:id','ProjectController.destroy');

Route.get('lenguajes','LenguajeController.index');
Route.get('lenguajes/:id','LenguajeController.show');
Route.post('lenguajes','LenguajeController.store');
Route.put('lenguajes/:id','LenguajeController.update');
Route.delete('lenguajes/:id','LenguajeController.destroy');

Route.get('navbar','NavbarController.index');
Route.get('navbar/:id','NavbarController.show');
Route.post('navbar','NavbarController.store');
Route.put('navbar/:id','NavbarController.update');
Route.delete('navbar/:id','NavbarController.destroy');

Route.get('formacion','EstudioController.index');
Route.get('formacion/:id','EstudioController.show');
Route.post('formacion','EstudioController.store');
Route.put('formacion/:id','EstudioController.update');
Route.delete('formacion/:id','EstudioController.destroy');