/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/courses/:id', 'CoursesController.show')


// Rotas dos Videos
Route.get('/videos/create', 'VideosController.create').as('videos.create')
Route.get('/videos/:id', 'VideosController.show')
  .where('id', /^[0-9]$/)
  .as('videos.show')
Route.get('/videos', 'VideosController.index').as('videos.index')
Route.post('/videos', 'VideosController.store').as('videos.store')
