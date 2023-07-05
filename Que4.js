function randomElements(arr){
    const [first, second, ...rest] = arr;
    const last = rest.pop()
    return [first, second, last]
}
console.log(randomElements([23,45,67,89,50,25]));