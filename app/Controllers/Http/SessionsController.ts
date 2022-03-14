import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserCreateValidator from 'App/Validators/UserCreateValidator'

export default class UsersController {
  public async create({ view }: HttpContextContract) {
    return view.render('sessions/create')
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
      console.log('ESTOU LOGADO!')
      response.redirect('/')
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async destroy({ response, auth }: HttpContextContract) {
    await auth.use('web').logout()
    response.redirect().toRoute('sessions.create')
  }
}
