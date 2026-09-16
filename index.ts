import { fileSelector } from "inquirer-file-selector";
import { sortBubble, sortInsertion, sortSelection } from "./sort";
import { show } from "./sort/helper";
import { select } from "@inquirer/prompts";
import { existsSync, readFileSync } from "node:fs";
import z from "zod";
import path from "node:path";

enum SortAlgo {
    builtIn,
    bubble,
    insertion,
    selection,
}

const testFilePath = path.join(process.cwd(), "test-data", "test-array.json");

async function main() {
    const useTestFile = await select({
        message: "File:",
        choices: [
            { name: "Select file", value: false },
            { name: "Use test file", value: true },
        ],
    });

    let filePath: string;

    if (useTestFile) {
        filePath = testFilePath;
    } else {
        const file = await fileSelector({
            message: "Please select .json file with array of numbers",
            type: "file",
            filter: (item) => {
                return item.isDirectory || /.+\.json/.test(item.name);
            },
        });

        filePath = file.path;
    }

    if (!existsSync(filePath)) throw new Error(`File not found (path: ${filePath})`);

    const arr = z
        .number()
        .array()
        .parse(JSON.parse(readFileSync(filePath, "utf-8")));

    const algo = await select({
        message: "Select sorting algorithm:",
        choices: [
            { name: "BuiltIn-Sort", value: SortAlgo.builtIn },
            { name: "Bubble-Sort", value: SortAlgo.bubble },
            { name: "Insertion-Sort", value: SortAlgo.insertion },
            { name: "Selection-Sort", value: SortAlgo.selection },
        ],
    });

    console.log();

    switch (algo) {
        case SortAlgo.builtIn: {
            const sorted = arr.toSorted((a, b) => a - b);
            show("before sort:  ", arr);
            show("built in sort:", sorted);
            break;
        }
        case SortAlgo.bubble: {
            const sorted = sortBubble([...arr]);
            show("before sort:", arr);
            show("bubble sort:", sorted);
            break;
        }
        case SortAlgo.insertion: {
            const sorted = sortInsertion([...arr]);
            show("before sort:   ", arr);
            show("insertion sort:", sorted);
            break;
        }
        case SortAlgo.selection: {
            const sorted = sortSelection([...arr]);
            show("before sort:   ", arr);
            show("selection sort:", sorted);
            break;
        }
    }

    console.log();
}

main().catch(console.error);
