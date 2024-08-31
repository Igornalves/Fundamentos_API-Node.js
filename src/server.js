// padrao de importacao CommonJS => require
// const http = require('http')
// Novo Padrao => ESModules => import/export  
import http from 'node:http'

// criando uma constante para cria o servidor
// req = request => obtendo acesso as informacoes da requisicao ao server
// res = Response =>  enviando uma resposta a quem estar chamando o server

// JSON - JavaScript Object Notation

// Cabelhacos (requisicao/resposta) => Metadados

const users = []

const server = http.createServer((req, res) => {

    const { method, url } = req
    console.log(method,url)

    if (method === 'GET' && url === '/users') {
        // Early return
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            nome: 'igor',
            email: 'igor08@gmail.com'
        })
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