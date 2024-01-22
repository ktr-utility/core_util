import getPackageJSONasObj from "./getPackageJSONasObj.js"


/**
 * Returns the pacakge name from the package.json file.
 * ie util
 * If it's scoped, it returns the tail. ie @ktr-utility/core_util => util.
 * 
 * If no pkgJSONobj is passed, it will get the package.json file from the the dirname, or cwd.
 * 
 * @param {object} pkgJSONobj
* @param {string} dirname
 * @returns 
 */
export default async function getPackageName({ pkgJSONobj, dirname }) {
    pkgJSONobj = pkgJSONobj || await getPackageJSONasObj(dirname)

    const nameArr = pkgJSONobj.name.split('/')

    if (nameArr.length === 1) return nameArr[0]

    const head = nameArr[0]
    const tail = nameArr.at(-1)

    return tail
}