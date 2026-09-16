export function maxItem(
    array: number[],
    startIndex: number = 0,
    endIndex: number = array.length,
): number {
    let maxIndex = startIndex;
    let max = array[startIndex];

    for (let i = startIndex + 1; i < endIndex; i++) {
        const item = array[i];

        if (item > max) {
            maxIndex = i;
            max = item;
        }
    }

    return maxIndex;
}
