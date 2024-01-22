function _getCaller() {
    const stackTrace = new Error().stack;
    const callerLine = stackTrace.split('\n')[2]; // Third line usually corresponds to the caller

    const callerFilePathMatch = callerLine.match(/\((.*?):(\d+):\d+\)$/);
    const callerFilePath = callerFilePathMatch ? callerFilePathMatch[1] : 'unknown';
    

    return callerLine;
}


export default function getCaller() {

  const callerStr = _getCaller()

  const callerFunction = callerStr.split(' at')[1].split('(')[0].trim()

  let callerFilePath
  const match = callerStr.match(/\((.*):(\d+):(\d+)\)/);
  if (match) {
    let filePath = match[1]; // file:///Users/luketych/Dev/_Projects/_ktr/_srt/workspace_github/@ktr-srt/project/packages-other/proxy_manager/src/getProxy.js
    let lineNum = match[2]; // 47
    let colNum = match[3]; // 20



    callerFilePath = `${filePath}:${lineNum}:${colNum}`  
  }


  return {
    callerFunction,
    callerFilePath
  }
}