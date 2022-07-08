/* eslint-disable max-len */
function objectsEqual(obj1, obj2) {
  let result;
  // eslint-disable-next-line max-len
  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
    return true;
  } else if (Object.keys(obj1).length === 0 && !(Object.keys(obj2).length === 0)) {
    return false;
  } else {
    for (let key in obj1) {
      if (obj2.hasOwnProperty(key)) {
        if (obj2[key] === obj1[key]) {
          result = true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return result;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false