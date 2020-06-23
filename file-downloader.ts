import * as fs from 'fs'

const axios = require('axios')

export class FileDownloader {

    public async downloadFile(downLoadURL: string, targetFilePath: string): Promise<any> {
        const writer = fs.createWriteStream(targetFilePath)

        console.log(`downloading image from: ${downLoadURL}`)
        console.log(`saving it to: ${targetFilePath}`)
        const response = await axios({
            url: downLoadURL,
            method: 'GET',
            responseType: 'stream',
        })

        response.data.pipe(writer)

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve)
            writer.on('error', reject)
        })
    }
}
