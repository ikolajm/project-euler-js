// What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?

// Create number array that spans 1-99
let numArr = [];
for (i = 1; i < 100; i++) {
    numArr.push(i);
}
// NumArr now spans 1-99

let largestProductGrid = (length, width) => {

    // Create the grid
    let mainArr = [];
    for (i = 0; i < width; i++) {
        let arr = [];
        let k = 0;
        while (k < length) {
            arr.push(numArr[Math.floor(Math.random() * 100)]);
            k++;
        }
        mainArr.push(arr);
    }

    // Run logic of grid (Find products all directions)

    // For each array in an array
    mainArr.forEach(array => {
        // For each item in array
        array.forEach(item => {
            // Can the item be checked left?
            
            // Can the item be checked right?
            // Can the item be checked up?
            // Can the item be checked down?
            // Can the item be checked NW?
            // Can the item be checked SW?
            // Can the item be checked SE?
            // Can the item be checked NE?
        });
    });

}
