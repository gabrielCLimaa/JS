function bubbleSort(array) {
    let lenght = array.lenght;

    for(let i = 0; i < lenght; i++) {
        for(let i2 = 0; i2 < lenght; i2++) {
            if(array[i2] > array[i2 + 1]) {
                let n = array[i2];
                array[i2] = array[i2 + 1];
                array[i2 + 1] = n;
            }
        }
    }

    return array;
}
