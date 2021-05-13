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

export function sortIteratee(a, b, field, order) {
    return (
        ((av, bv) => (av > bv ? 1 : -1))(a[field], b[field]) *
        (order === "desc" ? -1 : 1)
    );
}
export function sortBy(collection, field, order = "desc") {
    return collection.sort((a, b) => sortIteratee(a, b, field, order));
}
