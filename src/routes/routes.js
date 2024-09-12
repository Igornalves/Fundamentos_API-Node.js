import { Database } from '../database/database.js'
import { randomUUID } from 'node:crypto'
import { buildRoutePath } from '../utils/build-route-path.js'
import { swaggerDocument } from '../docs/swaggerDocs.js'

// criando uma constante para instanciar o objeto database 
const database = new Database()

// criando um array para separa as rotas da aplicacao deixa mais organizados 
export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/listandoUsers'),
        handler: (req,res) => {
            const { search } = req.query
            
            const users = database.select('users', search ? {
                nome: search,
                email: search,
            } : null)

            console.log(req.query)

            // Early return
            return res.writeHead(200).end(JSON.stringify(users))
            // .setHeader('Content-type', 'application/json')
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/criandoUsers'),
        handler: (req,res) => {
            const { nome, email } = req.body
            const user = {
                id: randomUUID(),
                nome,
                email,
            }
            database.insert('users', user)
            return res.writeHead(201).end('Usuario Criado com Sucesso !!!')
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/deletandoUsers/:id'),
        handler: (req,res) => {
            // console.log(req.params))

            const { id } = req.params 

            database.delete('users', id)

            return res.writeHead(204).end('user Deletando com sucesso !!!')
        }
    },
    // mostrando que da para passar parametros via rotas da aplicacao
    // {
    //     method: 'DELETE',
    //     path: buildRoutePath('/deletandoUsers/:id/groups/:groupsId'),
    //     handler: (req,res) => {
    //         return res.writeHead(200).end('user Deletando com sucesso !!!')
    //     }
    // },
    {
        method: 'GET',
        path: buildRoutePath('/'),
        handler: (req,res) => {
            return res.writeHead(200).end('Hello Word !!!')
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/atualizandoUsers/:id'),
        handler: (req,res) => {
            const { id } = req.params
            
            const { nome,email } = req.body
            
            database.update('users', id, {
                nome,
                email
            })
            
            return res.writeHead(200).end('User Atualizando com sucesso !!!')
        }
    },
    {
        method: 'GET',
        path: buildRoutePath('/api-docs'),
        handler: (req, res) => {
            return res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify(swaggerDocument))
        }
    },  
]