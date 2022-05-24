export function log (message) {
    console.log(message)
}

export function warn (message) {
    console.warn(message)
}

export function error (message) {
    console.error(message)
}

export function isOriginal (val) {
    const type = typeof val
    return type === 'string'
        || type === 'number'
        || type === 'boolean'
        || type === 'undefined'
        || type === 'symbol'
}
