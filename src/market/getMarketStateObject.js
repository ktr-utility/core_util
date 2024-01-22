import Holidays from 'date-holidays'

import {utcToNY} from '#projectRoot/src/index'



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
 *  @param    {string}   dtISO
 *  @typedef  {object}   mktState
 *  @property {string}   state
 *  @property {string}   reason - if mkt is CLOSED: the reason for it being close
 *  @return {mktState} 
 */
export default function getMarketStateObject(dt = ( new Date() )) {
    const dtISO = dt.toISOString()
    const year = dtISO.split('T')[0].split('-')[0]

    const day = dt.getDay()

    if (day == 0 || day == 6) {
        return {
          state: 'CLOSED',
          reason: 'weekend'
        }
    }

    const usaHolidays = hdays.getHolidays(year)
    const holidays = stockMarketHolidayNames.map(holidayName => {
        return usaHolidays.map(holiday => holiday.name).indexOf(holidayName)
    }).filter(el => el !== -1).map(el => usaHolidays[el])


    const dt_str = dtISO.replace('T', ' ').split('.')[0]
    const dtNY_str = utcToNY(dtISO)

    let holidayDates = holidays.map(holiday => holiday.date)
    // replace H:M:S with 00:00:00
    if (holidayDates.includes(dt_str.split(' ')[0] + ' 00:00:00')) {
        return {
          state: 'CLOSED',
          reason: 'holiday'
        }
    }

    // get rid of seconds for the upcoming comparison
    const nyTime = dtNY_str.split('T')[1].split(':').slice(0,2).join(':')

    // * string comparison works here (https://stackoverflow.com/questions/19004950/how-to-compare-time-in-javascript)
    if (nyTime >= '04:00' && nyTime < '09:30') {
        return {
          state: 'CLOSED',
          reason: 'premarket'
        }
    }

    if (nyTime >= '09:30' && nyTime < '16:00') {
        return {
          state: 'OPEN',
          reason: ''
        }
    }

    if (nyTime >= '16:00' && nyTime < '20:00') {
        return {
          state: 'CLOSED',
          reason: 'afterhours'
        }
    }

    return {
      state: 'CLOSED',
      reason: ''
    }
}