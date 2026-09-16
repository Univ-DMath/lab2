import { sortBubble, sortInsertion, sortSelection } from "./sort";
import { show } from "./sort/helper";

// в js є вбудоване сортування .sort і .toSorted
// (але туСортед є тільки в нових версіях, цей метод створює новий вже відсортований масив не змінюючи старий)

const arr = [
    1, 3, 3, 1, 4, 111, 12, 3, 1, 2312, 3, 123, 12, 3, 52, 354, 345, 543, 6, 74, 76, 5, 7, 7, 8, 9, 9,
];

const sorted = arr.toSorted((a, b) => a - b);
const bubbleSorted = sortBubble([...arr]);
const insertionSorted = sortInsertion([...arr]);
const selectionSorted = sortSelection([...arr]);

show("before sort:   ", arr);
show("built in sort: ", sorted);
show("bubble sort:   ", bubbleSorted);
show("insertion sort:", insertionSorted);
show("selection sort:", selectionSorted);
