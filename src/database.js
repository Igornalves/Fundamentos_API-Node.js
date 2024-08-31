// { "users": [...] }

export class Database {
    // Propriedade privada da class no JavaScript
    #database = {}

    select(table) {
        const data = this.#database[table] ?? []

        return data
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        return data
    }
}