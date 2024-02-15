import { test, expect } from 'vitest';
import { isChecked } from './isChecked';

test('should return true when in checkedIds', () => {
    const result = isChecked([1, 2, 3], 2);
    expect(result).toBe(true);
});
