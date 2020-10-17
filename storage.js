function saveToStorage (key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}
function loadFromStorage(key) {
    var value = localStorage.getItem(key);
    return JSON.parse(value);
}