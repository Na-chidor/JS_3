function closestTo100(a, b) {
    const diffA = Math.abs(100 - a);
    const diffB = Math.abs(100 - b);
    return (diffA < diffB) ? a : b;
}

console.log(closestTo100(90, 105)); 
console.log(closestTo100(150, 95)); 
