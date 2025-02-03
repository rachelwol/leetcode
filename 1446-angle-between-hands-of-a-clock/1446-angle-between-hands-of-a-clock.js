/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    const mAngle = minutes * 6; // 360/60=6
    const hAngle = (hour%12 + minutes/60) *30 //360/12=30
    const diff = Math.abs(hAngle - mAngle);
    return Math.min(diff, 360-diff);
};