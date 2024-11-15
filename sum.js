function sumOrTripleSum(a, b) {
    const sum = a + b;
    return (a === b) ? sum * 3 : sum;
}


console.log(sumOrTripleSum(5, 5)); 
console.log(sumOrTripleSum(5, 10)); 
