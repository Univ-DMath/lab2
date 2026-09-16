export function show(array: unknown[], index?: number): void {
    if (index !== undefined) {
        const item = array.at(index);
        return console.log(item);
    }

    console.log(JSON.stringify(array));
}