export function sortInsertion(array: number[], start: number = 0, end: number = array.length): number[] {
    for (let i = start + 1; i < end; i++) {
        const item1 = array[i];
        let _i = i - 1;

        for (; _i >= 0; _i--) {
            const item2 = array[_i];

            if (item2 > item1) {
                array[_i + 1] = item2;
            } else break;
        }

        array[_i + 1] = item1;
    }

    return array;
}
