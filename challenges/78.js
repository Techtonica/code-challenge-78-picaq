// Given an array of ints, return True if the array contains a 2 next to a 2 somewhere.
//
// has22([1, 2, 2]) → true
//
// has22([1, 2, 1, 2]) → false
//
// has22([2, 1, 2]) → false

function has22(arr22){
    for ( let i = 0 ; i < arr22.length-1; i++ ) {
        if ( arr22[i] === 2 && arr22[i+1] === 2 ) {
            return true;
        }
    }
    return false;
}
// console.log(has22([1, 2, 2]));
// console.log(has22([1, 2, 1, 2]));
// console.log(has22([2, 1, 2]));
module.exports = has22;

