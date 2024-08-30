// padrao de importacao CommonJS => require
// const http = require('http')
// Novo Padrao => ESModules => import/export  
import http from 'node:http'

// criando uma constante para cria o servidor
// req = request => obtendo acesso as informacoes da requisicao ao server
// res = Response =>  enviando uma resposta a quem estar chamando o server
const server = http.createServer((req, res) => {
    return res.end('Hello Word !!!')
})

server.listen(3333)
// localhost:3333