export default function stringifyFirstLayer(obj) {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const val = obj[key];
      result[key] = (typeof val === 'object' && val !== null) ? '[Object or Array]' : val;
    }
  }
  return JSON.stringify(result);
}