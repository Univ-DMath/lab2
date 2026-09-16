import { swap } from "./helper/swap";

export function sortBubble(array: number[], start: number = 0, end: number = array.length): number[] {
    for (let i = start; i < end; i++) {
        let swapped = false;

        for (let _i = start; _i < end - i - 1; _i++) {
            const item1 = array[_i];
            const item2 = array[_i + 1];

            if (item1 > item2) {
                swap(array, _i, _i + 1);
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return array;
}
