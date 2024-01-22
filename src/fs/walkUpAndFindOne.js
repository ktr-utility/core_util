import fs from 'fs'
import path from 'path'



/**
 * walks from startDirPath to endPath, looking for a file/folder named 'name'
 * @date 5/26/2023 - 11:35:53 AM
 *
 * @export
 * @async
 * @param {*} name
 * @param {*} startDirPath
 * @param {string} [endPath='/']
 * @returns {unknown}
 */
export default async function walkUpAndFindOne(filename, startDirPath, endPath='/') {
  if (!startDirPath || path.extname(startDirPath)) throw new Error(`Invalid startPath: ${startDirPath}`)
  
  let currPath = path.resolve(startDirPath)

  do {

      let files
      try {
        files = await fs.promises.readdir(currPath)
      } catch (err) {
        console.error('Error reading directory:', err);
        return;
      }

      if (files.includes(filename)) return path.resolve(currPath, filename)
      else currPath = path.resolve(currPath, '..')
    
  } while (currPath !== endPath)
}