/**
 * 深拷贝一个对象
 * @param {*} obj
 * @returns
 */
export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
export function findInArray(array, callback) {
    return array.find((item) => callback(item));
}
