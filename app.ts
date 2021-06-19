import { Application, Context } from "https://deno.land/x/abc@v1.3.2/mod.ts"
import { 
    getAllBooks,
    getBook,
    createBook,
    deleteBook
} from './controllers/bookController.ts'

export const createServer = (): Application => {
    // Initializing application
    const app: Application = new Application()

    // Static files
    app.static('/', './public')

    // Adding routes
    app.get('/', async (ctx: Context) => {
        await ctx.file('./public/index.html')
    })

    app
        .get('/books', getAllBooks)
        .get('/books/:id', getBook)
        .post('/books', createBook)
        .delete('/books/:id', deleteBook)

    // Listen to port
    app.start({ port: 3000 })

    return app
}

createServer()