export function minItem(array: number[], startIndex: number = 0, endIndex: number = array.length): number {
    let minIndex = startIndex;
    let min = array[startIndex];

    for (let i = startIndex + 1; i < endIndex; i++) {
        const item = array[i];

        if (item < min) {
            minIndex = i;
            min = item;
        }
    }

    return minIndex;
}
