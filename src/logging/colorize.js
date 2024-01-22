import chalk from 'chalk';

const colorMappings = [
  { substring: '[api]', color: '#AD5E00' },
  { substring: '[ib_api]', color: '#4B4453' },
  { substring: '[op_api]', color: '#FF6F91' },
  { substring: '[proxy_manager]', color: '#C34A36' },
  { substring: '[smart_quotes]', color: '#FF8066' },

  { substring: '@ktr-srt/api', color: '#AD5E00' },
  { substring: '@ktr-srt/ib_api', color: '#4B4453' },
  { substring: '@ktr-srt/op_api', color: '#FF6F91' },
  { substring: '@ktr-srt/proxy_manager', color: '#C34A36' },
  { substring: '@ktr-srt/smart_quotes', color: '#FF8066' },

  { substring: 'from:(api', color: '#AD5E00' },
  { substring: 'from:(ib_api', color: '#4B4453' },
  { substring: 'from:(op_api', color: '#FF6F91' },
  { substring: 'from:(proxy_manager', color: '#C34A36' },
  { substring: 'from:(smart_quotes', color: '#FF8066' },

  { substring: '/api)', color: '#AD5E00' },
  { substring: '/ib_api)', color: '#4B4453' },
  { substring: '/op_api)', color: '#FF6F91' },
  { substring: '/proxy_manager)', color: '#C34A36' },
  { substring: '/smart_quotes)', color: '#FF8066' }
]


/**
 * Returns a string with specified substrings colored using their respective colors and underlined.
 * 
 * @param {string} string - The input string.
 * @param {Array} colorMappings - An array of objects containing `substring` and `color` properties.
 * @returns {string} - The colored string.
 */
export default function colorize(string, colorMappings) {
  // Create a copy of the input string to work with
  let result = string;

  // Iterate through the color mappings
  colorMappings.forEach(({ substring, color }) => {
    // Find all occurrences of the substring within the result
    let index = result.indexOf(substring);
    while (index !== -1) {
      // Apply the chalk color and underline to the substring
      const coloredSubstring = chalk.hex(color).underline(substring);

      // Replace the substring with the colored substring
      result = result.slice(0, index) + coloredSubstring + result.slice(index + substring.length);

      // Find the next occurrence of the substring
      index = result.indexOf(substring, index + coloredSubstring.length);
    }
  });

  return result;
}