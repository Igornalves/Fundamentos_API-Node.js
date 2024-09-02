import { Database } from './database.js'
import { randomUUID } from 'node:crypto'
import { buildRoutePath } from './utils/build-route-path.js'

// criando uma constante para instanciar o objeto database 
const database = new Database()

// criando um array para separa as rotas da aplicacao deixa mais organizados 
export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/users'),
        handler: (req,res) => {
            const users = database.select('users')
            // Early return
            return res.end(JSON.stringify(users))
            // .setHeader('Content-type', 'application/json')
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/users'),
        handler: (req,res) => {
            const { nome, email } = req.body
            const user = {
                id: randomUUID(),
                nome,
                email,
            }
            database.insert('users', user)
            return res.writeHead(201).end('Usuario Criado')
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'),
        handler: (req,res) => {
            return res.end()
        }
    }
]