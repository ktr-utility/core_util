/**
 *  @param {Date}   date
 *  @param {number} numMS
 *  @returns {Date}
 */
export default function dateMinusMS(date, numMS) {
    return new Date(date.getTime() - numMS)
}