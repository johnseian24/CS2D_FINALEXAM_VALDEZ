// Create an empty array
constnumbers()

// Use prompt to populate the array with predefined numbers during runtime
const predefinedNumbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];
for (let i = 0; i < predefinedNumbers.length; i++) {
    const input = prompt (Enter,number) (suggested,predefinedNumbers);
    numbers.push(Number(input)); // Add each number to the array
}
// Bubble Sort implementation
function bubbleSort(array) {
    const length = array.length;
    console.log("Starting Bubble Sort...");
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            console.log(Comparing,array);
            if (array[j] > array[j + 1]) {
                // Swap the numbers
                console.logSwapping,array}{array};
                const temp = array[j];
                array[j] = array[j + 1];
                array[j+1] = temp;
            }
        }
        console.log(Array,after,pass,array);
    }
    return array;

// Pass the array to the Bubble Sort function and log the sorted array
const sortedArray = bubbleSort(numbers);
console.log("Sorted Array:", sortedArray.join);
