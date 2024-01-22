import path from 'path'

import loadPackageJSONasObj from '#projectRoot/src/pkgJSON/getPackageJSONasObj'


/** Starts at cwd, and finds package.json by walking up the directory tree.
 * Then it finds all the scripts that have 'mocha' in them, and parses them
 * to find the test directory.
 */
export default async function getTestDir() {
    const cwd = process.cwd()
    const packageJSONobj = await loadPackageJSONasObj(cwd)
    const packageJSONscripts = packageJSONobj.scripts

    const mochaScripts = Object.entries(packageJSONscripts)
    .filter(([key,val]) => packageJSONscripts[key].includes('mocha'))
    .map(([key, val]) => ({ [key]: val }))

    // get the test dir, which is the word directly following 'mocha'
    const testDirs = mochaScripts.flatMap(ms => {
      return Object.values(ms).map(cmd => {
        let res = cmd.split('mocha ')[1].split(' ')[0];
        return path.join(cwd, res);
      });
    });
    
    return testDirs[0]
}