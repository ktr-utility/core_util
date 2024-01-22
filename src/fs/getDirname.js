import { fileURLToPath } from 'url';
import { dirname } from 'path';


export default function getDirPath(importMetaURL) {
    if (!importMetaURL) throw new Error('importMetaURL is required')

    const {_url} = importMetaURL

    const url = (_url) ? new URL(_url) : importMetaURL?.url || importMetaURL

    const currentFilePath = fileURLToPath(url)

    return dirname(currentFilePath)
}