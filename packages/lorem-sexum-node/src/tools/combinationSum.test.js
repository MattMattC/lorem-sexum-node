import combinationSumRecursive from './combinationSum';

test('test combinationSumRecursive', () => {
    const result = combinationSumRecursive([1, 4, 2, 3], 5);
    expect(result).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 2],
        [1, 1, 3],
        [1, 4],
        [1, 2, 2],
        [2, 3],
    ]);
});

test('test combinationSumRecursive - fail', () => {
    const result = combinationSumRecursive([1, 4, 2, 3], 5);
    expect(result).not.toEqual([[3, 3]]);
});
