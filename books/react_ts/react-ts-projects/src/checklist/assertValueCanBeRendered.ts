import { IdValue } from '.';

export function assertValueCanBeRendered(value: unknown): asserts value is IdValue {
    if (typeof value !== 'string' && typeof value !== 'number') {
        throw new Error('Value is not a string or number');
    }
}
