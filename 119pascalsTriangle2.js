//given an integer rowIndex, return the rowIndexth row of the Pascal's triangle
//for example, given rowIndex = 3, return [1,3,3,1]
//note: could you optimize your algorithm to use only O(k) extra space?

//solution 1
//time complexity: O(n^2)
//space complexity: O(n^2)
var pascalsTriangle2 = function(rowIndex) {
    let triangle = [];

    if(rowIndex === 0) return triangle;

    triangle.push([1]);

    for(let rowNum = 1; rowNum <= rowIndex; rowNum++) {
        let row = [];
        let prevRow = triangle[rowNum - 1];

        row.push(1);

        for(let j = 1; j < rowNum; j++) {
            row.push(prevRow[j - 1] + prevRow[j]);
        }

        row.push(1);
        triangle.push(row);
    }
    return triangle[rowIndex];
}

//console.log(pascalsTriangle2(3));

//solution 2
//time complexity: O(n^2)
//space complexity: O(n)
var pascalsTriangle2 = function(rowIndex) {
    let row = [1];

    for(let i = 1; i <= rowIndex; i++) {
        for(let j = i - 1; j >= 1; j--) {
            row[j] = row[j] + row[j - 1];
        }
        row.push(1);
    }
    return row;
}

console.log(pascalsTriangle2(3));