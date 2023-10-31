export function distinctBy<T>(array: T[], pick: (val: T) => any): T[] {
    const result: T[] = [];
    const map = new Map();
    for (const item of array) {
        if (!map.has(pick(item))) {
            map.set(pick(item), true);    // set any value to Map
            result.push(item);
        }
    }

    return result;
}

export class ArrayUtil {
    public static chunk<T>(array: T[], size: number = 2): Array<T[]> {
        var arrays: Array<T[]> = []
        size = Math.floor(size)

        for (let i = 0; i < array.length; i += size)
            arrays.push(array.slice(i, i + size));
        return arrays
    }

    public static distinctBy<T>(array: T[], pick: (val: T) => any): T[] {
        return distinctBy<T>(array, pick);
    }
}

export class Async {

    public static async delay(ms: number) {
        return new Promise(r => setTimeout(r, ms))
    }
    // act wait like human wait for 0.5 - 2s
    public static async actHuman() {
        await Async.delay(500 + Math.random() * 1500);
    }
}
