import { fileURLToPath } from 'url'


export default function getFilenameWithoutExt(importMetaURL) {
    if (!importMetaURL) throw new Error('importMetaURL is required')

    const currentFileUrl = importMetaURL

    const currentFilePath = fileURLToPath(currentFileUrl)

    return currentFilePath.split('/').pop().split('.').shift()
}