//given an integer numsRows, return the first numsRows of pascals triangle
//in pascals triangle, each number is the sum of the two numbers directly above it
//ex: input: 5
//output: [
//     [1],
//    [1,1],
//   [1,2,1],
//  [1,3,3,1],
// [1,4,6,4,1]
//]

//solution 1
//time complexity: O(n^2)
//space complexity: O(n^2)
var pascalsTriangle3 = function(numsRows) {
    let triangle = [];

    if(numsRows === 0) return triangle;

    triangle.push([1]);

    for(let rowNum = 1; rowNum < numsRows; rowNum++) {
        let row = [];
        let prevRow = triangle[rowNum - 1];

        row.push(1);

        for(let j = 1; j < rowNum; j++) {
            row.push(prevRow[j - 1] + prevRow[j]);
        }

        row.push(1);
        triangle.push(row);
    }
    return triangle;
}

console.log(pascalsTriangle3(5));