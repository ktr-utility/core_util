import { exec, execSync } from 'child_process'

import { extractObjectsFromString } from '@ktr-utility/core_util'



/** Helper function for extractObjectsFromString()
 *  The purpose is to make sure double quotes are used instead of single quotes.
 *  @param {string} fullPackageName
 *  @param {Function} processSendFunction
 */
export default function (fullPackageName) {
    try {
        process.send(`Starting feathers package: ${fullPackageName}`)

        const child = exec(`env EXEC_AS_CHILD_PS=1 yarn workspace ${fullPackageName} dev`)

        child.on('close', function (code) {
          console.log('closing code: ' + code)
        })

        child.stderr.on('data', function (data) {
          process.send({ type: 'error', data: data })
        })

        child.stdout.on('data', function (data) {
          const objDatas = extractObjectsFromString(data)

          if (objDatas.length > 0) {
            for (const objData of objDatas) {
              if (objData.type === 'completed') {
                process.send(objData)
              }
            }
          } else {
            process.send('stdout: ' + data)
          }
        })

    } catch (error) {
        console.error(error)

        process.send({
          type: 'error',
          errorMessage: error.message,
          errorStack: error.stack
        })

        process.exit(1)
    }
}