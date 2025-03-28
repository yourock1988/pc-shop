function strToCamel(str) {
  return str.replaceAll(/_\w/g, c => c.toUpperCase()).replaceAll('_', '')
}

function objToCamel(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [key, val.map(v => strToCamel(v))])
  )
}

function rand4BytesHex() {
  return ((Math.random() * 0xffffffff) >>> 0).toString(16).padStart(8, '0')
}

function formatInput(input) {
  return [
    ...new Set(
      input
        .replaceAll(/\s*/g, '')
        .split(',')
        .filter(c => c)
    ),
  ]
}

module.exports = { objToCamel, rand4BytesHex, formatInput }
