// { "users": [...] }
import fs from 'node:fs/promises'

// criando a constante para instanciar o locar de criacao do arquivo de persistencia de dados 
const databasePath = new URL('./db.json', import.meta.url)

export class Database {
    // Propriedade privada da class no JavaScript
    #database = {}

    constructor(){
        fs.readFile(databasePath, 'utf-8')
            .then(data => {
                this.#database = JSON.parse(data)
            }).catch(() => {
                this.#persist()
            })
    }

    // metodo criado 
    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    // { nome: igor, email: igor }
    // [['nome','igor'], ['email','igor08@gmail.com']]

    // metodo de selecao para pesquisa no banco de dados
    select(table, search) {
        let data = this.#database[table] ?? []

        // let it change

        if (search) {
            data = data.filter(row => {
                return Object.entries(search).some(([key, value]) => {
                    return row[key].toLowerCase().includes(value.toLowerCase())
                })
            })
        }

        return data
    }

    // metodo de insercao no banco de dados 
    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        // chamando o metodo para executar a persistencia do banco de dados 
        this.#persist()

        return data
    }

    delete(table, id) {
        const rowIntex = this.#database[table].findIndex(row => row.id === id)

        if (rowIntex > -1) {
            this.#database[table].splice(rowIntex, 1)

            this.#persist()
        }
    }

    update(table, id, data) {
        const rowIntex = this.#database[table].findIndex(row => row.id === id)

        if (rowIntex > -1) {
            this.#database[table][rowIntex] = {id, ...data}

            this.#persist()
        }
    }
}