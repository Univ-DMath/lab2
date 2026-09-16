export function show(msg: string, array: unknown[], index?: number): void {
    if (index !== undefined) {
        const item = array.at(index);
        return console.log(item);
    }

    console.log(msg, JSON.stringify(array));
}
