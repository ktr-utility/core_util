import Holidays from 'date-holidays'


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
 *  @param   {string}    dtISO
 *  @returns {boolean}
 */
export default function isMarketOpenToday(dtISO = ( new Date()).toISOString()) {
    dtISO = (new Date(dtISO)).toISOString()

    const year = dtISO.split('T')[0].split('-')[0]
    const day = new Date(dtISO).getUTCDay()

    if (day == 0 || day == 6) {
        return false
    }

    let usaHolidays = hdays.getHolidays(year)
    const holidays = stockMarketHolidayNames.map(holidayName => {
        return usaHolidays.map(holiday => holiday.name).indexOf(holidayName)
    }).filter(el => el !== -1).map(el => usaHolidays[el])

    // replace H:M:S with 00:00:00
    const dt_str = dtISO.split('T')[0] + ' 00:00:00'

    let holidayDates = holidays.map(holiday => holiday.date)
    if (holidayDates.includes(dt_str)) {
        return false
    }

    return true
}