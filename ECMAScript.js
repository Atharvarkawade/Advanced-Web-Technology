function checkOrder(arr) {
    let ascending;
    let descending;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            ascending = 1;
        }
        if (arr[i] > arr[i - 1]) {
            descending = -1;
        }
    }

    if (ascending == 1) {
        console.log("Ascending order");
    } else if (descending == -1) {
        console.log("Descending order");
    } else {
        return 0; 
    }
}


const array1 = [1, 2, 3, 4, 5];
const array3 = [1, 3, 2, 4, 5];
const array2 = [5, 4, 3, 2, 1];

checkOrder(array1); 
checkOrder(array2); 
checkOrder(array3); 
