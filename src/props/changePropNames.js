/**
 *  @param {Object} obj
 *  @param {Object} propChngsObj
 *  @returns {Object} newObj
 */
export default function changePropNames(obj, propChngsObj) {
    let newObj = obj

    for (const [from, to] of Object.entries(propChngsObj)) {
        newObj[to] = newObj[from]
        delete newObj[from]
    }

    return newObj
}