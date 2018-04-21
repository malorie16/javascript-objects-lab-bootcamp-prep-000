var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  var key = Object.assign({}, object)
  delete object.key
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key
}
