export function swap(array: unknown[], index1: number, index2: number): void {
    if (index1 > array.length - 1 || index2 > array.length - 1)
        throw new Error(`Indexes (${index1}, ${index2}) exceed array length (${array.length})`);

    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
