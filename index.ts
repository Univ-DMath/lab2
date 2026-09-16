import { sortBubble, sortInsertion, sortSelection } from "./sort";
import { show } from "./sort/helper";

// в js є вбудоване сортування .sort і .toSorted
// (але туСортед є тільки в нових версіях, цей метод створює новий вже відсортований масив не змінюючи старий)

const arr = [
    1, 3, 3, 1, 4, 111, 12, 3, 1, 2312, 3, 123, 123, 12, 3, 12, 3, 3, 3, 3, 3,
    52, 354, 345, 543, 6, 56, 756, 74, 76, 5, 7, 7, 7, 7, 7, 7, 8, 9, 9, 9,
];

show(arr);
show(arr.toSorted((a, b) => a - b));
show(sortBubble([...arr]));
show(sortInsertion([...arr]));
show(sortSelection([...arr]));
