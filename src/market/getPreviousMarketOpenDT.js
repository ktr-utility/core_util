import dateFns from 'date-fns'

const {addDays} = dateFns


/** Returns previous day where market is open. For example, if given a monday, it will return
 * the previous friday, unless a holiday. Then it will return the thursday.
 * 
 * @param {Date} dt 
 * @returns {Date} newDT
 */
export default function getPreviousMarketOpenDT(dt=new Date()) {

    let newDT = addDays(dt, -1)

    while (!isMarketOpenToday(newDT.toISOString())) {
      newDT = addDays(newDT, -1)
    }

    return newDT
}