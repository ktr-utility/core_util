import cleanStringForObjectExtraction from './controlScript/cleanStringForObjectExtraction.js'
import execFeathersPackageAsChild from './controlScript/execFeathersPackageAsChild.js'
import extractObjectsFromString from './controlScript/extractObjectsFromString.js'

import dateDiffInSeconds from './date/dateDiffInSeconds.js'
import dateMinusMS from './date/dateMinusMS.js'
import datePlusMS from './date/datePlusMS.js'
import dateToDatetimeStr from './date/dateToDatetimeStr.js'
import getCurrentTime from './date/getCurrentTime.js'

import checkPathExists from './fs/checkPathExists.js'
import createDirsAndFiles from './fs/createDirsAndFiles.js'
import deleteDirsAndFiles from './fs/deleteDirsAndFiles.js'
import getAbsPathOfDirName from './fs/getAbsPathOfDirName.js'
import getDirname from './fs/getDirname.js'
import getFilename from './fs/getFilename.js'
import getFilenameWithoutExt from './fs/getFilenameWithoutExt.js'
import isPath from './fs/isPath.js'
import walkUpAndFindAll from './fs/walkUpAndFindAll.js'
import walkUpAndFindOne from './fs/walkUpAndFindOne.js'

import stringifyFirstLayer from './json/stringifyFirstLayer.js'
import rmNewLineChars from './json/rmNewLineChars.js'

import colorize from './logging/colorize.js'
import stripOutColors from './logging/stripOutColors.js'

import sendMail from './mail/sendMail.js'

import getInBetweenMarketOpenDates from './market/getInBetweenMarketOpenDates.js'
import getMarketStateObject from './market/getMarketStateObject.js'
import getPreviousMarketOpenDT from './market/getPreviousMarketOpenDT.js'
import getTimeslot from './market/getTimeslot.js'
import isMarketClosed from './market/isMarketClosed.js'
import isMarketOpen from './market/isMarketOpen.js'
import isMarketOpenToday from './market/isMarketOpenToday.js'

import getCaller from './node/getCaller.js'

import flatten from './objects/flatten.js'

import getFullPackageName from './pkgJSON/getFullPackageName.js'
import getPackageJSONasObj from './pkgJSON/getPackageJSONasObj.js'
import getPackageName from './pkgJSON/getPackageName.js'
import getScopeName from './pkgJSON/getScopeName.js'

import changePropNames from './props/changePropNames.js'
import filterForProps from './props/filterForProps.js'
import filterOutProps from './props/filterOutProps.js'

import extractTags from './re/extractTags.js'

import getTestDir from './testing/getTestDir.js'

import nyToUTC from './timezone/nyToUTC.js'
import utcToNY from './timezone/utcToNY.js'


export {changePropNames}
export {checkPathExists}
export {cleanStringForObjectExtraction}
export {colorize}
export {createDirsAndFiles}
export {dateDiffInSeconds}
export {dateMinusMS}
export {datePlusMS}
export {dateToDatetimeStr}
export {deleteDirsAndFiles}
export {execFeathersPackageAsChild}
export {extractObjectsFromString}
export {extractTags}
export {filterForProps}
export {filterOutProps}
export {flatten}
export {getAbsPathOfDirName}
export {getCaller}
export {getCurrentTime}
export {getDirname}
export {getFilename}
export {getFilenameWithoutExt}
export {getFullPackageName}
export {getInBetweenMarketOpenDates}
export {getMarketStateObject}
export {getPackageJSONasObj}
export {getPreviousMarketOpenDT}
export {getPackageName}
export {getScopeName}
export {getTestDir}
export {getTimeslot}
export {isMarketClosed}
export {isMarketOpen}
export {isMarketOpenToday}
export {isPath}
export {nyToUTC}
export {rmNewLineChars}
export {sendMail}
export {stringifyFirstLayer}
export {stripOutColors}
export {utcToNY}
export {walkUpAndFindAll}
export {walkUpAndFindOne}


// control script
const controlScript = { cleanStringForObjectExtraction, 
        execFeathersPackageAsChild, extractObjectsFromString }

// date
const date = { dateDiffInSeconds, datePlusMS, dateMinusMS, 
        dateToDatetimeStr, getCurrentTime }


// fs
const fs = { checkPathExists, createDirsAndFiles, deleteDirsAndFiles, 
        getAbsPathOfDirName, getDirname, getFilename, getFilenameWithoutExt, 
        isPath, walkUpAndFindAll, walkUpAndFindOne }


// json
const json = { getPackageJSONasObj, stringifyFirstLayer }


// logging
const logging = { colorize, stripOutColors }


// mail
const mail = { sendMail }


// market
const market = { getInBetweenMarketOpenDates, getMarketStateObject, 
         getPreviousMarketOpenDT, getTimeslot,
         isMarketClosed, isMarketOpen, isMarketOpenToday }


// node
const node = { getCaller }


// objects
const objects = { flatten }


// pkgJSON
const pkgJSON = { getFullPackageName, getPackageName, getScopeName, getPackageJSONasObj }


// props
const props = { changePropNames, filterForProps, filterOutProps }


// re
const re = { extractTags }


// testing
const testing = { getTestDir }


// timezone
const timezone = { nyToUTC, utcToNY }


export default {
  controlScript,
  date,
  fs,
  json,
  logging,
  mail,
  market,
  node,
  objects,
  pkgJSON,
  props,
  re,
  testing,
  timezone
}