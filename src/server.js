// padrao de importacao CommonJS => require
// const http = require('http')
// Novo Padrao => ESModules => import/export  
import http from 'node:http'
import { json } from './middlewares/json.js'
import { Database } from './database.js'

// criando uma constante para cria o servidor
// req = request => obtendo acesso as informacoes da requisicao ao server
// res = Response =>  enviando uma resposta a quem estar chamando o server

// JSON - JavaScript Object Notation

// Cabelhacos (requisicao/resposta) => Metadados

const database = new Database()

const server = http.createServer(async (req, res) => {

    const { method, url } = req

    await json(req,res)

    if (method === 'GET' && url === '/users') {
        const users = database.select('users')
        // Early return
        return res.end(JSON.stringify(users))
        // .setHeader('Content-type', 'application/json')
    }

    if (method === 'POST' && url === '/users') {
        const { nome, email } = req.body

        const user = {
            id: 1,
            nome,
            email,
        }

        database.insert('users', user)

        return res.writeHead(201).end('Usuario Criado')
    }

    return res.writeHead(404).end('Not Found')
})

// Stateful - Stateless

// HTTP 
// Metodo HTTP
// GET, POST, PUT, PATCH, DELETE

// GET => buscar uma informacao do back-end
// POST => Criar uma informacao do back-end
// PUT => Atualizar um informacao no back-end
// PATCH => Atualizar uma informacao especifica de um recurso no back-end
// DELETE => Deletar uma informacao no back-end

// URL

server.listen(3333)
// localhost:3333