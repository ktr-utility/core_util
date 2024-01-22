// @datetime, @timezone
// format  datetime to a string in the format of YYYY-MM-DD HH:mm:ss
export default function dateToDateTimeStr(dt, timezone='utc') {
    let fullDatetimeStr

    if (timezone && timezone.toLowerCase() === 'local') { // old way
        let year = '' + dt.getFullYear(),
            month = dt.getMonth() + 1
            month = month < 10 ? '0' + month : '' + month
        let day = dt.getDate()
            day = day < 10 ? '0' + day : '' + day
        let hours = dt.getHours()
            hours = hours < 10 ? '0' + hours : '' + hours
        let mins = dt.getMinutes()
            mins = mins < 10 ? '0' + mins : '' + mins
        let secs = dt.getSeconds()
            secs = secs < 10 ? '0' + secs : '' + secs

        fullDatetimeStr = `${year}-${month}-${day} ${hours}:${mins}:${secs}`
    } else 
    if (timezone && timezone.toLowerCase() === 'utc') { // new way
        let utcMonth = dt.getUTCMonth()
        let utcDate = dt.getUTCDate()

        let fullMonth = utcMonth.toString().length === 1 ? `0${utcMonth}` : utcMonth
        let fullDate = utcDate.toString().length === 1 ? `0${utcDate}` : utcDate
        
        let utcHours = dt.getUTCHours()
        let utcMins = dt.getUTCMinutes()
        let utcSecs = dt.getUTCSeconds()

        let fullHours = utcHours.toString().length === 1 ? `0${utcHours}` : utcHours
        let fullMins = utcMins.toString().length === 1 ? `0${utcMins}` : utcMins
        let fullSecs = utcSecs.toString().length === 1 ? `0${utcSecs}` : utcSecs

        fullDatetimeStr = `${dt.getUTCFullYear()}-${fullMonth}-${fullDate} ${fullHours}:${fullMins}:${fullSecs}`
    }

    return fullDatetimeStr
}