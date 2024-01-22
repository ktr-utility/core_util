import getPackageJSONasObj from "./getPackageJSONasObj.js"


/**
 * Returns the pacakge name from the package.json file. ie @ktr-utility/core_util
 * If it's scoped, it returns ie @ktr-utility/core_util
 * @param {object} pkgJSONobj
* @param {string} dirname
 * @returns 
 */
export default async function getPackageName({ pkgJSONobj, dirname }) {
    pkgJSONobj = pkgJSONobj || await getPackageJSONasObj(dirname)

    return pkgJSONobj.name
}