import Holidays from 'date-holidays'

import getCurrentTime from '../date/getCurrentTime.js'


/**
 *  @type {string[]}
 */
const stockMarketHolidayNames = [
    "Martin Luther King Jr. Day", "Washington's Birthday", "Good Friday",
    "Memorial Day", "Juneteenth", "Independence Day", "Labor Day",
    "Thanksgiving Day", "Christmas Day",
]

/**
 *  @typedef {import('date-holidays').Holidays} Holidays
 *  @type    {Holidays}
 */
const hdays = new Holidays('US')


/**
 *  @param  {string}    dtISO
 *  @return {boolean}
 */
export default function isMarketClosed(dtISO = ( new Date() ).toISOString()) {
    const year = dtISO.split('T')[0].split('-')[0]
    const day = new Date(dtISO).getUTCDay()

    const dtNY_str = utcToNY(dtISO)

    if (day == 0 || day == 6) {
        return true
    }

    let usaHolidays = hdays.getHolidays(year)
    const holidays = stockMarketHolidayNames.map(holidayName => {
        return usaHolidays.map(holiday => holiday.name).indexOf(holidayName)
    }).filter(el => el !== -1).map(el => usaHolidays[el])

    // replace H:M:S with 00:00:00
    const dt_str = dtISO.split('T')[0] + ' 00:00:00'

    let holidayDates = holidays.map(holiday => holiday.date)
    if (holidayDates.includes(dt_str)) {
        return true
    }


    // get rid of seconds
    //const time = getCurrentTime().split(':').slice(0,2).join(':')
    const time = dtISO.split('T')[1].split(':').slice(0,2).join(':')
    const nyTime = dtNY_str.split('T')[1].split(':').slice(0,2).join(':')


    // * string comparison works here (https://stackoverflow.com/questions/19004950/how-to-compare-time-in-javascript)
    if (nyTime < '04:00') {
        return true
    }

    return false
}