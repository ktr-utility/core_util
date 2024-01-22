import path from 'path'

import checkPathExists from './checkPathExists.js'


/** Start from the startDirname and walk up the directory tree until the searchQuery is found, 
    or reach the endDirname.
 * 
 * @param {String} searchQuery 
 * @param {String} startDirname 
 * @param {String} endDirname
 * @returns 
 */
export default async function walkUpAndFindAll(searchQuery, startDirname, endDirname='/') {
    if (!startDirname || path.extname(startDirname)) throw new Error(`Invalid startPath: ${startDirname}`)
    
    let currDirname = startDirname

    const ret_paths = []

    do {
        let searchPath = path.join(currDirname, searchQuery)
        let doesPathExist = await checkPathExists(searchPath)
        if (doesPathExist) ret_paths.push( path.join(searchPath) )


        if (currDirname !== endDirname) currDirname = path.join(currDirname, '..') 
        else if (currDirname === endDirname) break
    } 
    while (currDirname !== '/')


    return ret_paths
}