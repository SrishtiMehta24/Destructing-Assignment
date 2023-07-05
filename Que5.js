function maxOrMinValue(arr){
    let maxValue = Math.max(...arr)
    let minValue = Math.min(...arr)
    return {"max" : maxValue, "min" : minValue}
}
console.log(maxOrMinValue([34,67,11,89,23,56,1]));