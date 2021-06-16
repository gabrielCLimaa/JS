function rSumArray(array, n) {
    if(n === 0)
        return 0;
    
    return array[n - 1] + rSumArray(array[n - 1]);  
}
