import { minItem, swap } from "./helper";

export function sortSelection<T extends number[]>(
    array: T,
    start: number = 0,
    end: number = array.length,
): T {
    for (let i = start; i < end - 1; i++) {
        const item = array[i];

        const minIndex = minItem(array, i + 1, end);
        const _minItem = array[minIndex];

        if (_minItem < item) {
            swap(array, i, minIndex);
        }
    }

    return array;
}
