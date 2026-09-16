export function swap(array: unknown[], index1: number, index2: number): void {
    const item1 = array.at(index1);
    const item2 = array.at(index2);

    if (item1 === undefined || item2 === undefined) throw new Error();

    array[index1] = item2;
    array[index2] = item1;
}
