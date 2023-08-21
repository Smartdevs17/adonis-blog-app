import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

// Route.get('/news',({view}) =>{
//   return view.render("news/index")
// })

// Route.on('/news').render('news/index')

// Route.post('/news',({request,view}) =>{
//   const {title,content} = request.body()
//   return view.render("news/home",{title,content})
// })

// Route.post('/news',({request,response}) =>{
//   // const {title,content} = request.body()
//   return response.redirect().toPath("news.index")
// })

Route.get('/news',"ArticlesController.index").as("news/home")
Route.post('/news',"ArticlesController.store").as("news_store")
Route.get('/news/create',"ArticlesController.create").as("news_create")