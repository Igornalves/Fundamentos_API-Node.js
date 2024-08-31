import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
    intex = 1
    
    _read() {
        const i = this.intex++

        setTimeout(() => {
            if (i > 5) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i + ' '))
                this.push(buf)
            }
        }, 1000)
    }
}

fetch('http://localhost:3334', {
    method: 'POST',
    body: new OneToHundredStream(),
    duplex: 'half'
}).then(response => {
    return response.text()
}).then(data => {
    console.log(data)
})

// duplex: 'half': Esta opção informa ao Node.js que a requisição é do tipo "half-duplex", ou seja, permite enviar dados para o servidor antes de finalizar a leitura completa do corpo da requisição. Isso é especialmente importante quando você está usando um stream como corpo da requisição.
