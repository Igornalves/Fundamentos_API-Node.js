// padrao de importacao CommonJS => require
// const http = require('http')
// Novo Padrao => ESModules => import/export  
import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes/routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

// criando uma constante para cria o servidor
// req = request => obtendo acesso as informacoes da requisicao ao server
// res = Response =>  enviando uma resposta a quem estar chamando o server

// JSON - JavaScript Object Notation

// Cabelhacos (requisicao/resposta) => Metadados

// Query Parameters: Url Stateful => filtros, paginacao, não-obrigatorios 
// Ex:. http://localhost:3333/users?userId=1&nome=Diego

// Route Parameters: Identificção de recurso
// Ex:. GET http://localhost:3333/users/1

// Request Body: Envio de Informações como um formulário (HTTPs)
// Ex:. enviado como Json ou Xml

const server = http.createServer(async (req, res) => {

    const { method, url } = req

    await json(req,res)

    // chamando as rotas para conseguir fazer as requisicoes e respostas
    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    // como se fazia antes de ver a rota batia com a do path existente
    // const route = routes.find(route => {
    //     return route.method === method && route.path === url
    // })
    
    if(route) {
        const routeParams = req.url.match(route.path)

        // console.log(routeParams.groups)

        const { query, ...params } = routeParams.groups
        
        // console.log(extractQueryParams(routeParams.groups.query))

        req.params = { ...routeParams.groups }
        req.query = query ? extractQueryParams(query) : {}

        // console.log(params)

        return route.handler(req,res)
    }

    // console.log(route)

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

server.listen(3224, () => {
    console.log('HTTP server running on port 3224 !!!')
})
// localhost:3333