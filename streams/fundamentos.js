// Netflix & Spotify
// Importacao de Clientes Via CSV (Excel)

// 1gb - 1.000.000
// POST /upload import.csv 
// 10mb/s - 100s

// 100s -> Insercoes no banco de dados 
// 10mb/s -> 10.000

// Readable Streams | Writable Streams

// process.stdin
    // .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
    intex = 1
    
    _read() {
        const i = this.intex++

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i + ' '))
                this.push(buf)
            }
        }, 1000)
    }
}

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback){
        const tranformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(tranformed)))
    }
}

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback){
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())
