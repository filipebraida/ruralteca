import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Video from 'App/Models/Video'

export default class VideosController {
  public async index({ request, view }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 10

    const videos = await Video.query().paginate(page, limit)

    return view.render('videos/index', { videos: videos })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('videos.create')
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['title', 'description', 'youtubeKey'])

    const video = await Video.create(data)

    return response.redirect().toRoute('videos.show', { id: video.id })
  }

  public async show({ params, view }: HttpContextContract) {
    const video = await Video.find(params.id)

    return view.render('videos/show', { video: video })
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
