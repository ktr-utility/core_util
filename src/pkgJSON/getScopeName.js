//import {PinoLogger} from '@ktr-logging/index'
import {PinoLogger} from '../../../../../@ktr-logging/index.js'

import getPackageJSONasObj from "./getPackageJSONasObj.js"

console.log('PinoLogger', PinoLogger)


// console.log(PinoLogger)
// const logger = new PinoLogger(import.meta.url, ['testTag'], { })


/**
 * Returns the scope name from the package.json file. Else returns an empty string.
 * ie @ktr-srt
 * If pkgJSONobj is not provided, it will look in the given dirname, otherwise the cwd.
 * @param {Object} [{}]
 * @param {Object} [{}.pkgJSONobj] - An object representing the package.json file content.
 * @param {Object} [{}.dirname] - A string representing the directory path.
 * @returns {string} - The scope name or an empty string.
 */
export default async function getScopeName({ pkgJSONobj, dirname }={}) {
    if (!dirname) logger.warn(`getScopeName(): dirname is undefined.`)

    pkgJSONobj = pkgJSONobj || await getPackageJSONasObj(dirname)

    const head = pkgJSONobj.name.split('/')[0]

    let projectName
    if (head.includes('@')) return head
    else return ''
}