const cityKey = 'city'
export function saveCurCity (curCity) {
    localStorage.setItem(cityKey, curCity)
}
export function getCurCity () {
    return localStorage.getItem(cityKey)
}
