import { rmNewLineChars } from '@ktr-utility/core_util'

import cleanStringForObjectExtraction from './cleanStringForObjectExtraction.js'




/** Attempts to parse through a string and extract all objects, ie { ... }
 *  @param {string} inputString
 *  @returns {Array} array of objects
 */
export default function (inputString) {
  const jsonObjects = []

  const jsonRegex = /{(?:[^{}]|{[^{}]*})*}/g
  const matches = inputString.match(jsonRegex)

  if (matches) {
    for (const match of matches) {
        let cleanedMatch1, cleanedMatch2
      try {
        cleanedMatch1 = rmNewLineChars(match)
        cleanedMatch2 = cleanStringForObjectExtraction(cleanedMatch1)

        const jsonObject = JSON.parse(cleanedMatch2)
        jsonObjects.push(jsonObject)
      } catch (error) {
        console.error('cleanedMatch1', cleanedMatch1)
        console.error('cleanedMatch2', cleanedMatch2)

        // JSON parsing error, skip this object
        process.send({
          type: 'error',
          errorMessage: error.message,
          errorStack: error.stack
        })

        console.error(err)
 
      }
    }
  }

  return jsonObjects
}