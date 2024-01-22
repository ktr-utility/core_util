/** prefix __STR__
 *  @param {string} prefix
 *  @param {string} envPath
 *  @returns {object} envars 
 */
export default function importEnvironmentVariables({ prefix='', envPath='.' }) {
  const filename = envPath.split('/').pop()
  
  if (filename !== '.env') envPath = path.join(envPath, "/", '.env')

  dotenv.config({ "path": envPath })

  const envars = {}
  
  try {
    if (prefix) {
      for (let envar in process.env) {
        if (!envar.startsWith('__SRT__')) continue

        let tail = envar.split('__SRT__')[1]
        envars[tail] = process.env[envar]

        // delete because if we don't then workspace envars and project envars will be merged
        delete process.env[envar]
      }
    } else {
      for (let envar in process.env) {
        envars[envar] = process.env[envar]
        delete process.env[envar]
      }
    }
  } catch (err) {
      console.error(err)
      process.exit(1)
  }

  return envars
}