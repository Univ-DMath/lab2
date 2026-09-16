import { swap } from "./helper/swap";

export function sortBubble(array: number[], startIndex: number = 0, endIndex: number = array.length): number[] {
    for (let i = startIndex; i < endIndex; i++) {
        let swapped = false;

        for (let _i = startIndex; _i < endIndex - i; _i++) {
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
