/**
 * Convert an array of objects to an object, where each member of the array has
 * a unique value for the given key. The new object keys each object by its
 * value for the given key.
 */
export function keyBy(key, array) {
    return array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = obj;
        return objectsByKeyValue;
    }, {});
}
