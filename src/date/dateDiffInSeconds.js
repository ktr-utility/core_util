/** Returns the difference between two dates in seconds.
 *  @param {Date} d1
 *  @param {Date} d2
 *  @returns {number} seconds between date 1 & date 2 (d2-d1)
 *  https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
 */
export default function dateDiffInSeconds(d1, d2) {
    // const t1 = moment.utc(d1).unix()
    // const t2 = moment.utc(d2).unix()
    const t1 = d1.getTime()
    const t2 = d2.getTime()

    const secs = Math.floor((t2 - t1) / 1000)

    
    return secs
}