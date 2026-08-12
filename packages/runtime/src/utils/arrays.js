export function withoutNulls(arr) {
    return arr.filter((item) => item != null) // != for null and undefined
}