import { minItem, swap } from "./helper";

export function sortSelection<T extends number[]>(array: T): T {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        const minIndex = minItem(array, i + 1);
        const _minItem = array[minIndex];

        if (_minItem < item) {
            swap(array, i, minIndex);
        }
    }

    return array;
}
