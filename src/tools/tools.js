/**
 * 
 * @param {string} id getElementById 
 * @param {number} top calc position
 * @param {number} left calc position
 */
export const _getBoundingClientRect = (id, top, left) => {
    let location = document.getElementById(`${id}`)
    let position;
    if (location) {
        let bound = location.getBoundingClientRect();
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let topBound = bound.top + scrollTop
        let LeftBound = bound.left + scrollLeft
        position = {
            top: topBound + top + bound.height / 2,
            left: LeftBound - left + bound.width / 2
        }
    }
    return position;
}

/**
 * @param {object} currentPosition : current position is left top
 * @param {ref} ref 
 */
export const _calcNewPositionBounding = (currentPosition, ref) => {
    let newPosition = currentPosition;
    if (ref.offsetTop + ref.offsetHeight > window.innerHeight - window.screenTop){
        newPosition.top = ref.offsetTop - ref.offsetHeight;
    }
    return newPosition;
}
