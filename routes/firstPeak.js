// a peak is a number that is greater than both its important neighnbors.
// return the first peak in the array. If none exists, return null

/*

Examples:
[1,3,2,4,1] => 3

[1,5,7,9,6,4,5,3] => 9

[1,2,3,4,5] => null

*/

const firstPeak = (arr) => {

    for(let i=0; i < arr.length-1; i++) {
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) {

        }
    }
    return null;
}