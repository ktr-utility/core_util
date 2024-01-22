/** Returns new object with only the specificied properties.
 *  @param {Object}   objectToFilter
 *  @param {String[]} allowProps
 *  @returns {Object}
 */
export default function filterForProps(objectToFilter, allowProps) {          
    const filteredObj = Object.keys(objectToFilter)
      .filter(key => allowProps.includes(key))
      .reduce((obj, key) => {
        obj[key] = objectToFilter[key]
        return obj
    }, {})
    
    return filteredObj
}