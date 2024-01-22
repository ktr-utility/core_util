/** Returns new object without the specified properties.
 *  @param {Object}   objectToFilter
 *  @param {String[]} removeProps
 *  @returns {Object}   
 */
export default function filterOutProps(objectToFilter, removeProps) {          
    return omit(objectToFilter, removeProps)
}