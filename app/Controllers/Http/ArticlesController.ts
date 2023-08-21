// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import {schema} from "@ioc:Adonis/Core/Validator"
import CreateArticleValidator from 'App/Validators/CreateArticleValidator'

export default class ArticlesController {
  public async index({ view }) {
    const articles = await Database.from('articles').select('*')
    return view.render('news/home', { articles })
  }

  public async store({ request, view,response }) {
    const payload = await request.validate( CreateArticleValidator)
    const created_at = new Date()
    const updated_at = new Date()
     await Database.table('articles').insert({
        ...payload,
      slug: payload.title,
      created_at,
      updated_at,
    })
    // return view.render("news/confirmation")
    return response.redirect().back(); 
    // try {

    // } catch (error) {
    //   return response.badRequest(error.message);
    // }
  }

  public async create({view}){
    return view.render("news/create")
  }
}
