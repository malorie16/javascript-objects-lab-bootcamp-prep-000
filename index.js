var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  var object
  return Object.assign(object)
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key
}
