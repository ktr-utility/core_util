import dateFns from 'date-fns'

const {addDays} = dateFns


/** Given a dtfrom & dtto, return a list of ISO dt strings of the days in between where the market is open.
 * 
 * @param {string} dtfrom 
 * @param {string} dtto 
 * @returns {string[]} 
 */
export default function getInBetweenMarketOpenDates(dtfrom, dtto) {
    let checkDTs_ret = []

    dtto = dtto || dtfrom

    // start at 08:00:00 UTC (4:00:00 AM EST)
    const dtFrom = new Date(dtfrom)
    const dtTo = new Date(dtto)

    let dt = dtFrom
    while (dt <= dtTo) {
      if (isMarketOpenToday(dt.toISOString())) {
        checkDTs_ret.push(dt.toISOString().split('T')[0])
      }
      dt = addDays(dt, 1)
    }

    return checkDTs_ret
}