const arrayOfElements = [4, 4, 8, 3, 3, 3, 2, 4, 4]


for(var i = 0; i<arrayOfElements.length; i++){
    console.log(arrayOfElements[i])
}


for (var i = 0; i < 3 && i < arrayOfElements.length; i++) {
    console.log(arrayOfElements[i])
}


let a = 4 + 4 + 8 + 3 + 3 + 3 + 2 + 4 + 4
console.log(a)


var totalSum = 0;
for (var i = 0; i < arrayOfElements.length; i++) {
    totalSum += arrayOfElements[i];
}
console.log(totalSum)


let b = 8 + 3 + 3 + 3 + 2
console.log(b)


var sumWithoutFours = 0;
for (var i = 0; i < arrayOfElements.length; i++) {
    if (arrayOfElements[i] !== 4) {
        sumWithoutFours += arrayOfElements[i];
    }
}
console.log(sumWithoutFours)


