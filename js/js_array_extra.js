"use strict";

// function allIndexesOf(array, index){
//     var indexes = [];
//
//     for(var x = 0; x < array.length; x++){
//         if(array[x] === index){
//             indexes.unshift(x);
//         }
//     }
//
//     return indexes.sort();
// }
//
// var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
//
// console.log(allIndexesOf(fruits, "apple"));;
// console.log(allIndexesOf(fruits, "guava"));;
// console.log(allIndexesOf(fruits, "pineapple"));
//
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// function removeAll(array, index){
//     var indexes = [];
//
//     for(var x = 0; x < array.length; x++){
//         if(array[x] !== index){
//             indexes.unshift(array[x]);
//         }
//     }
//     if(indexes.length > 0){
//         return indexes.reverse();
//     }
//     else {
//         return array;
//     }
//
// }
//
// console.log(removeAll(bugs, "ant"));;
// console.log(removeAll(bugs, "mosquito"));;
// console.log(removeAll(bugs, "roach"));;
//
// function first(array){
//     return array[0];
// }
//
// console.log(first([7, 4, 5, 6, 8]));
// console.log(first(["hello", "world", "codeup"]));
//
// function secondToLast(array) {
//     return array[array.length - 2];
// }
//
// console.log(secondToLast([7, 4, 5, 6, 8]));
// console.log(secondToLast(["hello", "world", "codeup"]));

function getLongestString(array){
    var longest = array[0];

    for(var x = 1; x < array.length; x++){
        if(array[x].length > longest.length){
            longest = array[x];
        }
    }

    return longest;
}

console.log(getLongestString(["hello", "codeup", "hi", "PKAOJDEJIODJEIOJIOJ"]));
console.log(getLongestString(["aksdssnsan", "hi", "poepe"]));
console.log(getLongestString(["hi", "msakljdklsajdklwa", "hi", "hi"]));

function getShortestString(array){
    var shortest = array[0];

    for(var x = 1; x < array.length; x++){
        if(array[x].length < shortest.length){
            shortest = array[x];
        }
    }

    return shortest;
}

console.log(getShortestString(["hello", "codeup", "hi", "PKAOJDEJIODJEIOJIOJ"]));
console.log(getShortestString(["aksdssnsan", "hi", "poepe"]));
console.log(getShortestString(["hi", "msakljdklsajdklwa", "hilll", "hidklmfkld"]));

function addTwoArrays(array1, array2){
    return array1.concat(array2);
}

console.log(addTwoArrays([1,2,3], [4,5,6]));

function getUniqueValues(array){
    var newArray = [];
    for(var x = 0; x < array.length; x++){
        var counter = 0;

        for(var y = 0; y < newArray.length; y++){
            if(array[x] === newArray[y]){
                counter++
            }
        }

        if(counter === 0){
            newArray.unshift(array[x]);
        }
    }

    return newArray.sort();
}

console.log(getUniqueValues(["a", "b", "a", "b", "c", "c"]));
console.log(getUniqueValues([1, 2, 1, 5, 5, 6]));
console.log(getUniqueValues([1, 2, 1, 5, 5, 6,6,8,8,8,5,5]));

function zip(array1, array2){
    var newArray = "";

    for(var x = 0; x < array1.length; x++){
        newArray += array1[x] + "," +array2[x] + "+";
    }

    newArray = newArray.split("+");

    var lastArray = [];

    for(var x = 0; x < newArray.length - 1; x++){
        lastArray[x] = newArray[x].split(",");
    }

    return lastArray;
}

console.log(zip([1, 2, 3], [4, 5, 6]));
console.log(zip(["a", "b", "c"], ["x", "y", "z"]));